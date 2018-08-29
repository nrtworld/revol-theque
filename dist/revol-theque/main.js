(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center;\">\n  <app-header *ngIf=\"!isNotFound\"></app-header>\n  <div id=\"container\">\n    <router-outlet style=\"width: 100%;height: 100%;\"></router-outlet>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.JAKU {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/fond%2FJaku_destroyer_min.jpg?alt=media&token=f6747c29-e40d-4d70-ba5e-5ef6596e5c89);\n  background-position: 50% 50%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  color: yellow;\n  text-shadow: black 0.2em 0.2em 0.3em; }\n\n.ROGUEONE {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/fond%2FStar%20Wars%20Rogue%20One-min.jpg?alt=media&token=392c5715-4a44-43a6-a022-5dafc81d93c4);\n  background-position: 50% 50%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  color: yellow;\n  text-shadow: black 0.2em 0.2em 0.3em; }\n\n.RESISTANCE {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/fond%2Fresistance%20takodana_min.jpg?alt=media&token=51060f0b-ec46-4e28-9657-09f77dc2efa2);\n  background-position: 50% 50%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  color: yellow;\n  text-shadow: black 0.2em 0.2em 0.3em; }\n\n.NABOO {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/fond%2Fnaboo_min.jpg?alt=media&token=7797d4f5-f120-4de2-afc7-bfab790a16c9);\n  background-position: 50% 50%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  color: yellow;\n  text-shadow: black 0.2em 0.2em 0.3em; }\n\n.PASSERELLE {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/fond%2Fpasserelle.jpg?alt=media&token=43dd7c6b-2999-4485-8bae-1dfdcbaa36d7);\n  background-position: 50% 50%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  color: yellow;\n  text-shadow: black 0.2em 0.2em 0.3em; }\n\n.GUERRE_DESERT {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/fond%2Fgerre%20desert.jpg?alt=media&token=7bc86e96-b359-4931-9cd5-1bd489ddac2c);\n  background-position: 50% 50%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  color: yellow;\n  text-shadow: black 0.2em 0.2em 0.3em; }\n\n.ATAT {\n  background-image: url(https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/fond%2FATAT.jpg?alt=media&token=84017f00-2f6e-4bcb-b231-85a7e51c34fa);\n  background-position: 50% 50%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  color: yellow;\n  text-shadow: black 0.2em 0.2em 0.3em; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RevolThèque';
        this.isNotFound = false;
        var config = {
            apiKey: "AIzaSyCiNWPAYyxeJ2lN4eIY1QmltXPqaYrJy5I",
            authDomain: "revol-theque.firebaseapp.com",
            databaseURL: "https://revol-theque.firebaseio.com",
            projectId: "revol-theque",
            storageBucket: "revol-theque.appspot.com",
            messagingSenderId: "661949876520"
        };
        //firebase.initializeApp(config).auth().signOut();
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _game_list_game_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-list/game-list.component */ "./src/app/game-list/game-list.component.ts");
/* harmony import */ var _game_list_single_game_single_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-list/single-game/single-game.component */ "./src/app/game-list/single-game/single-game.component.ts");
/* harmony import */ var _game_list_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-list/game-form/game-form.component */ "./src/app/game-list/game-form/game-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_list_edit_game_edit_game_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game-list/edit-game/edit-game.component */ "./src/app/game-list/edit-game/edit-game.component.ts");
/* harmony import */ var _game_list_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game-list/search/search.component */ "./src/app/game-list/search/search.component.ts");
/* harmony import */ var _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/categoriesGames.service */ "./src/app/services/categoriesGames.service.ts");
/* harmony import */ var _services_filterGames_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/filterGames.service */ "./src/app/services/filterGames.service.ts");
/* harmony import */ var _data_collector_data_collector_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-collector/data-collector.component */ "./src/app/data-collector/data-collector.component.ts");
/* harmony import */ var _services_dataCollector_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/dataCollector.service */ "./src/app/services/dataCollector.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: 'auth/signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'auth/signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"] },
    { path: 'games', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]], component: _game_list_game_list_component__WEBPACK_IMPORTED_MODULE_6__["GameListComponent"] },
    { path: 'games/new', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]], component: _game_list_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__["GameFormComponent"] },
    { path: 'games/view/:id', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]], component: _game_list_single_game_single_game_component__WEBPACK_IMPORTED_MODULE_7__["SingleGameComponent"] },
    { path: 'games/edit/:id', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]], component: _game_list_edit_game_edit_game_component__WEBPACK_IMPORTED_MODULE_15__["EditGameComponent"] },
    { path: 'dataCollector', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]], component: _data_collector_data_collector_component__WEBPACK_IMPORTED_MODULE_19__["DataCollectorComponent"] },
    { path: '404NotFound', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]], component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"] },
    { path: '', redirectTo: 'games', pathMatch: 'full' },
    { path: '**', redirectTo: '404NotFound' }
];
//AIzaSyDkZ3pta-PPYzk7VBw-ul9BL75oiFwPUzs
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                _game_list_game_list_component__WEBPACK_IMPORTED_MODULE_6__["GameListComponent"],
                _game_list_single_game_single_game_component__WEBPACK_IMPORTED_MODULE_7__["SingleGameComponent"],
                _game_list_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__["GameFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _game_list_edit_game_edit_game_component__WEBPACK_IMPORTED_MODULE_15__["EditGameComponent"],
                _game_list_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__["EnumToArrayPipe"],
                _game_list_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"],
                _data_collector_data_collector_component__WEBPACK_IMPORTED_MODULE_19__["DataCollectorComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_games_service__WEBPACK_IMPORTED_MODULE_12__["GamesService"], _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_17__["CategoriesGamesService"], _services_filterGames_service__WEBPACK_IMPORTED_MODULE_18__["FilterGamesService"], _services_dataCollector_service__WEBPACK_IMPORTED_MODULE_20__["DataCollectorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;height: 100%; align-items: center;\">\n  <div class=\"col-sn-8 col-sm-offset-2\" style=\"margin: auto; margin-top: 50px;\">\n    <h2 style=\"margin-top: 2%;\">Come to the dark side, we have games...</h2>\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n      <div style=\"max-width: 400px;margin: auto;\" >\n        <div class=\"form-group\">\n          <label for=\"email\">Adresse e-mail</label>\n          <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Mot de passe</label>\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n        </div>\n      </div>\n      <div>\n        <button type=\"submit\" class=\"btn btn-primary device\" [disabled]=\"signinForm.invalid\">Viens prendre ta place à mes côtés,<br>et ensemble nous construirons<br>une galaxie à notre image</button>\n        <button type=\"submit\" class=\"btn btn-primary computeur\" [disabled]=\"signinForm.invalid\">Viens prendre ta place à mes côtés, et ensemble nous construirons une galaxie à notre image</button>\n      </div>\n    </form>\n    <p class=\"text-danger\">{{ errorMessage }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".computeur {\n  display: inline-block; }\n\n.device {\n  display: none; }\n\ninput {\n  background-color: rgba(255, 255, 255, 0.3);\n  color: black; }\n\n@media screen and (max-width: 411px), screen and (max-height: 411px) {\n  .computeur {\n    display: none; }\n  .device {\n    display: inline-block; } }\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SigninComponent.prototype.initForm = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signinForm.get('email').value;
        var password = this.signinForm.get('password').value;
        this.authService.signInUser(email, password).then(function () {
            _this.router.navigate(['/games']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;height: 100%; align-items: center;\">\n  <div class=\"col-sn-8 col-sm-offset-2\" style=\"max-width: 400px; margin: auto; margin-top: 50px;\">\n    <h2 style=\"margin-right: 2%;\">Créer un compte</h2>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" >\n      <div class=\"form-group\">\n        <label for=\"email\">Adresse e-mail</label>\n        <input type=\"text\"\n        id=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Mot de passe</label>\n        <input type=\"password\"\n        id=\"password\"\n        class=\"form-control\"\n        formControlName=\"password\">\n        <label for=\"password2\" style=\"margin-top: 3%;\">Retapez votre mot de passe</label>\n        <input type=\"password\"\n        id=\"password2\"\n        [ngClass]=\"(passwordsAreOk())? 'form-control': 'form-control is-invalid'\"\n        formControlName=\"password2\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"signupForm.invalid\">Créer votre compte</button>\n    </form>\n    <p class=\"text-danger\">{{ errorMessage }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  background-color: rgba(255, 255, 255, 0.3);\n  color: black; }\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_confirmPassword_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/confirmPassword.validator */ "./src/app/validators/confirmPassword.validator.ts");
/* harmony import */ var _services_filterGames_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/filterGames.service */ "./src/app/services/filterGames.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService, router, filterGamesService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.filterGamesService = filterGamesService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupComponent.prototype.initForm = function () {
        this.signupForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: _validators_confirmPassword_validator__WEBPACK_IMPORTED_MODULE_4__["ConfirmPassword"].MatchPassword
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        this.authService.createNewUser(email, password).then(function () {
            _this.router.navigate(['/games']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SignupComponent.prototype.passwordsAreOk = function () {
        var password = this.signupForm.get('password').value;
        var password2 = this.signupForm.get('password2').value;
        if (password === password2) {
            return true;
        }
        else {
            return false;
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_filterGames_service__WEBPACK_IMPORTED_MODULE_5__["FilterGamesService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/data-collector/data-collector.component.html":
/*!**************************************************************!*\
  !*** ./src/app/data-collector/data-collector.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<h4>{{data}}</h4>\n\n<h4>Mécanismes de jeu :</h4>\n<div *ngFor=\"let meca of mecanismes\">\n  <h5>{{meca}}</h5>\n</div>\n\n<button id=\"looseButton\" type=\"button\" class=\"btn btn-warning\" (click)=\"getImage()\">Trouver Image</button>\n\n<div dropzone=\"copy\" id=\"dropzone\" (dragover)=\"false\" (dragend)=\"false\" (drop)=\"getImageDropped($event)\" ></div>\n\n\n<h4>Thème du jeu :</h4>\n<div *ngFor=\"let theme of themes\">\n  <h5>{{theme}}</h5>\n</div>\n\n<h4>Nombre de joueurs :</h4>\n<div >\n  <h5>{{joueurs}}</h5>\n</div>\n\n<h4>Âge pour jouer :</h4>\n<div >\n  <h5>{{age}}</h5>\n</div>\n\n<h4>Temps de jeu :</h4>\n<div >\n  <h5>{{temps}}</h5>\n</div>\n\n\n<div *ngFor=\"let tab of table;let i = index;\" hidden=\"false\">\n  <div *ngIf=\"i == 1\">\n  <h4> table d'index {{i}}</h4>\n  <div >{{tab}}</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/data-collector/data-collector.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/data-collector/data-collector.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dropzone {\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100px;\n  border: 5px dotted #ccc; }\n\n#dropzone:hover {\n  border-color: #121416;\n  cursor: pointer; }\n\n#looseButton {\n  -webkit-animation: Buttonanimation 30s;\n  /* Safari, Opera, Chrome */\n  animation: Buttonanimation 30s;\n  /* Tous les autres navigateurs */ }\n\n@-webkit-keyframes Buttonanimation {\n  /* Safari, Opera, Chrome */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  1% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  2% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  3% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  4% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  5% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  6% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  7% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  8% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  9% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  10% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  11% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  12% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  13% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  14% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  15% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  16% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  17% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  18% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  19% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  20% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  21% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  22% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  23% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  24% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  25% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  26% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  27% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  28% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  29% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  30% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  31% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  32% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  33% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  34% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  35% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  36% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  37% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  38% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  39% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  40% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  41% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  42% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  43% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  44% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  45% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  46% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  47% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  48% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  49% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  40% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  41% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  42% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  43% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  44% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  45% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  46% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  47% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  48% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  49% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  50% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  51% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  52% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  53% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  54% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  55% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  56% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  57% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  58% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  59% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  60% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  61% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  62% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  63% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  64% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  65% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  66% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  67% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  68% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  69% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  70% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  71% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  72% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  73% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  74% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  75% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  76% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  77% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  78% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  79% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  80% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  81% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  82% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  83% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  84% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  85% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  86% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  87% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  88% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  89% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  90% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n\n@keyframes Buttonanimation {\n  /* Tous les autres navigateurs */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  1% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  2% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  3% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  4% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  5% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  6% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  7% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  8% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  9% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  10% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  11% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  12% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  13% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  14% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  15% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  16% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  17% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  18% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  19% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  20% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  21% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  22% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  23% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  24% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  25% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  26% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  27% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  28% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  29% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  30% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  31% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  32% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  33% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  34% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  35% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  36% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  37% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  38% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  39% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  40% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  41% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  42% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  43% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  44% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  45% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  46% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  47% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  48% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  49% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  40% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  41% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  42% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  43% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  44% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  45% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  46% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  47% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  48% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  49% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  50% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  51% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  52% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  53% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  54% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  55% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  56% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  57% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  58% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  59% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  60% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  61% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  62% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  63% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  64% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  65% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  66% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  67% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  68% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  69% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  70% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  71% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  72% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  73% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  74% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  75% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  76% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  77% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  78% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  79% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  80% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  81% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  82% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  83% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  84% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  85% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  86% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  87% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  88% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  89% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  90% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  91% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  92% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px); }\n  93% {\n    -webkit-transform: translateY(-300px);\n            transform: translateY(-300px); }\n  94% {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px); }\n  95% {\n    -webkit-transform: translateY(600px);\n            transform: translateY(600px); }\n  96% {\n    -webkit-transform: translateX(-500px);\n            transform: translateX(-500px); }\n  97% {\n    -webkit-transform: translateY(-700px);\n            transform: translateY(-700px); }\n  98% {\n    -webkit-transform: translateX(900px);\n            transform: translateX(900px); }\n  99% {\n    -webkit-transform: translateX(500px);\n            transform: translateX(500px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n"

/***/ }),

/***/ "./src/app/data-collector/data-collector.component.ts":
/*!************************************************************!*\
  !*** ./src/app/data-collector/data-collector.component.ts ***!
  \************************************************************/
/*! exports provided: DataCollectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCollectorComponent", function() { return DataCollectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/games.service */ "./src/app/services/games.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataCollectorComponent = /** @class */ (function () {
    function DataCollectorComponent(_http, gameService) {
        this._http = _http;
        this.gameService = gameService;
        this.title = 'SuperLaser';
        this.titleMinify = '';
        this.urlStart = 'https://fr.wikipedia.org/wiki/';
        this.urlImgStart = 'http://images.google.com/search?tbm=isch&q=';
        this.data = '';
        this.infos = [];
        this.mecanismes = [];
        this.themes = [];
        this.joueurs = '';
        this.age = '';
        this.temps = '';
        this.blobToFile = function (theBlob, fileName) {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return b;
        };
    }
    DataCollectorComponent.prototype.ngOnInit = function () {
        this.initCollect();
    };
    DataCollectorComponent.prototype.initCollect = function () {
        this.titleMinify = this.minifyString(this.title);
        this.url = this.urlImgStart + this.title;
        /*  this._http.get(this.url, {
           responseType: 'text', headers: {
             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
           }
         }).subscribe((data) => {
           this.extractInfo(data);
         }, (error) => {
           console.log('passage en majuscule');
           this.title = this.allFirstLetterInUppercase(this.title);
           this.titleMinify = this.minifyString(this.title);
           this.url = this.urlStart + this.titleMinify;
           this._http.get(this.url, {
             responseType: 'text', headers: {
               'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
             }
           }).subscribe((data) => {
             this.extractInfo(data);
           });
         }); */
    };
    DataCollectorComponent.prototype.getImage = function () {
        window.open(this.url, "", "width=600,height=400,scrollbars=0,top=100px,right=100px");
    };
    DataCollectorComponent.prototype.getImageDropped = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        console.log('test');
        var items = event.dataTransfer.items;
        console.log('items : ' + items);
        var index = 0;
        while (index < items.length) {
            var img;
            var file = items[index];
            if (file.kind == 'string') {
                file.getAsString(function (s) {
                    console.log('string reçu : ' + s);
                    _this._http.get(s, {
                        responseType: 'blob', headers: {
                            'Content-Type': 'blob'
                        }
                    }).subscribe(function (data) {
                        console.log('data : ' + data.toString());
                        var filetab = s.toString().split('.');
                        var fileExtention = filetab.pop().split('/').shift();
                        var fileName = _this.title + '.' + fileExtention;
                        console.log('fichier : ' + fileName);
                        img = _this.blobToFile(data, fileName);
                        _this.onUploadFile(img);
                    }, function (error) {
                        console.log('erreur de récupération d\'url : ' + error.toString());
                    });
                });
            }
            else if (file.kind == 'file' && file.type.match('^image/')) {
                img = file.getAsFile();
                this.onUploadFile(img);
            }
            ++index;
        }
    };
    DataCollectorComponent.prototype.onUploadFile = function (file) {
        this.gameService.uploadFile(file).then(function (url) {
            console.log('URL onUploadFile = ' + url);
        });
    };
    DataCollectorComponent.prototype.extractInfo = function (data) {
        this.table = data.split('<table>');
        var tableauInfo = data.split('<table>')[1];
        //suppression du code espace
        var tableauInfo2 = tableauInfo.replace('&#160;', ' ');
        while (tableauInfo2 !== tableauInfo2.replace('&#160;', ' ')) {
            tableauInfo2 = tableauInfo2.replace('&#160;', ' ');
        }
        //récupération des info situées entre balises
        var reg = new RegExp('<[^>]+>');
        this.infos = tableauInfo2.split(reg);
        var i = 0;
        for (var _i = 0, _a = this.infos; _i < _a.length; _i++) {
            var info = _a[_i];
            if (info == null || info == '' || !info.match('[^a-zA-Z0-9]')) {
                this.infos.splice(i, 1);
            }
            ++i;
        }
        //MECANISME
        var indexMeca = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Mécanisme'); }));
        var indexTheme = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Thème'); }));
        this.mecanismes = this.getInfo(this.infos, indexMeca, indexTheme);
        //THEME
        var indexJoueurs = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Joueur(s)'); }));
        this.themes = this.getInfo(this.infos, indexTheme, indexJoueurs);
        //JOUEURS
        var indexAge = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Âge'); }));
        this.joueurs = this.getInfo(this.infos, indexJoueurs, indexAge)[1];
        //AGE
        var indexTemps = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Durée annoncée'); }));
        this.age = this.getInfo(this.infos, indexAge, indexTemps)[1];
        //TEMPS
        this.temps = this.getInfo(this.infos, indexTemps, null)[1];
    };
    DataCollectorComponent.prototype.getInfo = function (liste, debut, fin) {
        var results = fin ? liste.slice(debut + 1, fin) : liste.slice(debut + 1);
        return results;
    };
    DataCollectorComponent.prototype.minifyString = function (s) {
        var sm = s.replace(' ', '_');
        return sm;
    };
    DataCollectorComponent.prototype.allFirstLetterInUppercase = function (s) {
        var tab = s.split(' ');
        for (var word in tab) {
            tab[word] = tab[word].substr(0, 1).toUpperCase() + tab[word].substr(1, tab[word].length);
        }
        return tab.join(' ');
    };
    DataCollectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-collector',
            template: __webpack_require__(/*! ./data-collector.component.html */ "./src/app/data-collector/data-collector.component.html"),
            styles: [__webpack_require__(/*! ./data-collector.component.scss */ "./src/app/data-collector/data-collector.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]])
    ], DataCollectorComponent);
    return DataCollectorComponent;
}());



/***/ }),

/***/ "./src/app/game-list/edit-game/edit-game.component.html":
/*!**************************************************************!*\
  !*** ./src/app/game-list/edit-game/edit-game.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onBack()\" class=\"rounded float-left computer\">\n  <img id=\"retour\" style=\"width: 100px; height: 50px;\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Ffaucon%20millenium_yellow.png?alt=media&token=9a508bc1-27d1-4f4c-81b8-aeedbdf4c5cd\"\n    data-toggle=\"tooltip\" data-placement=\"right\" title=\"Retour\">\n</div>\n<div class=\"row\" style=\"margin-top: 2%;\">\n  <div class=\"col-sm-8 col-sm-offset-2\" style=\"margin: auto;\">\n    <h2>Modifier {{game.title}}</h2>\n    <form [formGroup]=\"gameForm\" (ngSubmit)=\"onSaveGame()\">\n      <div class=\"form-group\">\n        <label for=\"title\">Titre</label>\n        <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" [checked]=\"game.isExtention\" type=\"checkbox\" formControlName=\"isExtention\" id=\"isExtention\"\n            (click)=\"thisIsAnExtention();\">\n          <label class=\"form-check-label\" for=\"isExtention\">Extention</label>\n        </div>\n      </div>\n      <div [ngClass]=\"isExtention?'form-group collapse show' : 'collapse'\">\n        <label for=\"titleExtention\">Titre de l'extention</label>\n        <input type=\"text\" id=\"titleExtention\" formControlName=\"titleExtention\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <h4>Ajouter une photo</h4>\n          <div class=\"computer\" dropzone=\"copy\" id=\"dropzone\" (dragover)=\"false\" (dragend)=\"false\" type=\"file\" (drop)=\"getImageDropped($event)\" (click)=\"onFindImage();\">\n            <p style=\"margin: auto;margin-top: 23px;\" *ngIf=\"!fileUploaded\">Glisser/déposer l'image ici!</p>\n            <p style=\"margin: auto;\" *ngIf=\"!fileUploaded\">Cliquer pour recherche google!</p>\n            <img [src]=\"fileUrl\" *ngIf=\"fileUploaded\">\n          </div>\n          <div class=\"device\" id=\"urlImage\">\n            <img id=\"downloadedImg\" class=\"device\" [src]=\"fileUrl\" *ngIf=\"fileUploaded\">\n            <div class=\"flex-container-img\">\n              <input type=\"text\" id=\"inputImg\" formControlName=\"urlImage\" class=\"form-control device\" placeholder=\"Enter l'URL de l'image ici...\"\n                (change)=\"getImageFromUrl('url')\">\n                  <img (click)=\"onFindImage()\" \n                  class=\"btn btn-outline-light device\" \n                  src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Floupe%20google.png?alt=media&token=49ce6eed-d194-41ae-a746-03b6c2656b35\">\n                \n            </div>\n          </div>\n          <div *ngIf=\"fileIsUploading\" class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n              aria-valuemax=\"100\" style=\"width: 100%\"></div>\n          </div>\n          <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\n          <!--  <button id=\"searchImgButton\" type=\"button\" class=\"btn btn-warning computer\" (click)=\"onFindImage()\">trouver image</button> -->\n        </div>\n\n      <!--#############################################################################################################################################-->\n      <div class=\"form-group\">\n        <label for=\"categories2\">Catégories</label>\n        <span class=\"flex-container-categories\">\n\n            <select class=\"form-control\" multiple>\n              <option [ngClass]=\"getSelectedClass(cat)\" *ngFor=\"let cat of categories\" (click)=\"preSelectCategorie(cat)\">{{cat}} </option>\n              <option style=\"color: black;\" (click)=\"addNewCategorieOrNot();\"> + une catégorie</option>\n            </select>\n            <div class=\"device\">\n                <form [formGroup]=\"categorieForm\" (ngSubmit)=\"onSaveCategorie()\" [ngClass]=\"wantNewCategorie?'collapse show' : 'collapse'\">\n                  <div class=\"form-group\">\n                    <label id=\"label\" for=\"newCategorie\">Nouvelle Catégorie</label>\n                    <input id=\"newCategorie\" type=\"text\" class=\"form-Control\" formControlName=\"newCategorie\" style=\"margin-left: 10px;\" placeholder=\"Nouvelle catégorie...\">\n                    <button class=\"btn btn-success\" [disabled]=\"categorieForm.invalid\" type=\"submit\" style=\"margin-left: 10px;\">OK\n                    </button>\n                    <button class=\"btn btn-warning\" type=\"button\" style=\"margin-left: 10px;\" (click)=\"addNewCategorieOrNot()\">X</button>\n                  </div>\n                </form>\n              </div>\n            <div id=\"BB8\" style=\"margin: auto;\">\n              <img class=\"computer\" (click)=\"selectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fdroid_run%20(1).gif?alt=media&token=32461aa9-4116-451f-9939-b36ffe0665ab\">\n              <img class=\"computer\" id=\"img2\" (click)=\"deSelectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Ftatooine-r2d2-c3p0.gif?alt=media&token=840972f1-9901-4050-a24c-cee649f05ae1\">\n              <img class=\"device\" (click)=\"selectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fr2d2_fall.gif?alt=media&token=5eb07d6b-06d2-45e4-a3ac-9c1a11087ba2\">\n              <img class=\"device\" id=\"img2\" (click)=\"deSelectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fr2d2_flight.gif?alt=media&token=b1a20809-4eaa-46ab-94b3-7f614791bbea\">\n            </div>\n            <select class=\"form-control\" multiple id=\"Catégorie2\">\n              <option [ngClass]=\"getDeSelectedClass(cat)\" *ngFor=\"let cat of categories2\" (click)=\"preDeSelectCategorie(cat)\">{{cat}}</option>\n            </select>\n            <div [ngClass]=\"categories3.length>0?'flex-container-categories-column collapse show': 'collapse'\" style=\"position: absolute;z-index: 150;width: 100%;\">\n              <span class=\"flex-container-categories-column\" style=\"margin: auto;width: 100%\">\n                <h5 style=\"margin: auto;\" for=\"categories3\">cliquez sur les catégories à valider</h5>\n                <select multiple style=\"width: 50%;background-color: rgb(0, 0, 0);margin: auto;margin-top: 3%;\" id=\"Catégorie3\">\n                  <option *ngFor=\"let cat of categories3\" (click)=\"validNewCat(cat)\" style=\"color:  yellow;text-align: center;text-size-adjust: inherit\">{{cat}}</option>\n                </select>\n  \n                <button class=\"btn btn-light\" type=\"button\" style=\"margin: auto;margin-top: 2%;margin-right: 47%;\" (click)=\"removeCategories3()\">FERMER\n                </button>\n              </span>\n            </div>\n          </span>\n        </div>\n        <div class=\"computer\">\n        <form [formGroup]=\"categorieForm\" (ngSubmit)=\"onSaveCategorie()\" [ngClass]=\"wantNewCategorie?'collapse show' : 'collapse'\">\n          <div class=\"form-group\">\n            <label id=\"label\" for=\"newCategorie\">Nouvelle Catégorie</label>\n            <input id=\"newCategorie\" type=\"text\" class=\"form-Control\" formControlName=\"newCategorie\" style=\"margin-left: 10px;\" placeholder=\"Nouvelle catégorie...\">\n            <button class=\"btn btn-success\" [disabled]=\"categorieForm.invalid\" type=\"submit\" style=\"margin-left: 10px;\">OK\n            </button>\n            <button class=\"btn btn-warning\" type=\"button\" style=\"margin-left: 10px;\" (click)=\"addNewCategorieOrNot()\">X</button>\n          </div>\n        </form>\n      </div>\n      <!--#############################################################################################################################################-->\n\n\n      <div class=\"form-group\">\n        <label for=\"nbJoueursMin\">Nombre de Joueur minimum</label>\n        <input type=\"text\" id=\"nbJoueursMin\" class=\"form-control\" formControlName=\"nbJoueursMin\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"nbJoueursMax\">Nombre de Joueur Maximum</label>\n        <input type=\"text\" id=\"nbJoueursMax\" class=\"form-control\" formControlName=\"nbJoueursMax\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"tpsJeux\">Temps de jeux</label>\n        <input type=\"text\" id=\"tpsJeux\" class=\"form-control\" formControlName=\"tpsJeux\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"synopsis\">synopsis</label>\n        <textarea id=\"synopsis\" style=\"height: 150px;background-color: rgba(255, 255, 255, 0.3);color: black;\" class=\"form-control\"\n          formControlName=\"synopsis\">\n          </textarea>\n      </div>\n\n      <button class=\"btn btn-success\" [disabled]=\"gameForm.invalid\" type=\"submit\">Enregistrer\n      </button>\n\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game-list/edit-game/edit-game.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/game-list/edit-game/edit-game.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device {\n  display: none; }\n\n.computer {\n  display: block; }\n\n.flex-container-categories {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.flex-container-categories-column {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap; }\n\nselect {\n  width: 40%;\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#BB8 {\n  width: 20%; }\n\n#BB8 img {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  width: 100%; }\n\n#img2 {\n  margin-top: 10px; }\n\n.option-selected {\n  color: black;\n  background-color: tomato; }\n\n.option-selected-cat2 {\n  color: #0aee0a;\n  text-shadow: black 0.1em 0.1em 0.2em;\n  background-color: tomato; }\n\n.option {\n  color: black; }\n\n.option-cat2 {\n  color: #0aee0a;\n  text-shadow: black 0.1em 0.1em 0.2em; }\n\n@-webkit-keyframes masuperanimation {\n  /* Safari, Opera, Chrome */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n\n@keyframes masuperanimation {\n  /* Tous les autres navigateurs */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n\n#retour:hover {\n  -webkit-animation: masuperanimation 1s;\n  /* Safari, Opera, Chrome */\n  animation: masuperanimation 1s;\n  /* Tous les autres navigateurs */ }\n\ninput {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n::placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n.boite {\n  background: rgba(0, 0, 0, 0.9);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  bottom: opx;\n  left: 0px;\n  right: 0px;\n  z-index: 100; }\n\n#dropzone {\n  color: #777777;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100px;\n  border: 5px dotted #ccc; }\n\n#dropzone img {\n  height: 90px; }\n\n#dropzone:hover {\n  border-color: #121416;\n  cursor: pointer; }\n\n@media screen and (max-width: 411px), screen and (max-height: 411px) {\n  select {\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.3);\n    text-align: center; }\n  #label {\n    display: none; }\n  #urlImage {\n    width: 100%; }\n  #inputImg {\n    width: 88%; }\n  .flex-container-img img {\n    width: 12%;\n    /* height:38px; */ }\n  #downloadedImg {\n    height: 90px; }\n  .device {\n    display: inline-block; }\n  .computer {\n    display: none; }\n  .flex-container-categories {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n  .flex-container-categories-column {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap; }\n  .flex-container-img {\n    width: 100%;\n    height: 38px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n  #BB8 {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n  #BB8 img {\n    margin: auto;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 130px;\n    height: 60px; }\n  #img2 {\n    margin-left: 10px; }\n  .option-selected {\n    text-align: center;\n    color: black;\n    background-color: tomato; }\n  .option-selected-cat2 {\n    text-align: center;\n    color: #0aee0a;\n    text-shadow: black 0.1em 0.1em 0.2em;\n    background-color: tomato; }\n  .option {\n    text-align: center;\n    color: black; }\n  .option-cat2 {\n    text-align: center;\n    color: #0aee0a;\n    text-shadow: black 0.1em 0.1em 0.2em; }\n  input {\n    background-color: rgba(255, 255, 255, 0.3);\n    text-align: center;\n    color: black; }\n  ::-webkit-input-placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  :-ms-input-placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  ::-ms-input-placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  ::placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  .boite {\n    background: rgba(0, 0, 0, 0.9);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    bottom: opx;\n    left: 0px;\n    right: 0px;\n    z-index: 100; }\n  #dropzone {\n    display: none;\n    color: #777777;\n    background-color: rgba(0, 0, 0, 0.3);\n    height: 100px;\n    border: 5px dotted #ccc; }\n  #dropzone:hover {\n    border-color: #121416;\n    cursor: pointer; } }\n"

/***/ }),

/***/ "./src/app/game-list/edit-game/edit-game.component.ts":
/*!************************************************************!*\
  !*** ./src/app/game-list/edit-game/edit-game.component.ts ***!
  \************************************************************/
/*! exports provided: EditGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGameComponent", function() { return EditGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_game_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/game.model */ "./src/app/models/game.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/categoriesGames.service */ "./src/app/services/categoriesGames.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditGameComponent = /** @class */ (function () {
    function EditGameComponent(formBuilder, route, gameService, location, categoriesGamesService, _http) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.gameService = gameService;
        this.location = location;
        this.categoriesGamesService = categoriesGamesService;
        this._http = _http;
        this.categories = [];
        this.categories2 = [];
        this.categories3 = [];
        this.preSelectedCategories = [];
        this.preDeSelectedCategories = [];
        this.categoriesGamesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"];
        this.fileIsUploading = false;
        this.fileUploaded = false;
        this.wantNewCategorie = false;
        this.isExtention = false;
        this.urlImgStart = 'http://images.google.com/search?tbm=isch&q=';
        this.OPTION_SELECTED = "option-selected";
        this.OPTION_NOT_SELECTED = "option";
        this.OPTION_SELECTED_CAT2 = "option-selected-cat2";
        this.OPTION_NOT_SELECTED_CAT2 = "option-cat2";
        this.blobToFile = function (theBlob, fileName) {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return b;
        };
    }
    EditGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesGamesSubscription = this.categoriesGamesService.categoriesGamesSubject.subscribe(function (categories) {
            _this.categories = categories;
        });
        this.categoriesGamesService.emitCategoriesGames();
        this.game = new _models_game_model__WEBPACK_IMPORTED_MODULE_4__["Game"]();
        var id = this.route.snapshot.params['id'];
        this.gameService.getSingleGames(+id).then(function (game) {
            _this.game = game;
            _this.photo = game.photo ? game.photo : "";
            _this.fileUrl = _this.photo;
            _this.fileUploaded = _this.fileUrl ? true : false;
            _this.oldPhoto = game.photo;
            _this.gameForm.get('title').setValue(_this.game.title);
            _this.gameForm.get('isExtention').setValue(_this.game.isExtention);
            if (game.isExtention) {
                _this.gameForm.get('titleExtention').setValue(_this.game.titleExtention);
            }
            _this.gameForm.get('nbJoueursMin').setValue(_this.game.nbJoueursMin);
            _this.gameForm.get('nbJoueursMax').setValue(_this.game.nbJoueursMax);
            _this.gameForm.get('tpsJeux').setValue(_this.game.tpsJeux);
            _this.gameForm.get('synopsis').setValue(_this.game.synopsis);
            _this.categories2 = (_this.game.categories) ? _this.game.categories : [];
            for (var _i = 0, _a = _this.categories2; _i < _a.length; _i++) {
                var cat = _a[_i];
                _this.categories.splice(_this.categories.indexOf(cat), 1);
            }
            _this.isExtention = game.isExtention;
        });
        this.initForm();
    };
    EditGameComponent.prototype.initForm = function () {
        this.gameForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)],
            urlImage: [''],
            categories: [''],
            isExtention: [''],
            titleExtention: [''],
            nbJoueursMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)],
            nbJoueursMax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)],
            tpsJeux: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)],
            synopsis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
        });
        this.categorieForm = this.formBuilder.group({
            newCategorie: ['........', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((?:\\w|[\\-_ ](?![\\-_ ])|[\\u0027\\u00C0\\u00C1\\u00C2\\u00C3\\u00C4\\u00C5\\u00C6\\u00C7\\u00C8\\u00C9\\u00CA\\u00CB\\u00CC\\u00CD\\u00CE\\u00CF\\u00D0\\u00D1\\u00D2\\u00D3\\u00D4\\u00D5\\u00D6\\u00D8\\u00D9\\u00DA\\u00DB\\u00DC\\u00DD\\u00DF\\u00E0\\u00E1\\u00E2\\u00E3\\u00E4\\u00E5\\u00E6\\u00E7\\u00E8\\u00E9\\u00EA\\u00EB\\u00EC\\u00ED\\u00EE\\u00EF\\u00F0\\u00F1\\u00F2\\u00F3\\u00F4\\u00F5\\u00F6\\u00F9\\u00FA\\u00FB\\u00FC\\u00FD\\u00FF\\u0153])+)$")]]
        });
    };
    EditGameComponent.prototype.onSaveGame = function () {
        var title = this.gameForm.get('title').value;
        var categories = this.gameForm.get('categories').value;
        var nbJoueursMin = this.gameForm.get('nbJoueursMin').value;
        var nbJoueursMax = this.gameForm.get('nbJoueursMax').value;
        var tpsJeux = this.gameForm.get('tpsJeux').value;
        var synopsis = this.gameForm.get('synopsis').value;
        var titleExtention = this.gameForm.get('titleExtention').value;
        var isExtention = this.gameForm.get('isExtention').value;
        var newGame = new _models_game_model__WEBPACK_IMPORTED_MODULE_4__["Game"]();
        newGame.title = title ? title : this.game.title;
        newGame.categories = categories ? categories : this.game.categories;
        newGame.nbJoueursMin = nbJoueursMin ? nbJoueursMin : this.game.nbJoueursMin;
        newGame.nbJoueursMax = nbJoueursMax ? nbJoueursMax : this.game.nbJoueursMax;
        newGame.synopsis = synopsis ? synopsis : this.game.synopsis;
        newGame.tpsJeux = tpsJeux ? tpsJeux : this.game.tpsJeux;
        newGame.photo = this.photo;
        newGame.isExtention = isExtention;
        newGame.titleExtention = titleExtention;
        this.gameService.deletePhotoInStorage(this.oldPhoto);
        console.log('photo : ' + newGame.photo);
        var id = this.route.snapshot.params['id'];
        this.gameService.editGame(this.game, newGame, id);
        this.location.back();
    };
    EditGameComponent.prototype.thisIsAnExtention = function () {
        this.isExtention = !this.isExtention;
        this.gameForm.get('titleExtention').setValue('');
    };
    EditGameComponent.prototype.onBack = function () {
        if (this.oldPhoto !== this.photo) {
            this.gameService.deletePhotoInStorage(this.photo);
        }
        this.location.back();
    };
    EditGameComponent.prototype.preSelectCategorie = function (cat) {
        if (this.preSelectedCategories.includes(cat)) {
            this.preSelectedCategories.splice(this.preSelectedCategories.indexOf(cat), 1);
        }
        else {
            this.preSelectedCategories.push(cat);
        }
    };
    EditGameComponent.prototype.selectCategories = function () {
        for (var _i = 0, _a = this.preSelectedCategories; _i < _a.length; _i++) {
            var cat = _a[_i];
            var index = this.categories.indexOf(cat);
            this.categories.splice(index, 1);
            this.categories2.push(cat);
        }
        this.categories2.sort();
        this.preSelectedCategories = [];
    };
    EditGameComponent.prototype.preDeSelectCategorie = function (cat) {
        if (this.preDeSelectedCategories.includes(cat)) {
            this.preDeSelectedCategories.splice(this.preDeSelectedCategories.indexOf(cat), 1);
        }
        else {
            this.preDeSelectedCategories.push(cat);
        }
    };
    EditGameComponent.prototype.deSelectCategories = function () {
        for (var _i = 0, _a = this.preDeSelectedCategories; _i < _a.length; _i++) {
            var cat = _a[_i];
            var index = this.categories2.indexOf(cat);
            this.categories2.splice(index, 1);
            this.categories.push(cat);
        }
        this.categories.sort();
        this.preDeSelectedCategories = [];
    };
    EditGameComponent.prototype.enumToArray = function (data) {
        var keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    };
    EditGameComponent.prototype.onUploadFile = function (file) {
        var _this = this;
        this.fileIsUploading = true;
        this.gameService.uploadFile(file).then(function (url) {
            console.log('URL onUploadFile = ' + url);
            _this.fileUrl = url;
            _this.fileIsUploading = false;
            _this.fileUploaded = true;
            _this.photo = url;
        });
    };
    EditGameComponent.prototype.detectFiles = function (event) {
        console.log('event : ' + event.target.files[0]);
        this.onUploadFile(event.target.files[0]);
    };
    EditGameComponent.prototype.addNewCategorieOrNot = function () {
        this.wantNewCategorie = !this.wantNewCategorie;
    };
    EditGameComponent.prototype.onSaveCategorie = function () {
        var newCategorie = this.categorieForm.get('newCategorie').value;
        if (newCategorie && newCategorie !== 'nouvelle catégorie') {
            this.categoriesGamesService.createNewCategorie(newCategorie);
        }
        this.addNewCategorieOrNot();
    };
    EditGameComponent.prototype.onSaveWikiCategorie = function (newCat) {
        if (newCat && newCat !== 'nouvelle catégorie') {
            this.categoriesGamesService.createNewCategorie(newCat);
            this.preSelectedCategories = [];
            this.preDeSelectCategorie(newCat);
            this.selectCategories();
        }
    };
    EditGameComponent.prototype.getImageDropped = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        console.log('test');
        var items = event.dataTransfer.items;
        console.log('items : ' + items);
        var index = 0;
        while (index < items.length) {
            var img;
            var file = items[index];
            if (file.kind == 'string') {
                file.getAsString(function (s) {
                    console.log('string reçu : ' + s);
                    img = _this.getImageFromUrl(s);
                });
            }
            else if (file.kind == 'file' && file.type.match('^image/')) {
                img = file.getAsFile();
                this.onUploadFile(img);
            }
            ++index;
        }
    };
    EditGameComponent.prototype.getImageFromUrl = function (s) {
        var _this = this;
        if (s == 'url') {
            s = this.gameForm.get('urlImage').value;
        }
        var img;
        this._http.get(s, {
            responseType: 'blob', headers: {
                'Content-Type': 'blob'
            }
        }).subscribe(function (data) {
            console.log('data : ' + data.toString());
            var filetab = s.toString().split('.');
            var fileExtention = filetab.pop().split('/').shift();
            var fileName = _this.gameForm.get('title').value + (_this.thisIsAnExtention ? '_' + _this.gameForm.get('titleExtention').value : '') + '.' + fileExtention;
            console.log('fichier : ' + fileName);
            img = _this.blobToFile(data, fileName);
            _this.onUploadFile(img);
        }, function (error) {
            console.log('erreur de récupération d\'url : ' + error.toString());
        });
        return img;
    };
    EditGameComponent.prototype.onFindImage = function () {
        var title = this.gameForm.get('title').value;
        var extention = this.gameForm.get('titleExtention').value;
        var recherche = title;
        if (extention && extention.length) {
            recherche = recherche + '+' + extention;
        }
        var url = this.urlImgStart + recherche;
        window.open(url, "", "width=600,height=400,scrollbars=0,top=100px,right=100px");
    };
    EditGameComponent.prototype.ngOnDestroy = function () {
        this.categoriesGamesSubscription.unsubscribe();
    };
    EditGameComponent.prototype.getSelectedClass = function (cat) {
        if (this.preSelectedCategories.includes(cat)) {
            return this.OPTION_SELECTED;
        }
        else {
            return this.OPTION_NOT_SELECTED;
        }
    };
    EditGameComponent.prototype.getDeSelectedClass = function (cat) {
        if (this.preDeSelectedCategories.includes(cat)) {
            return this.OPTION_SELECTED_CAT2;
        }
        else {
            return this.OPTION_NOT_SELECTED_CAT2;
        }
    };
    EditGameComponent.prototype.validNewCat = function (cat) {
        this.onSaveWikiCategorie(cat);
        this.categories3.splice(this.categories3.indexOf(cat), 1);
    };
    EditGameComponent.prototype.removeCategories3 = function () {
        this.categories3 = [];
    };
    EditGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-game',
            template: __webpack_require__(/*! ./edit-game.component.html */ "./src/app/game-list/edit-game/edit-game.component.html"),
            styles: [__webpack_require__(/*! ./edit-game.component.scss */ "./src/app/game-list/edit-game/edit-game.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesGamesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], EditGameComponent);
    return EditGameComponent;
}());



