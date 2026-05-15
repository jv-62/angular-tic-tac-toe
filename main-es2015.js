(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/icon/icon.component */ "./src/app/components/icon/icon.component.ts");





function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.handleClick(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconName", item_r3);
} }
function AppComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const popper_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-id", popper_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", popper_r8.emoji, " ");
} }
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_12_div_1_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.poppers);
} }
function AppComponent_div_13_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83C\uDF89 Game Over! \uD83C\uDF89");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_13_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83E\uDD1D It's a Draw! \uD83E\uDD1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_13_span_4_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_13_span_5_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.reloadGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Start New Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.isGameDraw ? "draw-modal" : "win-modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.isGameDraw ? "draw-content" : "win-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.isGameDraw ? "draw-title" : "win-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isGameDraw);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isGameDraw);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.isGameDraw ? "draw-message" : "win-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.winMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.isGameDraw ? "btn-draw" : "btn-win");
} }
class AppComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.title = 'tic-tac-toe';
        this.winMessage = '';
        this.isGameDraw = false;
        this.isCross = false;
        this.itemArray = new Array(9).fill('empty');
        this.showPoppers = false;
        this.poppers = [];
        // t0 t1 t2
        // t3 t4 t5
        // t6 t7 t8
        this.checkIsWinner = () => {
            //  checking  winner of the game
            if (this.itemArray[0] === this.itemArray[1] &&
                this.itemArray[0] === this.itemArray[2] &&
                this.itemArray[0] !== 'empty') {
                this.winMessage = `${this.itemArray[0]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[3] !== 'empty' &&
                this.itemArray[3] === this.itemArray[4] &&
                this.itemArray[4] === this.itemArray[5]) {
                this.winMessage = `${this.itemArray[3]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[6] !== 'empty' &&
                this.itemArray[6] === this.itemArray[7] &&
                this.itemArray[7] === this.itemArray[8]) {
                this.winMessage = `${this.itemArray[6]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[0] !== 'empty' &&
                this.itemArray[0] === this.itemArray[3] &&
                this.itemArray[3] === this.itemArray[6]) {
                this.winMessage = `${this.itemArray[0]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[1] !== 'empty' &&
                this.itemArray[1] === this.itemArray[4] &&
                this.itemArray[4] === this.itemArray[7]) {
                this.winMessage = `${this.itemArray[1]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[2] !== 'empty' &&
                this.itemArray[2] === this.itemArray[5] &&
                this.itemArray[5] === this.itemArray[8]) {
                this.winMessage = `${this.itemArray[2]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[0] !== 'empty' &&
                this.itemArray[0] === this.itemArray[4] &&
                this.itemArray[4] === this.itemArray[8]) {
                this.winMessage = `${this.itemArray[0]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[2] !== 'empty' &&
                this.itemArray[2] === this.itemArray[4] &&
                this.itemArray[4] === this.itemArray[6]) {
                this.winMessage = `${this.itemArray[2]} won`;
                this.playWinSound();
                this.triggerPartyPoppers();
            }
            else if (this.itemArray[0] !== 'empty' &&
                this.itemArray[1] !== 'empty' &&
                this.itemArray[2] !== 'empty' &&
                this.itemArray[3] !== 'empty' &&
                this.itemArray[4] !== 'empty' &&
                this.itemArray[5] !== 'empty' &&
                this.itemArray[6] !== 'empty' &&
                this.itemArray[7] !== 'empty' &&
                this.itemArray[8] !== 'empty') {
                this.winMessage = 'Game Draw';
                this.isGameDraw = true;
            }
        };
        this.reloadGame = () => {
            this.winMessage = '';
            this.isGameDraw = false;
            this.isCross = false;
            this.itemArray = new Array(9).fill('empty');
        };
    }
    playClickSound() {
        this.playSound(400, 0.1, 100);
    }
    playWinSound() {
        this.playSound(800, 0.15, 100);
        setTimeout(() => this.playSound(1000, 0.15, 100), 150);
        setTimeout(() => this.playSound(1200, 0.15, 200), 300);
    }
    playSound(frequency, volume, duration) {
        try {
            const audioContext = new window.AudioContext() ||
                new window.webkitAudioContext();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration / 1000);
        }
        catch (e) {
            console.log('Audio not supported');
        }
    }
    triggerPartyPoppers() {
        this.showPoppers = true;
        this.poppers = [];
        const emojis = ['🎉', '🎊', '✨', '🎈', '⭐', '🌟', '💫', '🎁'];
        const popperCount = 30;
        for (let i = 0; i < popperCount; i++) {
            setTimeout(() => {
                this.poppers.push({
                    id: i,
                    emoji: emojis[Math.floor(Math.random() * emojis.length)],
                });
            }, i * 30);
        }
        setTimeout(() => {
            this.showPoppers = false;
        }, 3000);
    }
    handleClick(itemNumber) {
        if (this.winMessage) {
            return this.toastr.success(this.winMessage);
        }
        if (this.itemArray[itemNumber] === 'empty') {
            this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
            this.isCross = !this.isCross;
            this.playClickSound();
        }
        else {
            return this.toastr.info('Already filled');
        }
        this.checkIsWinner();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 5, consts: [[1, "game-wrapper"], [1, "game-container"], [1, "game-header"], [1, "game-title"], [1, "player-info"], [1, "player-label"], [1, "player-turn", 3, "ngClass"], [1, "grid"], ["class", "grid-cell", 3, "click", 4, "ngFor", "ngForOf"], ["class", "poppers-container", 4, "ngIf"], ["class", "game-over-container", 4, "ngIf"], [1, "grid-cell", 3, "click"], [1, "cell-content"], [3, "iconName"], [1, "poppers-container"], ["class", "popper", 4, "ngFor", "ngForOf"], [1, "popper"], [1, "game-over-container"], [1, "game-over-modal", 3, "ngClass"], [1, "game-over-content", 3, "ngClass"], [1, "game-over-title", 3, "ngClass"], [4, "ngIf"], [1, "game-over-message", 3, "ngClass"], [1, "btn-reload", 3, "ngClass", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TIC TAC TOE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Current Player:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_12_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_13_Template, 10, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isCross ? "player-two" : "player-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.isCross ? "\u2B55 Player One" : "\u274C Player Two", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPoppers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.winMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], styles: [".game-wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  padding: 20px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.game-wrapper[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -50%;\r\n  right: -50%;\r\n  width: 500px;\r\n  height: 500px;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border-radius: 50%;\r\n  pointer-events: none;\r\n}\r\n\r\n.game-wrapper[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -50%;\r\n  left: -50%;\r\n  width: 500px;\r\n  height: 500px;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border-radius: 50%;\r\n  pointer-events: none;\r\n}\r\n\r\n.game-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: rgba(255, 255, 255, 0.95);\r\n  border-radius: 20px;\r\n  padding: 40px;\r\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\r\n  max-width: 500px;\r\n  width: 100%;\r\n  animation: slideIn 0.6s ease-out;\r\n}\r\n\r\n@keyframes slideIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.game-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.game-title[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n  margin: 0 0 20px 0;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.player-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 15px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.player-label[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #555;\r\n  font-size: 0.9rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.player-turn[_ngcontent-%COMP%] {\r\n  padding: 8px 16px;\r\n  border-radius: 25px;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.player-turn.player-one[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  color: white;\r\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\r\n}\r\n\r\n.player-turn.player-two[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\r\n  color: white;\r\n  box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 12px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.grid-cell[_ngcontent-%COMP%] {\r\n  aspect-ratio: 1;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.cell-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n  border-radius: 15px;\r\n  border: 3px solid transparent;\r\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\r\n  position: relative;\r\n}\r\n\r\n.grid-cell[_ngcontent-%COMP%]:hover   .cell-content[_ngcontent-%COMP%] {\r\n  transform: translateY(-5px) scale(1.02);\r\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);\r\n  border-color: #667eea;\r\n}\r\n\r\n.grid-cell[_ngcontent-%COMP%]:active   .cell-content[_ngcontent-%COMP%] {\r\n  transform: translateY(0) scale(0.98);\r\n}\r\n\r\n.game-over-container[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1000;\r\n  animation: fadeIn 0.3s ease;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.game-over-modal[_ngcontent-%COMP%] {\r\n  animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\r\n}\r\n\r\n@keyframes popIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale(0.5) rotateZ(-5deg);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: scale(1) rotateZ(0deg);\r\n  }\r\n}\r\n\r\n.game-over-content[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding: 40px;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\r\n  max-width: 400px;\r\n  animation: slideUp 0.5s ease-out;\r\n}\r\n\r\n@keyframes slideUp {\r\n  from {\r\n    transform: translateY(50px);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.game-over-title[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  margin-bottom: 15px;\r\n  color: #333;\r\n}\r\n\r\n.game-over-message[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n  margin-bottom: 25px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.btn-reload[_ngcontent-%COMP%] {\r\n  padding: 12px 30px;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  border: none;\r\n  border-radius: 50px;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\r\n}\r\n\r\n.btn-reload[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);\r\n}\r\n\r\n.btn-reload[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n}\r\n\r\n.btn-win[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\r\n}\r\n\r\n.btn-win[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);\r\n}\r\n\r\n.btn-draw[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #f7b731 0%, #ff9800 100%);\r\n  box-shadow: 0 4px 15px rgba(247, 183, 49, 0.4);\r\n}\r\n\r\n.btn-draw[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 8px 25px rgba(247, 183, 49, 0.6);\r\n}\r\n\r\n.win-modal[_ngcontent-%COMP%] {\r\n  animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\r\n}\r\n\r\n.draw-modal[_ngcontent-%COMP%] {\r\n  animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\r\n}\r\n\r\n.win-content[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding: 40px;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\r\n  max-width: 400px;\r\n  animation: slideUp 0.5s ease-out;\r\n  border: 3px solid transparent;\r\n}\r\n\r\n.draw-content[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(247, 183, 49, 0.05) 100%);\r\n  padding: 40px;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\r\n  max-width: 400px;\r\n  animation: slideUp 0.5s ease-out;\r\n  border: 3px solid #f7b731;\r\n}\r\n\r\n.win-title[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  margin-bottom: 15px;\r\n  color: #333;\r\n}\r\n\r\n.draw-title[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  margin-bottom: 15px;\r\n  color: #f7b731;\r\n}\r\n\r\n.win-message[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n  margin-bottom: 25px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.draw-message[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  background: linear-gradient(135deg, #f7b731 0%, #ff9800 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n  margin-bottom: 25px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.poppers-container[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  z-index: 999;\r\n  overflow: hidden;\r\n}\r\n\r\n.popper[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  opacity: 1;\r\n  will-change: transform;\r\n}\r\n\r\n.popper[data-id=\"0\"][_ngcontent-%COMP%] { left: 10%; animation: popperFall 3s ease-in forwards; animation-delay: 0ms; }\r\n\r\n.popper[data-id=\"1\"][_ngcontent-%COMP%] { left: 15%; animation: popperFall 3.2s ease-in forwards; animation-delay: 30ms; }\r\n\r\n.popper[data-id=\"2\"][_ngcontent-%COMP%] { left: 20%; animation: popperFall 3.4s ease-in forwards; animation-delay: 60ms; }\r\n\r\n.popper[data-id=\"3\"][_ngcontent-%COMP%] { left: 25%; animation: popperFall 3.1s ease-in forwards; animation-delay: 90ms; }\r\n\r\n.popper[data-id=\"4\"][_ngcontent-%COMP%] { left: 30%; animation: popperFall 3.3s ease-in forwards; animation-delay: 120ms; }\r\n\r\n.popper[data-id=\"5\"][_ngcontent-%COMP%] { left: 35%; animation: popperFall 2.9s ease-in forwards; animation-delay: 150ms; }\r\n\r\n.popper[data-id=\"6\"][_ngcontent-%COMP%] { left: 40%; animation: popperFall 3.2s ease-in forwards; animation-delay: 180ms; }\r\n\r\n.popper[data-id=\"7\"][_ngcontent-%COMP%] { left: 45%; animation: popperFall 3.1s ease-in forwards; animation-delay: 210ms; }\r\n\r\n.popper[data-id=\"8\"][_ngcontent-%COMP%] { left: 50%; animation: popperFall 3.3s ease-in forwards; animation-delay: 240ms; }\r\n\r\n.popper[data-id=\"9\"][_ngcontent-%COMP%] { left: 55%; animation: popperFall 3s ease-in forwards; animation-delay: 270ms; }\r\n\r\n.popper[data-id=\"10\"][_ngcontent-%COMP%] { left: 60%; animation: popperFall 3.2s ease-in forwards; animation-delay: 300ms; }\r\n\r\n.popper[data-id=\"11\"][_ngcontent-%COMP%] { left: 65%; animation: popperFall 3.4s ease-in forwards; animation-delay: 330ms; }\r\n\r\n.popper[data-id=\"12\"][_ngcontent-%COMP%] { left: 70%; animation: popperFall 3.1s ease-in forwards; animation-delay: 360ms; }\r\n\r\n.popper[data-id=\"13\"][_ngcontent-%COMP%] { left: 75%; animation: popperFall 3.3s ease-in forwards; animation-delay: 390ms; }\r\n\r\n.popper[data-id=\"14\"][_ngcontent-%COMP%] { left: 80%; animation: popperFall 2.9s ease-in forwards; animation-delay: 420ms; }\r\n\r\n.popper[data-id=\"15\"][_ngcontent-%COMP%] { left: 85%; animation: popperFall 3.2s ease-in forwards; animation-delay: 450ms; }\r\n\r\n.popper[data-id=\"16\"][_ngcontent-%COMP%] { left: 90%; animation: popperFall 3.1s ease-in forwards; animation-delay: 480ms; }\r\n\r\n.popper[data-id=\"17\"][_ngcontent-%COMP%] { left: 12%; animation: popperFall 3.3s ease-in forwards; animation-delay: 510ms; }\r\n\r\n.popper[data-id=\"18\"][_ngcontent-%COMP%] { left: 22%; animation: popperFall 3s ease-in forwards; animation-delay: 540ms; }\r\n\r\n.popper[data-id=\"19\"][_ngcontent-%COMP%] { left: 32%; animation: popperFall 3.2s ease-in forwards; animation-delay: 570ms; }\r\n\r\n.popper[data-id=\"20\"][_ngcontent-%COMP%] { left: 42%; animation: popperFall 3.4s ease-in forwards; animation-delay: 600ms; }\r\n\r\n.popper[data-id=\"21\"][_ngcontent-%COMP%] { left: 52%; animation: popperFall 3.1s ease-in forwards; animation-delay: 630ms; }\r\n\r\n.popper[data-id=\"22\"][_ngcontent-%COMP%] { left: 62%; animation: popperFall 3.3s ease-in forwards; animation-delay: 660ms; }\r\n\r\n.popper[data-id=\"23\"][_ngcontent-%COMP%] { left: 72%; animation: popperFall 2.9s ease-in forwards; animation-delay: 690ms; }\r\n\r\n.popper[data-id=\"24\"][_ngcontent-%COMP%] { left: 82%; animation: popperFall 3.2s ease-in forwards; animation-delay: 720ms; }\r\n\r\n.popper[data-id=\"25\"][_ngcontent-%COMP%] { left: 92%; animation: popperFall 3.1s ease-in forwards; animation-delay: 750ms; }\r\n\r\n.popper[data-id=\"26\"][_ngcontent-%COMP%] { left: 18%; animation: popperFall 3.3s ease-in forwards; animation-delay: 780ms; }\r\n\r\n.popper[data-id=\"27\"][_ngcontent-%COMP%] { left: 28%; animation: popperFall 3s ease-in forwards; animation-delay: 810ms; }\r\n\r\n.popper[data-id=\"28\"][_ngcontent-%COMP%] { left: 38%; animation: popperFall 3.2s ease-in forwards; animation-delay: 840ms; }\r\n\r\n.popper[data-id=\"29\"][_ngcontent-%COMP%] { left: 48%; animation: popperFall 3.4s ease-in forwards; animation-delay: 870ms; }\r\n\r\n@keyframes popperFall {\r\n  0% {\r\n    top: -50px;\r\n    opacity: 1;\r\n    transform: translateX(0) rotateZ(0deg) scale(1);\r\n  }\r\n  25% {\r\n    opacity: 1;\r\n  }\r\n  75% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    top: 100vh;\r\n    opacity: 0;\r\n    transform: translateX((random() * 200px - 100px)) rotateZ(360deg) scale(0.5);\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .game-container[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n\r\n  .game-title[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  .player-turn[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    padding: 6px 12px;\r\n  }\r\n\r\n  .game-over-content[_ngcontent-%COMP%] {\r\n    padding: 30px 20px;\r\n  }\r\n\r\n  .game-over-title[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .game-over-message[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZEQUE2RDtFQUM3RCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNkRBQTZEO0VBQzdELDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1C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MkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDdkcsdUJBQXVCLFNBQVMsRUFBRSx5Q0FBeUMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDckcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSx5Q0FBeUMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDdEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSx5Q0FBeUMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDdEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFDeEcsd0JBQXdCLFNBQVMsRUFBRSwyQ0FBMkMsRUFBRSxzQkFBc0IsRUFBRTs7QUFFeEc7RUFDRTtJQUNFLFVBQVU7SUFDVixVQUFVO0lBQ1YsK0NBQStDO0VBQ2pEO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDViw0RUFBNEU7RUFDOUU7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmdhbWUtd3JhcHBlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTAlO1xyXG4gIHJpZ2h0OiAtNTAlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5nYW1lLXdyYXBwZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtNTAlO1xyXG4gIGxlZnQ6IC01MCU7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmdhbWUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbmltYXRpb246IHNsaWRlSW4gMC42cyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FtZS1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ2FtZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5wbGF5ZXItaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnBsYXllci1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5wbGF5ZXItdHVybiB7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucGxheWVyLXR1cm4ucGxheWVyLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XHJcbn1cclxuXHJcbi5wbGF5ZXItdHVybi5wbGF5ZXItdHdvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMjQ1LCA4NywgMTA4LCAwLjQpO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNlbGwge1xyXG4gIGFzcGVjdC1yYXRpbzogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2VsbC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNWY3ZmEgMCUsICNjM2NmZTIgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdyaWQtY2VsbDpob3ZlciAuY2VsbC1jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wMik7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xyXG59XHJcblxyXG4uZ3JpZC1jZWxsOmFjdGl2ZSAuY2VsbC1jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45OCk7XHJcbn1cclxuXHJcbi5nYW1lLW92ZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FtZS1vdmVyLW1vZGFsIHtcclxuICBhbmltYXRpb246IHBvcEluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcEluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgcm90YXRlWigtNWRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FtZS1vdmVyLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbWUtb3Zlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmdhbWUtb3Zlci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmJ0bi1yZWxvYWQge1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XHJcbn1cclxuXHJcbi5idG4tcmVsb2FkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNik7XHJcbn1cclxuXHJcbi5idG4tcmVsb2FkOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uYnRuLXdpbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxufVxyXG5cclxuLmJ0bi13aW46aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjYpO1xyXG59XHJcblxyXG4uYnRuLWRyYXcge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmN2I3MzEgMCUsICNmZjk4MDAgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDI0NywgMTgzLCA0OSwgMC40KTtcclxufVxyXG5cclxuLmJ0bi1kcmF3OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMjQ3LCAxODMsIDQ5LCAwLjYpO1xyXG59XHJcblxyXG4ud2luLW1vZGFsIHtcclxuICBhbmltYXRpb246IHBvcEluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG59XHJcblxyXG4uZHJhdy1tb2RhbCB7XHJcbiAgYW5pbWF0aW9uOiBwb3BJbiAwLjVzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcclxufVxyXG5cclxuLndpbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjVzIGVhc2Utb3V0O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZHJhdy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpIDAlLCByZ2JhKDI0NywgMTgzLCA0OSwgMC4wNSkgMTAwJSk7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC41cyBlYXNlLW91dDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjdiNzMxO1xyXG59XHJcblxyXG4ud2luLXRpdGxlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZHJhdy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjb2xvcjogI2Y3YjczMTtcclxufVxyXG5cclxuLndpbi1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmRyYXctbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjdiNzMxIDAlLCAjZmY5ODAwIDEwMCUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5wb3BwZXJzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBvcHBlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5wb3BwZXJbZGF0YS1pZD1cIjBcIl0geyBsZWZ0OiAxMCU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDBtczsgfVxyXG4ucG9wcGVyW2RhdGEtaWQ9XCIxXCJdIHsgbGVmdDogMTUlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4ycyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDMwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMlwiXSB7IGxlZnQ6IDIwJTsgYW5pbWF0aW9uOiBwb3BwZXJGYWxsIDMuNHMgZWFzZS1pbiBmb3J3YXJkczsgYW5pbWF0aW9uLWRlbGF5OiA2MG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjNcIl0geyBsZWZ0OiAyNSU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjFzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogOTBtczsgfVxyXG4ucG9wcGVyW2RhdGEtaWQ9XCI0XCJdIHsgbGVmdDogMzAlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4zcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDEyMG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjVcIl0geyBsZWZ0OiAzNSU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAyLjlzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogMTUwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiNlwiXSB7IGxlZnQ6IDQwJTsgYW5pbWF0aW9uOiBwb3BwZXJGYWxsIDMuMnMgZWFzZS1pbiBmb3J3YXJkczsgYW5pbWF0aW9uLWRlbGF5OiAxODBtczsgfVxyXG4ucG9wcGVyW2RhdGEtaWQ9XCI3XCJdIHsgbGVmdDogNDUlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4xcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDIxMG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjhcIl0geyBsZWZ0OiA1MCU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjNzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogMjQwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiOVwiXSB7IGxlZnQ6IDU1JTsgYW5pbWF0aW9uOiBwb3BwZXJGYWxsIDNzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogMjcwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTBcIl0geyBsZWZ0OiA2MCU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjJzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogMzAwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTFcIl0geyBsZWZ0OiA2NSU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjRzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogMzMwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTJcIl0geyBsZWZ0OiA3MCU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjFzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogMzYwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTNcIl0geyBsZWZ0OiA3NSU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjNzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogMzkwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTRcIl0geyBsZWZ0OiA4MCU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAyLjlzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogNDIwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTVcIl0geyBsZWZ0OiA4NSU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjJzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogNDUwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTZcIl0geyBsZWZ0OiA5MCU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjFzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogNDgwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMTdcIl0geyBsZWZ0OiAxMiU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzLjNzIGVhc2UtaW4gZm9yd2FyZHM7IGFuaW1hdGlvbi1kZWxheTogNTEwbXM7IH1cclxuLnBvcHBlcltkYXRhLWlkPVwiMThcIl0geyBsZWZ0OiAyMiU7IGFuaW1hdGlvbjogcG9wcGVyRmFsbCAzcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDU0MG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjE5XCJdIHsgbGVmdDogMzIlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4ycyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDU3MG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjIwXCJdIHsgbGVmdDogNDIlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy40cyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDYwMG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjIxXCJdIHsgbGVmdDogNTIlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4xcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDYzMG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjIyXCJdIHsgbGVmdDogNjIlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4zcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDY2MG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjIzXCJdIHsgbGVmdDogNzIlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMi45cyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDY5MG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjI0XCJdIHsgbGVmdDogODIlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4ycyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDcyMG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjI1XCJdIHsgbGVmdDogOTIlOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4xcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDc1MG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjI2XCJdIHsgbGVmdDogMTglOyBhbmltYXRpb246IHBvcHBlckZhbGwgMy4zcyBlYXNlLWluIGZvcndhcmRzOyBhbmltYXRpb24tZGVsYXk6IDc4MG1zOyB9XHJcbi5wb3BwZXJbZGF0YS1pZD1cIjI3XCJdIHsgbGVmdDogMjglOyBhbmltYXRpb246IHBvcHBlckZhbGwgM3MgZWFzZS1pbiBmb3J3YXJkczsgYW5pbWF0aW9uLWRlbGF5OiA4MTBtczsgfVxyXG4ucG9wcGVyW2RhdGEtaWQ9XCIyOFwiXSB7IGxlZnQ6IDM4JTsgYW5pbWF0aW9uOiBwb3BwZXJGYWxsIDMuMnMgZWFzZS1pbiBmb3J3YXJkczsgYW5pbWF0aW9uLWRlbGF5OiA4NDBtczsgfVxyXG4ucG9wcGVyW2RhdGEtaWQ9XCIyOVwiXSB7IGxlZnQ6IDQ4JTsgYW5pbWF0aW9uOiBwb3BwZXJGYWxsIDMuNHMgZWFzZS1pbiBmb3J3YXJkczsgYW5pbWF0aW9uLWRlbGF5OiA4NzBtczsgfVxyXG5cclxuQGtleWZyYW1lcyBwb3BwZXJGYWxsIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAxMDB2aDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKHJhbmRvbSgpICogMjAwcHggLSAxMDBweCkpIHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgwLjUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmdhbWUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZ2FtZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcblxyXG4gIC5wbGF5ZXItdHVybiB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICB9XHJcblxyXG4gIC5nYW1lLW92ZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZ2FtZS1vdmVyLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmdhbWUtb3Zlci1tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icon/icon.component */ "./src/app/components/icon/icon.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





// Font Awesome

// Toaster




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/icon/icon.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/icon/icon.component.ts ***!
  \***************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






function IconComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faPen);
} }
function IconComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTimes);
} }
function IconComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faCircle);
} }
function IconComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Something is not Right!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IconComponent {
    constructor() {
        this.faPen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPen"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faCircle = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"];
    }
    ngOnInit() { }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { iconName: "iconName" }, decls: 5, vars: 4, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "icon", 3, "icon"], [1, "icon", "text-info", 3, "icon"], [1, "icon", "text-warning", 3, "icon"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IconComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IconComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.iconName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "circle");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".icon[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  font-weight: 900;\r\n  transition: all 0.3s ease;\r\n  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.icon.text-info[_ngcontent-%COMP%] {\r\n  color: #667eea;\r\n  animation: popAnimation 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\r\n}\r\n\r\n.icon.text-warning[_ngcontent-%COMP%] {\r\n  color: #f5576c;\r\n  animation: popAnimation 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\r\n}\r\n\r\n@keyframes popAnimation {\r\n  0% {\r\n    transform: scale(0) rotateZ(-15deg);\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    transform: scale(1.2) rotateZ(5deg);\r\n  }\r\n  100% {\r\n    transform: scale(1) rotateZ(0deg);\r\n    opacity: 1;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCw4REFBOEQ7QUFDaEU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsOERBQThEO0FBQ2hFOztBQUVBO0VBQ0U7SUFDRSxtQ0FBbUM7SUFDbkMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG59XHJcblxyXG4uaWNvbi50ZXh0LWluZm8ge1xyXG4gIGNvbG9yOiAjNjY3ZWVhO1xyXG4gIGFuaW1hdGlvbjogcG9wQW5pbWF0aW9uIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG59XHJcblxyXG4uaWNvbi50ZXh0LXdhcm5pbmcge1xyXG4gIGNvbG9yOiAjZjU1NzZjO1xyXG4gIGFuaW1hdGlvbjogcG9wQW5pbWF0aW9uIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcEFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGVaKC0xNWRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZVooNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.css'],
            }]
    }], function () { return []; }, { iconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jayamverma/Documents/Jayam/Projects/Github/angular-tic-tac-toe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map