import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';


@Injectable()
export class ProjectService {

  constructor(private http:Http) { }

  insertProject(project){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('project/add',project,{headers:headers}).map(res=>res.json());
  }

  getAllProjects(){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('project/projects',{headers:headers}).map(res=>res.json());
  }

  getProjectDetails(projectId){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('project/detail/'+projectId,{headers:headers}).map(res=>res.json());
  }

  updateProject(project){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('project/update/'+project._id,project,{headers:headers}).map(res=>res.json());
  }

  deleteProjectNote(projectId,noteId){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete('project/note/delete/'+projectId+"/"+noteId,{headers:headers}).map(res=>res.json());
  }

  deleteProject(projectId){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete('project/delete/'+projectId,{headers:headers}).map(res=>res.json());
  }


  
}