/***/ }),

/***/ "./src/app/game-list/game-form/game-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/game-list/game-form/game-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"boite\" [ngClass]=\"categories3.length>0?' collapse show': 'collapse'\"></div>\n<div (click)=\"onBack()\" class=\"rounded float-left computer\">\n  <img id=\"retour\" style=\"width: 100px; height: 50px;\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Ffaucon%20millenium_yellow.png?alt=media&token=9a508bc1-27d1-4f4c-81b8-aeedbdf4c5cd\"\n    data-toggle=\"tooltip\" data-placement=\"right\" title=\"Retour\">\n</div>\n<div class=\"row\" style=\"margin-top: 2%;\">\n  <div class=\"col-sm-8 col-sm-offset-2\" style=\"margin: auto;\">\n    <h2>Nouveau Jeu</h2>\n    <form [formGroup]=\"gameForm\" (ngSubmit)=\"onSaveGame()\">\n      <div class=\"form-group\">\n        <label id=\"label\" for=\"title\">Titre</label>\n        <input type=\"text\" id=\"title\" placeholder=\"Titre...\" class=\"form-control\" formControlName=\"title\" (change)=\"collectInfo()\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"isExtention\" id=\"isExtention\" (click)=\"thisIsAnExtention();\">\n          <label id=\"labelExtention\" class=\"form-check-label\" for=\"isExtention\">Extention</label>\n        </div>\n      </div>\n      <div [ngClass]=\"isExtention?'form-group collapse show' : 'collapse'\">\n        <label id=\"label\" for=\"titleExtention\">Titre de l'extention</label>\n        <input type=\"text\" id=\"titleExtention\" formControlName=\"titleExtention\" placeholder=\"Titre de l'extention...\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <h4>Ajouter une photo</h4>\n        <div class=\"computer\" dropzone=\"copy\" id=\"dropzone\" (dragover)=\"false\" (dragend)=\"false\" type=\"file\" (drop)=\"getImageDropped($event)\" (click)=\"onFindImage();\">\n          <p style=\"margin: auto;margin-top: 23px;\" *ngIf=\"!fileUploaded\">Glisser/déposer l'image ici!</p>\n          <p style=\"margin: auto;\" *ngIf=\"!fileUploaded\">Cliquer pour recherche google!</p>\n          <img [src]=\"fileUrl\" *ngIf=\"fileUploaded\">\n        </div>\n        <div class=\"device\" id=\"urlImage\">\n          <img id=\"downloadedImg\" class=\"device\" [src]=\"fileUrl\" *ngIf=\"fileUploaded\">\n          <div class=\"flex-container-img\">\n            <input type=\"text\" id=\"inputImg\" formControlName=\"urlImage\" class=\"form-control device\" placeholder=\"Enter l'URL de l'image ici...\"\n              (change)=\"getImageFromUrl('url')\">\n                <img (click)=\"onFindImage()\" \n                class=\"btn btn-outline-light device\" \n                src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Floupe%20google.png?alt=media&token=49ce6eed-d194-41ae-a746-03b6c2656b35\">\n              \n          </div>\n        </div>\n        <div *ngIf=\"fileIsUploading\" class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n            aria-valuemax=\"100\" style=\"width: 100%\"></div>\n        </div>\n        <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\n        <!--  <button id=\"searchImgButton\" type=\"button\" class=\"btn btn-warning computer\" (click)=\"onFindImage()\">trouver image</button> -->\n      </div>\n      <!--#############################################################################################################################################-->\n      <div class=\"form-group\">\n        <label id=\"labelCategories\" for=\"categories2\">Catégories</label>\n        <span class=\"flex-container-categories\">\n\n          <select class=\"form-control\" multiple>\n            <option [ngClass]=\"getSelectedClass(cat)\" *ngFor=\"let cat of categories\" (click)=\"preSelectCategorie(cat)\">{{cat}} </option>\n            <option style=\"color: black;\" (click)=\"addNewCategorieOrNot();\"> + une catégorie</option>\n          </select>\n          <div class=\"device\">\n              <form [formGroup]=\"categorieForm\" (ngSubmit)=\"onSaveCategorie()\" [ngClass]=\"wantNewCategorie?'collapse show' : 'collapse'\">\n                <div class=\"form-group\">\n                  <label id=\"label\" for=\"newCategorie\">Nouvelle Catégorie</label>\n                  <input id=\"newCategorie\" type=\"text\" class=\"form-Control\" formControlName=\"newCategorie\" style=\"margin-left: 10px;\" placeholder=\"Nouvelle catégorie...\">\n                  <button class=\"btn btn-success\" [disabled]=\"categorieForm.invalid\" type=\"submit\" style=\"margin-left: 10px;\">OK\n                  </button>\n                  <button class=\"btn btn-warning\" type=\"button\" style=\"margin-left: 10px;\" (click)=\"addNewCategorieOrNot()\">X</button>\n                </div>\n              </form>\n            </div>\n          <div id=\"BB8\" style=\"margin: auto;\">\n            <img class=\"computer\" (click)=\"selectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fdroid_run%20(1).gif?alt=media&token=32461aa9-4116-451f-9939-b36ffe0665ab\">\n            <img class=\"computer\" id=\"img2\" (click)=\"deSelectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Ftatooine-r2d2-c3p0.gif?alt=media&token=840972f1-9901-4050-a24c-cee649f05ae1\">\n            <img class=\"device\" (click)=\"selectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fr2d2_fall.gif?alt=media&token=5eb07d6b-06d2-45e4-a3ac-9c1a11087ba2\">\n            <img class=\"device\" id=\"img2\" (click)=\"deSelectCategories()\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fr2d2_flight.gif?alt=media&token=b1a20809-4eaa-46ab-94b3-7f614791bbea\">\n          </div>\n          <select class=\"form-control\" multiple id=\"Catégorie2\">\n            <option [ngClass]=\"getDeSelectedClass(cat)\" *ngFor=\"let cat of categories2\" (click)=\"preDeSelectCategorie(cat)\">{{cat}}</option>\n          </select>\n          <div [ngClass]=\"categories3.length>0?'flex-container-categories-column collapse show': 'collapse'\" style=\"position: absolute;z-index: 150;width: 100%;\">\n            <span class=\"flex-container-categories-column\" style=\"margin: auto;width: 100%\">\n              <h5 style=\"margin: auto;\" for=\"categories3\">cliquez sur les catégories à valider</h5>\n              <select multiple style=\"width: 50%;background-color: rgb(0, 0, 0);margin: auto;margin-top: 3%;\" id=\"Catégorie3\">\n                <option *ngFor=\"let cat of categories3\" (click)=\"validNewCat(cat)\" style=\"color:  yellow;text-align: center;text-size-adjust: inherit\">{{cat}}</option>\n              </select>\n\n              <button class=\"btn btn-light\" type=\"button\" style=\"margin: auto;margin-top: 2%;margin-right: 47%;\" (click)=\"removeCategories3()\">FERMER\n              </button>\n            </span>\n          </div>\n        </span>\n      </div>\n      <div class=\"computer\">\n      <form [formGroup]=\"categorieForm\" (ngSubmit)=\"onSaveCategorie()\" [ngClass]=\"wantNewCategorie?'collapse show' : 'collapse'\">\n        <div class=\"form-group\">\n          <label id=\"label\" for=\"newCategorie\">Nouvelle Catégorie</label>\n          <input id=\"newCategorie\" type=\"text\" class=\"form-Control\" formControlName=\"newCategorie\" style=\"margin-left: 10px;\" placeholder=\"Nouvelle catégorie...\">\n          <button class=\"btn btn-success\" [disabled]=\"categorieForm.invalid\" type=\"submit\" style=\"margin-left: 10px;\">OK\n          </button>\n          <button class=\"btn btn-warning\" type=\"button\" style=\"margin-left: 10px;\" (click)=\"addNewCategorieOrNot()\">X</button>\n        </div>\n      </form>\n    </div>\n      <!--#############################################################################################################################################-->\n      <div class=\"form-group\">\n        <label id=\"label\" for=\"nbJoueursMin\">Nombre de Joueur minimum</label>\n        <input type=\"text\" id=\"nbJoueursMin\" class=\"form-control\" formControlName=\"nbJoueursMin\" placeholder=\"Nombre de joueurs minimum...\">\n      </div>\n      <div class=\"form-group\">\n        <label id=\"label\" for=\"nbJoueursMax\">Nombre de Joueur Maximum</label>\n        <input type=\"text\" id=\"nbJoueursMax\" class=\"form-control\" formControlName=\"nbJoueursMax\" placeholder=\"Nombre de joueurs maximum...\">\n      </div>\n      <div class=\"form-group\">\n        <label id=\"label\" for=\"tpsJeux\">Temps de jeux (min)</label>\n        <input type=\"text\" id=\"tpsJeux\" class=\"form-control\" formControlName=\"tpsJeux\" placeholder=\"Temps de jeux (min)...\">\n      </div>\n      <div class=\"form-group\">\n        <label id=\"label\" for=\"synopsis\">synopsis</label>\n        <textarea id=\"synopsis\" style=\"background-color: rgba(255, 255, 255, 0.3);color: black;\" class=\"form-control\" formControlName=\"synopsis\"\n          placeholder=\"Synopsis...\">\n          </textarea>\n      </div>\n\n      <button class=\"btn btn-success\" [disabled]=\"gameForm.invalid || fileIsUploading\" type=\"submit\">Enregistrer\n      </button>\n\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game-list/game-form/game-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/game-list/game-form/game-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device {\n  display: none; }\n\n.computer {\n  display: inline-block; }\n\n.flex-container-categories {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.flex-container-categories-column {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap; }\n\nselect {\n  width: 40%;\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#BB8 {\n  width: 20%; }\n\n#BB8 img {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  width: 100%; }\n\n#img2 {\n  margin-top: 10px; }\n\n.option-selected {\n  color: black;\n  background-color: tomato; }\n\n.option-selected-cat2 {\n  color: #0aee0a;\n  text-shadow: black 0.1em 0.1em 0.2em;\n  background-color: tomato; }\n\n.option {\n  color: black; }\n\n.option-cat2 {\n  color: #0aee0a;\n  text-shadow: black 0.1em 0.1em 0.2em; }\n\n@-webkit-keyframes masuperanimation {\n  /* Safari, Opera, Chrome */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n\n@keyframes masuperanimation {\n  /* Tous les autres navigateurs */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n\n#retour:hover {\n  -webkit-animation: masuperanimation 1s;\n  /* Safari, Opera, Chrome */\n  animation: masuperanimation 1s;\n  /* Tous les autres navigateurs */ }\n\ninput {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n::placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n.boite {\n  background: rgba(0, 0, 0, 0.9);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  bottom: opx;\n  left: 0px;\n  right: 0px;\n  z-index: 100; }\n\n#dropzone {\n  color: #777777;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100px;\n  border: 5px dotted #ccc; }\n\n#dropzone img {\n  height: 90px; }\n\n#dropzone:hover {\n  border-color: #121416;\n  cursor: pointer; }\n\n@media screen and (max-width: 411px), screen and (max-height: 411px) {\n  select {\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.3); }\n  #label {\n    display: none; }\n  #urlImage {\n    width: 100%; }\n  #inputImg {\n    width: 88%; }\n  .flex-container-img img {\n    width: 12%;\n    /* height:38px; */ }\n  #downloadedImg {\n    height: 90px; }\n  .device {\n    display: inline-block; }\n  .computer {\n    display: none; }\n  .flex-container-categories {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n  .flex-container-categories-column {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap; }\n  .flex-container-img {\n    width: 100%;\n    height: 38px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n  #BB8 {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n  #BB8 img {\n    margin: auto;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 130px;\n    height: 60px; }\n  #img2 {\n    margin-left: 10px; }\n  .option-selected {\n    text-align: center;\n    color: black;\n    background-color: tomato; }\n  .option-selected-cat2 {\n    text-align: center;\n    color: #0aee0a;\n    text-shadow: black 0.1em 0.1em 0.2em;\n    background-color: tomato; }\n  .option {\n    text-align: center;\n    color: black; }\n  .option-cat2 {\n    text-align: center;\n    color: #0aee0a;\n    text-shadow: black 0.1em 0.1em 0.2em; }\n  input {\n    background-color: rgba(255, 255, 255, 0.3); }\n  ::-webkit-input-placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  :-ms-input-placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  ::-ms-input-placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  ::placeholder {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.6); }\n  .boite {\n    background: rgba(0, 0, 0, 0.9);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    bottom: opx;\n    left: 0px;\n    right: 0px;\n    z-index: 100; }\n  #dropzone {\n    display: none;\n    color: #777777;\n    background-color: rgba(0, 0, 0, 0.3);\n    height: 100px;\n    border: 5px dotted #ccc; }\n  #dropzone:hover {\n    border-color: #121416;\n    cursor: pointer; } }\n"

