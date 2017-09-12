import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service'
import { AuthService } from '../../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router';
//import "../../../../assets/global/plugins/jquery.min.js"
// import "../../../../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
// import "../../../../assets/global/scripts/app.js"

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css'],

})
export class ProjectdetailComponent implements OnInit {

  constructor(private authService:AuthService,private projectService:ProjectService,private activatedRoute: ActivatedRoute) { }
  project:any
  note:String=null    
  editNote:String=null
  ngOnInit() {

   // this.projectService.getProjectDetails(params)

   let projectId = this.activatedRoute.snapshot.params["id"];
   this.projectService.getProjectDetails(projectId).subscribe(data=>{
     if(data.success){      
       if(data.project)
       {
        this.checkToManageButtons(data)
       }
     }
   })
  }
  
  // ngAfterViewChecked(){
    
  //   this.loadScript("../../../../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js")
  //   this.loadScript("../../../../assets/global/scripts/app.js")
  // }

//   public loadScript(url) {
//     console.log('preparing to load...')
//     let node = document.createElement('script');
//     node.src = url;
//     node.type = 'text/javascript';
//     document.getElementsByTagName('head')[0].appendChild(node);
//  }

  checkToManageButtons=function(data){
      for(let i=0;i<data.project.users.length;i++)
        {          
          if(this.authService.isUserAdmin() || data.project.users[i]._id==JSON.parse(localStorage.getItem('user')).id)
          {
            this.project=data.project;
           
            for(let j=0;j<data.project.notes.length;j++){
              data.project.notes[j].showEditUpdateButton=false;
              data.project.notes[j].editMode=false;
              data.project.notes[j].editNote=data.project.notes[j].note;
              if(this.authService.isUserAdmin() || data.project.notes[j].userId==JSON.parse(localStorage.getItem('user')).id)
              {
                 data.project.notes[j].showEditUpdateButton=true;
              }
            }

            break;
          }
        }
  }

  onNoteEditClick=function(noteId){   
     let selectedNote = this.project.notes.filter(function(elm){
      return elm._id==noteId
    });
    if(selectedNote)
      selectedNote[0].editMode=true
      selectedNote[0].editNote=selectedNote[0].note
    return false
  }

  onNoteDeleteClick=function(noteId){
    if(confirm("Are you sure you want to delete this note?"))
    {
        let projectId = this.activatedRoute.snapshot.params["id"];
        this.projectService.deleteProjectNote(projectId,noteId).subscribe(data=>{
          if(data.success)
          {            
           
            let notes:any=[]=this.project.notes
            this.project.notes=[]
            for(let i=0;i<notes.length;i++){                
              if(notes[i]._id!=noteId)
              {    
                this.project.notes.push(notes[i]);
              }
          }
          }
        })
    }
    else
    {
      
    }
    return false;
  }

  onNoteEditUpdateClick=function(noteId){

  //  let selectedNote = this.project.notes.filter(function(elm){
  //     return elm._id==noteId
  //   });

    // Update the Note
   for(let i=0;i<this.project.notes.length;i++)
   {
     if(this.project.notes[i]._id==noteId)
     {
       this.project.notes[i].note=this.project.notes[i].editNote
     }
   }
    this.projectService.updateProject(this.project).subscribe(data=>{
     if(data.success){       
        this.project=data.project;       
        this.checkToManageButtons(data);
     }
    })     
    
    return false
  }

  onNoteEditCancelClick=function(noteId){

   let selectedNote = this.project.notes.filter(function(elm){
      return elm._id==noteId
    });
    if(selectedNote)
      selectedNote[0].editMode=false
    
    return false
  }

  onAddingNote=function(){
    const note={note:"",name:"",userId:""}
    let loggedInUser=JSON.parse(localStorage.getItem('user'));
    note.note=this.note;
    note.name=loggedInUser.name;
    note.userId=loggedInUser.id;
    
    this.project.notes.push(note);
    
    this.note=null;

    
    this.projectService.updateProject(this.project).subscribe(data=>{
     if(data.success){       
       this.project=data.project;
       this.checkToManageButtons(data);
     }
   })

    return false;
  }

}
