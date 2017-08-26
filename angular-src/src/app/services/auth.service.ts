import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthService {
authToken:any
user:any
  constructor(private http:Http) { }

  registerUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("users/register",user,{headers:headers}).map(res=>res.json());
  }

  authenticateUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("users/authenticate",user,{headers:headers}).map(res=>res.json());
  }

  getProfile(){
     let headers=new Headers();
     this.loadToken();
     headers.append('Authorization',this.authToken);
     headers.append('Content-Type','application/json');
     
    return this.http.get("users/profile",{headers:headers}).map(res=>res.json());
  }

  loadToken(){
    this.authToken=localStorage.getItem("id_token");
  }

  loggedIn(){     
    return tokenNotExpired('id_token');
  }

  setLocalStorage(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));    
    this.authToken=token;
    this.user=user;
  }
  logOutUser(){
    localStorage.clear();
    this.authToken=null;
    this.user=null;
  }

  isUserAdmin(){
    if(localStorage.getItem('user')){
      let isAdmin=JSON.parse(localStorage.getItem('user')).isAdmin     
      return isAdmin;
    }
  }

   getUsers(){
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('users/users',{headers:headers}).map(res=>res.json);
  }


}