/***/ }),

/***/ "./src/app/game-list/game-form/game-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/game-list/game-form/game-form.component.ts ***!
  \************************************************************/
/*! exports provided: GameFormComponent, EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormComponent", function() { return GameFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_game_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/game.model */ "./src/app/models/game.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/categoriesGames.service */ "./src/app/services/categoriesGames.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_dataCollector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/dataCollector.service */ "./src/app/services/dataCollector.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GameFormComponent = /** @class */ (function () {
    function GameFormComponent(_http, formBuilder, gameService, router, location, categoriesGamesService, dataCollectorService) {
        this._http = _http;
        this.formBuilder = formBuilder;
        this.gameService = gameService;
        this.router = router;
        this.location = location;
        this.categoriesGamesService = categoriesGamesService;
        this.dataCollectorService = dataCollectorService;
        this.categories = [];
        this.categories2 = [];
        this.categories3 = [];
        this.preSelectedCategories = [];
        this.preDeSelectedCategories = [];
        this.categoriesGamesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"];
        this.urlImgStart = 'http://images.google.com/search?tbm=isch&q=';
        this.fileIsUploading = false;
        this.fileUploaded = false;
        this.wantNewCategorie = false;
        this.isExtention = false;
        this.dataSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"];
        this.OPTION_SELECTED = "option-selected";
        this.OPTION_NOT_SELECTED = "option";
        this.OPTION_SELECTED_CAT2 = "option-selected-cat2";
        this.OPTION_NOT_SELECTED_CAT2 = "option-cat2";
        this.blobToFile = function (theBlob, fileName) {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return b;
        };
    }
    GameFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesGamesSubscription = this.categoriesGamesService.categoriesGamesSubject.subscribe(function (categories) {
            _this.categories = categories;
        });
        this.categoriesGamesService.emitCategoriesGames();
        this.initForm();
    };
    GameFormComponent.prototype.initForm = function () {
        this.gameForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            urlImage: [''],
            isExtention: [''],
            titleExtention: [''],
            categories2: [''],
            nbJoueursMin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]],
            nbJoueursMax: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]],
            tpsJeux: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]],
            synopsis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.categorieForm = this.formBuilder.group({
            newCategorie: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((?:\\w|[\\-_ ](?![\\-_ ])|[\\u0027\\u00C0\\u00C1\\u00C2\\u00C3\\u00C4\\u00C5\\u00C6\\u00C7\\u00C8\\u00C9\\u00CA\\u00CB\\u00CC\\u00CD\\u00CE\\u00CF\\u00D0\\u00D1\\u00D2\\u00D3\\u00D4\\u00D5\\u00D6\\u00D8\\u00D9\\u00DA\\u00DB\\u00DC\\u00DD\\u00DF\\u00E0\\u00E1\\u00E2\\u00E3\\u00E4\\u00E5\\u00E6\\u00E7\\u00E8\\u00E9\\u00EA\\u00EB\\u00EC\\u00ED\\u00EE\\u00EF\\u00F0\\u00F1\\u00F2\\u00F3\\u00F4\\u00F5\\u00F6\\u00F9\\u00FA\\u00FB\\u00FC\\u00FD\\u00FF\\u0153])+)$")]]
        });
    };
    GameFormComponent.prototype.onSaveGame = function () {
        var title = this.gameForm.get('title').value;
        var titleExtention = this.gameForm.get('titleExtention').value;
        var isExtention = this.gameForm.get('isExtention').value;
        var nbJoueursMin = this.gameForm.get('nbJoueursMin').value;
        var nbJoueursMax = this.gameForm.get('nbJoueursMax').value;
        var tpsJeux = this.gameForm.get('tpsJeux').value;
        var synopsis = this.gameForm.get('synopsis').value;
        var newGame = new _models_game_model__WEBPACK_IMPORTED_MODULE_4__["Game"]();
        newGame.title = title;
        newGame.isExtention = isExtention;
        newGame.titleExtention = titleExtention;
        newGame.categories = this.categories2;
        newGame.nbJoueursMin = nbJoueursMin;
        newGame.nbJoueursMax = nbJoueursMax;
        newGame.synopsis = synopsis;
        newGame.tpsJeux = tpsJeux;
        if (this.fileUrl && this.fileUrl !== '') {
            newGame.photo = this.fileUrl;
        }
        this.gameService.createNewGame(newGame);
        this.location.back();
    };
    GameFormComponent.prototype.addNewCategorieOrNot = function () {
        this.wantNewCategorie = !this.wantNewCategorie;
    };
    GameFormComponent.prototype.onSaveCategorie = function () {
        var newCategorie = this.categorieForm.get('newCategorie').value;
        if (newCategorie && newCategorie !== 'nouvelle catégorie') {
            this.categoriesGamesService.createNewCategorie(newCategorie);
        }
        this.addNewCategorieOrNot();
    };
    GameFormComponent.prototype.onSaveWikiCategorie = function (newCat) {
        if (newCat && newCat !== 'nouvelle catégorie') {
            this.categoriesGamesService.createNewCategorie(newCat);
            this.preSelectedCategories = [];
            this.preDeSelectCategorie(newCat);
            this.selectCategories();
        }
    };
    GameFormComponent.prototype.thisIsAnExtention = function () {
        this.isExtention = !this.isExtention;
        this.gameForm.get('titleExtention').setValue('');
    };
    GameFormComponent.prototype.onBack = function () {
        this.location.back();
    };
    GameFormComponent.prototype.onUploadFile = function (file) {
        var _this = this;
        this.fileIsUploading = true;
        this.gameService.uploadFile(file).then(function (url) {
            console.log('URL onUploadFile = ' + url);
            _this.fileUrl = url;
            _this.fileIsUploading = false;
            _this.fileUploaded = true;
        });
    };
    GameFormComponent.prototype.detectFiles = function (event) {
        console.log('event : ' + event.target.files[0]);
        this.onUploadFile(event.target.files[0]);
    };
    GameFormComponent.prototype.getImageDropped = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        console.log('test');
        var items = event.dataTransfer.items;
        console.log('items : ' + items);
        var index = 0;
        while (index < items.length) {
            var img;
            var file = items[index];
            if (file.kind == 'string') {
                file.getAsString(function (s) {
                    console.log('string reçu : ' + s);
                    img = _this.getImageFromUrl(s);
                });
            }
            else if (file.kind == 'file' && file.type.match('^image/')) {
                img = file.getAsFile();
                this.onUploadFile(img);
            }
            ++index;
        }
    };
    GameFormComponent.prototype.getImageFromUrl = function (s) {
        var _this = this;
        if (s == 'url') {
            s = this.gameForm.get('urlImage').value;
        }
        var img;
        this._http.get(s, {
            responseType: 'blob', headers: {
                'Content-Type': 'blob'
            }
        }).subscribe(function (data) {
            console.log('data : ' + data.toString());
            var filetab = s.toString().split('.');
            var fileExtention = filetab.pop().split('/').shift();
            var fileName = _this.gameForm.get('title').value + (_this.thisIsAnExtention ? '_' + _this.gameForm.get('titleExtention').value : '') + '.' + fileExtention;
            console.log('fichier : ' + fileName);
            img = _this.blobToFile(data, fileName);
            _this.onUploadFile(img);
        }, function (error) {
            console.log('erreur de récupération d\'url : ' + error.toString());
        });
        return img;
    };
    GameFormComponent.prototype.preSelectCategorie = function (cat) {
        if (this.preSelectedCategories.includes(cat)) {
            this.preSelectedCategories.splice(this.preSelectedCategories.indexOf(cat), 1);
        }
        else {
            this.preSelectedCategories.push(cat);
        }
    };
    GameFormComponent.prototype.selectCategories = function () {
        for (var _i = 0, _a = this.preSelectedCategories; _i < _a.length; _i++) {
            var cat = _a[_i];
            var index = this.categories.indexOf(cat);
            this.categories.splice(index, 1);
            if (!this.categories2.includes(cat)) {
                this.categories2.push(cat);
            }
        }
        this.categories2.sort();
        this.preSelectedCategories = [];
    };
    GameFormComponent.prototype.preDeSelectCategorie = function (cat) {
        if (this.preDeSelectedCategories.includes(cat)) {
            this.preDeSelectedCategories.splice(this.preDeSelectedCategories.indexOf(cat), 1);
        }
        else {
            this.preDeSelectedCategories.push(cat);
        }
    };
    GameFormComponent.prototype.deSelectCategories = function () {
        for (var _i = 0, _a = this.preDeSelectedCategories; _i < _a.length; _i++) {
            var cat = _a[_i];
            var index = this.categories2.indexOf(cat);
            this.categories2.splice(index, 1);
            this.categories.push(cat);
        }
        this.categories.sort();
        this.preDeSelectedCategories = [];
    };
    GameFormComponent.prototype.enumToArray = function (data) {
        var keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    };
    GameFormComponent.prototype.ngOnDestroy = function () {
        this.categoriesGamesSubscription.unsubscribe();
        this.dataSubscription.unsubscribe();
    };
    GameFormComponent.prototype.collectInfo = function () {
        var _this = this;
        var title = this.gameForm.get('title').value;
        this.dataCollectorService.initCollect(title);
        console.log(title);
        this.dataSubscription = this.dataCollectorService.dataSubject.subscribe(function (data) {
            _this.collector = _this.dataCollectorService.extractInfo(data);
            _this.gameForm.get('nbJoueursMin').setValue(_this.collector.joueursMin);
            _this.gameForm.get('nbJoueursMax').setValue(_this.collector.joueursMax);
            _this.gameForm.get('tpsJeux').setValue(_this.collector.temps);
            _this.gameForm.get('synopsis').setValue(_this.collector.themes.join(', '));
            for (var _i = 0, _a = _this.collector.mecanismes; _i < _a.length; _i++) {
                var cat = _a[_i];
                if (cat != null && cat != '') {
                    var catname = cat.substr(0, 1).toUpperCase() + cat.substr(1, cat.length).toLowerCase();
                    if (!_this.categories3.includes(catname)) {
                        _this.categories3.push(cat.substr(0, 1).toUpperCase() + cat.substr(1, cat.length).toLowerCase());
                    }
                }
            }
        });
    };
    GameFormComponent.prototype.onFindImage = function () {
        var title = this.gameForm.get('title').value;
        var extention = this.gameForm.get('titleExtention').value;
        var recherche = title;
        if (extention && extention.length) {
            recherche = recherche + '+' + extention;
        }
        var url = this.urlImgStart + recherche;
        window.open(url, "", "width=600,height=400,scrollbars=0,top=100px,right=100px");
    };
    GameFormComponent.prototype.validNewCat = function (cat) {
        this.onSaveWikiCategorie(cat);
        this.categories3.splice(this.categories3.indexOf(cat), 1);
    };
    GameFormComponent.prototype.removeCategories3 = function () {
        this.categories3 = [];
    };
    GameFormComponent.prototype.getSelectedClass = function (cat) {
        if (this.preSelectedCategories.includes(cat)) {
            return this.OPTION_SELECTED;
        }
        else {
            return this.OPTION_NOT_SELECTED;
        }
    };
    GameFormComponent.prototype.getDeSelectedClass = function (cat) {
        if (this.preDeSelectedCategories.includes(cat)) {
            return this.OPTION_SELECTED_CAT2;
        }
        else {
            return this.OPTION_NOT_SELECTED_CAT2;
        }
    };
    GameFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-form',
            template: __webpack_require__(/*! ./game-form.component.html */ "./src/app/game-list/game-form/game-form.component.html"),
            styles: [__webpack_require__(/*! ./game-form.component.scss */ "./src/app/game-list/game-form/game-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesGamesService"],
            _services_dataCollector_service__WEBPACK_IMPORTED_MODULE_8__["DataCollectorService"]])
    ], GameFormComponent);
    return GameFormComponent;
}());

