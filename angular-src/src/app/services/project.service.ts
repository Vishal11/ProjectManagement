import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http,Headers,RequestOptions,ResponseContentType,Response} from '@angular/http';


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
  getProjectDocs(projectId){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('project/docs/'+projectId,{headers:headers}).map(res=>res.json());
  }  

  downloadFile(file): Observable<any> {
    let options = new RequestOptions({responseType: ResponseContentType.Blob });
    return this.http.get(file, options)
        .map(res => res.blob())
        
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
