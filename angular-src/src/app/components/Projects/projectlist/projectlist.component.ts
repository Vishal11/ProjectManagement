import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(private projectService:ProjectService,private authService:AuthService) { }
  projects:any=[]
  flag:number=0;
  ngOnInit() {
    this.projectService.getAllProjects().subscribe(data=>{
      if(data.success){
        // console.log("sdf");
        // this.projects=data.projects.filter(function(elm){
        // return  elm.users.filter(function(el){
        //    return  (el._id==JSON.parse(localStorage.getItem('user')).id);
        //   })
        // }); 
       
        for(let i=0;i<data.projects.length;i++){
          for(let j=0;j<data.projects[i].users.length;j++){
            if(JSON.parse(localStorage.getItem('user')).isAdmin || data.projects[i].users[j]._id==JSON.parse(localStorage.getItem('user')).id)
            {
             this.flag=1;
             break;
            }
           
          }
          if(this.flag==1)
          {
          this.projects.push(data.projects[i]);
          this.flag=0;
          }

        }

      }     
    })
  }
  onProjectDelete=function(projectId)
  {
    if(confirm("Are you sure you want to delete this project?"))
      {
    this.projectService.deleteProject(projectId).subscribe(data=>{
      if(data.success){
        this.projects=this.projects.filter(function(elm){          
          return elm._id!=projectId;          
        })
      }
    })
    } 
  }

}