var EnumToArrayPipe = /** @class */ (function () {
    function EnumToArrayPipe() {
    }
    EnumToArrayPipe.prototype.transform = function (data) {
        var keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    };
    EnumToArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'enumToArray'
        })
    ], EnumToArrayPipe);
    return EnumToArrayPipe;
}());



/***/ }),

/***/ "./src/app/game-list/game-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/game-list/game-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hautdepage\">\n</div>\n<a class=\"computer\" href=\"games#hautdepage\">\n  <div id=\"onTop\">\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fx-wing_yellow.png?alt=media&token=05c01a40-00cb-4033-a67f-465d34634c71\"\n      id=\"goOnTop\">\n  </div>\n</a>\n<div class=\"row\">\n  <button class=\"btn btn-primary\" style=\"margin-top: 2%; margin-bottom: 5px;\" (click)=\"onNewGame()\">Nouveau Jeu</button>\n  <div style=\"width: 100%;\">\n    <app-search></app-search>\n  </div>\n  \n  <h2 class=\"flex-container\"><div class=\"pageTitle\">Vos Jeux </div><div class=\"nbGames\" *ngIf=\"games\">({{games.length}})</div></h2>\n\n  <div class=\"list-group flex-container\">\n\n\n\n    <!--##########################################################################################################################################-->\n    <div [ngClass]=\"getClassCard(game)\"\n      *ngFor=\"let game of games; let i = index\">\n      <div style=\"z-index: 200;\" (click)=\"onViewGame(game)\">\n        <div class=\"flex-superpose-container computer\" style=\"height: 286px;border-radius: 20px;\">\n          <div  style=\"position: relative;margin: auto;\">\n            <img  *ngIf=\"game.photo\" [src]=\"game.photo\" style=\"max-width: 270px;max-height: 270px;border-radius: 20px;\"/>\n            <img  [ngClass]=\"game.isExtention?' collapse show superpose' : 'collapse'\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fextentions%20banni%C3%A8re%20VF.png?alt=media&token=058d4679-0f2f-43bd-8916-0c5f7ecfae6d\"/>\n          </div>\n        </div>\n        <h5 class=\"gameTitle\">\n          {{ game.title }}\n        </h5>\n        <h6 [ngClass]=\"game.isExtention?' collapse show' : 'collapse'\" id=\"titleExtention\">\n          {{ game.titleExtention }}\n        </h6>\n\n\n        <div id=\"infoGame\">\n\n          <img style=\"max-width: 20%;\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2FStormtrooper%20-%2001%20(1).png?alt=media&token=852a402b-29b8-4a6c-9be6-4c955b938b66\">\n\n\n          <h6 style=\"width: 20%;text-align: center;margin-right: 20%;margin-top: 5%\"> : {{game.nbJoueursMin}} à {{game.nbJoueursMax}}</h6>\n\n\n\n          <img style=\"max-width: 20%;margin-top: 2%\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fclock_icon-icons.com_64800.png?alt=media&token=3b0cbcd4-7f0b-4f02-9aca-fed7e7921516\">\n\n          <h6 style=\"width: 20%;margin-top: 4%;\"> : {{game.tpsJeux}} min</h6>\n\n        </div>\n\n\n        <!-- <p class=\"list-group-item-text\">{{ game.categorie }}</p>-->\n        <img  class=\"photoSmall device\" *ngIf=\"game.photo\" [src]=\"game.photo\">\n      </div>\n\n      <div style=\"position: absolute; bottom: 0px;height: 70px;width: 100%;\">\n        <img class=\"rounded button-delete\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fcroix%20laser.png?alt=media&token=0cfd57ce-3b00-4a52-a8c5-f0d5256114e5\"\n       (click)=\"onDeleteGame(game)\">\n\n        <img  class=\"rounded  button-edit\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fedit.png?alt=media&token=4f4dae2a-b68a-4046-aa40-cc28a2dd5206\"\n          (click)=\"onEditGame(game)\">\n      </div>\n    </div>\n    <!--##########################################################################################################################################-->\n\n    <!--<div class=\"list-group-item\" id=\"oneGameContainer\" *ngFor=\"let game of games; let i = index\">\n      <div (click)=\"onViewGame(i)\" class=\"rounded float-left\" style=\"width: 90%\">\n        \n        <h5 style=\"width: 80%;height: 48px; overflow:hidden; text-overflow: ellipsis;white-space: nowrap\">\n          {{ game.title }}\n        </h5>\n        \n        <div class=\"rounded float-left\" id=\"infoGame\">\n        <table >\n          <tr >\n            <td>\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2FStormtrooper%20-%2001%20(1).png?alt=media&token=852a402b-29b8-4a6c-9be6-4c955b938b66\">\n            </td>\n            <td >\n              <h6 style=\"text-align: left;\">  :   {{game.nbJoueursMin}} à {{game.nbJoueursMax}}</h6>\n            </td>\n          </tr>\n          <tr >\n            <td >\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fclock_icon-icons.com_64800.png?alt=media&token=3b0cbcd4-7f0b-4f02-9aca-fed7e7921516\">\n            </td>\n            <td >\n              <h6 style=\"text-align: left;\">  :   {{game.tpsJeux}} min</h6>\n            </td>\n          </tr>\n        </table>\n      </div>\n        <div id=\"pictureOfList\" class=\"rounded float-right\">\n          <img *ngIf=\"game.photo\" [src]=\"game.photo\" alt=\"Responsive image\" />\n        </div>\n        \n      </div>\n      <div class=\"rounded float-right\" style=\"width: 10%;cursor: pointer;\">\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fcroix%20laser.png?alt=media&token=0cfd57ce-3b00-4a52-a8c5-f0d5256114e5\"\n          id=\"icones\" (click)=\"onDeleteGame(game)\">\n      </div>\n      <div id=\"pictureOfList\" class=\"rounded float-right\" >\n      <img src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fedit.png?alt=media&token=4f4dae2a-b68a-4046-aa40-cc28a2dd5206\"\n       style=\"cursor: pointer;\" (click)=\"onEditGame(i)\">\n      </div>\n    </div>-->\n  </div>\n  <button class=\"btn btn-primary\" style=\"margin-top: 2%;\" (click)=\"onNewGame()\">Nouveau Jeux</button>\n\n\n</div>"

