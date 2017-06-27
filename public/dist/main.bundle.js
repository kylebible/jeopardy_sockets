webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_gameboard_gameboard_component__ = __webpack_require__("../../../../../src/app/gameboard/gameboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_landing_username_username_component__ = __webpack_require__("../../../../../src/app/landing/username/username.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_phoneboard_phoneboard_component__ = __webpack_require__("../../../../../src/app/phoneboard/phoneboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_trebekview_trebekview_component__ = __webpack_require__("../../../../../src/app/trebekview/trebekview.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', children: [], component: __WEBPACK_IMPORTED_MODULE_3_app_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'gameboard', component: __WEBPACK_IMPORTED_MODULE_2_app_gameboard_gameboard_component__["a" /* GameboardComponent */] },
    { path: 'username', component: __WEBPACK_IMPORTED_MODULE_4_app_landing_username_username_component__["a" /* UsernameComponent */] },
    { path: 'phoneboard', component: __WEBPACK_IMPORTED_MODULE_5_app_phoneboard_phoneboard_component__["a" /* PhoneboardComponent */] },
    { path: 'trebekview', component: __WEBPACK_IMPORTED_MODULE_6_app_trebekview_trebekview_component__["a" /* TrebekviewComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
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
    function AppComponent(_connection) {
        // console.log('at app')
        // this._connection.getSockets().subscribe(message => {
        // this.message = message
        // console.log("we did it!",this.message)
        this._connection = _connection;
        // })
    }
    AppComponent.prototype.ngOnDestroy = function () {
        // this.socket.disconnect()
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gameboard_gameboard_component__ = __webpack_require__("../../../../../src/app/gameboard/gameboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__buzzer_buzzer_component__ = __webpack_require__("../../../../../src/app/buzzer/buzzer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__capitalize_pipe__ = __webpack_require__("../../../../../src/app/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_username_username_component__ = __webpack_require__("../../../../../src/app/landing/username/username.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__phoneboard_phoneboard_component__ = __webpack_require__("../../../../../src/app/phoneboard/phoneboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__valuechoices_valuechoices_component__ = __webpack_require__("../../../../../src/app/valuechoices/valuechoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trebekview_trebekview_component__ = __webpack_require__("../../../../../src/app/trebekview/trebekview.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__gameboard_gameboard_component__["a" /* GameboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__buzzer_buzzer_component__["a" /* BuzzerComponent */],
            __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_12__question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__landing_username_username_component__["a" /* UsernameComponent */],
            __WEBPACK_IMPORTED_MODULE_14__phoneboard_phoneboard_component__["a" /* PhoneboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__valuechoices_valuechoices_component__["a" /* ValuechoicesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__trebekview_trebekview_component__["a" /* TrebekviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_connection_service__["a" /* ConnectionService */], __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/buzzer/buzzer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buzzer/buzzer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  buzzer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/buzzer/buzzer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuzzerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuzzerComponent = (function () {
    function BuzzerComponent() {
    }
    BuzzerComponent.prototype.ngOnInit = function () {
    };
    return BuzzerComponent;
}());
BuzzerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buzzer',
        template: __webpack_require__("../../../../../src/app/buzzer/buzzer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/buzzer/buzzer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BuzzerComponent);

//# sourceMappingURL=buzzer.component.js.map

/***/ }),

/***/ "../../../../../src/app/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.replace(/\b\w/g, function (symbol) { return symbol.toLocaleUpperCase(); });
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/connection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectionService = (function () {
    //connect to socket on server
    function ConnectionService(_http, _cookie, _router) {
        this._http = _http;
        this._cookie = _cookie;
        this._router = _router;
        this.port = 8000;
        // private url = 'http://localhost:' + this.port; 
        this.url = 'https://jeopardysockets.herokuapp.com';
        this.socketSubscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedData = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedGame = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedGameView = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedQuestionView = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedBuzzInStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedTurnStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedPlayers = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedGameReady = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        this.socket.on('update_game', function (response) {
            this.observedGame.next(response);
        }.bind(this));
        this.socket.on('new_game', function (response) {
            console.log('new game', response);
            this.observedGame.next(response);
        }.bind(this));
        this.socket.on('player_joined', function (response) {
            this.observedPlayers.next(response);
        }.bind(this));
        this.socket.on('show-question', function (question) {
            console.log('question to show', question);
            this.observedQuestionView.next(question);
        }.bind(this));
        this.socket.on('updateBuzzer', function (status) {
            console.log('updating buzzer, socket.on', status);
            this.observedBuzzInStatus.next(status);
        }.bind(this));
        this.socket.on('buzzIn', function (player) {
            console.log("player buzzed in", player);
        }.bind(this));
        this.socket.on('ready', function (status) {
            this.observedGameReady.next(status);
        }.bind(this));
        this.socket.on('firstTurn', function (player) {
            console.log("socket", this.socket.id);
            console.log("player's turn", player);
            if (this.socket.id == player) {
                this.observedTurnStatus.next(true);
            }
        }.bind(this));
    }
    ConnectionService.prototype.updategame = function (data) {
        this.observedGame.next(data);
    };
    ConnectionService.prototype.joinGame = function (username) {
        this.socket.emit('player_joined', { userName: username });
    };
    ConnectionService.prototype.getGame = function () {
        this.socket.emit('get_game');
    };
    //gets a random game, takes the airdate, and grabs all categories and questions from that airdate
    ConnectionService.prototype.startNewGame = function () {
        console.log('starting game');
        this.socket.emit('new_game');
    };
    ConnectionService.prototype.displayQuestion = function (question) {
        this.socket.emit('display-question', question);
    };
    ConnectionService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    ConnectionService.prototype.ngOnDestroy = function () {
        localStorage.clear();
    };
    ConnectionService.prototype.updateSocketGame = function (game) {
        this.socket.emit('update_game', game);
    };
    ConnectionService.prototype.buzzIn = function () {
        console.log('buzzing in');
        this.socket.emit('player_buzzed_in');
    };
    ConnectionService.prototype.trebekready = function () {
        this.socket.emit('trebekready');
    };
    return ConnectionService;
}());
ConnectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ConnectionService);

var _a, _b, _c;
//# sourceMappingURL=connection.service.js.map

/***/ }),

