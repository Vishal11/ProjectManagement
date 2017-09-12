import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validate.service';
import { ProjectService } from '../../../services/project.service';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title="Project Add";
  
  name:String;
  clientname:String;
  clientcountry:String;
  description:String;
  technologies:String[]=[]; 
  _id:String;
  users:Object;

  userid:String[]=[];  

  constructor(private validateService:ValidateService,
    private flashService:FlashMessagesService,
    private projectService:ProjectService,
    private userService:UserService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }
    
    isEdit:boolean=false;
    usersList = [];
    selectedUsers = [];
    selectedTechnologies=[];
    dropdownSettings = {};
  ngOnInit() {
    
    
    this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select Users",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };         

    let projectId = this.activatedRoute.snapshot.params["id"];

    this.activatedRoute.url.subscribe(data=>{
      if(data[1].path=="edit" && projectId)
        {
          this.isEdit=true
          this.title="Project Edit";
        }
        else
          {
            this.isEdit=false
          }
    });

    this.userService.getUsers().subscribe(data=>{
      if(data.success){

        for(let i=0;i<data.users.length;i++)
        {
          if(!data.users[i].isAdmin)
            this.usersList.push({"id":data.users[i]._id,"itemName":data.users[i].name})
        }
        }
      })
        // this.users=data.users.filter(function(itm){
        //     return !itm.isAdmin
        // });       
     
      
    

  
  }
  ngAfterViewInit() {
    let projectId = this.activatedRoute.snapshot.params["id"];
    if(this.isEdit)
      {
        this.projectService.getProjectDetails(projectId).subscribe(data=>{
          if(data.success){
            
            this.name=data.project.name;
            this.clientname=data.project.clientname;
            this.clientcountry=data.project.clientcountry;
            this.technologies=data.project.technologies;
            // this.users=data.project.users;
            this.description=data.project.description;
            this._id=data.project._id;
            this.technologies=data.project.technologies;
            
          
            if(this.usersList)
              {
               for(let i=0;i<data.project.users.length;i++)
                {
                  this.selectedUsers.push({"id":data.project.users[i]._id,"itemName":data.project.users[i].name});
                }
           
              }
            
          }
        })
      }
      else
        {
          this.name=null;
          this.clientname=null;
          this.clientcountry=null;
          this.technologies=[];
          this.userid=null
        }
  }
  onProjectSubmit(){

    const Project={
      name:this.name,
      clientname:this.clientname,
      clientcountry:this.clientcountry,
      description:this.description,
      users:[],
      technologies:this.technologies
    }  
    
  
    const  editProject={
        name:this.name,
        clientname:this.clientname,
        clientcountry:this.clientcountry,
        description:this.description,
        users:[],
        technologies:this.technologies,
        _id:this._id,
        userid:this.userid
      }  
   
    


    if(!this.validateService.validateProjectInsert(Project)){
         this.flashService.show("Please fill out the details",{cssClass:"alert-danger"});
    }
    else
    {
    if(this.selectedUsers){
      for(let i=0;i<this.selectedUsers.length;i++){
        let user=[]
         
        this.userService.getUserDetails(this.selectedUsers[i].id).subscribe(data=>{
          if(data.success){
            delete data.user.password
            Project.users.push(data.user)   
            if(this.isEdit)  
              editProject.users.push(data.user)
          }


          if(Project.users.length==this.selectedUsers.length){
            if(!this.isEdit)
              {
              this.projectService.insertProject(Project).subscribe(data=>{
                  if(data.success){
                    this.router.navigate(['/projects']);
                  }
                })
                this.flashService.show("Project created",{cssClass:"alert-success"});  
            }
            else
              {
                console.log(editProject);
                this.projectService.updateProject(editProject).subscribe(data=>{
                  if(data.success){
                    this.router.navigate(['/projects']);
                  }
                })
                this.flashService.show("Project updated",{cssClass:"alert-success"});  
              }
                
          }

        });        

      }
    }

    // else{
      
    //       this.projectService.insertProject(Project).subscribe(data=>{
    //         if(data.success){
    //           this.router.navigate(['/projects']);
    //         }
    //       })
    //      this.flashService.show("Project created",{cssClass:"alert-success"});
    // }


    }
    console.log(Project);

    


    
  }
  onProjectCancelClick=function(){
    this.name=""
    this.clientname=""
    this.description="";
    this.technologies=null
    this.selectedUsers=null
    this.clientcountry=null
    return false;
  }

}