/***/ }),

/***/ "./src/app/game-list/game-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/game-list/game-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageTitle {\n  margin-left: 43%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n.nbGames {\n  margin-left: 6px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\nimg.superpose {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  height: 150px; }\n\n#pictureOfList img {\n  width: 100%;\n  height: auto;\n  margin-right: 5%; }\n\n#pictureOfList {\n  width: 30%;\n  max-width: 200px;\n  margin-top: 15%; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto; }\n\n#infoGame {\n  width: 286px;\n  margin-top: 10%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.gameTitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 2%; }\n\n#titleExtention {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 2%; }\n\n.flex-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: auto; }\n\n.flex-superpose-container {\n  display: flex;\n  align-items: center; }\n\n.oneGameContainer {\n  max-width: 270px;\n  height: 500px;\n  border-radius: 20px;\n  margin-top: 1%;\n  background-color: rgba(255, 255, 255, 0.3);\n  /* max-width: 345px;  */\n  min-width: 225px;\n  margin: auto; }\n\n.oneGameContainerExtended {\n  max-width: 270px;\n  height: 500px;\n  border-radius: 20px;\n  margin-top: 1%;\n  background-color: rgba(255, 255, 255, 0.3);\n  /* max-width: 345px;  */\n  min-width: 225px;\n  margin: auto; }\n\n#onTop {\n  position: fixed;\n  z-index: 100;\n  right: 10px;\n  top: 100px;\n  width: 100px;\n  height: 100px; }\n\n#goOnTop {\n  width: 100%;\n  height: 100%; }\n\n@-webkit-keyframes xWingOnTop {\n  /* Safari, Opera, Chrome */\n  0% {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  100% {\n    -webkit-transform: translatey(-300px);\n            transform: translatey(-300px); } }\n\n@keyframes xWingOnTop {\n  /* Tous les autres navigateurs */\n  0% {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  100% {\n    -webkit-transform: translatey(-300px);\n            transform: translatey(-300px); } }\n\n#goOnTop:hover {\n  -webkit-animation: xWingOnTop 1s;\n  /* Safari, Opera, Chrome */\n  animation: xWingOnTop 1s;\n  /* Tous les autres navigateurs */ }\n\n.device {\n  display: none; }\n\n.computer {\n  display: inline-block; }\n\n.button-edit {\n  position: absolute;\n  bottom: 0px;\n  width: 30%;\n  cursor: pointer;\n  left: 2%; }\n\n.button-delete {\n  position: absolute;\n  bottom: 0px;\n  width: 50px;\n  cursor: pointer;\n  right: 2%; }\n\n@media screen and (max-width: 411px), screen and (max-height: 411px) {\n  .device {\n    display: inline-block; }\n  .computer {\n    display: none; }\n  .flex-container {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-self: center; }\n  .pageTitle {\n    margin-left: 30%; }\n  .oneGameContainer {\n    width: 100%;\n    max-height: 110px;\n    border-radius: 20px;\n    margin-top: 1%;\n    background-color: rgba(255, 255, 255, 0.3);\n    margin: auto; }\n  .oneGameContainerExtended {\n    width: 100%;\n    max-height: 125px;\n    border-radius: 20px;\n    margin-top: 1%;\n    background-color: rgba(255, 255, 255, 0.3);\n    margin: auto; }\n  #infoGame {\n    display: none; }\n  .gameTitle {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-top: 2%;\n    margin-bottom: 0px;\n    text-align: left; }\n  #titleExtention {\n    margin-top: -5px; }\n  .photoSmall {\n    width: 70px;\n    height: 70px; }\n  .button-edit {\n    position: absolute;\n    top: 0px;\n    width: 20%;\n    right: 0px;\n    left: auto;\n    z-index: 201; }\n  .button-delete {\n    position: absolute;\n    bottom: 0px;\n    width: 30px;\n    right: 4%;\n    z-index: 201;\n    /* float: right; */\n    /*  right: 5px; */ } }\n"

/***/ }),

/***/ "./src/app/game-list/game-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-list/game-list.component.ts ***!
  \**************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_filterGames_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/filterGames.service */ "./src/app/services/filterGames.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameListComponent = /** @class */ (function () {
    function GameListComponent(gameService, router, filterGamesService) {
        this.gameService = gameService;
        this.router = router;
        this.filterGamesService = filterGamesService;
    }
    GameListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit gameListComponent');
        this.filterGamesService.getFilter();
        this.filterGamesSubscription = this.filterGamesService.filterGamesSubject.subscribe(function (filter) {
            _this.filterGames = filter;
            console.log('filter1 : ' + _this.filterGames);
            _this.games = _this.gameService.searchGame(_this.filterGames);
        }, function (error) {
            console.log(error);
        });
        /*console.log('filter : ' + this.filterGames);
        this.gamesSubscription = this.gameService.gamesSubject.subscribe(
          (games: Game[])=>{
            this.games = games;
          }
        );*/
        this.gameService.emitGames();
        console.log('games : ' + this.games);
    };
    GameListComponent.prototype.onNewGame = function () {
        this.router.navigate(['/games', 'new']);
    };
    GameListComponent.prototype.onDeleteGame = function (game) {
        if (confirm('Voulez-vous réellement supprimer ce jeux de votre ludothèque ?')) {
            this.gameService.removeGame(game);
        }
        else {
            return null;
        }
    };
    GameListComponent.prototype.onViewGame = function (game) {
        var id = this.gameService.games.indexOf(game);
        this.router.navigate(['/games', 'view', id]);
    };
    GameListComponent.prototype.onEditGame = function (game) {
        var id = this.gameService.games.indexOf(game);
        this.router.navigate(['/games', 'edit', id]);
    };
    GameListComponent.prototype.getClassCard = function (game) {
        if (game.isExtention) {
            return "card oneGameContainerExtended";
        }
        else {
            return "card oneGameContainer";
        }
    };
    GameListComponent.prototype.ngOnDestroy = function () {
        this.filterGamesSubscription.unsubscribe();
    };
    GameListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-list',
            template: __webpack_require__(/*! ./game-list.component.html */ "./src/app/game-list/game-list.component.html"),
            styles: [__webpack_require__(/*! ./game-list.component.scss */ "./src/app/game-list/game-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_filterGames_service__WEBPACK_IMPORTED_MODULE_3__["FilterGamesService"]])
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "./src/app/game-list/search/search.component.html":
/*!********************************************************!*\
  !*** ./src/app/game-list/search/search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"boutonFilter\" class=\"btn btn-info rounded float-left\" (click)=\"onFilterWindow()\">\n  Filtre de recherche\n</button>\n\n<div id=\"filter\" [ngClass]=\"filterOn?'collapse show' : 'collapse'\">\n  <div class=\"card-body\" style=\"margin: auto;\">\n    <form [formGroup]=\"gameForm\" (ngSubmit)=\"onSearchGame()\" id=\"flexContainer\">\n      <div id=\"flexBody\">\n        <div class=\"form-group\" id=\"champFilter\">\n          <label class=\"computer\" for=\"title\">Titre</label>\n          <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\" placeholder=\"Titre...\">\n        </div>\n        <div class=\"form-group\" id=\"champFilter\">\n          <label class=\"computer\" for=\"nbJoueurs\">Nombre de Joueur</label>\n          <input type=\"text\" id=\"nbJoueurs\" class=\"form-control\" formControlName=\"nbJoueurs\" placeholder=\"Nombre de Joueur...\">\n        </div>\n        <div class=\"form-group\" id=\"champFilter\">\n          <label class=\"computer\" for=\"tpsJeuxMin\">Temps de jeux Minimum</label>\n          <input type=\"text\" id=\"tpsJeuxMin\" class=\"form-control\" formControlName=\"tpsJeuxMin\" placeholder=\"Temps de jeux Minimum...\">\n        </div>\n        <div class=\"form-group\" id=\"champFilter\">\n          <label class=\"computer\" for=\"tpsJeuxMax\">Temps de jeux Maximum</label>\n          <input type=\"text\" id=\"tpsJeuxMax\" class=\"form-control\" formControlName=\"tpsJeuxMax\" placeholder=\"Temps de jeux Maximum...\">\n        </div>\n        <div class=\"form-group\" id=\"champFilter\">\n          <label class=\"computer\" for=\"titleExtention\">Titre Extention</label>\n          <input type=\"text\" id=\"titleExtention\" class=\"form-control\" formControlName=\"titleExtention\" placeholder=\"Titre Extention...\">\n        </div>\n        <div class=\"form-group allScreen\">\n          <label for=\"categories2\">Catégories</label>\n          <div class=\"categories computer\">\n            <button *ngFor=\"let cat of categories\" [ngClass]=\"(isCatSelected(cat))?'btn btn-success':'btn btn-dark'\" style=\"margin-left: 1%;margin-top: 1%;width: 122px;\"\n              type=\"button\" id=\"categories2\" (click)=\"selectCategorie(cat)\">{{ cat }}</button>\n          </div>\n          <select multiple class=\"device\" id=\"categories2\">\n            <option *ngFor=\"let cat of categories\" [ngClass]=\"(isCatSelected(cat))?'option-selected':'option'\" (click)=\"selectCategorie(cat)\">{{ cat }}</option>\n          </select>\n      </div>\n\n<div class=\"rounded boutons\">\n  <button class=\"btn btn-warning\" id=\"btn\" type=\"button\" (click)=\"onReinitSearch()\">Réinitialiser la recherche\n  </button>\n            <button class=\"btn btn-success\" type=\"submit\" id=\"btn\">Filter\n            </button>\n      </div>\n      </div>\n\n\n      \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game-list/search/search.component.scss":
/*!********************************************************!*\
  !*** ./src/app/game-list/search/search.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device {\n  display: none; }\n\n.computer {\n  display: inline-block; }\n\n#filter {\n  margin-top: 3%;\n  margin: auto; }\n\n#flexContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  margin: auto; }\n\n#flexBody {\n  width: 80%;\n  display: flex;\n  flex-direction: unset;\n  flex-wrap: wrap;\n  margin: auto; }\n\n#boutonFilter {\n  margin-top: 1%; }\n\n#champFilter {\n  width: 20%;\n  min-width: 175.3px;\n  margin-right: 2%; }\n\n.boutons {\n  width: 100%;\n  float: right; }\n\n.categories {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  max-width: 80%;\n  align-self: flex-start;\n  margin: auto; }\n\n#btn {\n  max-height: 38px;\n  margin-top: 5%;\n  margin-left: 5%;\n  float: right; }\n\ninput {\n  background-color: rgba(255, 255, 255, 0.3);\n  color: black; }\n\n.allScreen {\n  width: 100%; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n::placeholder {\n  color: rgba(0, 0, 0, 0.6); }\n\n@media screen and (max-width: 411px), screen and (max-height: 411px) {\n  .device {\n    display: inline-block; }\n  .computer {\n    display: none; }\n  #champFilter {\n    width: 100%;\n    min-width: 175.3px; }\n  select {\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.3); }\n  .option-selected {\n    text-align: center;\n    color: black;\n    background-color: tomato; }\n  .option {\n    text-align: center;\n    color: black; }\n  #flexBody {\n    width: 100%;\n    display: flex;\n    flex-direction: unset;\n    flex-wrap: wrap;\n    margin: auto; }\n  #btn {\n    max-height: 38px;\n    margin-left: 5%; }\n  ::-webkit-input-placeholder {\n    text-align: center; }\n  :-ms-input-placeholder {\n    text-align: center; }\n  ::-ms-input-placeholder {\n    text-align: center; }\n  ::placeholder {\n    text-align: center; }\n  #boutonFilter {\n    margin-bottom: 15px; } }\n"

/***/ }),

