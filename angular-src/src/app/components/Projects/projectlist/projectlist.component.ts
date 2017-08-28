import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(private projectService:ProjectService) { }
  projects:any
  ngOnInit() {
    this.projectService.getAllProjects().subscribe(data=>{
      if(data.success){
        this.projects=data.projects;       
      }     
    })
  }

}
