webpackJsonp([1,5],{

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(463);


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.insertProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('project/add', project, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getAllProjects = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/projects', { headers: headers }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getProjectDetails = function (projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/detail/' + projectId, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getProjectDocs = function (projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/docs/' + projectId, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.downloadFile = function (file) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseContentType"].Blob });
        return this.http.get(file, options)
            .map(function (res) { return res.blob(); });
    };
    ProjectService.prototype.updateProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('project/update/' + project._id, project, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProjectNote = function (projectId, noteId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('project/note/delete/' + projectId + "/" + noteId, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProject = function (projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('project/delete/' + projectId, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProjectService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ProjectService);
    return ProjectService;
    var _a;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/project.service.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateProjectInsert = function (project) {
        if (project.name == undefined || project.clientname == undefined || project.clientcountry == undefined || project.technologies == undefined || project.description == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/validate.service.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/users', { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserDetails = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/user/' + userId, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/user.service.js.map

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 462;


/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(583);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/main.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("users/register", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("users/authenticate", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/profile", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem("id_token");
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.setLocalStorage = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logOutUser = function () {
        localStorage.clear();
        this.authToken = null;
        this.user = null;
    };
    AuthService.prototype.isUserAdmin = function () {
        if (localStorage.getItem('user')) {
            var isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
            return isAdmin;
        }
    };
    AuthService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/users', { headers: headers }).map(function (res) { return res.json; });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/auth.service.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(789),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/app.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_projects_project_project_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_projects_projectlist_projectlist_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_project_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_projects_projectdetail_projectdetail_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_tag_input__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_datatable__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload_ng2_file_upload__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_uploadDocName_pipe__ = __webpack_require__(595);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























// import { ImageUploadModule } from 'angular2-image-upload';
var appRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */]
    }, {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */]
    }, {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'projects', component: __WEBPACK_IMPORTED_MODULE_18__components_projects_projectlist_projectlist_component__["a" /* ProjectlistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'projects/add', component: __WEBPACK_IMPORTED_MODULE_17__components_projects_project_project_component__["a" /* ProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__["a" /* AdminGuard */]]
    }, {
        path: 'projects/edit/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_projects_project_project_component__["a" /* ProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__["a" /* AdminGuard */]]
    }, {
        path: 'projects/project-detail/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_projects_projectdetail_projectdetail_component__["a" /* ProjectdetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_projects_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_projects_projectlist_projectlist_component__["a" /* ProjectlistComponent */], __WEBPACK_IMPORTED_MODULE_23__components_projects_projectdetail_projectdetail_component__["a" /* ProjectdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_28__pipes_uploadDocName_pipe__["a" /* UploadDocNamePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput__["Ng2TagsInputModule"],
                __WEBPACK_IMPORTED_MODULE_24_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_25_angular2_tag_input__["RlTagInputModule"],
                __WEBPACK_IMPORTED_MODULE_26_angular2_datatable__["DataTableModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__["a" /* AdminGuard */], { provide: __WEBPACK_IMPORTED_MODULE_19__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_19__angular_common__["HashLocationStrategy"] }, __WEBPACK_IMPORTED_MODULE_20__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_21__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/app.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(projectService) {
        this.projectService = projectService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getAllProjects().subscribe(function (data) {
            var count = 0;
            if (data.success) {
                var isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
                var loggedInUserId_1 = JSON.parse(localStorage.getItem('user')).id;
                if (isAdmin)
                    _this.projectCount = data.projects.length;
                else {
                    data.projects.forEach(function (element) {
                        element.users.forEach(function (elementusers) {
                            if (elementusers._id == loggedInUserId_1) {
                                count = count + 1;
                            }
                        });
                    });
                    _this.projectCount = count.toString();
                }
            }
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(790),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(791),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/home.component.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(flashService, authService, router) {
        this.flashService = flashService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.setLocalStorage(data.token, data.user);
                _this.flashService.show("You are now logged in", { cssClass: "alert-success" });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashService.show(data.msg, { cssClass: "alert-danger" });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(792),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/login.component.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(flashService, authService, router) {
        this.flashService = flashService;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logOutUser();
        this.flashService.show("You are now logged out", { cssClass: "alert-success" });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(793),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(794),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/profile.component.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectComponent = (function () {
    function ProjectComponent(validateService, flashService, projectService, userService, router, activatedRoute) {
        this.validateService = validateService;
        this.flashService = flashService;
        this.projectService = projectService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = "Project Add";
        this.technologies = [];
        this.userid = [];
        this.isEdit = false;
        this.usersList = [];
        this.selectedUsers = [];
        this.selectedTechnologies = [];
        this.dropdownSettings = {};
        this.onProjectCancelClick = function () {
            this.name = "";
            this.clientname = "";
            this.description = "";
            this.technologies = null;
            this.selectedUsers = null;
            this.clientcountry = null;
            return false;
        };
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Users",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        var projectId = this.activatedRoute.snapshot.params["id"];
        this.activatedRoute.url.subscribe(function (data) {
            if (data[1].path == "edit" && projectId) {
                _this.isEdit = true;
                _this.title = "Project Edit";
            }
            else {
                _this.isEdit = false;
            }
        });
        this.userService.getUsers().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.users.length; i++) {
                    if (!data.users[i].isAdmin)
                        _this.usersList.push({ "id": data.users[i]._id, "itemName": data.users[i].name });
                }
            }
        });
        // this.users=data.users.filter(function(itm){
        //     return !itm.isAdmin
        // });       
    };
    ProjectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var projectId = this.activatedRoute.snapshot.params["id"];
        if (this.isEdit) {
            this.projectService.getProjectDetails(projectId).subscribe(function (data) {
                if (data.success) {
                    _this.name = data.project.name;
                    _this.clientname = data.project.clientname;
                    _this.clientcountry = data.project.clientcountry;
                    _this.technologies = data.project.technologies;
                    // this.users=data.project.users;
                    _this.description = data.project.description;
                    _this._id = data.project._id;
                    _this.technologies = data.project.technologies;
                    if (_this.usersList) {
                        for (var i = 0; i < data.project.users.length; i++) {
                            _this.selectedUsers.push({ "id": data.project.users[i]._id, "itemName": data.project.users[i].name });
                        }
                    }
                }
            });
        }
        else {
            this.name = null;
            this.clientname = null;
            this.clientcountry = null;
            this.technologies = [];
            this.userid = null;
        }
    };
    ProjectComponent.prototype.onProjectSubmit = function () {
        var _this = this;
        var Project = {
            name: this.name,
            clientname: this.clientname,
            clientcountry: this.clientcountry,
            description: this.description,
            users: [],
            technologies: this.technologies
        };
        var editProject = {
            name: this.name,
            clientname: this.clientname,
            clientcountry: this.clientcountry,
            description: this.description,
            users: [],
            technologies: this.technologies,
            _id: this._id,
            userid: this.userid
        };
        if (!this.validateService.validateProjectInsert(Project)) {
            this.flashService.show("Please fill out the details", { cssClass: "alert-danger" });
        }
        else {
            if (this.selectedUsers) {
                for (var i = 0; i < this.selectedUsers.length; i++) {
                    var user = [];
                    this.userService.getUserDetails(this.selectedUsers[i].id).subscribe(function (data) {
                        if (data.success) {
                            delete data.user.password;
                            Project.users.push(data.user);
                            if (_this.isEdit)
                                editProject.users.push(data.user);
                        }
                        if (Project.users.length == _this.selectedUsers.length) {
                            if (!_this.isEdit) {
                                _this.projectService.insertProject(Project).subscribe(function (data) {
                                    if (data.success) {
                                        _this.router.navigate(['/projects']);
                                    }
                                });
                                _this.flashService.show("Project created", { cssClass: "alert-success" });
                            }
                            else {
                                console.log(editProject);
                                _this.projectService.updateProject(editProject).subscribe(function (data) {
                                    if (data.success) {
                                        _this.router.navigate(['/projects']);
                                    }
                                });
                                _this.flashService.show("Project updated", { cssClass: "alert-success" });
                            }
                        }
                    });
                }
            }
        }
        console.log(Project);
    };
    ProjectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(795),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object])
    ], ProjectComponent);
    return ProjectComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/project.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import "../../../../assets/global/plugins/jquery.min.js"
// import "../../../../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
// import "../../../../assets/global/scripts/app.js"
var URL = '/project/file/upload';
var ProjectdetailComponent = (function () {
    function ProjectdetailComponent(authService, projectService, activatedRoute) {
        this.authService = authService;
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.note = null;
        this.editNote = null;
        this.files = [];
        this.getProjectDocs = function (projectId) {
            var _this = this;
            this.projectService.getProjectDocs(projectId).subscribe(function (data) {
                if (data.success) {
                    if (data.files) {
                        _this.files = data.files;
                    }
                }
            });
        };
        // ngAfterViewChecked(){
        //   this.loadScript("../../../../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js")
        //   this.loadScript("../../../../assets/global/scripts/app.js")
        // }
        //   public loadScript(url) {
        //     console.log('preparing to load...')
        //     let node = document.createElement('script');
        //     node.src = url;
        //     node.type = 'text/javascript';
        //     document.getElementsByTagName('head')[0].appendChild(node);
        //  }
        this.checkToManageButtons = function (data) {
            for (var i = 0; i < data.project.users.length; i++) {
                if (this.authService.isUserAdmin() || data.project.users[i]._id == JSON.parse(localStorage.getItem('user')).id) {
                    this.project = data.project;
                    for (var j = 0; j < data.project.notes.length; j++) {
                        data.project.notes[j].showEditUpdateButton = false;
                        data.project.notes[j].editMode = false;
                        data.project.notes[j].editNote = data.project.notes[j].note;
                        if (this.authService.isUserAdmin() || data.project.notes[j].userId == JSON.parse(localStorage.getItem('user')).id) {
                            data.project.notes[j].showEditUpdateButton = true;
                        }
                    }
                    break;
                }
            }
        };
        this.Download = function (file) {
            var _this = this;
            this.projectService.downloadFile(file).subscribe(function (blob) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"])(blob, _this.fileName);
            });
        };
        // downloadFile(data: Response){
        //   var blob = new Blob([data], { type: 'text/pdf' });
        //   var url= window.URL.createObjectURL(blob);
        //   window.open(url);
        // }
        this.onNoteEditClick = function (noteId) {
            var selectedNote = this.project.notes.filter(function (elm) {
                return elm._id == noteId;
            });
            if (selectedNote)
                selectedNote[0].editMode = true;
            selectedNote[0].editNote = selectedNote[0].note;
            return false;
        };
        this.onNoteDeleteClick = function (noteId) {
            var _this = this;
            if (confirm("Are you sure you want to delete this note?")) {
                var projectId = this.activatedRoute.snapshot.params["id"];
                this.projectService.deleteProjectNote(projectId, noteId).subscribe(function (data) {
                    if (data.success) {
                        var notes = _this.project.notes;
                        _this.project.notes = [];
                        for (var i = 0; i < notes.length; i++) {
                            if (notes[i]._id != noteId) {
                                _this.project.notes.push(notes[i]);
                            }
                        }
                    }
                });
            }
            else {
            }
            return false;
        };
        this.onNoteEditUpdateClick = function (noteId) {
            //  let selectedNote = this.project.notes.filter(function(elm){
            //     return elm._id==noteId
            //   });
            var _this = this;
            // Update the Note
            for (var i = 0; i < this.project.notes.length; i++) {
                if (this.project.notes[i]._id == noteId) {
                    this.project.notes[i].note = this.project.notes[i].editNote;
                }
            }
            this.projectService.updateProject(this.project).subscribe(function (data) {
                if (data.success) {
                    _this.project = data.project;
                    _this.checkToManageButtons(data);
                }
            });
            return false;
        };
        this.onNoteEditCancelClick = function (noteId) {
            var selectedNote = this.project.notes.filter(function (elm) {
                return elm._id == noteId;
            });
            if (selectedNote)
                selectedNote[0].editMode = false;
            return false;
        };
        this.onAddingNote = function () {
            var _this = this;
            var note = { note: "", name: "", userId: "" };
            var loggedInUser = JSON.parse(localStorage.getItem('user'));
            note.note = this.note;
            note.name = loggedInUser.name;
            note.userId = loggedInUser.id;
            this.project.notes.push(note);
            this.note = null;
            this.projectService.updateProject(this.project).subscribe(function (data) {
                if (data.success) {
                    _this.project = data.project;
                    _this.checkToManageButtons(data);
                }
            });
            return false;
        };
        // File Upload related
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({ url: URL + "/" + this.activatedRoute.snapshot.params["id"] });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    ProjectdetailComponent.prototype.ngOnInit = function () {
        // this.projectService.getProjectDetails(params)
        var _this = this;
        var projectId = this.activatedRoute.snapshot.params["id"];
        this.projectService.getProjectDetails(projectId).subscribe(function (data) {
            if (data.success) {
                if (data.project) {
                    _this.checkToManageButtons(data);
                }
            }
        });
        this.getProjectDocs(projectId);
    };
    ProjectdetailComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ProjectdetailComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    ProjectdetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projectdetail',
            template: __webpack_require__(796),
            styles: [__webpack_require__(785)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ProjectdetailComponent);
    return ProjectdetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/projectdetail.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//var dataTable = require('../../../assets/global/plugins/datatables/datatables.js');
var dt = __webpack_require__(765);
var ProjectlistComponent = (function () {
    function ProjectlistComponent(projectService, authService) {
        this.projectService = projectService;
        this.authService = authService;
        this.projects = [];
        this.flag = 0;
        this.filterString = "";
        this.onProjectDelete = function (projectId) {
            var _this = this;
            if (confirm("Are you sure you want to delete this project?")) {
                this.projectService.deleteProject(projectId).subscribe(function (data) {
                    if (data.success) {
                        _this.projects = _this.projects.filter(function (elm) {
                            return elm._id != projectId;
                        });
                    }
                });
            }
        };
    }
    ProjectlistComponent.prototype.loadScript = function (url) {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    ProjectlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getAllProjects().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.projects.length; i++) {
                    for (var j = 0; j < data.projects[i].users.length; j++) {
                        if (JSON.parse(localStorage.getItem('user')).isAdmin || data.projects[i].users[j]._id == JSON.parse(localStorage.getItem('user')).id) {
                            _this.flag = 1;
                            break;
                        }
                    }
                    if (_this.flag == 1) {
                        _this.projects.push(data.projects[i]);
                        _this.flag = 0;
                    }
                }
            }
        });
    };
    ProjectlistComponent.prototype.ngAfterViewInit = function () {
        // this.loadScript('../../../assets/global/plugins/datatables/datatables.js');
        // this.loadScript('../../../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js');
        // this.loadScript('../../../assets/global/scripts/app.js');
        // this.loadScript('../../../assets/pages/scripts/table-datatables-managed.min.js');
        // $(document).ready(function(){  
        //   let url='./assets/global/plugins/datatables/datatables.js'
        //   $('table').trigger('dataTable');
        //   let node = document.createElement('script');
        //   node.src = url;
        //   node.type = 'text/javascript';
        //   document.getElementsByTagName('head')[0].appendChild(node);
        // });
    };
    ProjectlistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projectlist',
            template: __webpack_require__(797),
            styles: [__webpack_require__(786)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], ProjectlistComponent);
    return ProjectlistComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/projectlist.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashService, authService, router) {
        this.validateService = validateService;
        this.flashService = flashService;
        this.authService = authService;
        this.router = router;
        this.OnCancelFormClick = function () {
            this.name = "";
            this.email = "";
            this.password = "";
            this.username = "";
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashService.show("Please fill all the details", { cssClass: 'alert-danger' });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashService.show("Please fill the valid email", { cssClass: 'alert-danger' });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashService.show("You are not registered and can log in", { cssClass: 'alert-success' });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashService.show("Something went wrong", { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(798),
            styles: [__webpack_require__(787)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/register.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.isUserAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    AdminGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AdminGuard);
    return AdminGuard;
    var _a, _b;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/admin.guard.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDocNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadDocNamePipe = (function () {
    function UploadDocNamePipe() {
    }
    UploadDocNamePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        if (value.indexOf('\\') == -1)
            return value;
        if (!value.split('\\')[1].split('_'))
            return value;
        var modVal = "";
        value.split('\\')[1].split('_').forEach(function (val, index) {
            if (index > 0) {
                if (index > 1)
                    modVal = modVal + "_" + val;
                else
                    modVal = val;
            }
        });
        console.log(modVal);
        return modVal;
    };
    UploadDocNamePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'uploadDocName'
        }), 
        __metadata('design:paramtypes', [])
    ], UploadDocNamePipe);
    return UploadDocNamePipe;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/uploadDocName.pipe.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/environment.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "@import url(\"../../assets/global/css/components.min.css\");\r\n@import url(\"../../assets/global/plugins/simple-line-icons/simple-line-icons.min.css\");"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "@import url(\"../../assets/global/plugins/bootstrap/css/bootstrap.min.css\");\r\n@import url(\"../../assets/global/css/components.min.css\");\r\n@import url(\"../../assets/pages/css/login.min.css\");\r\n\r\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "li.dropdown:hover > .dropdown-menu {\r\n    display: block;\r\n}"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "@import url(\"../../assets/global/plugins/bootstrap/css/bootstrap.min.css\");\r\n@import url(\"../../assets/global/css/components.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/layout.min.css\");\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "@import url(\"../../assets/global/plugins/bootstrap/css/bootstrap.min.css\");\r\n@import url(\"../../assets/global/css/components.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/layout.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/themes/darkblue.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/custom.min.css\");\r\n\r\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "@import url(\"../../assets/global/plugins/bootstrap/css/bootstrap.min.css\");\r\n@import url(\"../../assets/global/css/components.min.css\");\r\n@import url(\"../../assets/global/css/plugins.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/layout.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/themes/darkblue.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/custom.min.css\");\r\n\r\n\r\n.noteUl .noteli{\r\n  list-style:none;\r\n}\r\nnoteul{\r\n  overflow:hidden;\r\n  padding:3em;\r\n}\r\n.noteul .noteli a{\r\n  text-decoration:none;\r\n  color:#000;\r\n  background:#ffc;\r\n  display:block;\r\n  height:10em;\r\n  width:10em;\r\n  padding:1em;\r\n}\r\n.noteul .noteli{\r\n  margin:1em;\r\n  float:left;\r\n}"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "@import url(\"../../assets/global/plugins/bootstrap/css/bootstrap.min.css\");\r\n@import url(\"../../assets/global/plugins/datatables/datatables.min.css\");\r\n@import url(\"../../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css\");\r\n@import url(\"../../assets/global/css/components.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/layout.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/themes/darkblue.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/custom.min.css\");\r\n\r\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "@import url(\"../../assets/global/plugins/bootstrap/css/bootstrap.min.css\");\r\n@import url(\"../../assets/global/css/components.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/layout.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/themes/darkblue.min.css\");\r\n@import url(\"../../assets/layouts/layout/css/custom.min.css\");\r\n\r\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n   <!-- <div class=\"container\"> -->\n\n<router-outlet></router-outlet>\n   <!-- </div> -->"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<div class=\"row widget-row\">\n  <div class=\"col-md-3\">\n      <!-- BEGIN WIDGET THUMB -->\n      <div class=\"widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered\">\n        <a [routerLink]=\"['/projects']\">\n          <h4 class=\"widget-thumb-heading\">Projects</h4>\n        </a>\n          <div class=\"widget-thumb-wrap\">\n              <i class=\"widget-thumb-icon bg-green icon-bulb\"></i>\n              <div class=\"widget-thumb-body\">\n                  <span class=\"widget-thumb-subtitle\">Number</span>\n                  <span class=\"widget-thumb-body-stat\" data-counter=\"counterup\">{{projectCount}}</span>\n              </div>\n          </div>\n       \n      </div>\n      <!-- END WIDGET THUMB -->\n  </div>\n  <div class=\"col-md-3\">\n      <!-- BEGIN WIDGET THUMB -->\n      <div class=\"widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered\">\n          <h4 class=\"widget-thumb-heading\">Weekly Sales</h4>\n          <div class=\"widget-thumb-wrap\">\n              <i class=\"widget-thumb-icon bg-red icon-layers\"></i>\n              <div class=\"widget-thumb-body\">\n                  <span class=\"widget-thumb-subtitle\">USD</span>\n                  <span class=\"widget-thumb-body-stat\" data-counter=\"counterup\" data-value=\"1,293\">1,293</span>\n              </div>\n          </div>\n      </div>\n      <!-- END WIDGET THUMB -->\n  </div>\n  <div class=\"col-md-3\">\n      <!-- BEGIN WIDGET THUMB -->\n      <div class=\"widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered\">\n          <h4 class=\"widget-thumb-heading\">Biggest Purchase</h4>\n          <div class=\"widget-thumb-wrap\">\n              <i class=\"widget-thumb-icon bg-purple icon-screen-desktop\"></i>\n              <div class=\"widget-thumb-body\">\n                  <span class=\"widget-thumb-subtitle\">USD</span>\n                  <span class=\"widget-thumb-body-stat\" data-counter=\"counterup\" data-value=\"815\">815</span>\n              </div>\n          </div>\n      </div>\n      <!-- END WIDGET THUMB -->\n  </div>\n  <div class=\"col-md-3\">\n      <!-- BEGIN WIDGET THUMB -->\n      <div class=\"widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered\">\n          <h4 class=\"widget-thumb-heading\">Average Monthly</h4>\n          <div class=\"widget-thumb-wrap\">\n              <i class=\"widget-thumb-icon bg-blue icon-bar-chart\"></i>\n              <div class=\"widget-thumb-body\">\n                  <span class=\"widget-thumb-subtitle\">USD</span>\n                  <span class=\"widget-thumb-body-stat\" data-counter=\"counterup\" data-value=\"5,071\">5,071</span>\n              </div>\n          </div>\n      </div>\n      <!-- END WIDGET THUMB -->\n  </div>\n</div>"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>NeuCAMP Project Management</h1>\n  <p class=\"lead\">Now manage your work and monitor it too.</p>\n  <div>\n    <!-- <a class=\"btn btn-primary\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/register']\">Register</a> <a  *ngIf=\"authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a> -->\n  </div>\n</div>\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Task Asign</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Monitor Work</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Recognition</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div> -->\n\n\n\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<body class=\"login\"> \n<div class=\"content\">\n<!-- <h2>Login </h2> -->\n<form class=\"login-form\" (submit)=\"onLoginSubmit()\">\n    <h3 class=\"form-title font-green\">Sign In</h3>\n    <flash-messages></flash-messages>\n  <div class=\"form-group\">\n      <label class=\"control-label visible-ie8 visible-ie9\">Username</label>\n    <input class=\"form-control form-control-solid placeholder-no-fix\" placeholder=\"Username\"  type=\"text\" name=\"username\" [(ngModel)]=\"username\"/>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"control-label visible-ie8 visible-ie9\">Password</label>\n    <input class=\"form-control form-control-solid placeholder-no-fix\" placeholder=\"Password\"  type=\"password\" name=\"password\" [(ngModel)]=\"password\"/>\n  </div>\n  <input type=\"submit\" value=\"Login\" class=\"btn green uppercase\"/>\n</form>\n</div>\n</body>"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">NeuCAMP</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>           \n          </ul>\n\n           <ul class=\"nav navbar-nav navbar-right\">\n             <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>   \n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>   \n               <li class=\"dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                 <!--<a [routerLink]=\"['/projects']\">Projects</a>-->\n               <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Projects <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a [routerLink]=\"['/projects']\">All</a></li>\n                  <li *ngIf=\"authService.isUserAdmin()\"><a [routerLink]=\"['/projects/add']\">Add Project</a></li>\n                  <!--<li><a href=\"#\">Something else here</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">One more separated link</a></li>-->\n                </ul>\n               </li> \n              <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>   \n              <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>   \n              <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>   \n          </ul>\n        </div>\n      </div>\n    </nav>\n\n "

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"portlet light bordered\">\n        <div class=\"portlet-title\">\n            <div class=\"caption font-red-sunglo\">\n                <i class=\"icon-settings font-red-sunglo\"></i>\n                <span class=\"caption-subject bold uppercase\"> Profile</span>\n            </div>\n        </div>\n        \n<div class=\"portlet-body\" *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.username}}</h2>\n  <!-- <form  role=\"form\" (submit)=\"onImageUpload()\" >\n    <div style=\"   height: 75px;\n    width: 75px;\">\n\n  \n    <img [src]=\"userImg\" style=\" max-width: 100%;\n    max-height: 100%;\"/>\n  </div>\n   \n      <input type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n      <button type=\"button\" (click)=\"upload()\">Upload</button>\n  </form> -->\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"portlet light bordered\">\n        <div class=\"portlet-title\">\n            <div class=\"caption font-red-sunglo\">\n                <i class=\"icon-settings font-red-sunglo\"></i>\n                <span class=\"caption-subject bold uppercase\"> {{title}}</span>\n            </div>\n        </div>\n  <div class=\"portlet-body form\">\n  <form role=\"form\" (submit)=\"onProjectSubmit()\">\n      <div class=\"form-body\">\n          <flash-messages></flash-messages>\n          <div class=\"form-group form-md-line-input\">   \n            <input type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\"/>\n          </div>\n\n          <div class=\"form-group form-md-line-input\">   \n            <input type=\"text\" placeholder=\"Client Name\" name=\"clientname\" [(ngModel)]=\"clientname\" class=\"form-control\"/>\n          </div>\n\n  <div class=\"form-group form-md-line-input\">\n    <label>Client Country</label>\n    <select name=\"clientcountry\" [(ngModel)]=\"clientcountry\" id=\"sel1\" class=\"form-control\">\n      <option value=\"AF\">Afghanistan</option>\n      <option value=\"AL\">Albania</option>\n      <option value=\"DZ\">Algeria</option>\n      <option value=\"AS\">American Samoa</option>\n      <option value=\"AD\">Andorra</option>\n      <option value=\"AG\">Angola</option>\n      <option value=\"AI\">Anguilla</option>\n      <option value=\"AG\">Antigua &amp; Barbuda</option>\n      <option value=\"AR\">Argentina</option>\n      <option value=\"AA\">Armenia</option>\n      <option value=\"AW\">Aruba</option>\n      <option value=\"AU\">Australia</option>\n      <option value=\"AT\">Austria</option>\n      <option value=\"AZ\">Azerbaijan</option>\n      <option value=\"BS\">Bahamas</option>\n      <option value=\"BH\">Bahrain</option>\n      <option value=\"BD\">Bangladesh</option>\n      <option value=\"BB\">Barbados</option>\n      <option value=\"BY\">Belarus</option>\n      <option value=\"BE\">Belgium</option>\n      <option value=\"BZ\">Belize</option>\n      <option value=\"BJ\">Benin</option>\n      <option value=\"BM\">Bermuda</option>\n      <option value=\"BT\">Bhutan</option>\n      <option value=\"BO\">Bolivia</option>\n      <option value=\"BL\">Bonaire</option>\n      <option value=\"BA\">Bosnia &amp; Herzegovina</option>\n      <option value=\"BW\">Botswana</option>\n      <option value=\"BR\">Brazil</option>\n      <option value=\"BC\">British Indian Ocean Ter</option>\n      <option value=\"BN\">Brunei</option>\n      <option value=\"BG\">Bulgaria</option>\n      <option value=\"BF\">Burkina Faso</option>\n      <option value=\"BI\">Burundi</option>\n      <option value=\"KH\">Cambodia</option>\n      <option value=\"CM\">Cameroon</option>\n      <option value=\"CA\">Canada</option>\n      <option value=\"IC\">Canary Islands</option>\n      <option value=\"CV\">Cape Verde</option>\n      <option value=\"KY\">Cayman Islands</option>\n      <option value=\"CF\">Central African Republic</option>\n      <option value=\"TD\">Chad</option>\n      <option value=\"CD\">Channel Islands</option>\n      <option value=\"CL\">Chile</option>\n      <option value=\"CN\">China</option>\n      <option value=\"CI\">Christmas Island</option>\n      <option value=\"CS\">Cocos Island</option>\n      <option value=\"CO\">Colombia</option>\n      <option value=\"CC\">Comoros</option>\n      <option value=\"CG\">Congo</option>\n      <option value=\"CK\">Cook Islands</option>\n      <option value=\"CR\">Costa Rica</option>\n      <option value=\"CT\">Cote D'Ivoire</option>\n      <option value=\"HR\">Croatia</option>\n      <option value=\"CU\">Cuba</option>\n      <option value=\"CB\">Curacao</option>\n      <option value=\"CY\">Cyprus</option>\n      <option value=\"CZ\">Czech Republic</option>\n      <option value=\"DK\">Denmark</option>\n      <option value=\"DJ\">Djibouti</option>\n      <option value=\"DM\">Dominica</option>\n      <option value=\"DO\">Dominican Republic</option>\n      <option value=\"TM\">East Timor</option>\n      <option value=\"EC\">Ecuador</option>\n      <option value=\"EG\">Egypt</option>\n      <option value=\"SV\">El Salvador</option>\n      <option value=\"GQ\">Equatorial Guinea</option>\n      <option value=\"ER\">Eritrea</option>\n      <option value=\"EE\">Estonia</option>\n      <option value=\"ET\">Ethiopia</option>\n      <option value=\"FA\">Falkland Islands</option>\n      <option value=\"FO\">Faroe Islands</option>\n      <option value=\"FJ\">Fiji</option>\n      <option value=\"FI\">Finland</option>\n      <option value=\"FR\">France</option>\n      <option value=\"GF\">French Guiana</option>\n      <option value=\"PF\">French Polynesia</option>\n      <option value=\"FS\">French Southern Ter</option>\n      <option value=\"GA\">Gabon</option>\n      <option value=\"GM\">Gambia</option>\n      <option value=\"GE\">Georgia</option>\n      <option value=\"DE\">Germany</option>\n      <option value=\"GH\">Ghana</option>\n      <option value=\"GI\">Gibraltar</option>\n      <option value=\"GB\">Great Britain</option>\n      <option value=\"GR\">Greece</option>\n      <option value=\"GL\">Greenland</option>\n      <option value=\"GD\">Grenada</option>\n      <option value=\"GP\">Guadeloupe</option>\n      <option value=\"GU\">Guam</option>\n      <option value=\"GT\">Guatemala</option>\n      <option value=\"GN\">Guinea</option>\n      <option value=\"GY\">Guyana</option>\n      <option value=\"HT\">Haiti</option>\n      <option value=\"HW\">Hawaii</option>\n      <option value=\"HN\">Honduras</option>\n      <option value=\"HK\">Hong Kong</option>\n      <option value=\"HU\">Hungary</option>\n      <option value=\"IS\">Iceland</option>\n      <option value=\"IN\">India</option>\n      <option value=\"ID\">Indonesia</option>\n      <option value=\"IA\">Iran</option>\n      <option value=\"IQ\">Iraq</option>\n      <option value=\"IR\">Ireland</option>\n      <option value=\"IM\">Isle of Man</option>\n      <option value=\"IL\">Israel</option>\n      <option value=\"IT\">Italy</option>\n      <option value=\"JM\">Jamaica</option>\n      <option value=\"JP\">Japan</option>\n      <option value=\"JO\">Jordan</option>\n      <option value=\"KZ\">Kazakhstan</option>\n      <option value=\"KE\">Kenya</option>\n      <option value=\"KI\">Kiribati</option>\n      <option value=\"NK\">Korea North</option>\n      <option value=\"KS\">Korea South</option>\n      <option value=\"KW\">Kuwait</option>\n      <option value=\"KG\">Kyrgyzstan</option>\n      <option value=\"LA\">Laos</option>\n      <option value=\"LV\">Latvia</option>\n      <option value=\"LB\">Lebanon</option>\n      <option value=\"LS\">Lesotho</option>\n      <option value=\"LR\">Liberia</option>\n      <option value=\"LY\">Libya</option>\n      <option value=\"LI\">Liechtenstein</option>\n      <option value=\"LT\">Lithuania</option>\n      <option value=\"LU\">Luxembourg</option>\n      <option value=\"MO\">Macau</option>\n      <option value=\"MK\">Macedonia</option>\n      <option value=\"MG\">Madagascar</option>\n      <option value=\"MY\">Malaysia</option>\n      <option value=\"MW\">Malawi</option>\n      <option value=\"MV\">Maldives</option>\n      <option value=\"ML\">Mali</option>\n      <option value=\"MT\">Malta</option>\n      <option value=\"MH\">Marshall Islands</option>\n      <option value=\"MQ\">Martinique</option>\n      <option value=\"MR\">Mauritania</option>\n      <option value=\"MU\">Mauritius</option>\n      <option value=\"ME\">Mayotte</option>\n      <option value=\"MX\">Mexico</option>\n      <option value=\"MI\">Midway Islands</option>\n      <option value=\"MD\">Moldova</option>\n      <option value=\"MC\">Monaco</option>\n      <option value=\"MN\">Mongolia</option>\n      <option value=\"MS\">Montserrat</option>\n      <option value=\"MA\">Morocco</option>\n      <option value=\"MZ\">Mozambique</option>\n      <option value=\"MM\">Myanmar</option>\n      <option value=\"NA\">Nambia</option>\n      <option value=\"NU\">Nauru</option>\n      <option value=\"NP\">Nepal</option>\n      <option value=\"AN\">Netherland Antilles</option>\n      <option value=\"NL\">Netherlands (Holland, Europe)</option>\n      <option value=\"NV\">Nevis</option>\n      <option value=\"NC\">New Caledonia</option>\n      <option value=\"NZ\">New Zealand</option>\n      <option value=\"NI\">Nicaragua</option>\n      <option value=\"NE\">Niger</option>\n      <option value=\"NG\">Nigeria</option>\n      <option value=\"NW\">Niue</option>\n      <option value=\"NF\">Norfolk Island</option>\n      <option value=\"NO\">Norway</option>\n      <option value=\"OM\">Oman</option>\n      <option value=\"PK\">Pakistan</option>\n      <option value=\"PW\">Palau Island</option>\n      <option value=\"PS\">Palestine</option>\n      <option value=\"PA\">Panama</option>\n      <option value=\"PG\">Papua New Guinea</option>\n      <option value=\"PY\">Paraguay</option>\n      <option value=\"PE\">Peru</option>\n      <option value=\"PH\">Philippines</option>\n      <option value=\"PO\">Pitcairn Island</option>\n      <option value=\"PL\">Poland</option>\n      <option value=\"PT\">Portugal</option>\n      <option value=\"PR\">Puerto Rico</option>\n      <option value=\"QA\">Qatar</option>\n      <option value=\"ME\">Republic of Montenegro</option>\n      <option value=\"RS\">Republic of Serbia</option>\n      <option value=\"RE\">Reunion</option>\n      <option value=\"RO\">Romania</option>\n      <option value=\"RU\">Russia</option>\n      <option value=\"RW\">Rwanda</option>\n      <option value=\"NT\">St Barthelemy</option>\n      <option value=\"EU\">St Eustatius</option>\n      <option value=\"HE\">St Helena</option>\n      <option value=\"KN\">St Kitts-Nevis</option>\n      <option value=\"LC\">St Lucia</option>\n      <option value=\"MB\">St Maarten</option>\n      <option value=\"PM\">St Pierre &amp; Miquelon</option>\n      <option value=\"VC\">St Vincent &amp; Grenadines</option>\n      <option value=\"SP\">Saipan</option>\n      <option value=\"SO\">Samoa</option>\n      <option value=\"AS\">Samoa American</option>\n      <option value=\"SM\">San Marino</option>\n      <option value=\"ST\">Sao Tome &amp; Principe</option>\n      <option value=\"SA\">Saudi Arabia</option>\n      <option value=\"SN\">Senegal</option>\n      <option value=\"RS\">Serbia</option>\n      <option value=\"SC\">Seychelles</option>\n      <option value=\"SL\">Sierra Leone</option>\n      <option value=\"SG\">Singapore</option>\n      <option value=\"SK\">Slovakia</option>\n      <option value=\"SI\">Slovenia</option>\n      <option value=\"SB\">Solomon Islands</option>\n      <option value=\"OI\">Somalia</option>\n      <option value=\"ZA\">South Africa</option>\n      <option value=\"ES\">Spain</option>\n      <option value=\"LK\">Sri Lanka</option>\n      <option value=\"SD\">Sudan</option>\n      <option value=\"SR\">Suriname</option>\n      <option value=\"SZ\">Swaziland</option>\n      <option value=\"SE\">Sweden</option>\n      <option value=\"CH\">Switzerland</option>\n      <option value=\"SY\">Syria</option>\n      <option value=\"TA\">Tahiti</option>\n      <option value=\"TW\">Taiwan</option>\n      <option value=\"TJ\">Tajikistan</option>\n      <option value=\"TZ\">Tanzania</option>\n      <option value=\"TH\">Thailand</option>\n      <option value=\"TG\">Togo</option>\n      <option value=\"TK\">Tokelau</option>\n      <option value=\"TO\">Tonga</option>\n      <option value=\"TT\">Trinidad &amp; Tobago</option>\n      <option value=\"TN\">Tunisia</option>\n      <option value=\"TR\">Turkey</option>\n      <option value=\"TU\">Turkmenistan</option>\n      <option value=\"TC\">Turks &amp; Caicos Is</option>\n      <option value=\"TV\">Tuvalu</option>\n      <option value=\"UG\">Uganda</option>\n      <option value=\"UA\">Ukraine</option>\n      <option value=\"AE\">United Arab Emirates</option>\n      <option value=\"GB\">United Kingdom</option>\n      <option value=\"US\">United States of America</option>\n      <option value=\"UY\">Uruguay</option>\n      <option value=\"UZ\">Uzbekistan</option>\n      <option value=\"VU\">Vanuatu</option>\n      <option value=\"VS\">Vatican City State</option>\n      <option value=\"VE\">Venezuela</option>\n      <option value=\"VN\">Vietnam</option>\n      <option value=\"VB\">Virgin Islands (Brit)</option>\n      <option value=\"VA\">Virgin Islands (USA)</option>\n      <option value=\"WK\">Wake Island</option>\n      <option value=\"WF\">Wallis &amp; Futana Is</option>\n      <option value=\"YE\">Yemen</option>\n      <option value=\"ZR\">Zaire</option>\n      <option value=\"ZM\">Zambia</option>\n      <option value=\"ZW\">Zimbabwe</option>\n   </select>\n  </div>\n\n  <div class=\"form-group form-md-line-input\">   \n    <textarea type=\"text\" placeholder=\"Project Description\" rows=\"5\" name=\"description\" [(ngModel)]=\"description\" class=\"form-control\"></textarea>\n  </div>\n\n  <div class=\"form-group form-md-line-input\">\n    <!-- <label>Users Assigned</label> -->\n    <!-- <select name=\"userid\" [(ngModel)]=\"userid\" multiple>\n      <option *ngFor=\"let user of users\" value=\"{{user._id}}\">{{user.name}}</option>\n    </select> -->\n    <angular2-multiselect [data]=\"usersList\" name=\"selectedUsers\" placeholder=\"Users\"  [(ngModel)]=\"selectedUsers\" [settings]=\"dropdownSettings\" \n    \n    ></angular2-multiselect>\n  </div>\n  \n\n  <div class=\"form-group form-md-line-input\">\n   \n    <!-- <input type=\"text\" data-role=\"tagsinput\" name=\"technologies\" [(ngModel)]=\"technologies\" class=\"form-control tech\"/> -->\n    <!-- <tag-input\n    name=\"technologies\" \n    [(model)]=\"technologies\"    \n    placeholder=\"Add tags ...\" class=\"form-control\">\n    </tag-input> -->\n    <rl-tag-input name=\"technologies\" [(ngModel)]=\"technologies\" placeholder=\"Add Technologies\"></rl-tag-input>\n  </div>\n  <div class=\"form-actions noborder\">\n    <input type=\"submit\" class=\"btn blue\" value=\"Submit\" />\n    <input type=\"button\" (click)=\"onProjectCancelClick()\" class=\"btn default\" value=\"Cancel\" />\n  </div>\n</div>\n</form>\n\n\n\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"portlet light bordered\">\n        <div class=\"portlet-title\">\n            <div class=\"caption font-red-sunglo\">\n                <i class=\"icon-settings font-red-sunglo\"></i>\n                <span class=\"caption-subject bold uppercase\" *ngIf=\"project\"> Detail: {{project.name}}</span>\n            </div>\n        </div>\n<div class=\"portlet-body\" *ngIf=\"project\">\n  <!-- <h2 class=\"page-header\">{{project.name}}</h2> -->\n  <ul class=\"list-group\">\n    <!-- <li class=\"list-group-item\">Projectname: {{project.name}}</li> -->\n    <li class=\"list-group-item\">Clientname: {{project.clientname}}</li>\n    <li class=\"list-group-item\">Clientcountry: {{project.clientcountry}}</li>\n    <li class=\"list-group-item\">Description: {{project.description}}</li>\n    <li class=\"list-group-item\">Users: <div *ngFor=\"let user of project.users let isLast=last\"> {{user.name}}{{isLast?'':','}} </div></li>\n    <li class=\"list-group-item\">Technologies: <div *ngFor=\"let tech of project.technologies let isLast=last\"> {{tech}}{{isLast?'':','}} </div></li>\n   <li class=\"list-group-item\" *ngIf=\"project.notes && project.notes != 0\">Notes: \n     <div class=\"row\">\n       <div class=\"col-md-4\"  *ngFor=\"let note of project.notes\">\n         <div class=\"portlet box blue-hoki\">\n            <div class=\"portlet-title\">\n                <div class=\"caption\">\n                    <i class=\"fa fa-gift\"></i>{{note.name}} </div>\n                <div class=\"actions\">\n                    <a href=\"javascript:;\" *ngIf=\"!note.editMode && note.showEditUpdateButton\" (click)=\"onNoteEditClick(note._id)\" class=\"btn btn-default btn-sm\">\n                        <i class=\"fa fa-pencil\"></i> Edit </a>\n                    <a href=\"javascript:;\" *ngIf=\"note.editMode && note.showEditUpdateButton\" (click)=\"onNoteEditUpdateClick(note._id)\" class=\"btn btn-default btn-sm\">\n                            <i class=\"fa fa-pencil\"></i> Update </a>\n                    <a href=\"javascript:;\" *ngIf=\"note.editMode && note.showEditUpdateButton\" (click)=\"onNoteEditCancelClick(note._id)\" class=\"btn btn-default btn-sm\">\n                                <i class=\"fa fa-pencil\"></i> Cancel </a>\n                    <a href=\"javascript:;\" *ngIf=\"!note.editMode && note.showEditUpdateButton\" (click)=\"onNoteDeleteClick(note._id)\" class=\"btn btn-default btn-sm\">\n                        <i class=\"fa fa-plus\"></i> Delete </a>\n                </div>\n            </div>\n            <div class=\"portlet-body\">\n                <div class=\"scroller\" *ngIf=\"!note.editMode\" style=\"height:200px\" data-rail-visible=\"1\" data-rail-color=\"yellow\" data-handle-color=\"#a1b2bd\" style=\"overflow-y: auto;word-wrap:break-word; height:200px;\">              \n                {{note.note}}                \n                </div>\n                <textarea *ngIf=\"note.editMode\" name=\"note\" [(ngModel)]=\"note.editNote\" type=\"text\" rows=\"5\" class=\"form-control\"></textarea>\n            </div>\n         </div>\n       </div>\n     </div>\n     <!-- <div *ngFor=\"let note of project.notes\"><div *ngIf=\"!note.editMode\"> <b>{{note.name}}</b>: {{note.note}}  </div>      \n      <textarea *ngIf=\"note.editMode\" name=\"note\" [(ngModel)]=\"note.editNote\" type=\"text\" rows=\"5\" class=\"form-control\"></textarea>\n     <a href=\"#\" *ngIf=\"!note.editMode && note.showEditUpdateButton\" (click)=\"onNoteEditClick(note._id)\">Edit</a>\n     <a href=\"#\" *ngIf=\"note.editMode && note.showEditUpdateButton\" (click)=\"onNoteEditUpdateClick(note._id)\">Update</a>\n     <a href=\"#\" *ngIf=\"note.editMode && note.showEditUpdateButton\" (click)=\"onNoteEditCancelClick(note._id)\">Cancel</a>\n     <a href=\"#\" *ngIf=\"!note.editMode && note.showEditUpdateButton\" (click)=\"onNoteDeleteClick(note._id)\">Delete</a></div>   -->\n   </li>\n   <!-- <li class=\"list-group-item\">Docs: <div *ngFor=\"let file of files\"><a (click)=\"Download(file)\">{{file | uploadDocName}}</a> </div></li> -->\n   <li class=\"list-group-item\">Docs:\n        <div class=\"row\">\n            \n            <div *ngFor=\"let file of files\"><a target=\"_blank\" href=\"{{file}}\">{{file | uploadDocName}}</a>\n            </div>\n        \n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple style=\"float: right;\n            margin-top: -23px;\"/>\n            <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader.queue.length>0\">\n                    \n                               <!-- <h3>Upload queue</h3>\n                               <p>Queue length: {{ uploader?.queue?.length }}</p> -->\n                    \n                               <table class=\"table\">\n                                   <thead>\n                                   <tr>\n                                       <th width=\"50%\">Name</th>\n                                       <!-- <th>Size</th> -->\n                                       <th>Status</th>\n                                       <!-- <th>Progress</th> -->\n                                       \n                                       <th>Actions</th>\n                                   </tr>\n                                   </thead>\n                                   <tbody>\n                                   <tr *ngFor=\"let item of uploader.queue\">\n                                       <td><strong>{{ item?.file?.name }}</strong></td>\n                                        <!-- <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>  -->\n                                       <!-- <td *ngIf=\"uploader.isHTML5\">\n                                           <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                               <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                           </div>\n                                       </td> -->\n                                       <td class=\"text-center\">\n                                           <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                                           <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                                          <!-- <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span> -->\n                                       </td>\n                                       <td nowrap>\n                                           <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                                   (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                                               <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                                           </button>\n                                           <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                                   (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                                               <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                                           </button>\n                                          <!-- <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                                   (click)=\"item.remove()\">\n                                               <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                                           </button> -->\n                                       </td>\n                                   </tr>\n                                   </tbody>\n                               </table>\n                    \n                                <div>\n                                   <div>\n                                       Queue progress:\n                                       <div class=\"progress\" style=\"\">\n                                           <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                                       </div>\n                                   </div>\n                                  <!-- <button type=\"button\" class=\"btn btn-success btn-s\"\n                                           (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                                       <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                                   </button>\n                                   <button type=\"button\" class=\"btn btn-warning btn-s\"\n                                           (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                                       <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                                   </button>\n                                   <button type=\"button\" class=\"btn btn-danger btn-s\"\n                                           (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                                       <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                                   </button> -->\n                               </div>\n                    \n                           </div>\n                </div>\n        <!-- </div> -->\n    </li>\n  </ul>  \n</div>\n<div *ngIf=\"!project\">\n  No Project found\n</div>\n<div *ngIf=\"project\">\n  <div class=\"form-group\">\n      <label>Write a Note:</label>\n  <textarea name=\"note\" [(ngModel)]=\"note\" type=\"text\" rows=\"5\" class=\"form-control\"></textarea>\n  </div>\n  <input type=\"button\" (click)=\"onAddingNote()\" class=\"btn btn-primary\" value=\"+ Note\" />\n  <!-- <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /> -->\n\n  \n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"portlet light portlet-fit bordered\">\n      <div class=\"portlet-title\">\n          <div class=\"caption\">\n              <i class=\"icon-settings font-red\"></i>\n              <span class=\"caption-subject font-red sbold uppercase\">Projects</span>\n          </div>\n      </div>\n<div class=\"portlet-body\">\n  <div class=\"dataTables_wrapper no-footer\">\n    <div class=\"table-scrollable\">\n\n<!-- <table class=\"table table-striped table-bordered table-hover table-checkable order-column\" id=\"sample_1\" *ngIf=\"projects && projects != 0\">\n  <thead>\n    <tr role=\"row\">     \n      <th>Name</th>\n      <th>Client Name</th>\n      <th>Users</th>\n      <th>Technologies</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let project of projects\" role=\"row\">\n     <td>{{project.name}}</td>\n      <td>{{project.clientname}}</td>\n      <td><div *ngFor=\"let user of project.users; let isLast=last\">{{user.name}}{{isLast ? '':','}}</div></td>   \n      <td><div *ngFor=\"let tech of project.technologies; let isLast=last\">{{tech}}{{isLast ? '':','}}</div></td>      \n      <td>\n        <a class=\"edit\" [routerLink]=\"['./project-detail',project._id]\">Detail</a>\n        <a class=\"edit\" *ngIf=\"authService.isUserAdmin()\" [routerLink]=\"['./edit',project._id]\">Edit</a>\n        <a class=\"edit\" *ngIf=\"authService.isUserAdmin()\" (click)=\"onProjectDelete(project._id)\">Delete</a>\n      </td>\n    </tr>\n   \n  </tbody>\n</table> -->\n\n<table class=\"table table-striped\" [mfData]=\"projects\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n    <thead>\n    <tr>\n        <th>\n            <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n        </th>\n        <th>\n            <mfDefaultSorter by=\"clientname\">Client Name</mfDefaultSorter>\n        </th>\n        <th>\n            <mfDefaultSorter by=\"users\">Users</mfDefaultSorter>\n        </th>\n        <th>\n            <mfDefaultSorter by=\"technologies\">Technologies</mfDefaultSorter>\n        </th>\n        <th>Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of mf.data\">\n        <td><div>{{item.name}}</div></td>\n        <td><div>{{item.clientname}}</div></td>\n        <td><div *ngFor=\"let user of item.users; let isLast=last\">{{user.name}}{{isLast ? '':','}}</div></td>   \n        <td><div *ngFor=\"let tech of item.technologies; let isLast=last\">{{tech}}{{isLast ? '':','}}</div></td>      \n        <td>\n          <a class=\"edit\" [routerLink]=\"['./project-detail',item._id]\">Detail</a>\n          <a class=\"edit\" *ngIf=\"authService.isUserAdmin()\" [routerLink]=\"['./edit',item._id]\">Edit</a>\n          <a class=\"edit\" *ngIf=\"authService.isUserAdmin()\" (click)=\"onProjectDelete(item._id)\">Delete</a>\n        </td>\n    </tr>\n    </tbody>\n    <tfoot>\n    <tr>\n        <td colspan=\"4\">\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n</table>\n    </div>\n  </div>\n</div>  \n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<!-- <h2>Register</h2> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"portlet light bordered\">\n      <div class=\"portlet-title\">\n          <div class=\"caption font-red-sunglo\">\n              <i class=\"icon-settings font-red-sunglo\"></i>\n              <span class=\"caption-subject bold uppercase\"> Register</span>\n          </div>\n      </div>\n<div class=\"portlet-body form\">\n<form role=\"form\" (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-body\">\n      <flash-messages></flash-messages>\n      <div class=\"form-group form-md-line-input\">\n        <!-- <label>Name</label> -->\n        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\" class=\"form-control\"/>\n      </div>\n\n      <div class=\"form-group form-md-line-input\">\n        <!-- <label>UserName</label> -->\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\"/>\n      </div>\n\n      <div class=\"form-group form-md-line-input\">\n        <!-- <label>Email</label> -->\n        <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"form-control\"/>\n      </div>\n\n      <div class=\"form-group form-md-line-input\">\n        <!-- <label>Password</label> -->\n        <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" class=\"form-control\"/>\n      </div>\n    <div class=\"form-actions noborder\">\n      <input type=\"submit\" class=\"btn blue\" value=\"Submit\" />\n      <input type=\"button\" (click)=\"OnCancelFormClick()\" class=\"btn default\" value=\"Cancel\" />\n    </div>\n  </div>\n</form>\n</div>\n    </div>\n  </div>\n</div>"

/***/ })

},[1072]);
//# sourceMappingURL=main.bundle.map