/***/ "./src/app/game-list/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-list/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-list.component */ "./src/app/game-list/game-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _models_filtreGame_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/filtreGame.model */ "./src/app/models/filtreGame.model.ts");
/* harmony import */ var _services_filterGames_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/filterGames.service */ "./src/app/services/filterGames.service.ts");
/* harmony import */ var _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/categoriesGames.service */ "./src/app/services/categoriesGames.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(formBuilder, gameService, gameListComponent, filterGamesService, categoriesgamesService) {
        this.formBuilder = formBuilder;
        this.gameService = gameService;
        this.gameListComponent = gameListComponent;
        this.filterGamesService = filterGamesService;
        this.categoriesgamesService = categoriesgamesService;
        this.filterOn = false;
        this.categories = [];
        this.categories2 = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesSubscription = this.categoriesgamesService.categoriesGamesSubject.subscribe(function (categories) {
            _this.categories = categories;
        });
        this.filterGamesSubscription = this.filterGamesService.filterGamesSubject.subscribe(function (filterGames) {
            _this.filterGames = filterGames;
            _this.filterOn = _this.filterGames ? true : false;
            if (_this.filterOn) {
                _this.categories2 = filterGames.categories ? filterGames.categories : [];
                _this.gameForm.get('title').setValue(filterGames.title);
                _this.gameForm.get('titleExtention').setValue(filterGames.titleExtention);
                _this.gameForm.get('nbJoueurs').setValue(filterGames.nbJoueurs);
                _this.gameForm.get('tpsJeuxMin').setValue(filterGames.tpsJeuxMin);
                _this.gameForm.get('tpsJeuxMax').setValue(filterGames.tpsJeuxMax);
            }
        }, function (error) {
            console.log(error);
        });
        this.initForm();
        console.log('this.categories oninit = ' + this.categories);
        if (this.categories.length == 0) {
            this.categories = this.categoriesgamesService.categoriesGames;
        }
    };
    SearchComponent.prototype.initForm = function () {
        this.gameForm = this.formBuilder.group({
            title: "",
            titleExtention: "",
            categories2: [''],
            nbJoueurs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')],
            tpsJeuxMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')],
            tpsJeuxMax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')]
        });
    };
    SearchComponent.prototype.onSearchGame = function () {
        console.log('Début methode de recherche');
        var title = this.gameForm.get('title').value;
        var titleExtention = this.gameForm.get('titleExtention').value;
        var nbJoueurs = this.gameForm.get('nbJoueurs').value;
        var tpsJeuxMin = this.gameForm.get('tpsJeuxMin').value;
        var tpsJeuxMax = this.gameForm.get('tpsJeuxMax').value;
        if (!title && !titleExtention && !nbJoueurs && !tpsJeuxMin && !tpsJeuxMax && !this.categories2) {
            return null;
        }
        var filter = new _models_filtreGame_model__WEBPACK_IMPORTED_MODULE_4__["FiltreGame"]();
        filter.title = title;
        filter.titleExtention = titleExtention;
        filter.nbJoueurs = nbJoueurs;
        filter.tpsJeuxMin = tpsJeuxMin;
        filter.tpsJeuxMax = tpsJeuxMax;
        filter.categories = this.categories2;
        this.games = this.gameService.searchGame(filter);
        this.gameListComponent.games = this.games;
        this.filterGamesService.addNewFilter(filter);
    };
    SearchComponent.prototype.enumToArray = function (data) {
        var keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    };
    SearchComponent.prototype.onReinitSearch = function () {
        this.gameForm.reset();
        this.categories2 = [];
        this.filterGamesService.removeFilterGames();
    };
    SearchComponent.prototype.onFilterWindow = function () {
        this.filterOn = !this.filterOn;
    };
    SearchComponent.prototype.selectCategorie = function (cat) {
        if (this.isCatSelected(cat)) {
            this.deSelectOneCategorie(cat);
        }
        else {
            this.selectOneCategorie(cat);
        }
    };
    SearchComponent.prototype.selectOneCategorie = function (cat) {
        this.categories2.push(cat);
        console.log(this.categories2.includes(cat, 0));
    };
    SearchComponent.prototype.deSelectOneCategorie = function (cat) {
        var index = this.categories2.indexOf(cat);
        this.categories2.splice(index, 1);
    };
    SearchComponent.prototype.isCatSelected = function (cat) {
        return this.categories2 ? this.categories2.includes(cat, 0) : false;
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.categoriesSubscription.unsubscribe();
        this.filterGamesSubscription.unsubscribe();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/game-list/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/game-list/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"],
            _game_list_component__WEBPACK_IMPORTED_MODULE_1__["GameListComponent"],
            _services_filterGames_service__WEBPACK_IMPORTED_MODULE_5__["FilterGamesService"],
            _services_categoriesGames_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesGamesService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/game-list/single-game/single-game.component.html":
/*!******************************************************************!*\
  !*** ./src/app/game-list/single-game/single-game.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 container\">\n    <div class=\"computer flex-container\" style=\"width: 100%; margin-top: 2%;\">\n      <button (click)=\"onBack()\" style=\"background-color: rgb(247, 247, 247,0);border: rgb(247, 247, 247,0)\">\n        <img id=\"retour\" style=\"width: 100px; height: 50px;\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Ffaucon%20millenium_yellow.png?alt=media&token=9a508bc1-27d1-4f4c-81b8-aeedbdf4c5cd\"\n          title=\"Retour\">\n      </button>\n      <button style=\"cursor: pointer;background-color: rgb(247, 247, 247,0);border: rgb(247, 247, 247,0);position: fixed;right: 5px;;\" (click)=\"onEditGame()\">\n        <img title=\"Modifier\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fedit_yellow.png?alt=media&token=fd81598a-aaa6-4426-b78f-fe3ed6b6d6c1\"\n          style=\"height: 70px;width: 124px;\">\n      </button>\n    </div>\n    <!--Pour ordinateur-->\n    <div class=\"computer container\" style=\"margin-top: 2%;\">\n      <div class=\"flex-container\">\n        <div id=\"presentationLeft\">\n\n          <h1>{{ game.title }}</h1>\n\n          <h2 [ngClass]=\"game.isExtention? 'collapse show' : 'collapse'\">Extension : {{ game.titleExtention }}</h2>\n\n          <!--<h3>Catégorie : {{ game.categorie }}</h3>-->\n          <h3>Nombre de joueurs : {{ game.nbJoueursMin }} à {{ game.nbJoueursMax }}</h3>\n          <h3>Temps de jeux : {{ game.tpsJeux }} min</h3>\n          <div class=\"flex-container\">\n            <h3 style=\"margin-top: 0px;\">Catégories : </h3>\n            <div id=\"flex-container-categories\">\n              <div style=\"max-width: 80%;\">\n                <button *ngFor=\"let cat of game.categories\" id=\"categories\" class=\"btn btn-success\">{{cat}}</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <img id=\"smallViewPicture\" [src]=\"game.photo\" />\n      </div>\n      <div style=\"width: 100%;\">\n        <div class=\"text\">\n          <div class=\"container\" style=\"opacity: 1;\">\n            <h5>{{ game.synopsis }}</h5>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <!--pour iDevice-->\n    <div class=\"device container\" style=\"margin-top: 2%;\">\n\n      <div id=\"flex-container-titre\">\n        <h1>{{ game.title }}</h1>\n\n        <h2 [ngClass]=\"game.isExtention? 'collapse show' : 'collapse'\">Extension : {{ game.titleExtention }}</h2>\n      </div>\n      <img id=\"smallViewPicture\" [src]=\"game.photo\" />\n      <!--<h3>Catégorie : {{ game.categorie }}</h3>-->\n\n      <h4>Nombre de joueurs : {{ game.nbJoueursMin }} à {{ game.nbJoueursMax }}</h4>\n      <h4>Temps de jeux : {{ game.tpsJeux }} min</h4>\n\n      <div id=\"flex-container-categories\">\n\n        <button *ngFor=\"let cat of game.categories\" id=\"categories\" class=\"btn btn-success\">{{cat}}</button>\n\n      </div>\n      <div style=\"width: 100%;\">\n        <div class=\"jumbotron\" style=\"background-color: rgba(255, 255, 255, 0.2);max-width: 100%;margin-top: 5%;\">\n          <div class=\"container\" style=\"opacity: 1;\">\n            <h5>{{ game.synopsis }}</h5>\n          </div>\n        </div>\n      </div>\n\n      <div id=\"flex-container-categories\">\n            <button style=\"cursor: pointer;background-color: rgb(247, 247, 247,0);border: rgb(247, 247, 247,0);margin: auto;\" (click)=\"onEditGame()\">\n              <img title=\"Modifier\" src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2Fedit_yellow.png?alt=media&token=fd81598a-aaa6-4426-b78f-fe3ed6b6d6c1\"\n                style=\"height: 70px;width: 124px;\">\n            </button>\n  \n        </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game-list/single-game/single-game.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/game-list/single-game/single-game.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device {\n  display: none; }\n\n.computer {\n  display: block; }\n\nh3 {\n  margin-top: 5%; }\n\n#smallViewPicture {\n  width: 30%;\n  max-width: 340px;\n  max-height: 340px;\n  margin-top: 140px;\n  height: auto;\n  vertical-align: middle;\n  margin: auto; }\n\n#presentationLeft {\n  max-width: 69%;\n  margin: auto;\n  text-align: justify; }\n\n@-webkit-keyframes masuperanimation {\n  /* Safari, Opera, Chrome */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n\n@keyframes masuperanimation {\n  /* Tous les autres navigateurs */\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  100% {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px); } }\n\n#retour:hover {\n  -webkit-animation: masuperanimation 1s;\n  /* Safari, Opera, Chrome */\n  animation: masuperanimation 1s;\n  /* Tous les autres navigateurs */ }\n\n#flex-container-categories {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.flex-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: auto; }\n\n#flex-container-titre {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-align: center;\n  margin: auto; }\n\n#categories {\n  margin-left: 10px;\n  margin-top: 2%;\n  cursor: default; }\n\n.container {\n  width: 100%;\n  margin: auto; }\n\n.text {\n  background-color: rgba(255, 255, 255, 0.2);\n  margin-top: 10%;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px; }\n\n@media screen and (max-width: 411px), screen and (max-height: 411px) {\n  .device {\n    display: block; }\n  .computer {\n    display: none; }\n  #smallViewPicture {\n    width: 100%;\n    max-width: 340px;\n    max-height: 340px;\n    margin-top: 5px; }\n  #flex-container-titre {\n    display: inline;\n    margin: auto; }\n  #flex-container-categories {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: auto;\n    margin-top: 20px; }\n  .container {\n    width: 100%;\n    margin: auto;\n    text-align: justify; }\n  #categories {\n    margin: auto;\n    margin-top: 10px; } }\n"

/***/ }),

/***/ "./src/app/game-list/single-game/single-game.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/game-list/single-game/single-game.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleGameComponent", function() { return SingleGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_game_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/game.model */ "./src/app/models/game.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleGameComponent = /** @class */ (function () {
    function SingleGameComponent(route, gameService, router, location) {
        this.route = route;
        this.gameService = gameService;
        this.router = router;
        this.location = location;
    }
    SingleGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.game = new _models_game_model__WEBPACK_IMPORTED_MODULE_1__["Game"]();
        var id = this.route.snapshot.params['id'];
        this.gameService.getSingleGames(+id).then(function (game) {
            _this.game = game;
        });
    };
    SingleGameComponent.prototype.onBack = function () {
        this.location.back();
    };
    SingleGameComponent.prototype.onEditGame = function () {
        var id = this.route.snapshot.params['id'];
        this.router.navigate(['/games', 'edit', id]);
    };
    SingleGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-game',
            template: __webpack_require__(/*! ./single-game.component.html */ "./src/app/game-list/single-game/single-game.component.html"),
            styles: [__webpack_require__(/*! ./single-game.component.scss */ "./src/app/game-list/single-game/single-game.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], SingleGameComponent);
    return SingleGameComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link active\" routerLink=\"games\">Jeux de sociétés</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n    <!--   <li  routerLinkActive=\"active\" *ngIf=\"!isAuth\">\n        <a routerLink=\"auth/signup\">Créer un compte</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf=\"!isAuth\">\n        <a routerLink=\"auth/signin\">Je rentre dans le darkSide</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf=\"isAuth\">\n        <a routerLink=\"auth/signin\"  (click)=\"onSignOut()\">Je retourne du côté lumineux</a>\n      </li> -->\n\n          <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary\" (click)=\"openCloseMenu();\">\n           <div [ngClass]=\"openMenu?'close':'open'\"> menu ▼</div>\n           <div [ngClass]=\"openMenu?'open':'close'\"> menu ▲</div>\n          </button>\n          \n          <div [ngClass]=\"openMenu?'collapse show':'collapse'\" id=\"menu\">\n            <div  id=\"sousMenu\" routerLinkActive=\"active\" *ngIf=\"!isAuth\" routerLink=\"auth/signin\">Connexion</div>\n            <div id=\"sousMenu\" routerLinkActive=\"active\" *ngIf=\"!isAuth\" routerLink=\"auth/signup\">Creer un compte</div>\n            <div id=\"sousMenu\" routerLinkActive=\"active\" routerLink=\"auth/signin\" *ngIf=\"isAuth\" (click)=\"onSignOut()\">Déconnexion</div>\n          </div>\n\n    <!--   <li routerLinkActive=\"active\" *ngIf=\"isAuth\">\n          <a routerLink=\"dataCollector\" >Data collector</a>\n        </li> -->\n    </ul>\n  </div>\n</nav>\n<div id=\"separationBar\"></div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#separationBar {\n  width: 100%;\n  height: 3px;\n  background-color: yellow; }\n\n/* a{\r\n    color: #00a6f3;\r\n} */\n\n#btnGroupDrop1 {\n  position: absolute;\n  margin-left: 145px;\n  width: 80px;\n  right: 7px;\n  top: 7px; }\n\n#menu {\n  z-index: 500;\n  border: 3px;\n  color: yellow;\n  border-radius: 5px;\n  border-color: yellow;\n  background-color: #9e9b9b;\n  position: absolute;\n  right: 7px;\n  top: 48px;\n  width: 150px; }\n\n#sousMenu:hover {\n  z-index: 600;\n  cursor: pointer; }\n\n.open {\n  display: inline-block; }\n\n.close {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.openMenu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    };
    HeaderComponent.prototype.onSignOut = function () {
        this.authService.signOutuser();
    };
    HeaderComponent.prototype.openCloseMenu = function () {
        this.openMenu = !this.openMenu;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/collector.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/collector.model.ts ***!
  \*******************************************/
/*! exports provided: Collector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collector", function() { return Collector; });
var Collector = /** @class */ (function () {
    function Collector(mecanismes, themes, joueurs, age, temps) {
        this.mecanismes = [];
        this.themes = [];
        this.mecanismes = mecanismes;
        this.themes = themes;
        this.extractJoueurs(joueurs);
        this.extractAge(age);
        this.extractTemps(temps);
    }
    Collector.prototype.extractJoueurs = function (joueurs) {
        if (joueurs && joueurs.length) {
            var tab = joueurs.split(' ');
            this.joueursMin = Number.parseInt(tab[0]);
            this.joueursMax = Number.parseInt(tab[2]);
        }
    };
    Collector.prototype.extractAge = function (age) {
        if (age && age.length) {
            var tab = age.split(' ');
            this.age = Number.parseInt(tab[3]);
        }
    };
    Collector.prototype.extractTemps = function (temps) {
        if (temps && temps.length) {
            var tab = temps.split(' ');
            for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
                var seq = tab_1[_i];
                if (seq !== null && seq[0].match('[0-9]')) {
                    var unity = tab.pop();
                    if (unity == 'min' || unity == 'minutes' || unity == 'Minutes' || unity == 'Min') {
                        this.temps = Number.parseInt(seq);
                    }
                    else if (unity == 'heures' || unity == 'Heures' || unity == 'h' || unity == 'H') {
                        this.temps = Number.parseInt(seq) * 60;
                    }
                    break;
                }
            }
        }
    };
    return Collector;
}());



/***/ }),

/***/ "./src/app/models/filtreGame.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/filtreGame.model.ts ***!
  \********************************************/
/*! exports provided: FiltreGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltreGame", function() { return FiltreGame; });
var FiltreGame = /** @class */ (function () {
    function FiltreGame() {
    }
    return FiltreGame;
}());



/***/ }),

/***/ "./src/app/models/game.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/game.model.ts ***!
  \**************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_0__);

