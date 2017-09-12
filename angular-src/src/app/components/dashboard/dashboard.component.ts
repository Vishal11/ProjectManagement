import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private projectService:ProjectService) { }
  projectCount:String
  ngOnInit() {
    this.projectService.getAllProjects().subscribe(data=>{
      let count=0
      if(data.success)
        {
          let isAdmin=JSON.parse(localStorage.getItem('user')).isAdmin;
          let loggedInUserId=JSON.parse(localStorage.getItem('user')).id;
          if(isAdmin)
            this.projectCount=data.projects.length
          else
            {
              data.projects.forEach(element => {
                element.users.forEach(elementusers => {
                  if(elementusers._id==loggedInUserId)
                    {
                      count=count+ 1;
                    }
                });
              });
              this.projectCount=count.toString();
            }
        }
    })
  }

}
