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
    { path: 'trebekview', component: __WEBPACK_IMPORTED_MODULE_6_app_trebekview_trebekview_component__["a" /* TrebekviewComponent */] },
    { path: '**', redirectTo: '' }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_validation__);
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
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_app_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_validation__["CustomFormsModule"]
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
    //todo on connect give new player game info
    function ConnectionService(_http, _cookie, _router) {
        var _this = this;
        this._http = _http;
        this._cookie = _cookie;
        this._router = _router;
        this.port = 8000;
        this.url = 'http://localhost:' + this.port;
        this.socketSubscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedData = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedGame = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedGameView = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedQuestionView = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedBuzzInStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedTurnStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedPlayers = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedGameReady = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedBuzzedInPlayer = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedPlayersTurn = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedEligiblePlayers = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedAnswerStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedCurrentPlayer = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedTrebekPresence = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedDJStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedDJQuestion = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedDJWager = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedGiveUpSound = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.observedQuestionView.subscribe(function (currentQuestion) { _this.question = currentQuestion; }, function (err) { return console.log(err); });
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        this.socket.on('update_game', function (response) {
            this.observedGame.next(response);
        }.bind(this));
        this.socket.on('syncGame', function (game) {
            this.observedGame.next(game.game);
            this.observedPlayers.next(game.players);
        }.bind(this));
        this.socket.on('new_game', function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var i = response_1[_i];
                for (var _a = 0, _b = i["questions"]; _a < _b.length; _a++) {
                    var j = _b[_a];
                    console.log(i["name"], j["value"], j["doubleJeopardy"]);
                }
            }
            console.log('new game', response);
            this.observedGame.next(response);
        }.bind(this));
        this.socket.on('player_joined', function (response) {
            console.log(response);
            var player = response[this.socket.id];
            console.log("player", player);
            this.observedCurrentPlayer.next(player);
            this.observedPlayers.next(response);
            console.log(this.observedPlayers.value);
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
            console.log('buzzed in player', player);
            this.buzzedinplayer = player;
            if (player.id == this.socket.id) {
                this.observedBuzzedInPlayer.next("You");
            }
            else {
                this.observedBuzzedInPlayer.next(player.userName);
            }
        }.bind(this));
        this.socket.on('ready', function (status) {
            this.observedGameReady.next(status);
        }.bind(this));
        this.socket.on('firstTurn', function (player) {
            console.log("socket", this.socket.id);
            console.log("player's turn", player);
            if (this.socket.id == player.id) {
                this.observedTurnStatus.next(true);
            }
            console.log(player);
            this.observedPlayersTurn.next(player.userName);
        }.bind(this));
        this.socket.on('correct-Answer', function (player) {
            if (this.socket.id == player.id) {
                this.observedTurnStatus.next(true);
            }
            else {
                this.observedTurnStatus.next(false);
            }
            console.log("question value: ", this.question, typeof this.question['value']);
            console.log("player score before: ", this.observedPlayers['value']);
            // console.log("question value: ",this.observedQuestionView['value']['value'])
            // console.log("player score before: ",this.observedPlayers)
            this.observedPlayers["value"][player.id]["score"] += this.question['value'];
            console.log("player score after", this.observedPlayers['value']);
            this.updateScores(this.observedPlayers.value);
            this.observedPlayersTurn.next(player.userName);
            this.observedBuzzedInPlayer.next("");
            this.observedBuzzInStatus.next(false);
            this.buzzedinplayer = null;
            this.observedQuestionView.next(null);
            this.observedAnswerStatus.next(true);
            this.observedDJStatus.next(false);
        }.bind(this));
        this.socket.on('eligiblePlayers', function (players) {
            console.log("players", players);
            this.observedEligiblePlayers.next(players);
        }.bind(this));
        this.socket.on('playerIncorrect', function (players) {
            console.log("incorrect players", this.observedPlayers["value"]);
            console.log("incorrect player", this.buzzedinplayer);
            this.observedPlayers["value"][this.buzzedinplayer["id"]]["score"] -= this.question['value'];
            // console.log(this.observedPlayers["value"][this.buzzedinplayer["id"]]["score"])
            console.log("incorrect answer. Players Left: ", players);
            if (Object.keys(players).length < 1) {
                console.log("no players left");
                this.observedQuestionView.next(null);
                this.observedAnswerStatus.next(true);
                this.observedBuzzInStatus.next(false);
                this.observedDJStatus.next(false);
            }
            else if (this.socket.id in players) {
                this.observedBuzzInStatus.next(true);
                this.observedAnswerStatus.next(true);
            }
            else {
                this.observedBuzzInStatus.next(true);
                this.observedAnswerStatus.next(false);
            }
            this.observedBuzzedInPlayer.next("");
            this.buzzedinplayer = null;
        }.bind(this));
        this.socket.on('updatePlayers', function (updatedPlayers) {
            this.observedPlayers.next(updatedPlayers);
            this.observedCurrentPlayer.next(updatedPlayers[this.socket.id]);
        }.bind(this));
        this.socket.on('trebekPresent', function () {
            this.observedTrebekPresence.next(true);
        }.bind(this));
        this.socket.on('giveUp', function () {
            this.observedQuestionView.next(null);
            this.observedAnswerStatus.next(true);
            this.observedBuzzInStatus.next(false);
            this.observedGiveUpSound.next(true);
        }.bind(this));
        this.socket.on('doubleJeopardy', function (question) {
            this.observedDJStatus.next(true);
            this.observedDJQuestion.next(question);
        }.bind(this));
        this.socket.on('DJWager', function (wager) {
            this.observedDJWager.next(wager);
        }.bind(this));
        this.socket.on('resetServer', function () {
            console.log("in socket");
            window.location.replace('/');
        }.bind(this));
    }
    ConnectionService.prototype.updategame = function (data) {
        this.observedGame.next(data);
    };
    ConnectionService.prototype.updateScores = function (players) {
        this.socket.emit('updateScores', players);
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
    ConnectionService.prototype.resetServer = function () {
        console.log('resetting');
        this.socket.emit('resetServer');
    };
    ConnectionService.prototype.playerCorrect = function () {
        console.log('emitting playercorrect to server');
        this.socket.emit('correctAnswer', this.buzzedinplayer);
        this.resetEligiblePlayers();
    };
    ConnectionService.prototype.playerIncorrect = function () {
        console.log("buzzed in guy", this.buzzedinplayer);
        this.socket.emit('playerIncorrect', this.buzzedinplayer["id"]);
    };
    ConnectionService.prototype.resetEligiblePlayers = function () {
        this.socket.emit('resetEligiblePlayers');
    };
    ConnectionService.prototype.trebekPresent = function () {
        this.socket.emit('trebekPresent');
    };
    ConnectionService.prototype.doubleJeopardy = function (question) {
        this.socket.emit('doubleJeopardy', question);
    };
    ConnectionService.prototype.submitDJWager = function (wager) {
        this.socket.emit('DJWager', wager);
    };
    ConnectionService.prototype.giveUp = function () {
        this.socket.emit('giveUp');
        this.socket.emit('resetEligiblePlayers');
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
exports.push([module.i, "*{\n    font-family: Gameboard\n}\n\ntable.board {\n  border-collapse: separate;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  border-spacing: 2px;\n  border-color: black;\n  table-layout: fixed\n}\n  \ntr {\ndisplay: table-row;\nborder-color: inherit;\n}\n\n.overflow {\n    height: 100%\n}\n\nth, td {\n    background-color: blue;\n    border: 1px outset blue;\n    color: rgb(255, 194, 102);\n    vertical-align: middle;\n    text-shadow: 2px 4px 2px black;\n    empty-cells: show;\n}\n\nth {\n    width: 16.66667%;\n    font-size: 2vw;\n    color: white;\n    text-align: center\n}\n\ntd {\n    font-size: 5vmax;\n    font-weight: bold;\n    vertical-align: middle;\n    width: 16.66667%;\n}\n\ndiv a {\n    color: #FF6;\n    text-decoration: none;\n    outline: 0; \n}\n\n.scores {\n    font-family: Gameboard;\n    color: white;\n    text-shadow: 1px 3px 5px black;\n    display: inline-block;\n    margin: 0 20px;\n}\n\n.question {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    font-family: Korinna;\n    color: white;\n    font-size: 7vw;\n    font-size: 9vh;\n    vertical-align: middle;\n    text-align: center;\n    padding: 2vw;\n    text-shadow: 1px 3px 5px black;\n    font-weight: bold;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\n.buzzedin {\n    font-family: Korinna;\n    color: white;\n    font-size: 5vw;\n    text-align: center;\n    margin-top: 10%\n}\n\n.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gameboard/gameboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!text_visible\" class=\"text-center\">\n    <h2 class=\"scores\" *ngFor=\"let key of playersArr\">{{players[key].userName}}: {{players[key].score | currency:'USD':true:'1.0-0'}}</h2>\n</div>\n<div class=\"overflow\">\n<table class=\"board\" *ngIf=\"!text_visible\">\n  <thead>\n      <tr>\n          <th *ngFor=\"let category of game\"><span>{{category.name | uppercase}}</span>&nbsp;</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let i of arr\">\n            <td *ngFor=\"let category of game\" (click)=\"show(category.questions[i])\"><span *ngIf=\"!category.questions[i].asked\">{{(i+1)*100 | currency:'USD':true:'3.0-0'}}</span></td>\n    </tbody>\n</table>\n</div>\n<div *ngIf=\"text_visible\" (click)=\"question_clicked()\">\n    <h2 *ngIf=\"buzzedInPlayer\" class=\"buzzedin\">{{buzzedInPlayer}} buzzed in!</h2>\n    <h1 class=\"question\" [innerHTML]=\"text | uppercase\"></h1>\n</div>\n"

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
        this.buzzedInPlayer = "";
        this.playersArr = [];
        this.audio = new Audio();
        _connection.observedGame.subscribe(function (updatedGame) { return _this.game = updatedGame; }, function (err) { return console.log(err); });
        _connection.observedQuestionView.subscribe(function (currentQuestion) {
            console.log("changing question");
            if (currentQuestion) {
                _this.show(currentQuestion);
            }
            else if (_this.text_visible) {
                _this.question_clicked();
            }
        }, function (err) { return console.log(err); });
        _connection.observedBuzzedInPlayer.subscribe(function (currentlyBuzzedIn) { console.log('currentlybuzzedin', currentlyBuzzedIn); if (currentlyBuzzedIn) {
            _this.buzzedInPlayer = currentlyBuzzedIn;
        }
        else {
            _this.buzzedInPlayer = "";
        } console.log('currentlybuzzedin', currentlyBuzzedIn); });
        _connection.observedPlayers.subscribe(function (currentPlayers) { if (currentPlayers) {
            _this.players = currentPlayers;
            _this.playersArr = Object.keys(_this.players);
            console.log(_this.players);
        } }, function (err) { return console.log(err); });
        _connection.observedDJStatus.subscribe(function (status) { if (status) {
            _this.text = "DOUBLE JEOPARDY!!";
            _this.text_visible = true;
            _this.playDoubleJeopardyAudio();
        } });
        _connection.observedGiveUpSound.subscribe(function (status) { if (status) {
            _this.playGiveUp();
        } });
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
    GameboardComponent.prototype.removeAnswer = function () {
        this.status = "";
        this.text_visible = false;
        console.log("text visible", this.text_visible);
    };
    GameboardComponent.prototype.question_clicked = function () {
        this.text = this.question["answer"];
        console.log("text visible", this.text_visible);
        console.log("status", this.status);
        if (this.status == "question") {
            this.status = "answer";
        }
        var self = this;
        setTimeout(function () {
            console.log(self);
            self.removeAnswer();
            self._connection.resetEligiblePlayers();
        }, 2000);
    };
    GameboardComponent.prototype.playDoubleJeopardyAudio = function () {
        this.audio.src = "./../assets/jdaily2x.wav";
        this.audio.load();
        this.audio.play();
    };
    GameboardComponent.prototype.playGiveUp = function () {
        this.audio.src = "./../assets/Times up.mp3";
        this.audio.load();
        this.audio.play();
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
exports.push([module.i, "h1 {\n    font-family: Jeopardy;\n    color: white;\n    font-size: 10vw;\n    margin-top: 10%;\n    text-shadow: 1px 3px 5px black;\n}\n\n@media screen and (max-width: 600px) {\n  #start-game {\n    visibility: hidden;\n    clear: both;\n    float: left;\n    margin: 10px auto 5px 20px;\n    width: 28%;\n    display: none;\n  }\n}\n\n.question {\n    font-family: Korinna;\n    color: white;\n    text-shadow: 1px 3px 5px black;\n}\n\n.option {\n    font-size: 5vw;\n    text-decoration: none;\n}\n\n.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container centered text-center\">\n  <h1>Jeoparty</h1>\n  <a href=\"javascript:void(0);\" class=\"question option\" id=\"start-game\" (click)=\"getGame()\" *ngIf=\"!game\">Start a new game</a><br>\n  <a href=\"javascript:void(0);\" class=\"question option\" [routerLink]='[\"/username\"]' *ngIf=\"game && numberPlayers<=3\">Join game</a><br>\n  <a href=\"javascript:void(0);\" class=\"question option\" [routerLink]='[\"/trebekview\"]'*ngIf=\"game && !trebekPresence\" (click)=\"trebekPresent()\" >Be Alex Trebek</a>\n</div>"

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
        this.numberPlayers = 0;
        this.trebekPresence = false;
        this.audio = new Audio();
        _connection.observedGame.subscribe(function (currentGame) { return _this.game = currentGame; }, function (err) { return console.log(err); });
        _connection.observedPlayers.subscribe(function (currentPlayers) {
            _this.players = currentPlayers;
            if (_this.players) {
                _this.numberPlayers = Object.keys(_this.players).length;
            }
        }, function (err) { return console.log(err); });
        _connection.observedTrebekPresence.subscribe(function (presence) { if (presence) {
            _this.trebekPresence = true;
        } }, function (err) { return console.log(err); });
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getGame = function () {
        this.audio.src = "./../assets/Jeopardy Board SMS.mp3";
        this.audio.load();
        this.audio.play();
        console.log("get game");
        this._connection.startNewGame();
        this._router.navigate(['/gameboard']);
    };
    LandingComponent.prototype.trebekPresent = function () {
        this._connection.trebekPresent();
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
exports.push([module.i, ".question {\n    font-family: Korinna;\n    color: white;\n}\n\nbutton {\n    font-family: Korinna;\n}\n\n.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/username/username.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container centered question\">\n  <form #userform=\"ngForm\" (submit)=\"joinGame()\" onsubmit=\"return false\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Username</label>\n      <input name=\"user\" type=\"text\" class=\"form-control\" required minlength=\"2\" maxlength=\"10\" placeholder=\"Enter username\" [(ngModel)]=\"username\" #user=\"ngModel\">\n      <div class=\"question text-center\" *ngIf='user.errors && (user.touched || user.submitted)'>\n        <p class=\"question text-center\" *ngIf='user.errors?.minlength'>Username must be at least 2 characters long!</p>\n        <p class=\"question text-center\" *ngIf='user.errors?.maxlength'>Username can not be more than 10 characters long!</p>\n      </div>\n    </div>\n    <button [disabled]=\"!userform.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>"

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
exports.push([module.i, ".question {\n    font-family: Korinna;\n    color: white;\n    text-shadow: 1px 3px 5px black;\n}\n\n.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.buzzer {\n    height: 100%;\n    width: 100%;\n    font-size: 15vw;\n}\n\n#container {\n    height: 100%;\n    width: 100%;\n    background-color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/phoneboard/phoneboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n<div *ngIf=\"!buzzermode && player\">\n  <h1 class=\"question text-center\">Score: {{player.score}}</h1>\n</div>\n<div *ngIf=\"ready\">\n    <div *ngIf=\"game\">\n      <div *ngIf=\"myTurn && !myDJMode && !buzzermode && buzzedInPlayer.length<1\">\n        <h1 class=\"question text-center\">Pick a Clue!</h1>\n      </div>\n    </div>\n<div *ngIf=\"!game\">\n  <h1 class=\"question text-center\">Waiting for game to start</h1>\n</div>\n</div>\n<div *ngIf=\"!ready\">\n  <h1 class=\"question text-center\">Waiting for other Players!</h1>\n</div>\n<div *ngIf=\"!myTurn && ready && !buzzermode && canAnswer\">\n  <h1 class=\"question text-center\">Not your turn!</h1>\n</div>\n<div *ngIf=\"!canAnswer && buzzedInPlayer.length<1\">\n  <h1 class=\"question text-center\">You've already buzzed in!</h1>\n</div>\n<div *ngIf=\"buzzedInPlayer.length>0 && !DJMode && !myDJMode\">\n  <h1 class=\"question text-center\">{{buzzedInPlayer}} Buzzed In!</h1>\n</div>\n<div *ngIf=\"myDJMode && !buzzermode && buzzedInPlayer.length<1\">\n  <h1 class=\"question text-center\">DOUBLE JEOPARDY!</h1>\n  <form #wagerForm=\"ngForm\"(submit)=\"submitDJWager()\" onsubmit=\"return false\">\n    <div class=\"form-group\">\n      <label class=\"question text-center\">ENTER A WAGER FROM 100 TO {{maxWager}}</label>\n      <input name=\"wagerinput\" type=\"number\" placeholder=\"Enter your wager here!\" min=\"100\" [max]=\"maxWager\" required class=\"form-control\" [(ngModel)]=\"wager\" #wagerinput=\"ngModel\">\n      <div class=\"question\" *ngIf='wagerinput.errors && (wagerinput.touched || wagerForm.submitted)'>\n        <p class=\"question\" *ngIf='wagerinput.errors?.min || wagerinput.errors?.max'>WAGER MUST BE BETWEEN 100 & {{maxWager}}</p>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!wagerForm.valid\">Submit</button>\n  </form>\n</div>\n</div>\n<div *ngIf=\"buzzermode && !DJMode && canAnswer\" id=\"container\" class=\"row\">\n  <button type=\"button\" class=\"buzzer btn btn-primary text-center\" (click)=\"buzzin()\">Buzz In!</button>\n</div>\n<!--<form #wagerForm=\"ngForm\"(submit)=\"submitDJWager()\" onsubmit=\"return false\">\n    <div class=\"form-group\">\n      <label class=\"question text-center\">ENTER A WAGER FROM 100 TO {{maxWager}}</label>\n      <input name=\"wagerinput\" type=\"number\" placeholder=\"Enter your wager here!\" min=\"100\" [max]=\"maxWager\" class=\"form-control\" [(ngModel)]=\"wager\" #wagerinput=\"ngModel\">\n      <p class=\"question\" *ngIf='wagerinput.errors.min && wagerinput.errors.max'>WAGER MUST BE BETWEEN 100 & {{maxWager}}</p>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!wagerForm.valid\">Submit</button>\n  </form>-->\n  <!--<p>current score: {{player.score}}</p>\n  <p>current question: {{question | json}}\n  <p>buzzer mode: {{buzzermode}}</p>\n  <p>my turn: {{myTurn}}</p>\n  <p>ready: {{ready}} </p>\n  <p>buzzed in player: {{buzzedInPlayer}} </p>\n  <p>can answer?: {{canAnswer}} </p>-->\n"

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
        this.buzzedInPlayer = "";
        this.canAnswer = true;
        this.DJMode = false;
        this.myDJMode = false;
        this.maxWager = 500;
        _connection.observedGame.subscribe(function (updatedGame) { _this.game = updatedGame; }, function (err) { return console.log(err); });
        _connection.observedQuestionView.subscribe(function (currentQuestion) { return _this.question = currentQuestion; }, function (err) { return console.log(err); });
        _connection.observedBuzzInStatus.subscribe(function (currentBuzzerMode) { _this.buzzermode = currentBuzzerMode; if (_this.myDJMode && _this.buzzermode) {
            _this.buzzin();
        } }, function (err) { return console.log(err); });
        _connection.observedGameReady.subscribe(function (currentReadiness) { if (currentReadiness != null) {
            _this.ready = currentReadiness;
        } }, function (err) { return console.log(err); });
        _connection.observedTurnStatus.subscribe(function (currentTurnStatus) { _this.myTurn = currentTurnStatus; }, function (err) { return console.log(err); });
        _connection.observedBuzzedInPlayer.subscribe(function (currentlyBuzzedIn) { if (currentlyBuzzedIn) {
            _this.buzzedInPlayer = currentlyBuzzedIn;
        }
        else {
            _this.buzzedInPlayer = "";
        } }, function (err) { return console.log(err); });
        _connection.observedAnswerStatus.subscribe(function (currentAnswerStatus) { if (currentAnswerStatus != null) {
            _this.canAnswer = currentAnswerStatus;
        } ; console.log("cananswer", _this.canAnswer); }, function (err) { return console.log(err); });
        _connection.observedCurrentPlayer.subscribe(function (currentPlayer) { if (currentPlayer) {
            _this.player = currentPlayer;
            if (_this.player.score < 500) {
                _this.maxWager = 500;
            }
            else {
                _this.maxWager = _this.player.score;
            }
        } }, function (err) { return console.log(err); });
        _connection.observedDJStatus.subscribe(function (status) { if (status != null && _this.myTurn) {
            _this.myDJMode = status;
        }
        else if (status != null) {
            _this.DJMode = status;
        } });
        //TO DO: resolve current answer status when question resets
    }
    PhoneboardComponent.prototype.ngOnInit = function () {
    };
    PhoneboardComponent.prototype.choose = function (category) {
        this.questions = category.questions;
    };
    PhoneboardComponent.prototype.submitDJWager = function () {
        this._connection.submitDJWager(this.wager);
        this.wager = null;
    };
    PhoneboardComponent.prototype.buzzin = function () {
        this._connection.buzzIn();
        this.canAnswer = false;
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
exports.push([module.i, ".question {\n    font-family: Korinna;\n    color: white;\n    font-size: 10vw;\n    text-shadow: 1px 3px 5px black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trebekview/trebekview.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"question text-center\">Trebek View</h1>\n<h1 class=\"question text-center\" (click)=\"resetServer()\">Reset Server</h1>\n<div class=\"container\" style=\"margin-top: 70%\" *ngIf=\"!ready\">\n  <h1 class=\"question text-center\">{{numberPlayers}} players waiting</h1>\n  <h1 class=\"question text-center\" *ngIf=\"numberPlayers>=2\" (click)=\"trebekready()\">Ready to start?</h1>\n</div>\n<div class=\"container\" *ngIf=\"ready && buzzedInPlayer.length<1\">\n  <!--buzzer mode{{buzzerMode}} bip {{buzzedInPlayer}} {{questions | json}}-->\n    <div *ngIf=\"game\">\n      <div *ngIf=\"!buzzerMode && !DJMode&& buzzedInPlayer.length<1\">\n      <div *ngIf=\"questions.length<1\"> \n        <div *ngFor=\"let category of game\">\n          <button type=\"buton\" class=\"btn btn-primary col-12\" (click)=\"choose(category)\">{{category.name | uppercase}}</button><br>\n        </div>\n      </div>\n      <div *ngIf=\"questions.length>0\">\n        <h3 class=\"question text-center\" (click)=\"goback()\">GO BACK?</h3>\n        <div *ngFor=\"let question of questions; let i = index\">\n          <button type=\"buton\" class=\"btn btn-primary col-12\" (click)=\"valueChosen(question,(i+1)*100)\" [disabled]=\"question.asked\"><span *ngIf=\"!question.asked\">{{(i+1)*100 | currency:'USD':true:'3.0-0'}}</span><span *ngIf=\"question.asked\">Question Asked!</span></button><br>\n        </div>\n      </div>\n      </div>\n    </div>\n  <br><h1 class=\"question text-center\" *ngIf=\"answer.length>1\">{{answer | uppercase}}</h1><br><br>\n  <h1 class=\"question text-center\">{{playerTurn | uppercase}}'s turn</h1>\n  <h1 class=\"question text-center\" *ngIf=\"DJMode\">DOUBLE JEOPARDY</h1>\n  <h1 class=\"question text-center\" (click)=\"giveUp()\" *ngIf=\"buzzerMode\">Give Up?</h1>\n</div>\n\n<div class=\"container\" *ngIf=\"ready && buzzedInPlayer.length>0\">\n  <br><h1 class=\"question text-center\">{{answer}}</h1><br><br>\n  <h1 class=\"question text-center\">{{buzzedInPlayer}} buzzed In!</h1>\n  <h1 class=\"question text-center\" (click)=\"correct()\">Correct Answer?</h1>\n  <h1 class=\"question text-center\" (click)=\"incorrect()\">Incorrect Answer?</h1>\n</div>\n<!--<p class=\"question\"># players {{numberPlayers}}</p>\n<p class=\"question\">players {{players | json}}</p>-->\n"

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
    //TO DO: make ready? not appear when not enough players
    function TrebekviewComponent(_connection) {
        var _this = this;
        this._connection = _connection;
        this.players = {};
        this.game = [];
        this.questions = [];
        this.numberPlayers = 0;
        this.ready = false;
        this.playerTurn = "";
        this.buzzedInPlayer = "";
        this.answer = "";
        this.buzzerMode = false;
        this.DJMode = false;
        _connection.observedGame.subscribe(function (updatedGame) { _this.game = updatedGame; }, function (err) { return console.log(err); });
        this._connection.observedPlayers.subscribe(function (currentPlayers) {
            _this.players = currentPlayers;
            if (_this.players) {
                _this.numberPlayers = Object.keys(_this.players).length;
            }
        }, function (err) { return console.log(err); });
        this._connection.observedGameReady.subscribe(function (readyStatus) { return _this.ready = readyStatus; }, function (err) { return console.log(err); });
        this._connection.observedPlayersTurn.subscribe(function (currentPlayer) { return _this.playerTurn = currentPlayer; }, function (err) { return console.log(err); });
        this._connection.observedBuzzedInPlayer.subscribe(function (currentlybuzzedin) { console.log('buzzedinplayer', _this.buzzedInPlayer); if (currentlybuzzedin) {
            _this.buzzedInPlayer = currentlybuzzedin;
        }
        else {
            _this.buzzedInPlayer = "";
        } console.log('currentlybuzzedin', _this.buzzedInPlayer); }, function (err) { return console.log(err); });
        this._connection.observedQuestionView.subscribe(function (currentQuestion) { if (currentQuestion) {
            _this.answer = currentQuestion.answer;
        }
        else {
            _this.answer = "";
        } });
        this._connection.observedBuzzInStatus.subscribe(function (currentStatus) { if (currentStatus != null) {
            _this.buzzerMode = currentStatus;
            console.log("buzzermode in trebek view set to", currentStatus);
        } }, function (err) { return console.log(err); });
        _connection.observedDJStatus.subscribe(function (status) { if (status != null) {
            _this.DJMode = status;
        } }, function (err) { return console.log(err); });
        _connection.observedDJWager.subscribe(function (wager) { if (wager != null) {
            _this.DJWagerReceived(wager);
        } }, function (err) { return console.log(err); });
    }
    TrebekviewComponent.prototype.ngOnInit = function () {
    };
    TrebekviewComponent.prototype.choose = function (category) {
        this.questions = category.questions;
    };
    TrebekviewComponent.prototype.valueChosen = function (question, value) {
        console.log(question);
        if (question["doubleJeopardy"]) {
            console.log("doubleJeopardy found");
            this._connection.doubleJeopardy(question);
            this.questions = [];
            this.DJQuestion = question;
        }
        else {
            question["value"] = value;
            this._connection.displayQuestion(question);
            this._connection.observedQuestionView.next(question);
            this.questions = [];
            this._connection.observedBuzzInStatus.next(true);
        }
    };
    TrebekviewComponent.prototype.DJWagerReceived = function (wager) {
        this.DJQuestion["value"] = wager;
        this._connection.displayQuestion(this.DJQuestion);
        this._connection.observedQuestionView.next(this.DJQuestion);
    };
    TrebekviewComponent.prototype.trebekready = function () {
        console.log('trebekready');
        this._connection.trebekready();
    };
    TrebekviewComponent.prototype.resetServer = function () {
        this._connection.resetServer();
    };
    TrebekviewComponent.prototype.correct = function () {
        console.log('correct clicked');
        this._connection.playerCorrect();
        this.buzzerMode = false;
    };
    TrebekviewComponent.prototype.incorrect = function () {
        this._connection.playerIncorrect();
    };
    TrebekviewComponent.prototype.giveUp = function () {
        this._connection.giveUp();
        this.buzzerMode = false;
    };
    TrebekviewComponent.prototype.goback = function () {
        this.questions = [];
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
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map