var Game = /** @class */ (function () {
    function Game() {
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__["UUID"].UUID();
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;height: 100%\">\n<h1 *ngIf=\"!isClicked\">Ce n'est pas une page de l'appli, c'est une base sidérale!!!!</h1>\n<h2 *ngIf=\"!isClicked\">Clique sur l'étoile noire pour revenir à l'appli</h2>\n<h1 *ngIf=\"isClicked\"> TROP TARD!!!!!!!!!!!!!!!!!</h1>\n<h1 *ngIf=\"isClicked2\"> RECOMMENCE</h1>\n<img id=\"image\"  src=\"https://firebasestorage.googleapis.com/v0/b/revol-theque.appspot.com/o/icones%2FDeath_Star_II_404.png?alt=media&token=149ca6ef-8795-457e-9237-942a245d7cfe\"\n  style=\"width: 100px;height: 100px;position:absolute;left: 50%;top: 50%; margin-left: -50px;margin-top: -50px;\" (click)=\"goBack();\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#image {\n  -webkit-animation: Buttonanimation 30s;\n  /* Safari, Opera, Chrome */\n  animation: Buttonanimation 30s;\n  /* Tous les autres navigateurs */ }\n\n@-webkit-keYframes Buttonanimation {\n  /* Safari, Opera, Chrome */\n  0% {\n    -webkit-transform: translateX(0pX);\n            transform: translateX(0pX); }\n  1% {\n    -webkit-transform: translateY(-462pX);\n            transform: translateY(-462pX); }\n  2% {\n    -webkit-transform: translateX(-211pX);\n            transform: translateX(-211pX); }\n  3% {\n    -webkit-transform: translateY(470pX);\n            transform: translateY(470pX); }\n  4% {\n    -webkit-transform: translateX(-217pX);\n            transform: translateX(-217pX); }\n  5% {\n    -webkit-transform: translateY(101pX);\n            transform: translateY(101pX); }\n  6% {\n    -webkit-transform: translateX(-557pX);\n            transform: translateX(-557pX); }\n  7% {\n    -webkit-transform: translateY(222pX);\n            transform: translateY(222pX); }\n  8% {\n    -webkit-transform: translateX(895pX);\n            transform: translateX(895pX); }\n  9% {\n    -webkit-transform: translateY(-113pX);\n            transform: translateY(-113pX); }\n  10% {\n    -webkit-transform: translateX(-180pX);\n            transform: translateX(-180pX); }\n  11% {\n    -webkit-transform: translateY(-447pX);\n            transform: translateY(-447pX); }\n  12% {\n    -webkit-transform: translateX(160pX);\n            transform: translateX(160pX); }\n  13% {\n    -webkit-transform: translateY(8pX);\n            transform: translateY(8pX); }\n  14% {\n    -webkit-transform: translateX(-488pX);\n            transform: translateX(-488pX); }\n  15% {\n    -webkit-transform: translateY(460pX);\n            transform: translateY(460pX); }\n  16% {\n    -webkit-transform: translateX(-954pX);\n            transform: translateX(-954pX); }\n  17% {\n    -webkit-transform: translateY(-184pX);\n            transform: translateY(-184pX); }\n  18% {\n    -webkit-transform: translateX(-513pX);\n            transform: translateX(-513pX); }\n  19% {\n    -webkit-transform: translateY(149pX);\n            transform: translateY(149pX); }\n  20% {\n    -webkit-transform: translateY(-147pX);\n            transform: translateY(-147pX); }\n  21% {\n    -webkit-transform: translateY(468pX);\n            transform: translateY(468pX); }\n  22% {\n    -webkit-transform: translateX(227pX);\n            transform: translateX(227pX); }\n  23% {\n    -webkit-transform: translateY(-1pX);\n            transform: translateY(-1pX); }\n  24% {\n    -webkit-transform: translateX(-471pX);\n            transform: translateX(-471pX); }\n  25% {\n    -webkit-transform: translateY(-33pX);\n            transform: translateY(-33pX); }\n  26% {\n    -webkit-transform: translateX(-726pX);\n            transform: translateX(-726pX); }\n  27% {\n    -webkit-transform: translateY(-231pX);\n            transform: translateY(-231pX); }\n  28% {\n    -webkit-transform: translateX(-458pX);\n            transform: translateX(-458pX); }\n  29% {\n    -webkit-transform: translateY(-267pX);\n            transform: translateY(-267pX); }\n  30% {\n    -webkit-transform: translateY(284pX);\n            transform: translateY(284pX); }\n  31% {\n    -webkit-transform: translateX(287pX);\n            transform: translateX(287pX); }\n  32% {\n    -webkit-transform: translateY(-262pX);\n            transform: translateY(-262pX); }\n  33% {\n    -webkit-transform: translateX(-165pX);\n            transform: translateX(-165pX); }\n  34% {\n    -webkit-transform: translateY(-440pX);\n            transform: translateY(-440pX); }\n  35% {\n    -webkit-transform: translateX(-328pX);\n            transform: translateX(-328pX); }\n  36% {\n    -webkit-transform: translateY(220pX);\n            transform: translateY(220pX); }\n  37% {\n    -webkit-transform: translateX(510pX);\n            transform: translateX(510pX); }\n  38% {\n    -webkit-transform: translateY(-400pX);\n            transform: translateY(-400pX); }\n  39% {\n    -webkit-transform: translateX(337pX);\n            transform: translateX(337pX); }\n  40% {\n    -webkit-transform: translateY(406pX);\n            transform: translateY(406pX); }\n  41% {\n    -webkit-transform: translateX(43pX);\n            transform: translateX(43pX); }\n  42% {\n    -webkit-transform: translateY(355pX);\n            transform: translateY(355pX); }\n  43% {\n    -webkit-transform: translateX(-872pX);\n            transform: translateX(-872pX); }\n  44% {\n    -webkit-transform: translateX(120pX);\n            transform: translateX(120pX); }\n  45% {\n    -webkit-transform: translateY(266pX);\n            transform: translateY(266pX); }\n  46% {\n    -webkit-transform: translateX(740pX);\n            transform: translateX(740pX); }\n  47% {\n    -webkit-transform: translateY(-337pX);\n            transform: translateY(-337pX); }\n  48% {\n    -webkit-transform: translateX(-32pX);\n            transform: translateX(-32pX); }\n  49% {\n    -webkit-transform: translateY(413pX);\n            transform: translateY(413pX); }\n  40% {\n    -webkit-transform: translateX(335pX);\n            transform: translateX(335pX); }\n  41% {\n    -webkit-transform: translateY(-478pX);\n            transform: translateY(-478pX); }\n  42% {\n    -webkit-transform: translateX(-588pX);\n            transform: translateX(-588pX); }\n  43% {\n    -webkit-transform: translateY(-465pX);\n            transform: translateY(-465pX); }\n  44% {\n    -webkit-transform: translateX(-528pX);\n            transform: translateX(-528pX); }\n  45% {\n    -webkit-transform: translateY(-141pX);\n            transform: translateY(-141pX); }\n  46% {\n    -webkit-transform: translateX(957pX);\n            transform: translateX(957pX); }\n  47% {\n    -webkit-transform: translateY(-402pX);\n            transform: translateY(-402pX); }\n  48% {\n    -webkit-transform: translateX(235pX);\n            transform: translateX(235pX); }\n  49% {\n    -webkit-transform: translateY(127pX);\n            transform: translateY(127pX); }\n  50% {\n    -webkit-transform: translateX(-168pX);\n            transform: translateX(-168pX); }\n  51% {\n    -webkit-transform: translateY(364pX);\n            transform: translateY(364pX); }\n  52% {\n    -webkit-transform: translateX(-745pX);\n            transform: translateX(-745pX); }\n  53% {\n    -webkit-transform: translateY(160pX);\n            transform: translateY(160pX); }\n  54% {\n    -webkit-transform: translateX(423pX);\n            transform: translateX(423pX); }\n  55% {\n    -webkit-transform: translateY(166pX);\n            transform: translateY(166pX); }\n  56% {\n    -webkit-transform: translateX(-177pX);\n            transform: translateX(-177pX); }\n  57% {\n    -webkit-transform: translateY(-201pX);\n            transform: translateY(-201pX); }\n  58% {\n    -webkit-transform: translateX(322pX);\n            transform: translateX(322pX); }\n  59% {\n    -webkit-transform: translateY(-100pX);\n            transform: translateY(-100pX); }\n  60% {\n    -webkit-transform: translateX(-124pX);\n            transform: translateX(-124pX); }\n  61% {\n    -webkit-transform: translateY(328pX);\n            transform: translateY(328pX); }\n  62% {\n    -webkit-transform: translateX(744pX);\n            transform: translateX(744pX); }\n  63% {\n    -webkit-transform: translateY(261pX);\n            transform: translateY(261pX); }\n  64% {\n    -webkit-transform: translateX(372pX);\n            transform: translateX(372pX); }\n  65% {\n    -webkit-transform: translateY(-354pX);\n            transform: translateY(-354pX); }\n  66% {\n    -webkit-transform: translateX(99pX);\n            transform: translateX(99pX); }\n  67% {\n    -webkit-transform: translateY(93pX);\n            transform: translateY(93pX); }\n  68% {\n    -webkit-transform: translateX(-717pX);\n            transform: translateX(-717pX); }\n  69% {\n    -webkit-transform: translateY(139pX);\n            transform: translateY(139pX); }\n  70% {\n    -webkit-transform: translateX(-445pX);\n            transform: translateX(-445pX); }\n  71% {\n    -webkit-transform: translateY(414pX);\n            transform: translateY(414pX); }\n  72% {\n    -webkit-transform: translateX(-479pX);\n            transform: translateX(-479pX); }\n  73% {\n    -webkit-transform: translateY(259pX);\n            transform: translateY(259pX); }\n  74% {\n    -webkit-transform: translateX(831pX);\n            transform: translateX(831pX); }\n  75% {\n    -webkit-transform: translateY(-465pX);\n            transform: translateY(-465pX); }\n  76% {\n    -webkit-transform: translateX(-697pX);\n            transform: translateX(-697pX); }\n  77% {\n    -webkit-transform: translateY(339pX);\n            transform: translateY(339pX); }\n  78% {\n    -webkit-transform: translateX(160pX);\n            transform: translateX(160pX); }\n  79% {\n    -webkit-transform: translateY(-384pX);\n            transform: translateY(-384pX); }\n  80% {\n    -webkit-transform: translateX(623pX);\n            transform: translateX(623pX); }\n  81% {\n    -webkit-transform: translateY(-41pX);\n            transform: translateY(-41pX); }\n  82% {\n    -webkit-transform: translateX(-889pX);\n            transform: translateX(-889pX); }\n  83% {\n    -webkit-transform: translateY(-274pX);\n            transform: translateY(-274pX); }\n  84% {\n    -webkit-transform: translateX(429pX);\n            transform: translateX(429pX); }\n  85% {\n    -webkit-transform: translateY(-124pX);\n            transform: translateY(-124pX); }\n  86% {\n    -webkit-transform: translateX(-386pX);\n            transform: translateX(-386pX); }\n  87% {\n    -webkit-transform: translateY(329pX);\n            transform: translateY(329pX); }\n  88% {\n    -webkit-transform: translateX(-5pX);\n            transform: translateX(-5pX); }\n  89% {\n    -webkit-transform: translateY(161pX);\n            transform: translateY(161pX); }\n  90% {\n    -webkit-transform: translateX(-637pX);\n            transform: translateX(-637pX); }\n  91% {\n    -webkit-transform: translateY(208pX);\n            transform: translateY(208pX); }\n  92% {\n    -webkit-transform: translateX(-601pX);\n            transform: translateX(-601pX); }\n  93% {\n    -webkit-transform: translateY(-306pX);\n            transform: translateY(-306pX); }\n  94% {\n    -webkit-transform: translateX(442pX);\n            transform: translateX(442pX); }\n  95% {\n    -webkit-transform: translateY(256pX);\n            transform: translateY(256pX); }\n  96% {\n    -webkit-transform: translateX(836pX);\n            transform: translateX(836pX); }\n  97% {\n    -webkit-transform: translateY(32pX);\n            transform: translateY(32pX); }\n  98% {\n    -webkit-transform: translateX(748pX);\n            transform: translateX(748pX); }\n  99% {\n    -webkit-transform: translateY(253pX);\n            transform: translateY(253pX); }\n  100% {\n    -webkit-transform: translateX(-222pX);\n            transform: translateX(-222pX); } }\n\n@keYframes Buttonanimation {\n  /* Tous les autres navigateurs */\n  0% {\n    -webkit-transform: translateX(0pX);\n            transform: translateX(0pX); }\n  1% {\n    -webkit-transform: translateY(-265pX);\n            transform: translateY(-265pX); }\n  2% {\n    -webkit-transform: translateX(-517pX);\n            transform: translateX(-517pX); }\n  3% {\n    -webkit-transform: translateY(286pX);\n            transform: translateY(286pX); }\n  4% {\n    -webkit-transform: translateX(-161pX);\n            transform: translateX(-161pX); }\n  5% {\n    -webkit-transform: translateY(70pX);\n            transform: translateY(70pX); }\n  6% {\n    -webkit-transform: translateX(-531pX);\n            transform: translateX(-531pX); }\n  7% {\n    -webkit-transform: translateY(441pX);\n            transform: translateY(441pX); }\n  8% {\n    -webkit-transform: translateX(932pX);\n            transform: translateX(932pX); }\n  9% {\n    -webkit-transform: translateY(-217pX);\n            transform: translateY(-217pX); }\n  10% {\n    -webkit-transform: translateX(-789pX);\n            transform: translateX(-789pX); }\n  11% {\n    -webkit-transform: translateY(-157pX);\n            transform: translateY(-157pX); }\n  12% {\n    -webkit-transform: translateX(-574pX);\n            transform: translateX(-574pX); }\n  13% {\n    -webkit-transform: translateY(-462pX);\n            transform: translateY(-462pX); }\n  14% {\n    -webkit-transform: translateX(496pX);\n            transform: translateX(496pX); }\n  15% {\n    -webkit-transform: translateY(-86pX);\n            transform: translateY(-86pX); }\n  16% {\n    -webkit-transform: translateX(-480pX);\n            transform: translateX(-480pX); }\n  17% {\n    -webkit-transform: translateY(234pX);\n            transform: translateY(234pX); }\n  18% {\n    -webkit-transform: translateX(-203pX);\n            transform: translateX(-203pX); }\n  19% {\n    -webkit-transform: translateY(-107pX);\n            transform: translateY(-107pX); }\n  20% {\n    -webkit-transform: translateY(242pX);\n            transform: translateY(242pX); }\n  21% {\n    -webkit-transform: translateY(-174pX);\n            transform: translateY(-174pX); }\n  22% {\n    -webkit-transform: translateX(174pX);\n            transform: translateX(174pX); }\n  23% {\n    -webkit-transform: translateY(-310pX);\n            transform: translateY(-310pX); }\n  24% {\n    -webkit-transform: translateX(-852pX);\n            transform: translateX(-852pX); }\n  25% {\n    -webkit-transform: translateY(-351pX);\n            transform: translateY(-351pX); }\n  26% {\n    -webkit-transform: translateX(-474pX);\n            transform: translateX(-474pX); }\n  27% {\n    -webkit-transform: translateY(420pX);\n            transform: translateY(420pX); }\n  28% {\n    -webkit-transform: translateX(377pX);\n            transform: translateX(377pX); }\n  29% {\n    -webkit-transform: translateY(297pX);\n            transform: translateY(297pX); }\n  30% {\n    -webkit-transform: translateY(372pX);\n            transform: translateY(372pX); }\n  31% {\n    -webkit-transform: translateX(50pX);\n            transform: translateX(50pX); }\n  32% {\n    -webkit-transform: translateY(344pX);\n            transform: translateY(344pX); }\n  33% {\n    -webkit-transform: translateX(-244pX);\n            transform: translateX(-244pX); }\n  34% {\n    -webkit-transform: translateY(-167pX);\n            transform: translateY(-167pX); }\n  35% {\n    -webkit-transform: translateX(470pX);\n            transform: translateX(470pX); }\n  36% {\n    -webkit-transform: translateY(112pX);\n            transform: translateY(112pX); }\n  37% {\n    -webkit-transform: translateX(-814pX);\n            transform: translateX(-814pX); }\n  38% {\n    -webkit-transform: translateY(-393pX);\n            transform: translateY(-393pX); }\n  39% {\n    -webkit-transform: translateX(415pX);\n            transform: translateX(415pX); }\n  40% {\n    -webkit-transform: translateY(299pX);\n            transform: translateY(299pX); }\n  41% {\n    -webkit-transform: translateX(806pX);\n            transform: translateX(806pX); }\n  42% {\n    -webkit-transform: translateY(183pX);\n            transform: translateY(183pX); }\n  43% {\n    -webkit-transform: translateX(-949pX);\n            transform: translateX(-949pX); }\n  44% {\n    -webkit-transform: translateX(894pX);\n            transform: translateX(894pX); }\n  45% {\n    -webkit-transform: translateY(-137pX);\n            transform: translateY(-137pX); }\n  46% {\n    -webkit-transform: translateX(272pX);\n            transform: translateX(272pX); }\n  47% {\n    -webkit-transform: translateY(-167pX);\n            transform: translateY(-167pX); }\n  48% {\n    -webkit-transform: translateX(916pX);\n            transform: translateX(916pX); }\n  49% {\n    -webkit-transform: translateY(-235pX);\n            transform: translateY(-235pX); }\n  40% {\n    -webkit-transform: translateX(-526pX);\n            transform: translateX(-526pX); }\n  41% {\n    -webkit-transform: translateY(149pX);\n            transform: translateY(149pX); }\n  42% {\n    -webkit-transform: translateX(-779pX);\n            transform: translateX(-779pX); }\n  43% {\n    -webkit-transform: translateY(274pX);\n            transform: translateY(274pX); }\n  44% {\n    -webkit-transform: translateX(905pX);\n            transform: translateX(905pX); }\n  45% {\n    -webkit-transform: translateY(293pX);\n            transform: translateY(293pX); }\n  46% {\n    -webkit-transform: translateX(585pX);\n            transform: translateX(585pX); }\n  47% {\n    -webkit-transform: translateY(303pX);\n            transform: translateY(303pX); }\n  48% {\n    -webkit-transform: translateX(11pX);\n            transform: translateX(11pX); }\n  49% {\n    -webkit-transform: translateY(-377pX);\n            transform: translateY(-377pX); }\n  50% {\n    -webkit-transform: translateX(-505pX);\n            transform: translateX(-505pX); }\n  51% {\n    -webkit-transform: translateY(31pX);\n            transform: translateY(31pX); }\n  52% {\n    -webkit-transform: translateX(-322pX);\n            transform: translateX(-322pX); }\n  53% {\n    -webkit-transform: translateY(-76pX);\n            transform: translateY(-76pX); }\n  54% {\n    -webkit-transform: translateX(-310pX);\n            transform: translateX(-310pX); }\n  55% {\n    -webkit-transform: translateY(-46pX);\n            transform: translateY(-46pX); }\n  56% {\n    -webkit-transform: translateX(167pX);\n            transform: translateX(167pX); }\n  57% {\n    -webkit-transform: translateY(-376pX);\n            transform: translateY(-376pX); }\n  58% {\n    -webkit-transform: translateX(943pX);\n            transform: translateX(943pX); }\n  59% {\n    -webkit-transform: translateY(-153pX);\n            transform: translateY(-153pX); }\n  60% {\n    -webkit-transform: translateX(-137pX);\n            transform: translateX(-137pX); }\n  61% {\n    -webkit-transform: translateY(-261pX);\n            transform: translateY(-261pX); }\n  62% {\n    -webkit-transform: translateX(-376pX);\n            transform: translateX(-376pX); }\n  63% {\n    -webkit-transform: translateY(268pX);\n            transform: translateY(268pX); }\n  64% {\n    -webkit-transform: translateX(238pX);\n            transform: translateX(238pX); }\n  65% {\n    -webkit-transform: translateY(-106pX);\n            transform: translateY(-106pX); }\n  66% {\n    -webkit-transform: translateX(761pX);\n            transform: translateX(761pX); }\n  67% {\n    -webkit-transform: translateY(312pX);\n            transform: translateY(312pX); }\n  68% {\n    -webkit-transform: translateX(176pX);\n            transform: translateX(176pX); }\n  69% {\n    -webkit-transform: translateY(-460pX);\n            transform: translateY(-460pX); }\n  70% {\n    -webkit-transform: translateX(-325pX);\n            transform: translateX(-325pX); }\n  71% {\n    -webkit-transform: translateY(463pX);\n            transform: translateY(463pX); }\n  72% {\n    -webkit-transform: translateX(-280pX);\n            transform: translateX(-280pX); }\n  73% {\n    -webkit-transform: translateY(79pX);\n            transform: translateY(79pX); }\n  74% {\n    -webkit-transform: translateX(694pX);\n            transform: translateX(694pX); }\n  75% {\n    -webkit-transform: translateY(360pX);\n            transform: translateY(360pX); }\n  76% {\n    -webkit-transform: translateX(-551pX);\n            transform: translateX(-551pX); }\n  77% {\n    -webkit-transform: translateY(-307pX);\n            transform: translateY(-307pX); }\n  78% {\n    -webkit-transform: translateX(-500pX);\n            transform: translateX(-500pX); }\n  79% {\n    -webkit-transform: translateY(-31pX);\n            transform: translateY(-31pX); }\n  80% {\n    -webkit-transform: translateX(-822pX);\n            transform: translateX(-822pX); }\n  81% {\n    -webkit-transform: translateY(-200pX);\n            transform: translateY(-200pX); }\n  82% {\n    -webkit-transform: translateX(870pX);\n            transform: translateX(870pX); }\n  83% {\n    -webkit-transform: translateY(410pX);\n            transform: translateY(410pX); }\n  84% {\n    -webkit-transform: translateX(-331pX);\n            transform: translateX(-331pX); }\n  85% {\n    -webkit-transform: translateY(-355pX);\n            transform: translateY(-355pX); }\n  86% {\n    -webkit-transform: translateX(-567pX);\n            transform: translateX(-567pX); }\n  87% {\n    -webkit-transform: translateY(281pX);\n            transform: translateY(281pX); }\n  88% {\n    -webkit-transform: translateX(475pX);\n            transform: translateX(475pX); }\n  89% {\n    -webkit-transform: translateY(431pX);\n            transform: translateY(431pX); }\n  90% {\n    -webkit-transform: translateX(-627pX);\n            transform: translateX(-627pX); }\n  91% {\n    -webkit-transform: translateY(-39pX);\n            transform: translateY(-39pX); }\n  92% {\n    -webkit-transform: translateX(-875pX);\n            transform: translateX(-875pX); }\n  93% {\n    -webkit-transform: translateY(413pX);\n            transform: translateY(413pX); }\n  94% {\n    -webkit-transform: translateX(906pX);\n            transform: translateX(906pX); }\n  95% {\n    -webkit-transform: translateY(309pX);\n            transform: translateY(309pX); }\n  96% {\n    -webkit-transform: translateX(965pX);\n            transform: translateX(965pX); }\n  97% {\n    -webkit-transform: translateY(-298pX);\n            transform: translateY(-298pX); }\n  98% {\n    -webkit-transform: translateX(515pX);\n            transform: translateX(515pX); }\n  99% {\n    -webkit-transform: translateY(-460pX);\n            transform: translateY(-460pX); }\n  100% {\n    -webkit-transform: translateX(-594pX);\n            transform: translateX(-594pX); } }\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(appComponante, location) {
        this.appComponante = appComponante;
        this.location = location;
        this.isClicked = false;
        this.isClicked2 = false;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.appComponante.isNotFound = true;
    };
    PageNotFoundComponent.prototype.goBack = function () {
        var _this = this;
        this.isClicked = true;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500);
        //output: 0,1,2,3,4,5......
        var subscribe = source.subscribe(function (val) {
            var source2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500);
            var subcribe2 = source2.subscribe(function (val) {
                var source3 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500);
                _this.isClicked2 = true;
                var subcribe3 = source3.subscribe(function (val) {
                    window.location.reload();
                });
            });
        });
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/auth', 'signin']);
                    resolve(false);
                }
            });
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService_1 = AuthService;
    AuthService.prototype.createNewUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password).then(function () {
                resolve();
                AuthService_1.isAuth = true;
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOutuser = function () {
        console.log('service signout');
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        AuthService_1.isAuth = false;
    };
    AuthService.isAuth = false;
    AuthService = AuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "./src/app/services/categoriesGames.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/categoriesGames.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesGamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesGamesService", function() { return CategoriesGamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesGamesService = /** @class */ (function () {
    function CategoriesGamesService() {
        this.categoriesGames = [];
        this.categoriesGamesSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getCategoriesGames();
        console.log(this.categoriesGames);
    }
    CategoriesGamesService.prototype.emitCategoriesGames = function () {
        this.categoriesGamesSubject.next(this.categoriesGames.slice());
    };
    CategoriesGamesService.prototype.saveCategoriesGames = function () {
        this.categoriesGames.sort(this.stringSort);
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/categoriesGames').set(this.categoriesGames);
    };
    CategoriesGamesService.prototype.createNewCategorie = function (newCategorie) {
        if (!this.categoriesGames.includes(newCategorie)) {
            this.categoriesGames.push(newCategorie);
            this.saveCategoriesGames();
            this.emitCategoriesGames();
        }
    };
    CategoriesGamesService.prototype.getCategorieGameIndex = function (categorie) {
        return this.categoriesGames.indexOf(categorie);
    };
    CategoriesGamesService.prototype.getCategoriesGames = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/categoriesGames')
            .on('value', function (data) {
            _this.categoriesGames = data.val() ? data.val() : [];
            //this.games.sort(this.stringSort);
            _this.emitCategoriesGames();
        });
    };
    CategoriesGamesService.prototype.stringSort = function (catA, catB) {
        var titreA = catA.toLowerCase();
        var titreB = catB.toLowerCase();
        var i = 0;
        while ((i < titreA.length) && (i < titreB.length)) {
            if (titreA[i] < titreB[i]) {
                return -1;
            }
            else if (titreA[i] > titreB[i]) {
                return 1;
            }
            ++i;
        }
        if (titreA === titreB) {
            return 0;
        }
        else if (titreA === '') {
            return -1;
        }
        return 1;
    };
    CategoriesGamesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CategoriesGamesService);
    return CategoriesGamesService;
}());



/***/ }),