/***/ "../../../../../src/app/gameboard/gameboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    font-family: Arial, Helvetica, sans-serif\n}\n\ntable.board {\n  border-collapse: separate;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  border-spacing: 2px;\n  border-color: gray;\n}\n  \ntr {\ndisplay: table-row;\nborder-color: inherit;\n}\n\nth, td {\n    padding: 10px;\n    background-color: blue;\n    border: 1px outset blue;\n    color: rgb(255, 194, 102);\n    padding: 1px;\n    vertical-align: middle;\n}\n\nth {\n    width: 100px;\n    height: 120px;\n    font-size: medium;\n    text-align: center\n}\n\ntd {\n    font-size: 2.7em;\n    font-weight: bold;\n    vertical-align: middle;\n    height: 120px;\n    width: 100px;\n    border-radius: 10px\n}\n\ndiv a {\n    color: #FF6;\n    text-decoration: none;\n    outline: 0; \n}\n\n.question {\n    position: absolute;\n    top: 25%;\n    left: 0;\n    right: 0;\n    font-family: Korinna;\n    color: white;\n    font-size: 7vw;\n    vertical-align: middle;\n    text-align: center;\n    padding: 2vw;\n    text-shadow: 1px 3px 5px black;\n    font-weight: bold;\n}\n\n.buzzedin {\n    font-family: Korinna;\n    color: white;\n    font-size: 5vw;\n    text-align: center;\n    margin-top: 10%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gameboard/gameboard.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"board\" *ngIf=\"!text_visible\">\n  <thead>\n      <tr>\n          <th *ngFor=\"let category of game\"><span>{{category.name | capitalize}}</span>&nbsp;</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let i of arr\">\n            <td *ngFor=\"let category of game\" (click)=\"show(category.questions[i])\"><span *ngIf=\"!category.questions[i].asked\">{{(i+1)*100 | currency:'USD':true:'3.0-0'}}</span></td>\n        </tr>\n    </tbody>\n</table>\n<div *ngIf=\"text_visible\" style=\"vertical-align: middle\" (click)=\"question_clicked()\">\n    <h2 *ngIf=\"currentlyBuzzedIn\" class=\"buzzedin\">{{currentlyBuzzedIn}} buzzed in!</h2>\n    <h1 class=\"question\">{{text | uppercase}}</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gameboard/gameboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameboardComponent = (function () {
    function GameboardComponent(_connection, _cookie) {
        var _this = this;
        this._connection = _connection;
        this._cookie = _cookie;
        this.text_visible = false;
        this.status = "";
        this.text = "";
        this.game = [];
        this.arr = [0, 1, 2, 3, 4];
        this.currentlyBuzzedIn = "Kyle";
        _connection.observedGame.subscribe(function (updatedGame) { return _this.game = updatedGame; }, function (err) { return console.log(err); });
        _connection.observedQuestionView.subscribe(function (currentQuestion) {
            console.log("changing question");
            if (currentQuestion) {
                _this.show(currentQuestion);
            }
        }, function (err) { return console.log(err); });
        // console.log(parsed_game)
        // this.game = parsed_game
        // console.log(this.game)
    }
    GameboardComponent.prototype.show = function (question) {
        for (var _i = 0, _a = this.game; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category["name"] == question.category.title) {
                for (var _b = 0, _c = category["questions"]; _b < _c.length; _b++) {
                    var q = _c[_b];
                    if (q["id"] == question.id) {
                        this.question = q;
                        q["asked"] = true;
                        break;
                    }
                }
                break;
            }
        }
        this.text = this.question["question"];
        this.text_visible = true;
        this.status = "question";
        this._connection.updategame(this.game);
        this._connection.updateSocketGame(this.game);
    };
    GameboardComponent.prototype.question_clicked = function () {
        this.text = this.question["answer"];
        console.log("text visible", this.text_visible);
        console.log("status", this.status);
        if (this.status == "question") {
            this.status = "answer";
        }
        else if (this.status == "answer") {
            this.status = "";
            this.text_visible = false;
            console.log(this.text_visible);
        }
    };
    GameboardComponent.prototype.ngOnInit = function () {
    };
    return GameboardComponent;
}());
GameboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gameboard',
        template: __webpack_require__("../../../../../src/app/gameboard/gameboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gameboard/gameboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object])
], GameboardComponent);

