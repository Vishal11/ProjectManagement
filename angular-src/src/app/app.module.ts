import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectlistComponent } from './components/projects/projectlist/projectlist.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';
import { Ng2TagsInputModule } from 'ng2-tagsinput';
import { ProjectdetailComponent } from './components/projects/projectdetail/projectdetail.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {RlTagInputModule} from 'angular2-tag-input';
import {DataTableModule} from "angular2-datatable";

const appRoutes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },{
    path:'register',component:RegisterComponent
  },{
    path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]
  },{
    path:'profile',component:ProfileComponent,canActivate:[AuthGuard]
  },{
    path:'projects',component:ProjectlistComponent,canActivate:[AuthGuard]
  },{
    path:'projects/add',component:ProjectComponent,canActivate:[AuthGuard,AdminGuard]
  },{
    path:'projects/edit/:id',component:ProjectComponent,canActivate:[AuthGuard,AdminGuard]
  },{
    path:'projects/project-detail/:id',component:ProjectdetailComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,    
    ProjectComponent, 
    ProjectlistComponent, ProjectdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    Ng2TagsInputModule,
    AngularMultiSelectModule,
    RlTagInputModule,
    DataTableModule
  ],
  providers: [ValidateService,AuthService,AuthGuard,AdminGuard,{provide: LocationStrategy, useClass: HashLocationStrategy},ProjectService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
