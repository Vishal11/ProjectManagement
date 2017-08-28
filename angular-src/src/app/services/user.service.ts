import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  getUsers(){
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('users/users',{headers:headers}).map(res=>res.json());
  }

  getUserDetails(userId){
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('users/user/'+userId,{headers:headers}).map(res=>res.json());
  }

}
