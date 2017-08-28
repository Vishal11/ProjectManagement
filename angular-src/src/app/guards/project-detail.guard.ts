import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { ProjectService} from '../services/project.service';

@Injectable()
export class ProjectDetailGuard implements CanActivate{
    constructor(private projectService:ProjectService,private router:Router){

    }
    canActivate(){
        // if(this.authService.loggedIn()){
             return true;
        // }
        // else
        // {
        //    this.router.navigate(['/login']);
       // }
    }
}