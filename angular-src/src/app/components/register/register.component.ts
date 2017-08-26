import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  email:String;
  username:String;
  password:String;

  constructor(private validateService:ValidateService,
  private flashService:FlashMessagesService,
  private authService:AuthService,
  private router:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }

    if(!this.validateService.validateRegister(user))
    {
      this.flashService.show("Please fill all the details",{cssClass:'alert-danger'});
      return false;
    }

    if(!this.validateService.validateEmail(user.email))
    {
      this.flashService.show("Please fill the valid email",{cssClass:'alert-danger'});
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashService.show("You are not registered and can log in",{cssClass:'alert-success'});
        this.router.navigate(['/login']);
      }
      else
      {
        this.flashService.show("Something went wrong",{cssClass:'alert-danger'});
        this.router.navigate(['/register']);
      }
    });

  }

}
