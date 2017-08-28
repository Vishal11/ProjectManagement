import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validate.service';
import { ProjectService } from '../../../services/project.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';


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
  users:Object;

  userid:String[]=[];  

  constructor(private validateService:ValidateService,
    private flashService:FlashMessagesService,
    private projectService:ProjectService,
    private userService:UserService,
    private router:Router) { }
  
  ngOnInit() {
    this.userService.getUsers().subscribe(data=>{
      if(data.success){
        this.users=data.users.filter(function(itm){
            return !itm.isAdmin
        });
        
        console.log(this.users);
      }
    })
  }
  ngAfterViewInit() {
    
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


    if(!this.validateService.validateProjectInsert(Project)){
         this.flashService.show("Please fill out the details",{cssClass:"alert-danger"});
    }
    else
    {
    if(this.userid){
      for(let i=0;i<this.userid.length;i++){
        let user=[]
         
        this.userService.getUserDetails(this.userid[i]).subscribe(data=>{
          if(data.success){
            delete data.user.password
            Project.users.push(data.user)     
          }

          if(Project.users.length==this.userid.length){
            this.projectService.insertProject(Project).subscribe(data=>{
                if(data.success){
                  this.router.navigate(['/projects']);
                }
              })
            this.flashService.show("Project created",{cssClass:"alert-success"});      
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

}
