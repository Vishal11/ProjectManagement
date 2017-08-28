webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
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
    ProjectService.prototype.updateProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('project/update/' + project._id, project, { headers: headers }).map(function (res) { return res.json(); });
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(376);
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

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_projects_project_project_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_projects_projectlist_projectlist_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_project_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_projects_projectdetail_projectdetail_component__ = __webpack_require__(518);
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
                __WEBPACK_IMPORTED_MODULE_18__components_projects_projectlist_projectlist_component__["a" /* ProjectlistComponent */], __WEBPACK_IMPORTED_MODULE_23__components_projects_projectdetail_projectdetail_component__["a" /* ProjectdetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_22_ng2_tagsinput__["Ng2TagsInputModule"]
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

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
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
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
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
            template: __webpack_require__(701),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
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
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/profile.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(40);
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
    function ProjectComponent(validateService, flashService, projectService, userService, router) {
        this.validateService = validateService;
        this.flashService = flashService;
        this.projectService = projectService;
        this.userService = userService;
        this.router = router;
        this.title = "Project Add";
        this.technologies = [];
        this.userid = [];
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            if (data.success) {
                _this.users = data.users;
                console.log(_this.users);
            }
        });
    };
    ProjectComponent.prototype.ngAfterViewInit = function () {
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
        if (!this.validateService.validateProjectInsert(Project)) {
            this.flashService.show("Please fill out the details", { cssClass: "alert-danger" });
        }
        else {
            if (this.userid) {
                for (var i = 0; i < this.userid.length; i++) {
                    var user = [];
                    this.userService.getUserDetails(this.userid[i]).subscribe(function (data) {
                        if (data.success) {
                            delete data.user.password;
                            Project.users.push(data.user);
                        }
                        if (Project.users.length == _this.userid.length) {
                            _this.projectService.insertProject(Project).subscribe(function (data) {
                                if (data.success) {
                                    _this.router.navigate(['/projects']);
                                }
                            });
                            _this.flashService.show("Project created", { cssClass: "alert-success" });
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
            template: __webpack_require__(703),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], ProjectComponent);
    return ProjectComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/project.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
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



var ProjectdetailComponent = (function () {
    function ProjectdetailComponent(projectService, activatedRoute) {
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.note = null;
        this.onAddingNote = function () {
            var _this = this;
            var note = { note: "", name: "", userId: "" };
            var loggedInUser = JSON.parse(localStorage.getItem('user'));
            note.note = this.note;
            note.name = loggedInUser.name;
            note.userId = loggedInUser.id;
            this.project.notes.push(note);
            console.log(this.project);
            this.note = null;
            this.projectService.updateProject(this.project).subscribe(function (data) {
                if (data.success) {
                    _this.project = data.project;
                }
            });
            return false;
        };
    }
    ProjectdetailComponent.prototype.ngOnInit = function () {
        // this.projectService.getProjectDetails(params)
        var _this = this;
        var projectId = this.activatedRoute.snapshot.params["id"];
        this.projectService.getProjectDetails(projectId).subscribe(function (data) {
            if (data.success) {
                _this.project = data.project;
            }
        });
    };
    ProjectdetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projectdetail',
            template: __webpack_require__(704),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ProjectdetailComponent);
    return ProjectdetailComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/projectdetail.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(156);
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


var ProjectlistComponent = (function () {
    function ProjectlistComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getAllProjects().subscribe(function (data) {
            if (data.success) {
                _this.projects = data.projects;
            }
        });
    };
    ProjectlistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projectlist',
            template: __webpack_require__(705),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === 'function' && _a) || Object])
    ], ProjectlistComponent);
    return ProjectlistComponent;
    var _a;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/projectlist.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
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
            template: __webpack_require__(706),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Sessions/ProjectManagement/angular-src/src/register.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(67);
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

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(67);
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

/***/ 523:
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(528);
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

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "li.dropdown:hover > .dropdown-menu {\r\n    display: block;\r\n}"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n   <div class=\"container\">\n       <flash-messages></flash-messages>\n      <router-outlet></router-outlet>\n   </div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<h2>Login </h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>UserName</label>\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"username\"/>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\"/>\n  </div>\n  <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\"/>\n</form>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>           \n          </ul>\n\n           <ul class=\"nav navbar-nav navbar-right\">\n             <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>   \n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>   \n               <li class=\"dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                 <!--<a [routerLink]=\"['/projects']\">Projects</a>-->\n               <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Projects <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a [routerLink]=\"['/projects']\">All</a></li>\n                  <li *ngIf=\"authService.isUserAdmin()\"><a [routerLink]=\"['/projects/add']\">Add Project</a></li>\n                  <!--<li><a href=\"#\">Something else here</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">One more separated link</a></li>-->\n                </ul>\n               </li> \n              <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>   \n              <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>   \n              <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>   \n          </ul>\n        </div>\n      </div>\n    </nav>\n\n "

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.username}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<form (submit)=\"onProjectSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Client Name</label>\n    <input type=\"text\" name=\"clientname\" [(ngModel)]=\"clientname\" class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Client Country</label>\n    <select name=\"clientcountry\" [(ngModel)]=\"clientcountry\" id=\"sel1\" class=\"form-control\">\n      <option value=\"AF\">Afghanistan</option>\n      <option value=\"AL\">Albania</option>\n      <option value=\"DZ\">Algeria</option>\n      <option value=\"AS\">American Samoa</option>\n      <option value=\"AD\">Andorra</option>\n      <option value=\"AG\">Angola</option>\n      <option value=\"AI\">Anguilla</option>\n      <option value=\"AG\">Antigua &amp; Barbuda</option>\n      <option value=\"AR\">Argentina</option>\n      <option value=\"AA\">Armenia</option>\n      <option value=\"AW\">Aruba</option>\n      <option value=\"AU\">Australia</option>\n      <option value=\"AT\">Austria</option>\n      <option value=\"AZ\">Azerbaijan</option>\n      <option value=\"BS\">Bahamas</option>\n      <option value=\"BH\">Bahrain</option>\n      <option value=\"BD\">Bangladesh</option>\n      <option value=\"BB\">Barbados</option>\n      <option value=\"BY\">Belarus</option>\n      <option value=\"BE\">Belgium</option>\n      <option value=\"BZ\">Belize</option>\n      <option value=\"BJ\">Benin</option>\n      <option value=\"BM\">Bermuda</option>\n      <option value=\"BT\">Bhutan</option>\n      <option value=\"BO\">Bolivia</option>\n      <option value=\"BL\">Bonaire</option>\n      <option value=\"BA\">Bosnia &amp; Herzegovina</option>\n      <option value=\"BW\">Botswana</option>\n      <option value=\"BR\">Brazil</option>\n      <option value=\"BC\">British Indian Ocean Ter</option>\n      <option value=\"BN\">Brunei</option>\n      <option value=\"BG\">Bulgaria</option>\n      <option value=\"BF\">Burkina Faso</option>\n      <option value=\"BI\">Burundi</option>\n      <option value=\"KH\">Cambodia</option>\n      <option value=\"CM\">Cameroon</option>\n      <option value=\"CA\">Canada</option>\n      <option value=\"IC\">Canary Islands</option>\n      <option value=\"CV\">Cape Verde</option>\n      <option value=\"KY\">Cayman Islands</option>\n      <option value=\"CF\">Central African Republic</option>\n      <option value=\"TD\">Chad</option>\n      <option value=\"CD\">Channel Islands</option>\n      <option value=\"CL\">Chile</option>\n      <option value=\"CN\">China</option>\n      <option value=\"CI\">Christmas Island</option>\n      <option value=\"CS\">Cocos Island</option>\n      <option value=\"CO\">Colombia</option>\n      <option value=\"CC\">Comoros</option>\n      <option value=\"CG\">Congo</option>\n      <option value=\"CK\">Cook Islands</option>\n      <option value=\"CR\">Costa Rica</option>\n      <option value=\"CT\">Cote D'Ivoire</option>\n      <option value=\"HR\">Croatia</option>\n      <option value=\"CU\">Cuba</option>\n      <option value=\"CB\">Curacao</option>\n      <option value=\"CY\">Cyprus</option>\n      <option value=\"CZ\">Czech Republic</option>\n      <option value=\"DK\">Denmark</option>\n      <option value=\"DJ\">Djibouti</option>\n      <option value=\"DM\">Dominica</option>\n      <option value=\"DO\">Dominican Republic</option>\n      <option value=\"TM\">East Timor</option>\n      <option value=\"EC\">Ecuador</option>\n      <option value=\"EG\">Egypt</option>\n      <option value=\"SV\">El Salvador</option>\n      <option value=\"GQ\">Equatorial Guinea</option>\n      <option value=\"ER\">Eritrea</option>\n      <option value=\"EE\">Estonia</option>\n      <option value=\"ET\">Ethiopia</option>\n      <option value=\"FA\">Falkland Islands</option>\n      <option value=\"FO\">Faroe Islands</option>\n      <option value=\"FJ\">Fiji</option>\n      <option value=\"FI\">Finland</option>\n      <option value=\"FR\">France</option>\n      <option value=\"GF\">French Guiana</option>\n      <option value=\"PF\">French Polynesia</option>\n      <option value=\"FS\">French Southern Ter</option>\n      <option value=\"GA\">Gabon</option>\n      <option value=\"GM\">Gambia</option>\n      <option value=\"GE\">Georgia</option>\n      <option value=\"DE\">Germany</option>\n      <option value=\"GH\">Ghana</option>\n      <option value=\"GI\">Gibraltar</option>\n      <option value=\"GB\">Great Britain</option>\n      <option value=\"GR\">Greece</option>\n      <option value=\"GL\">Greenland</option>\n      <option value=\"GD\">Grenada</option>\n      <option value=\"GP\">Guadeloupe</option>\n      <option value=\"GU\">Guam</option>\n      <option value=\"GT\">Guatemala</option>\n      <option value=\"GN\">Guinea</option>\n      <option value=\"GY\">Guyana</option>\n      <option value=\"HT\">Haiti</option>\n      <option value=\"HW\">Hawaii</option>\n      <option value=\"HN\">Honduras</option>\n      <option value=\"HK\">Hong Kong</option>\n      <option value=\"HU\">Hungary</option>\n      <option value=\"IS\">Iceland</option>\n      <option value=\"IN\">India</option>\n      <option value=\"ID\">Indonesia</option>\n      <option value=\"IA\">Iran</option>\n      <option value=\"IQ\">Iraq</option>\n      <option value=\"IR\">Ireland</option>\n      <option value=\"IM\">Isle of Man</option>\n      <option value=\"IL\">Israel</option>\n      <option value=\"IT\">Italy</option>\n      <option value=\"JM\">Jamaica</option>\n      <option value=\"JP\">Japan</option>\n      <option value=\"JO\">Jordan</option>\n      <option value=\"KZ\">Kazakhstan</option>\n      <option value=\"KE\">Kenya</option>\n      <option value=\"KI\">Kiribati</option>\n      <option value=\"NK\">Korea North</option>\n      <option value=\"KS\">Korea South</option>\n      <option value=\"KW\">Kuwait</option>\n      <option value=\"KG\">Kyrgyzstan</option>\n      <option value=\"LA\">Laos</option>\n      <option value=\"LV\">Latvia</option>\n      <option value=\"LB\">Lebanon</option>\n      <option value=\"LS\">Lesotho</option>\n      <option value=\"LR\">Liberia</option>\n      <option value=\"LY\">Libya</option>\n      <option value=\"LI\">Liechtenstein</option>\n      <option value=\"LT\">Lithuania</option>\n      <option value=\"LU\">Luxembourg</option>\n      <option value=\"MO\">Macau</option>\n      <option value=\"MK\">Macedonia</option>\n      <option value=\"MG\">Madagascar</option>\n      <option value=\"MY\">Malaysia</option>\n      <option value=\"MW\">Malawi</option>\n      <option value=\"MV\">Maldives</option>\n      <option value=\"ML\">Mali</option>\n      <option value=\"MT\">Malta</option>\n      <option value=\"MH\">Marshall Islands</option>\n      <option value=\"MQ\">Martinique</option>\n      <option value=\"MR\">Mauritania</option>\n      <option value=\"MU\">Mauritius</option>\n      <option value=\"ME\">Mayotte</option>\n      <option value=\"MX\">Mexico</option>\n      <option value=\"MI\">Midway Islands</option>\n      <option value=\"MD\">Moldova</option>\n      <option value=\"MC\">Monaco</option>\n      <option value=\"MN\">Mongolia</option>\n      <option value=\"MS\">Montserrat</option>\n      <option value=\"MA\">Morocco</option>\n      <option value=\"MZ\">Mozambique</option>\n      <option value=\"MM\">Myanmar</option>\n      <option value=\"NA\">Nambia</option>\n      <option value=\"NU\">Nauru</option>\n      <option value=\"NP\">Nepal</option>\n      <option value=\"AN\">Netherland Antilles</option>\n      <option value=\"NL\">Netherlands (Holland, Europe)</option>\n      <option value=\"NV\">Nevis</option>\n      <option value=\"NC\">New Caledonia</option>\n      <option value=\"NZ\">New Zealand</option>\n      <option value=\"NI\">Nicaragua</option>\n      <option value=\"NE\">Niger</option>\n      <option value=\"NG\">Nigeria</option>\n      <option value=\"NW\">Niue</option>\n      <option value=\"NF\">Norfolk Island</option>\n      <option value=\"NO\">Norway</option>\n      <option value=\"OM\">Oman</option>\n      <option value=\"PK\">Pakistan</option>\n      <option value=\"PW\">Palau Island</option>\n      <option value=\"PS\">Palestine</option>\n      <option value=\"PA\">Panama</option>\n      <option value=\"PG\">Papua New Guinea</option>\n      <option value=\"PY\">Paraguay</option>\n      <option value=\"PE\">Peru</option>\n      <option value=\"PH\">Philippines</option>\n      <option value=\"PO\">Pitcairn Island</option>\n      <option value=\"PL\">Poland</option>\n      <option value=\"PT\">Portugal</option>\n      <option value=\"PR\">Puerto Rico</option>\n      <option value=\"QA\">Qatar</option>\n      <option value=\"ME\">Republic of Montenegro</option>\n      <option value=\"RS\">Republic of Serbia</option>\n      <option value=\"RE\">Reunion</option>\n      <option value=\"RO\">Romania</option>\n      <option value=\"RU\">Russia</option>\n      <option value=\"RW\">Rwanda</option>\n      <option value=\"NT\">St Barthelemy</option>\n      <option value=\"EU\">St Eustatius</option>\n      <option value=\"HE\">St Helena</option>\n      <option value=\"KN\">St Kitts-Nevis</option>\n      <option value=\"LC\">St Lucia</option>\n      <option value=\"MB\">St Maarten</option>\n      <option value=\"PM\">St Pierre &amp; Miquelon</option>\n      <option value=\"VC\">St Vincent &amp; Grenadines</option>\n      <option value=\"SP\">Saipan</option>\n      <option value=\"SO\">Samoa</option>\n      <option value=\"AS\">Samoa American</option>\n      <option value=\"SM\">San Marino</option>\n      <option value=\"ST\">Sao Tome &amp; Principe</option>\n      <option value=\"SA\">Saudi Arabia</option>\n      <option value=\"SN\">Senegal</option>\n      <option value=\"RS\">Serbia</option>\n      <option value=\"SC\">Seychelles</option>\n      <option value=\"SL\">Sierra Leone</option>\n      <option value=\"SG\">Singapore</option>\n      <option value=\"SK\">Slovakia</option>\n      <option value=\"SI\">Slovenia</option>\n      <option value=\"SB\">Solomon Islands</option>\n      <option value=\"OI\">Somalia</option>\n      <option value=\"ZA\">South Africa</option>\n      <option value=\"ES\">Spain</option>\n      <option value=\"LK\">Sri Lanka</option>\n      <option value=\"SD\">Sudan</option>\n      <option value=\"SR\">Suriname</option>\n      <option value=\"SZ\">Swaziland</option>\n      <option value=\"SE\">Sweden</option>\n      <option value=\"CH\">Switzerland</option>\n      <option value=\"SY\">Syria</option>\n      <option value=\"TA\">Tahiti</option>\n      <option value=\"TW\">Taiwan</option>\n      <option value=\"TJ\">Tajikistan</option>\n      <option value=\"TZ\">Tanzania</option>\n      <option value=\"TH\">Thailand</option>\n      <option value=\"TG\">Togo</option>\n      <option value=\"TK\">Tokelau</option>\n      <option value=\"TO\">Tonga</option>\n      <option value=\"TT\">Trinidad &amp; Tobago</option>\n      <option value=\"TN\">Tunisia</option>\n      <option value=\"TR\">Turkey</option>\n      <option value=\"TU\">Turkmenistan</option>\n      <option value=\"TC\">Turks &amp; Caicos Is</option>\n      <option value=\"TV\">Tuvalu</option>\n      <option value=\"UG\">Uganda</option>\n      <option value=\"UA\">Ukraine</option>\n      <option value=\"AE\">United Arab Emirates</option>\n      <option value=\"GB\">United Kingdom</option>\n      <option value=\"US\">United States of America</option>\n      <option value=\"UY\">Uruguay</option>\n      <option value=\"UZ\">Uzbekistan</option>\n      <option value=\"VU\">Vanuatu</option>\n      <option value=\"VS\">Vatican City State</option>\n      <option value=\"VE\">Venezuela</option>\n      <option value=\"VN\">Vietnam</option>\n      <option value=\"VB\">Virgin Islands (Brit)</option>\n      <option value=\"VA\">Virgin Islands (USA)</option>\n      <option value=\"WK\">Wake Island</option>\n      <option value=\"WF\">Wallis &amp; Futana Is</option>\n      <option value=\"YE\">Yemen</option>\n      <option value=\"ZR\">Zaire</option>\n      <option value=\"ZM\">Zambia</option>\n      <option value=\"ZW\">Zimbabwe</option>\n   </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Project Description</label>\n    <textarea type=\"text\" rows=\"5\" name=\"description\" [(ngModel)]=\"description\" class=\"form-control\"></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Users Assigned</label>\n    <select name=\"userid\" [(ngModel)]=\"userid\" multiple>\n      <option *ngFor=\"let user of users\" value=\"{{user._id}}\">{{user.name}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Technologies</label>\n    <!--<input type=\"text\" data-role=\"tagsinput\" name=\"technologies\" [(ngModel)]=\"technologies\" class=\"form-control tech\"/>-->\n    <tag-input\n    name=\"technologies\" \n    [model]=\"technologies\"    \n    placeholder=\"Add tags ...\" class=\"form-control\">\n    </tag-input>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n</form>\n\n\n\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\">\n  <h2 class=\"page-header\">{{project.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Projectname: {{project.name}}</li>\n    <li class=\"list-group-item\">Clientname: {{project.clientname}}</li>\n    <li class=\"list-group-item\">Clientcountry: {{project.clientcountry}}</li>\n    <li class=\"list-group-item\">Description: {{project.description}}</li>\n    <li class=\"list-group-item\">Users: <div *ngFor=\"let user of project.users let isLast=last\"> {{user.name}}{{isLast?'':','}} </div></li>\n     <li class=\"list-group-item\" *ngIf=\"project.notes && project.notes != 0\">Notes: <div *ngFor=\"let note of project.notes\">{{note.name}}: {{note.note}} </div></li>\n  </ul>\n</div>\n\n<div class=\"form-group\">\n    <label>Project Description</label>\n<textarea name=\"note\" [(ngModel)]=\"note\" type=\"text\" rows=\"5\" class=\"form-control\"></textarea>\n</div>\n<input type=\"button\" (click)=\"onAddingNote()\" class=\"btn btn-primary\" value=\"+ Note\" />"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" *ngIf=\"projects && projects != 0\">\n  <thead class=\"thead-inverse\">\n    <tr>     \n      <th>Name</th>\n      <th>Client Name</th>\n      <th>Users</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let project of projects\">\n     <td>{{project.name}}</td>\n      <td>{{project.clientname}}</td>\n      <td><div *ngFor=\"let user of project.users; let isLast=last\">{{user.name}}{{isLast ? '':','}}</div></td>      \n      <td>\n        <a [routerLink]=\"['./project-detail',project._id]\">Detail</a>\n        <a [routerLink]=\"['./project-detail',project._id]\">Edit</a>\n        <a [routerLink]=\"['./project-detail',project._id]\">Delete</a>\n      </td>\n    </tr>\n   \n  </tbody>\n</table>\n\n\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>UserName</label>\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"text\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\"/>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n</form>"

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ })

},[729]);
//# sourceMappingURL=main.bundle.map