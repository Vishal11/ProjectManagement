import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:String;
password:String;
  constructor(
    private flashService:FlashMessagesService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user={
      username:this.username,
      password:this.password
    }
    this.authService.authenticateUser(user).subscribe(data=>{
      if(data.success){
        this.authService.setLocalStorage(data.token,data.user);
        this.flashService.show("You are now logged in",{cssClass:"alert-success"});
        this.router.navigate(['/dashboard']);
      }
      else
      {
        this.flashService.show(data.msg,{cssClass:"alert-danger"});
        this.router.navigate(['/login']);
        
      }
    })
  }

}