var _a, _b;
//# sourceMappingURL=gameboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    font-family: Jeopardy;\n    color: white;\n    font-size: 10vw;\n}\n\n.question {\n    font-family: Korinna;\n    color: white;\n}\n\n.option {\n    font-size: 5vw;\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1>Jeopardy Frenzy!</h1>\n  <a href=\"javascript:void(0);\" class=\"question option\" (click)=\"getGame()\" *ngIf=\"!game\">Start a new game</a><br>\n  <a href=\"javascript:void(0);\" class=\"question option\" [routerLink]='[\"/username\"]'>Join a game</a><br>\n  <a href=\"javascript:void(0);\" class=\"question option\" [routerLink]='[\"/trebekview\"]'>Be Alex Trebek</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    function LandingComponent(_connection, _router) {
        var _this = this;
        this._connection = _connection;
        this._router = _router;
        this.game = [];
        _connection.observedGame.subscribe(function (currentGame) { return _this.game = currentGame; }, function (err) { return console.log(err); });
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getGame = function () {
        console.log("get game");
        this._connection.startNewGame();
        this._router.navigate(['/gameboard']);
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/username/username.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question {\n    font-family: Korinna;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/username/username.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container question\">\n  <form (submit)=\"joinGame()\" onsubmit=\"return false\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Username</label>\n      <input name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Enter username\" [(ngModel)]=\"username\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/username/username.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsernameComponent = (function () {
    function UsernameComponent(_connection, _router) {
        this._connection = _connection;
        this._router = _router;
        this.username = "";
    }
    UsernameComponent.prototype.ngOnInit = function () {
    };
    UsernameComponent.prototype.joinGame = function () {
        console.log('join game');
        this._connection.joinGame(this.username);
        this._connection.getGame();
        this._router.navigate(['/phoneboard']);
    };
    return UsernameComponent;
}());
UsernameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-username',
        template: __webpack_require__("../../../../../src/app/landing/username/username.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/username/username.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UsernameComponent);

var _a, _b;
//# sourceMappingURL=username.component.js.map

/***/ }),