/***/ "./src/app/services/dataCollector.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/dataCollector.service.ts ***!
  \***************************************************/
/*! exports provided: DataCollectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCollectorService", function() { return DataCollectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_collector_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/collector.model */ "./src/app/models/collector.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataCollectorService = /** @class */ (function () {
    function DataCollectorService(_http) {
        this._http = _http;
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.title = '';
        this.titleMinify = '';
        this.urlStart = 'https://fr.wikipedia.org/wiki/';
        this.data = '';
        this.infos = [];
        this.mecanismes = [];
        this.themes = [];
        this.joueurs = '';
        this.age = '';
        this.temps = '';
    }
    DataCollectorService.prototype.emitData = function () {
        this.dataSubject.next(this.data);
    };
    DataCollectorService.prototype.Init = function () {
        this.title = '';
        this.titleMinify = '';
        this.url = '';
        this.data = '';
        this.table = [];
        this.infos = [];
        this.mecanismes = [];
        this.themes = [];
        this.joueurs = '';
        this.age = '';
        this.temps = '';
    };
    DataCollectorService.prototype.initCollect = function (title) {
        var _this = this;
        this.Init();
        this.title = title;
        this.titleMinify = this.minifyString(this.title);
        this.url = this.urlStart + this.titleMinify;
        this._http.get(this.url, {
            responseType: 'text', headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).subscribe(function (data) {
            _this.data = data;
            if (data.includes('<div id="homonymie" class="homonymie">')) {
                _this.initCollect(title + '_(jeu)');
            }
            _this.emitData();
            /*  this.extractInfo(this.data); */
            /* return new Collector(this.mecanismes,this.themes,this.joueurs,this.age,this.temps); */
        }, function (error) {
            _this.title = _this.allFirstLetterInUppercase(_this.title);
            _this.titleMinify = _this.minifyString(_this.title);
            _this.url = _this.urlStart + _this.titleMinify;
            _this._http.get(_this.url, {
                responseType: 'text', headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).subscribe(function (data) {
                _this.data = data;
                if (data.includes('<div id="homonymie" class="homonymie">')) {
                    _this.initCollect(title + '_(jeu)');
                }
                _this.emitData();
                /*  this.extractInfo(this.data); */
                /*  return new Collector(this.mecanismes,this.themes,this.joueurs,this.age,this.temps); */
            });
        }, function () {
            _this.emitData();
            /*  this.extractInfo(this.data);
             return new Collector(this.mecanismes,this.themes,this.joueurs,this.age,this.temps); */
        });
        this.emitData();
    };
    DataCollectorService.prototype.notAlNum = function (info) {
        var index = 0;
        var size = info.length;
        var isNotAllNum = true;
        var reg = new RegExp('[a-zA-Z0-9]');
        if (info == '' || info == ' ') {
            return isNotAllNum;
        }
        while (index < size) {
            if (info[index].match(reg)) {
                return false;
            }
            ++index;
        }
        return isNotAllNum;
    };
    DataCollectorService.prototype.extractInfo = function (data) {
        this.table = data.split('<table>');
        var tableauInfo = data.split('<table>')[1];
        if (tableauInfo && tableauInfo.length) {
            //suppression du code espace
            var tableauInfo2 = tableauInfo.replace('&#160;', ' ');
            while (tableauInfo2 !== tableauInfo2.replace('&#160;', ' ')) {
                tableauInfo2 = tableauInfo2.replace('&#160;', ' ');
            }
            //suppression des sauts de lignes
            while (tableauInfo2 != tableauInfo2.replace('\n', '')) {
                tableauInfo2 = tableauInfo2.replace('\n', '');
            }
            //récupération des info situées entre balises
            var reg = new RegExp('<[^>]+>');
            this.infos = tableauInfo2.split(reg);
            var i = 0;
            for (var _i = 0, _a = this.infos; _i < _a.length; _i++) {
                var info = _a[_i];
                if (info == null || this.notAlNum(info)) {
                    this.infos.splice(i, 1);
                }
                ++i;
            }
        }
        var indexMeca = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Mécanismes'); }));
        var indexTheme = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Thème'); }));
        var indexJoueurs = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Joueur(s)'); }));
        var indexAge = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Âge'); }));
        var indexTemps = this.infos.indexOf(this.infos.find(function (s) { return s.includes('Durée annoncée'); }));
        //MECANISME
        indexTheme = indexTheme == -1 ? indexJoueurs : indexTheme;
        this.mecanismes = this.getInfo(this.infos, indexMeca, indexTheme);
        //THEME
        this.themes = this.getInfo(this.infos, indexTheme, indexJoueurs);
        //JOUEURS
        this.joueurs = this.getInfo(this.infos, indexJoueurs, indexAge)[0];
        //AGE
        this.age = this.getInfo(this.infos, indexAge, indexTemps)[0];
        //TEMPS
        this.temps = this.getInfo(this.infos, indexTemps, null)[0];
        return new _models_collector_model__WEBPACK_IMPORTED_MODULE_2__["Collector"](this.mecanismes, this.themes, this.joueurs, this.age, this.temps);
    };
    DataCollectorService.prototype.getInfo = function (liste, debut, fin) {
        var results = fin ? liste.slice(debut + 1, fin) : liste.slice(debut + 1);
        return results;
    };
    DataCollectorService.prototype.minifyString = function (s) {
        var sm = s.replace(' ', '_');
        while (sm != sm.replace(' ', '_')) {
            sm = sm.replace(' ', '_');
        }
        return sm;
    };
    DataCollectorService.prototype.allFirstLetterInUppercase = function (s) {
        var tab = s.split(' ');
        for (var word in tab) {
            tab[word] = tab[word].substr(0, 1).toUpperCase() + tab[word].substr(1, tab[word].length);
        }
        return tab.join(' ');
    };
    DataCollectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataCollectorService);
    return DataCollectorService;
}());



/***/ }),

/***/ "./src/app/services/filterGames.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/filterGames.service.ts ***!
  \*************************************************/
/*! exports provided: FilterGamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterGamesService", function() { return FilterGamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterGamesService = /** @class */ (function () {
    function FilterGamesService() {
        this.filterGamesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getFilter();
    }
    FilterGamesService.prototype.emitFilter = function () {
        this.filterGamesSubject.next(this.filterGames);
    };
    FilterGamesService.prototype.getFilter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('/filterGame/' + firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.uid).once('value').then(function (data) {
                _this.filterGames = data.val() ? data.val() : null;
                _this.emitFilter();
            }, function (error) {
                reject(error);
            });
        });
    };
    FilterGamesService.prototype.addNewFilter = function (filter) {
        this.filterGames = filter;
        this.saveFilterGames();
        this.emitFilter();
    };
    FilterGamesService.prototype.saveFilterGames = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('/filterGame/' + firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.uid).set(this.filterGames);
    };
    FilterGamesService.prototype.removeFilterGames = function () {
        this.filterGames = null;
        this.saveFilterGames();
        this.emitFilter();
    };
    FilterGamesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilterGamesService);
    return FilterGamesService;
}());



/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesService = /** @class */ (function () {
    function GamesService() {
        this.games = [];
        this.gamesSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getGames();
    }
    GamesService.prototype.emitGames = function () {
        this.gamesSubject.next(this.games.slice());
    };
    GamesService.prototype.saveGames = function () {
        this.games.sort(this.stringSort);
        firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('/games').set(this.games);
    };
    GamesService.prototype.createNewGame = function (newGame) {
        this.games.push(newGame);
        this.saveGames();
        this.emitGames();
    };
    GamesService.prototype.removeGame = function (game) {
        if (game.photo) {
            this.deletePhotoInStorage(game.photo);
        }
        var gameIndexToRemove = this.getGameIndex(game);
        this.games.splice(gameIndexToRemove, 1);
        this.saveGames();
        this.emitGames();
    };
    GamesService.prototype.deletePhotoInStorage = function (url) {
        if (url && url.length) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().refFromURL(url);
            storageRef.delete().then(function () {
                console.log('photo supprimée');
            }, function (error) {
                console.log('Erreur de suppression : ' + error);
            });
        }
    };
    GamesService.prototype.editGame = function (oldGame, newGame, index) {
        if (oldGame.photo) {
            var oldUrl = oldGame.photo;
            if (newGame.photo) {
                var newUrl = newGame.photo;
                if (oldUrl !== newUrl) {
                    this.deletePhotoInStorage(oldGame.photo);
                }
            }
        }
        this.games.splice(index, 1, newGame);
        this.saveGames();
        this.emitGames();
    };
    GamesService.prototype.getGameIndex = function (game) {
        return this.games.indexOf(game);
    };
    GamesService.prototype.getGames = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('/games')
            .on('value', function (data) {
            _this.games = data.val() ? data.val() : [];
            //this.games.sort(this.stringSort);
            _this.emitGames();
        });
    };
    GamesService.prototype.getSingleGames = function (id) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('/games/' + id).once('value').then(function (data) {
                resolve(data.val());
            }, function (error) {
                console.log('erreur  gameService.getSingleGames : ' + error);
                reject(error);
            });
        });
    };
    GamesService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            var almostUniqueFileName = angular2_uuid__WEBPACK_IMPORTED_MODULE_3__["UUID"].UUID();
            var upload = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref().child('images/' + file.name).put(file);
            upload.on(firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].TaskEvent.STATE_CHANGED, function (a) {
                console.log('Chargement...');
            }, function (error) {
                console.log('Erreur de chargement ! : ' + error);
                reject;
            }, function () {
                firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref('images/' + file.name).getDownloadURL().then(function (url2) {
                    console.log('downLoadUrl : ' + url2.valueOf());
                    resolve(url2.valueOf());
                }, function (error) {
                    console.log('erreur gameService.uploadFile : ' + error);
                    reject(error);
                });
            });
        });
    };
    GamesService.prototype.stringSort = function (a, b) {
        var titreA = a.title.toLowerCase();
        var titreB = b.title.toLowerCase();
        var i = 0;
        while ((i < a.title.length) && (i < titreB.length)) {
            if (titreA[i] < titreB[i]) {
                return -1;
            }
            else if (titreA[i] > titreB[i]) {
                return 1;
            }
            ++i;
        }
        if (titreA === titreB) {
            return 0;
        }
        else if (titreA === '') {
            return -1;
        }
        return 1;
    };
    GamesService.prototype.searchGame = function (filter) {
        var gamesResult = [];
        if (filter) {
            for (var _i = 0, _a = this.games; _i < _a.length; _i++) {
                var game = _a[_i];
                var titleIsOK = true;
                var titleExtentionIsOK = true;
                var nbJoueursIsOK = true;
                var tpsJeuxIsOK = true;
                var categoriesIsOK = true;
                var title = filter.title;
                var titleExtention = filter.titleExtention;
                var nbJoueurs = filter.nbJoueurs ? new Number(filter.nbJoueurs) : null;
                var tpsJeuxMin = filter.tpsJeuxMin ? new Number(filter.tpsJeuxMin) : null;
                var tpsJeuxMax = filter.tpsJeuxMax ? new Number(filter.tpsJeuxMax) : null;
                var categories = filter.categories;
                var game_nbJoueursMin = new Number(game.nbJoueursMin);
                var game_nbJoueursMax = new Number(game.nbJoueursMax);
                var game_tpsJeux = new Number(game.tpsJeux);
                if (title) {
                    if (game.title.toLowerCase().includes(title.toLowerCase())) {
                        titleIsOK = true;
                    }
                    else {
                        titleIsOK = false;
                    }
                }
                if (titleExtention && titleIsOK) {
                    if (game.titleExtention.toLowerCase().includes(titleExtention.toLowerCase())) {
                        titleExtentionIsOK = true;
                    }
                    else {
                        titleExtentionIsOK = false;
                    }
                }
                if (nbJoueurs && titleExtentionIsOK && titleIsOK) {
                    if ((nbJoueurs >= game_nbJoueursMin) && (nbJoueurs <= game_nbJoueursMax)) {
                        nbJoueursIsOK = true;
                    }
                    else {
                        nbJoueursIsOK = false;
                    }
                }
                if (tpsJeuxMin && tpsJeuxMax && nbJoueursIsOK && titleExtentionIsOK && titleIsOK) {
                    if (game_tpsJeux >= tpsJeuxMin && game_tpsJeux <= tpsJeuxMax) {
                        tpsJeuxIsOK = true;
                    }
                    else {
                        tpsJeuxIsOK = false;
                    }
                }
                if (categories && tpsJeuxIsOK && nbJoueursIsOK && titleExtentionIsOK && titleIsOK) {
                    for (var _b = 0, categories_1 = categories; _b < categories_1.length; _b++) {
                        var cat = categories_1[_b];
                        if (game.categories && game.categories.length) {
                            if (!game.categories.includes(cat)) {
                                categoriesIsOK = false;
                                break;
                            }
                        }
                        else {
                            categoriesIsOK = false;
                        }
                    }
                }
                if (titleIsOK && titleExtentionIsOK && nbJoueursIsOK && tpsJeuxIsOK && categoriesIsOK) {
                    gamesResult.push(game);
                }
            }
        }
        else {
            gamesResult = this.games;
        }
        return gamesResult;
    };
    GamesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GamesService);
    return GamesService;
}());



/***/ }),

/***/ "./src/app/validators/confirmPassword.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/validators/confirmPassword.validator.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPassword", function() { return ConfirmPassword; });
var ConfirmPassword = /** @class */ (function () {
    function ConfirmPassword() {
    }
    ConfirmPassword.MatchPassword = function (control) {
        var password = control.get('password').value;
        var password2 = control.get('password2').value;
        if (password != null && password2 != null && password != password2) {
            return { validpassword: true };
        }
        return null;
    };
    return ConfirmPassword;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\dev\revol-theque-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map