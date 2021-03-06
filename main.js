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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Tableau des resultats</h1>\n\n<div style=\"text-align: center\" *ngFor=\"let resultat of resultats\">\n  {{resultat.equipe1}} {{resultat.score1}} - {{resultat.score2}} {{resultat.equipe2}}\n</div>\n\n<div style=\"text-align: left\"> Nb victoires J1 : {{ vicJ1 }}</div>\n<div style=\"text-align: right\"> Nb victoires J2 : {{ vicJ2 }}</div>\n\n<div style=\"text-align: center\"> Nb de matchs restants : {{ matchRestants }}</div>\n\n<br>\n<br>\n<div> Equipes J1 restantes : {{ leftTeamJ1 }}</div>\n\n<br>\n<br>\n<div> Equipes J2 restantes : {{ leftTeamJ2 }}</div>\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_SampleJson_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/SampleJson.json */ "./src/assets/SampleJson.json");
var _assets_SampleJson_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/SampleJson.json */ "./src/assets/SampleJson.json", 1);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.resultats = undefined;
        this.teams = ['Usa', 'Mexique', 'Colombie', 'Bolivie', 'Hollande', 'Belgique', 'Irlande',
            'Espagne', 'Maroc', 'Brésil', 'Argentine', 'Allemagne', 'Suisse', 'Nigeria',
            'Italie', 'Cameroun', 'Norvège', 'Suède', 'Bulgarie', 'Roumanie', 'Grèce',
            'Arabie Saoudite', 'Russie', 'Corée', 'Japon', 'France', 'Angleterre', 'Uruguay'];
        this.vicJ1 = 0;
        this.vicJ2 = 0;
        this.teamJ1 = [];
        this.teamJ2 = [];
        this.leftTeamJ1 = [];
        this.leftTeamJ2 = [];
        this.matchRestants = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.resultats = _assets_SampleJson_json__WEBPACK_IMPORTED_MODULE_2__.resultats;
        console.log(this.resultats);
        console.log(this.teams);
        this.getVictory();
        this.getTeams();
        this.getNbmatchLeft();
    };
    AppComponent.prototype.getVictory = function () {
        for (var i = 0; i < this.resultats.length; i++) {
            if (this.resultats[i].score1 > this.resultats[i].score2) {
                this.vicJ1 += 1;
            }
            else {
                this.vicJ2 += 1;
            }
        }
        console.log('nb victoire j1 : ' + this.vicJ1);
        console.log('nb victoire j2 : ' + this.vicJ2);
    };
    AppComponent.prototype.getTeams = function () {
        for (var i = 0; i < this.resultats.length; i++) {
            this.teamJ1.push(this.resultats[i].equipe1);
            this.teamJ2.push(this.resultats[i].equipe2);
        }
        console.log(this.teamJ1);
        console.log(this.teamJ2);
        for (var i = 0; i < this.teams.length; i++) {
            if (!this.teamJ1.includes(this.teams[i])) {
                this.leftTeamJ1.push(this.teams[i]);
            }
            if (!this.teamJ2.includes(this.teams[i])) {
                this.leftTeamJ2.push(this.teams[i]);
            }
        }
        console.log(this.teams.length);
        console.log(this.leftTeamJ1);
        console.log(this.leftTeamJ2);
    };
    AppComponent.prototype.getNbmatchLeft = function () {
        this.matchRestants = this.teams.length - (this.vicJ1 + this.vicJ2);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/assets/SampleJson.json":
/*!************************************!*\
  !*** ./src/assets/SampleJson.json ***!
  \************************************/
/*! exports provided: resultats, default */
/***/ (function(module) {

module.exports = {"resultats":[{"id":1,"equipe1":"Brésil","score1":0,"equipe2":"Allemagne","score2":1},{"id":2,"equipe1":"Allemagne","score1":0,"equipe2":"Brésil","score2":3},{"id":3,"equipe1":"France","score1":2,"equipe2":"Argentine","score2":3},{"id":4,"equipe1":"Hollande","score1":1,"equipe2":"Suède","score2":3},{"id":5,"equipe1":"Suède","score1":3,"equipe2":"Mexique","score2":2},{"id":6,"equipe1":"Angleterre","score1":3,"equipe2":"France","score2":1},{"id":7,"equipe1":"Italie","score1":1,"equipe2":"Belgique","score2":2},{"id":8,"equipe1":"Nigeria","score1":0,"equipe2":"Hollande","score2":1},{"id":9,"equipe1":"Bulgarie","score1":2,"equipe2":"Usa","score2":3},{"id":10,"equipe1":"Roumanie","score1":2,"equipe2":"Colombie","score2":1},{"id":11,"equipe1":"Irlande","score1":2,"equipe2":"Uruguay","score2":0},{"id":12,"equipe1":"Argentine","score1":2,"equipe2":"Italie","score2":1},{"id":13,"equipe1":"Colombie","score1":1,"equipe2":"Nigeria","score2":0},{"id":14,"equipe1":"Norvège","score1":1,"equipe2":"Suisse","score2":5},{"id":15,"equipe1":"Uruguay","score1":1,"equipe2":"Espagne","score2":3},{"id":16,"equipe1":"Espagne","score1":0,"equipe2":"Russie","score2":1},{"id":17,"equipe1":"Russie","score1":0,"equipe2":"Bolivie","score2":3},{"id":18,"equipe1":"Belgique","score1":2,"equipe2":"Roumanie","score2":1},{"id":19,"equipe1":"Usa","score1":3,"equipe2":"Angleterre","score2":1},{"id":20,"equipe1":"Mexique","score1":2,"equipe2":"Irlande","score2":1},{"id":21,"equipe1":"Japon","score1":0,"equipe2":"Cameroun","score2":2},{"id":22,"equipe1":"Maroc","score1":1,"equipe2":"Grèce","score2":3},{"id":23,"equipe1":"Suisse","score1":2,"equipe2":"Norvège","score2":1},{"id":24,"equipe1":"Grèce","score1":5,"equipe2":"Japon","score2":0},{"id":25,"equipe1":"Cameroun","score1":1,"equipe2":"Bulgarie","score2":3},{"id":26,"equipe1":"Arabie Saoudite","score1":1,"equipe2":"Corée","score2":4}]};

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\X185436\Downloads\Nouveau dossier\projetCafe-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map