/***/ "../../../../../src/app/phoneboard/phoneboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question {\n    font-family: Korinna;\n    color: white;\n}\n\n.buzzer {\n    height: 100%;\n    width: 100%;\n    font-size: 15vw;\n}\n\n#container {\n    height: 100%;\n    width: 100%;\n    background-color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/phoneboard/phoneboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ready\">\n    <div *ngIf=\"game\">\n      <div *ngIf=\"myTurn && !buzzermode\">\n      <div *ngIf=\"questions.length<1\"> \n        <div *ngFor=\"let category of game\">\n          <button type=\"buton\" class=\"btn btn-primary col-12\" (click)=\"choose(category)\">{{category.name}}</button><br>\n        </div>\n      </div>\n      <div *ngIf=\"questions.length>0\">\n        <div *ngFor=\"let question of questions\">\n          <button type=\"buton\" class=\"btn btn-primary col-12\" (click)=\"valueChosen(question)\"><span *ngIf=\"!question.asked\">{{question.value | currency:'USD':true:'3.0-0'}}</span><span *ngIf=\"question.asked\">Question Asked!</span></button><br>\n        </div>\n      </div>\n      </div>\n    </div>\n<div *ngIf=\"!game\">\n  <h1 class=\"question text-center\">Waiting for game to start</h1>\n</div>\n</div>\n<div *ngIf=\"!ready\">\n  <h1 class=\"question text-center\">Waiting for other Players!</h1>\n</div>\n<div *ngIf=\"buzzermode\" id=\"container\" class=\"row\">\n  <button type=\"button\" class=\"buzzer btn btn-primary\" (click)=\"buzzin()\">Buzz In!</button>\n</div>\n<div *ngIf=\"!myTurn && ready\">\n  <h1 class=\"question text-center\">Not your turn!</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/phoneboard/phoneboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneboardComponent = (function () {
    function PhoneboardComponent(_router, _connection) {
        var _this = this;
        this._router = _router;
        this._connection = _connection;
        this.game = [];
        this.questions = [];
        this.buzzermode = false;
        this.myTurn = false;
        this.ready = false;
        _connection.observedGame.subscribe(function (updatedGame) { _this.game = updatedGame; }, function (err) { return console.log(err); });
        _connection.observedBuzzInStatus.subscribe(function (currentBuzzerMode) { _this.buzzermode = currentBuzzerMode; console.log("buzzer mode in phone vies", _this.buzzermode); }, function (err) { return console.log(err); });
        _connection.observedGameReady.subscribe(function (currentReadiness) { _this.ready = currentReadiness; }, function (err) { return console.log(err); });
        _connection.observedTurnStatus.subscribe(function (currentTurnStatus) { _this.myTurn = currentTurnStatus; }, function (err) { return console.log(err); });
    }
    PhoneboardComponent.prototype.ngOnInit = function () {
    };
    PhoneboardComponent.prototype.choose = function (category) {
        this.questions = category.questions;
    };
    PhoneboardComponent.prototype.valueChosen = function (question) {
        this._connection.displayQuestion(question);
        this.questions = [];
        this._connection.observedBuzzInStatus.next(true);
    };
    PhoneboardComponent.prototype.buzzin = function () {
        this._connection.buzzIn();
    };
    return PhoneboardComponent;
}());
PhoneboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-phoneboard',
        template: __webpack_require__("../../../../../src/app/phoneboard/phoneboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/phoneboard/phoneboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_connection_service__["a" /* ConnectionService */]) === "function" && _b || Object])
], PhoneboardComponent);

var _a, _b;
//# sourceMappingURL=phoneboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  question works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionComponent = (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question',
        template: __webpack_require__("../../../../../src/app/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuestionComponent);

//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/trebekview/trebekview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question {\n    font-family: Korinna;\n    color: white;\n    font-size: 10vw;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trebekview/trebekview.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"question text-center\">Trebek View</h1>\n<div class=\"container\" style=\"margin-top: 70%\">\n  <h1 class=\"question text-center\">{{numberPlayers}} players waiting</h1>\n  <h1 class=\"question text-center\" (click)=\"trebekready()\">Ready to start?</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/trebekview/trebekview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrebekviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrebekviewComponent = (function () {
    //this.numberPlayers = Object.keys(this.players).length
    function TrebekviewComponent(_connection) {
        var _this = this;
        this._connection = _connection;
        this.players = {};
        this.numberPlayers = 0;
        this._connection.observedPlayers.subscribe(function (currentPlayers) {
            _this.players = currentPlayers;
            if (_this.players) {
                _this.numberPlayers = Object.keys(_this.players).length;
            }
        }, function (err) { return console.log(err); });
    }
    TrebekviewComponent.prototype.ngOnInit = function () {
    };
    TrebekviewComponent.prototype.trebekready = function () {
        console.log('trebekready');
        this._connection.trebekready();
    };
    return TrebekviewComponent;
}());
TrebekviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-trebekview',
        template: __webpack_require__("../../../../../src/app/trebekview/trebekview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trebekview/trebekview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_connection_service__["a" /* ConnectionService */]) === "function" && _a || Object])
], TrebekviewComponent);

var _a;
//# sourceMappingURL=trebekview.component.js.map

/***/ }),

/***/ "../../../../../src/app/valuechoices/valuechoices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/valuechoices/valuechoices.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  valuechoices works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/valuechoices/valuechoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuechoicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValuechoicesComponent = (function () {
    function ValuechoicesComponent() {
    }
    ValuechoicesComponent.prototype.ngOnInit = function () {
    };
    return ValuechoicesComponent;
}());
ValuechoicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-valuechoices',
        template: __webpack_require__("../../../../../src/app/valuechoices/valuechoices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/valuechoices/valuechoices.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ValuechoicesComponent);

//# sourceMappingURL=valuechoices.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map