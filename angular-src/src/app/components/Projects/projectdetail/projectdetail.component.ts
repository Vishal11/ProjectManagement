import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service'
import { UserService } from '../../../services/user.service'
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  constructor(private projectService:ProjectService,private activatedRoute: ActivatedRoute) { }
  project:any
  note:String=null
  ngOnInit() {

   // this.projectService.getProjectDetails(params)

   let projectId = this.activatedRoute.snapshot.params["id"];
   this.projectService.getProjectDetails(projectId).subscribe(data=>{
     if(data.success){
       console.log("sdf")       
       if(data.project)
       {
        for(let i=0;i<data.project.users.length;i++)
        {
          if(data.project.users[i]._id==JSON.parse(localStorage.getItem('user')).id)
          {
            this.project=data.project;
            break;
          }
        }
       }
     }
   })
  }

  onAddingNote=function(){
    const note={note:"",name:"",userId:""}
    let loggedInUser=JSON.parse(localStorage.getItem('user'));
    note.note=this.note;
    note.name=loggedInUser.name;
    note.userId=loggedInUser.id;

    this.project.notes.push(note);
    
    this.note=null;

    console.log("ang"+this.project._id);
    this.projectService.updateProject(this.project).subscribe(data=>{
     if(data.success){
       
       this.project=data.project;
       
     }
   })

    return false;
  }

}
