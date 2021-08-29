(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+x+M":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                template: `
    <h1>Home</h1>
  `,
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PEDDIREDDYDEVISATYAS\Documents\GitHub\step1\evaluation-management\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "E94Y":
/*!***************************************!*\
  !*** ./src/app/template.component.ts ***!
  \***************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill.service */ "j8k5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TemplateComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r6.TEMPTECHNAME, " ");
} }
function TemplateComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_tr_38_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ski_r7 = ctx.$implicit; const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.scorehandler(_r8.value, ski_r7.TEMPSKILL); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ski_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ski_r7.TEMPSKILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.score, " ");
} }
function TemplateComponent_div_47_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data Saved Successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_div_47_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.redirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TemplateComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TemplateComponent_div_47_div_3_Template, 12, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
} }
class TemplateComponent {
    constructor(rout, ds) {
        this.rout = rout;
        this.ds = ds;
        this.arr = ['HTML', 'JavaScript'];
        this.Technology = "Front End";
        this.addskil = false;
        this.editskil = false;
        this.userobj = { skill: "" };
        this.today = Date.now();
        this.new = [];
        this.update = [];
        this.delete = [];
        this.oparr = [];
        this.sc = [];
        this.lis = [];
        this.techobj = true;
        this.callDataServer();
        document.getElementById("temp").style.color = "black";
        document.getElementById("eval").style.color = "green";
        //this.d=new Date();
        //document.getElementById("pt").innerHTML=this.d;
    }
    callDataServer() {
        this.ds.getUsers().subscribe((res) => {
            this.evallist = res;
            for (let i = 0; i < this.evallist.EVALUATION_TEMP.length; i++) {
                this.oparr.push(this.evallist.EVALUATION_TEMP[i].TEMPTECHNAME);
            }
            this.oparr = Array.from(new Set(this.oparr));
            console.log(this.oparr);
        });
    }
    scorehandler(va, sk) {
        this.score = va;
        this.ob = { "score": this.score, "skill": sk };
        this.sc.push(this.ob);
        console.log("score array", this.sc);
        this.skil = sk;
        console.log("score is", this.score, this.skil);
    }
    finalhandler(name, evalname, tecname) {
        console.log("values are:", name, evalname, tecname);
        for (let i = 0; i < this.sc.length; i++) {
            this.flist = { "EVALUATION": [{
                        "EVALNAME": tecname,
                        "APPLICANTNAME": name,
                        "EVALUATORNAME": evalname,
                        "EVALSKILL": this.sc[i].skill,
                        "EVALSCORE": this.sc[i].score
                    }]
            };
            console.log("final list is", this.flist);
            this.ds.postevalskills(this.flist).subscribe((res) => {
                console.log("response", res);
            });
        }
    }
    select(val) {
        console.log("entered select", val);
        this.ds.getskills(val).subscribe((res) => {
            this.skillslist = res;
            console.log("skillslist is", this.skillslist);
        });
    }
    redirect() {
        this.rout.navigate(['Evaluation']);
    }
}
TemplateComponent.p = 0;
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"])); };
TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-alleval"]], decls: 49, vars: 6, consts: [[1, "container", "table-responsive"], ["ngNativeValidate", "", 1, "Absolute-Center", "is-Responsive"], [1, "form-group"], ["for", "idd"], ["type", "text", "id", "idd", "placeholder", "Enter Applicant Name", "required", "", 1, "form-control", "text-left"], ["t", ""], ["for", "id1"], ["type", "text", "id", "id1", "placeholder", "Enter evaluator name", "required", "", 1, "form-control", "text-left"], ["ti", ""], ["for", "id2"], ["name", "technologyArea", "id", "id2", "required", "", 1, "form-select", "text-left", 3, "click"], ["s", ""], ["value", " "], [4, "ngFor", "ngForOf"], ["type", "text", "required", "", 1, "form-control", "leftfloat", 3, "value"], [1, "table"], ["scope", "col"], ["data-toggle", "modal", "data-target", "#myModal", "type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "click"], [4, "ngIf"], ["name", "foo", "type", "range", "min", "0", "max", "10", "value", "0", 3, "click"], ["sc", ""], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header", 2, "width", "100%", "height", "100%", "margin", "0px 0px 0px 0px", "background-color", "#6495ED"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "text-center", 2, "width", "100%", "height", "100%", "margin", "0px 0px 0px 0px", "background-color", "#6495ED"], [1, "bi", "bi-check-circle"], [2, "color", "white"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn-secondary", 3, "click"]], template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Applicant Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Evaluator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Technology Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_select_click_19_listener($event) { return ctx.select($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter Technology Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TemplateComponent_option_23_Template, 2, 1, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TemplateComponent_tr_38_Template, 7, 2, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.finalhandler(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TemplateComponent_div_47_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.evallist.EVALUATION_TEMP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 4, ctx.today));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillslist.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["body[_ngcontent-%COMP%]{\n    \n  }\n  \n  input[_ngcontent-%COMP%]{\n    height:50px;\n    border:solid gray 1px;\n  }\n  select[_ngcontent-%COMP%]{\n    height:50px;\n    border:solid gray 1px;\n  }\n  .leftfloat[_ngcontent-%COMP%]{\n    float:left\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alleval',
                template: `
    <div class="container table-responsive">
    <form  class="Absolute-Center is-Responsive " ngNativeValidate>
        <div class="form-group ">
        <label for="idd" ><b>Applicant Name</b></label>&nbsp;
        <input type="text"  #t class="form-control text-left" id="idd" placeholder="Enter Applicant Name" required>
        </div>
        <div class="form-group">
        <label for="id1"><b>Evaluator Name</b></label>
        <input type="text"  #ti class="form-control text-left" id="id1" placeholder="Enter evaluator name" required>
        </div>
        <div class="form-group">
        <label for="id2"><b>Technology Area</b></label>
        <select class="form-select text-left" #s name="technologyArea" id="id2" (click)="select($event.target.value)" required>
        <option value=" ">Enter Technology Area</option>
        <option *ngFor="let skill of evallist.EVALUATION_TEMP" >{{skill.TEMPTECHNAME}}
        </option>
        </select>
        </div>
        <div class="form-group">

        <b>Date:</b><input type="text"  class="form-control  leftfloat"  value="{{today|date}}" required>
        </div>
        <div class="form-group"></div>
        <table class="table">
        <tr>
        <td scope="col"><b>Skill</b></td>
        <td scope="col"><b>Score</b></td>
        </tr>           
        <tr  *ngFor="let ski of skillslist.body">
        <td scope="col">{{ski.TEMPSKILL}}</td>
        <td scope="col">
        <input #sc name="foo" type="range" min="0" max="10" value="0" (click)="scorehandler(sc.value,ski.TEMPSKILL)">{{score}}
        </td>
        </tr>
        <br>
        <tr>
        <td scope="col"></td>
        <td scope="col">
        <div class="form-group">
        &nbsp;<button class="btn btn-success btn-lg " data-toggle="modal" data-target="#myModal" type="submit" (click)="finalhandler(t.value,ti.value,s.value)">submit</button>
        </div>
        </td>
        </tr>
        </table>
        </form>
        </div>
        

        <div *ngIf="true">
          <div class="modal fade" id="myModal" role="dialog" >
          <div class="modal-dialog">
          
            <!-- Modal content-->
            <div  *ngIf="true" class="modal-content">
              <div  class="modal-header" style="width:100%;height:100%;margin:0px 0px 0px 0px;background-color:#6495ED ">
                <button  type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div style="width:100%;height:100%;margin:0px 0px 0px 0px;background-color:#6495ED " class="modal-body text-center">
              <h1 ><i class="bi bi-check-circle"></i></h1><h3 style="color:white">Data Saved Successfully</h3>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn-secondary" data-dismiss="modal" (click)="redirect()">Close</button>
              </div>
            
          </div>
      
        </div>
        </div>
        </div>
        <router-outlet></router-outlet>


  `,
                styles: [`
  body{
    
  }
  
  input{
    height:50px;
    border:solid gray 1px;
  }
  select{
    height:50px;
    border:solid gray 1px;
  }
  .leftfloat{
    float:left
  }
  `
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"] }]; }, null); })();


/***/ }),

/***/ "Jtg6":
/*!***********************************!*\
  !*** ./src/app/tech.component.ts ***!
  \***********************************/
/*! exports provided: TechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechComponent", function() { return TechComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill.service */ "j8k5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function TechComponent_div_1_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechComponent_div_1_tr_4_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const skill_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.handler(skill_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3);
} }
function TechComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TechComponent_div_1_tr_4_Template, 4, 1, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.oparr);
} }
function TechComponent_div_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TechComponent_div_2_ng_template_12_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.userobj.skill = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechComponent_div_2_ng_template_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.addskill(_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.userobj.skill);
} }
function TechComponent_div_2_tr_13_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechComponent_div_2_tr_13_ng_template_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.editskill(_r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
} }
function TechComponent_div_2_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechComponent_div_2_tr_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const skill_r12 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.edit(skill_r12.TEMPID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechComponent_div_2_tr_13_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const skill_r12 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.removeskill(skill_r12.ind); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " REMOVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TechComponent_div_2_tr_13_ng_template_10_Template, 7, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r12 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r12.TEMPSKILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.eskil);
} }
function TechComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r21.addskil = true; return ctx_r21.editskil = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ADDSKILL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TechComponent_div_2_ng_template_12_Template, 6, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TechComponent_div_2_tr_13_Template, 11, 2, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechComponent_div_2_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.submithandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.sname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.addskil);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.skillslist.body);
} }
class TechComponent {
    constructor(ds) {
        this.ds = ds;
        this.Technology = "Front End";
        this.addskil = false;
        this.editskil = false;
        this.userobj = { skill: "" };
        this.useobj = { skil: "" };
        this.new = [];
        this.update = [];
        this.eskil = false;
        this.delete = [];
        this.oparr = [];
        this.lis = [];
        this.techobj = true;
        this.callDataServer();
        document.getElementById("eval").style.color = "black";
        document.getElementById("temp").style.color = "green";
    }
    callDataServer() {
        this.ds.getUsers().subscribe((res) => {
            this.evallist = res;
            for (let i = 0; i < this.evallist.EVALUATION_TEMP.length; i++) {
                if (this.evallist.EVALUATION_TEMP[i].TEMPTECHNAME) {
                    this.oparr.push(this.evallist.EVALUATION_TEMP[i].TEMPTECHNAME);
                }
            }
            this.oparr = Array.from(new Set(this.oparr));
            console.log(this.oparr);
        });
    }
    edit(v) {
        this.eskil = true;
        this.editind = v;
    }
    handler(val) {
        this.ds.getskills(val).subscribe((res) => {
            this.skillslist = res;
            this.sname = val;
            console.log("response is:", res);
            console.log("skillslist:", this.skillslist);
            this.techname = val;
            console.log("entered handler");
            this.techobj = false;
            this.editskil = true;
            this.lis = [];
            for (let j = 0; j < this.evallist.EVALUATION_TEMP.length; j++) {
                if (this.evallist.EVALUATION_TEMP[j].TEMPTECHNAME === val) {
                    console.log(this.evallist.EVALUATION_TEMP[j]);
                    this.lis.push(this.evallist.EVALUATION_TEMP[j]);
                }
            }
            console.log("list is:", this.lis);
        });
    }
    callData() {
        this.ds.getUsers().subscribe(res => this.evallist = res);
    }
    addskill(val) {
        this.ds.getskills(this.sname).subscribe((res) => {
            this.addskil = false;
            console.log(this.techname);
            this.skillslist.body.unshift({ "TEMPSKILL": val, "TEMPTECHNAME": this.sname });
            console.log(this.evallist);
            this.new.push({ "TEMPSKILL": val, "TEMPTECHNAME": this.sname });
            this.lis.unshift({ "TEMPSKILL": val, "TEMPTECHNAME": this.sname });
            this.addskil = true;
        });
    }
    editskill(fd) {
        for (let i = 0; i < this.skillslist.body.length; i++) {
            if (this.skillslist.body[i].TEMPID === this.editind) {
                this.skillslist.body[i].TEMPSKILL = fd;
            }
        }
        console.log("id is" + this.editind, "skill is:" + fd);
        this.update.push({ "TEMPID": this.editind, "TEMPSKILL": fd });
        console.log(this.update);
    }
    submithandler() {
        let finaldata = {
            EVALUATION_TEMP: {
                "NEW": this.new,
                "UPDATE": this.update,
                "DELETE": this.delete
            }
        };
        this.ds.postsubmitskills(finaldata).subscribe((res) => {
            console.log("parameters", this.sname, this.finallist);
            console.log("resobj:", res);
            this.finallist = res;
            console.log("finallist", this.finallist);
        });
    }
}
TechComponent.p = 0;
TechComponent.ɵfac = function TechComponent_Factory(t) { return new (t || TechComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"])); };
TechComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechComponent, selectors: [["app-tech"]], decls: 3, vars: 2, consts: [["action", "#"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "table", "table-striped"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], ["scope", "col"], [3, "routerLink", "click"], [1, "table", "table-bordered"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [3, "ngIf"], [1, "form-group", "container", "text-center"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["for", "skill", 1, "form-label"], ["type", "text", "id", "skill", "placeholder", "Enter Skill", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ti", ""], ["class", "container", 3, "ngIf"], ["for", "skil", 1, "form-label"], ["type", "text", "id", "skil", "placeholder", "Edit Skill", 1, "form-control"], ["t", ""]], template: function TechComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TechComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TechComponent_div_2_Template, 17, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.techobj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editskil);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tech',
                template: `
  <form action="#">
  <div *ngIf="techobj" class="container">
  <h2>Technologies:</h2>
  <table class="table table-striped">
  <tr scope="row" *ngFor="let skill of oparr">
  <td scope="col">
  <a  [routerLink]='' (click)="handler(skill)">{{skill}}</a>
  </td></tr></table> 
  </div>

  <div *ngIf="editskil" class="container">
  <h3>Skills</h3>
  <table class="table table-bordered">
  <tbody>
  <tr scope="row">
  <td scope="col">{{sname}}</td>
  <td scope="col">
  <button class="btn btn-info btn-sm" (click)="addskil=true;editskil=true;"> ADDSKILL</button><br>
  <ng-template [ngIf]="addskil">
        <label for="skill" class="form-label"></label>
        <input #ti type="text" [(ngModel)]="userobj.skill" class="form-control" id="skill" placeholder="Enter Skill"><br>
        <button class="btn btn-info btn-sm" (click)="addskill(ti.value)">Submit</button>
  </ng-template>
  </td>
  </tr>
  <tr scope="row" *ngFor="let skill of skillslist.body; index as idx ">
    <td scope="col">{{skill.TEMPSKILL}}</td>
    <td scope="col">
    
    <button class="btn btn-info btn-sm"(click)="edit(skill.TEMPID)">EDIT</button>&nbsp;
    <button class="btn btn-info btn-sm" (click)="removeskill(skill.ind)"> REMOVE</button>
    <br>
       <ng-template class="container" [ngIf]="eskil">
            <label for="skil" class="form-label"></label>
            <input #t type="text"   class="form-control" id="skil" placeholder="Edit Skill"><br>
            <button class="btn btn-info btn-sm" (click)="editskill(t.value)">Submit</button>
       <br>
      </ng-template>
    </td>
  </tr>
  </tbody>
  </table>
  <div class="form-group container text-center">
  <button  class="btn btn-secondary btn-sm"(click)="submithandler()">SUBMIT</button>
  </div>
  </div>
  </form>
  `,
                styles: [`
  
  

  `
                ]
            }]
    }], function () { return [{ type: _skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"] }]; }, null); })();


/***/ }),

/***/ "LLpx":
/*!**************************************!*\
  !*** ./src/app/alleval.component.ts ***!
  \**************************************/
/*! exports provided: AllEvalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEvalComponent", function() { return AllEvalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill.service */ "j8k5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AllEvalComponent_table_0_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllEvalComponent_table_0_tr_9_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const skill_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.namehandler(skill_r3.APPLICANTNAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.APPLICANTNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.EVALUATORNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.EVALNAME);
} }
function AllEvalComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "APPLICANT NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EVALUATOR NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "EVALNAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllEvalComponent_table_0_tr_9_Template, 8, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.finalarr);
} }
function AllEvalComponent_table_2_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7.EVALSKILL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r7.EVALSCORE, " ");
} }
function AllEvalComponent_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllEvalComponent_table_2_tr_9_Template, 5, 2, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.lis1);
} }
class AllEvalComponent {
    constructor(ds) {
        this.ds = ds;
        this.Technology = "Front End";
        this.flag = false;
        this.flag1 = true;
        this.ct = 0;
        this.addskil = false;
        this.editskil = false;
        this.userobj = { skill: "" };
        this.new = [];
        this.update = [];
        this.delete = [];
        this.oparr = [];
        this.table1edit = true;
        this.t = 0;
        this.lis = [];
        this.lis1 = [];
        this.techobj = true;
        this.finalarr = [];
        this.tableedit = false;
        this.callDataServer();
        document.getElementById("temp").style.color = "black";
        document.getElementById("eval").style.color = "green";
    }
    callDataServer() {
        this.ds.getevalskills().subscribe((res) => {
            this.evallist = res;
            for (let i = 0; i < this.evallist.EVALUATION.length; i++) {
                this.oparr.push(this.evallist.EVALUATION[i].APPLICANTNAME);
            }
            this.oparr = Array.from(new Set(this.oparr));
            for (let j = 0; j < this.oparr.length; j++) {
                for (let k = 0; k < this.evallist.EVALUATION.length; k++) {
                    this.ct = 0;
                    if (this.oparr[j] === this.evallist.EVALUATION[k].APPLICANTNAME) {
                        console.log(k);
                        this.ct += 1;
                        if (this.ct === 1 && this.evallist.EVALUATION[k].APPLICANTNAME && this.evallist.EVALUATION[k].EVALUATORNAME && this.evallist.EVALUATION[k].EVALNAME) {
                            this.finalarr.push(this.evallist.EVALUATION[k]);
                            console.log("evaluation", this.evallist.EVALUATION[k]);
                            console.log("final array:", this.finalarr[this.t]);
                            this.t += 1;
                            break;
                        }
                    }
                }
            }
            console.log("OPARRAY IS:", this.oparr);
            console.log("finalarr is:", this.finalarr);
        });
    }
    namehandler(val) {
        this.tableedit = true;
        this.table1edit = false;
        console.log("entered name handler");
        this.evalname = val;
        this.flag1 = false;
        this.flag = true;
        for (let k = 0; k < this.evallist.EVALUATION.length; k++) {
            console.log("entered loop");
            console.log(this.evallist.EVALUATION[k].APPLICANTNAME, val);
            if (this.evallist.EVALUATION[k].APPLICANTNAME === val) {
                console.log("entered if");
                if (this.evallist.EVALUATION[k].EVALSKILL) {
                    this.lis1.push(this.evallist.EVALUATION[k]);
                    console.log("lis1", this.lis1);
                }
            }
        }
    }
    handler(val) {
        this.techname = val;
        console.log("entered handler");
        this.techobj = false;
        this.editskil = true;
        this.lis = [];
        for (let j = 0; j < this.evallist.EVALUATION.length; j++) {
            if (this.evallist.EVALUATION[j].EVALNAME === val) {
                console.log(this.evallist.EVALUATION[j]);
                this.lis.push(this.evallist.EVALUATION[j]);
            }
        }
        console.log("list is:", this.lis);
    }
    callData() {
        this.ds.getUsers().subscribe(res => this.evallist = res);
    }
    addskill(val) {
        let max = -1;
        this.addskil = false;
        console.log(this.techname);
        this.evallist.EVALUATION.unshift({ "EVALSKILL": val, "EVALNAME": this.techname });
        console.log(this.evallist);
        this.new.push({ "EVALSKILL": val, "EVALNAME": this.techname });
        this.lis.unshift({ "EVALSKILL": val, "EVALNAME": this.techname });
        this.addskil = true;
    }
    submithandler() {
        let finaldata = {
            EVALUATION_TEMP: {
                "NEW": this.new,
                "UPDATE": this.update,
                "DELETE": this.delete
            }
        };
        this.ds.postsubmit(finaldata).subscribe((res) => {
            console.log("resobj:", res);
            this.finallist = res;
            console.log(this.finallist);
        });
    }
}
AllEvalComponent.p = 0;
AllEvalComponent.ɵfac = function AllEvalComponent_Factory(t) { return new (t || AllEvalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"])); };
AllEvalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllEvalComponent, selectors: [["app-tech"]], decls: 4, vars: 2, consts: [["class", "table table-bordered", 4, "ngIf"], [1, "container", "table-responsive", "text-center"], ["class", "table table-striped", 4, "ngIf"], [1, "table", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "routerLink", "click"], [1, "table", "table-striped"], ["scope", "row"], ["scope", "row", 4, "ngFor", "ngForOf"]], template: function AllEvalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllEvalComponent_table_0_Template, 10, 1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllEvalComponent_table_2_Template, 10, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.table1edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableedit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllEvalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tech',
                template: `
  <table class="table table-bordered" *ngIf="table1edit">
  <tr>
  <th scope="col">APPLICANT NAME</th>
  <th scope="col">EVALUATOR NAME</th>
  <th scope="col">EVALNAME</th>
  </tr>
  <tbody>
  <tr *ngFor="let skill of finalarr">
  <td scope="col"><a [routerLink]='' (click)="namehandler(skill.APPLICANTNAME)">{{skill.APPLICANTNAME}}</a></td>
  <td scope="col">{{skill.EVALUATORNAME}}</td>
  <td scope="col">{{skill.EVALNAME}}</td>
  </tr>
  </tbody>
  </table>

  <div class=" container table-responsive text-center">
  <table *ngIf="tableedit" class="table table-striped">
  <tbody>
  <tr scope="row">
  <td scope="col"><b>Skill</b></td>
  <td scope="col"><b>Score</b></td>
  </tr>
  <tr scope="row" *ngFor="let i of lis1">
  <td scope="col">
  {{i.EVALSKILL}}
  </td>
  <td scope="col">{{i.EVALSCORE}}
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <router-outlet></router-outlet>
  `,
                styles: [`
  

  `
                ]
            }]
    }], function () { return [{ type: _skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"] }]; }, null); })();


/***/ }),

/***/ "Rf3e":
/*!*****************************************!*\
  !*** ./src/app/createtemp.component.ts ***!
  \*****************************************/
/*! exports provided: CreateTemplateComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateComp", function() { return CreateTemplateComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill.service */ "j8k5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateTemplateComp_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Data Saved Successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTemplateComp_div_20_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.redirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTemplateComp_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateTemplateComp_div_20_div_3_Template, 12, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.sucess);
} }
class CreateTemplateComp {
    constructor(router, ds) {
        this.router = router;
        this.ds = ds;
        this.title = "temp comp";
        this.skillobj = { skill: '' };
        this.skilllist = [];
        this.new = [];
        this.update = [];
        this.delete = [];
        this.editind = 0;
        this.addindex = 0;
        this.delindex = 0;
        this.sucess = false;
        document.getElementById("eval").style.color = "black";
        document.getElementById("temp").style.color = "green";
        this.ds.getUsers().subscribe((res) => {
            this.slist = res;
            // console.log("requested data",typeof(this.slist.EVALUATION_TEMP));
            //console.log(this.slist.EVALUATION_TEMP);
        });
    }
    redirect() {
        this.router.navigate(['showalltemplates']);
    }
    ngOnInit() {
    }
    /*  goBack(){
         this.router.navigate(['/template']);
     } */
    addSubmit(fd, s) {
        this.slist.EVALUATION_TEMP.unshift({ "TEMPTECHNAME": fd, "TEMPSKILL": s });
        this.new.push({ "TEMPTECHNAME": fd, "TEMPSKILL": s });
        this.finaldata = {
            "EVALUATION_TEMP": {
                "NEW": this.new,
                "UPDATE": this.update,
                "DELETE": this.delete
            }
        };
        console.log(this.new);
        this.skilllist.push(fd);
        /*
        if(fd!=='' && s!=='')
          {this.sucess=true;}*/
        //this.sucess=true;
        if (fd != '' && s != '') {
            this.sucess = true;
            this.ds.postsubmit(this.finaldata).subscribe((res) => {
            });
        }
        this.skilllist.push(fd);
        this.skillobj.skill = "";
        this.adduser = false;
    }
}
CreateTemplateComp.ɵfac = function CreateTemplateComp_Factory(t) { return new (t || CreateTemplateComp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"])); };
CreateTemplateComp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTemplateComp, selectors: [["app-createtemp"]], decls: 21, vars: 1, consts: [[1, "container", "table-responsive"], ["ngNativeValidate", "", 1, "Absolute-Center", "is-Responsive"], [1, "text-center"], [1, "form-group"], ["for", "Inputtext1"], ["type", "text", "id", "Inputtext1", "placeholder", "Enter Technology", "required", "", 1, "form-control"], ["t", ""], ["for", "Inputtext2"], ["type", "text", "id", "Inputtext2", "placeholder", "Enter Skill", "required", "", 1, "form-control"], ["s", ""], [1, "form-group", "container", "text-center"], ["type", "submit", "data-toggle", "modal", "data-target", "#myModal", 1, "btn-primary", 3, "click"], [4, "ngIf"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header", 2, "width", "100%", "margin", "0px 0px 0px 0px", "background-color", "#6495ED"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", 2, "width", "100%", "margin", "0px 0px 0px 0px", "background-color", "#6495ED"], [1, "bi", "bi-check-circle", "text-center"], [1, "text-center", 2, "color", "white"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn-secondary", 3, "click"]], template: function CreateTemplateComp_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create New Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTemplateComp_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.addSubmit(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateTemplateComp_div_20_Template, 4, 1, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sucess);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".form-group[_ngcontent-%COMP%]{\n        width:90%;\n        margin-left: auto; \n        margin-right: auto;\n    }\n    input[_ngcontent-%COMP%]{\n      height:55px;\n    }\n      div[_ngcontent-%COMP%]{\n          border:5px lightgrey;\n      }\n      .card[_ngcontent-%COMP%]{\n        margin:20px 50px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTemplateComp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createtemp',
                template: `
    <div class="container  table-responsive">
             <form class="Absolute-Center is-Responsive" ngNativeValidate>
                  <h5 class="text-center">Create New Template</h5><br>
                          <div class="form-group">
                           <label  for="Inputtext1">Technology</label>&nbsp;
                           <input type="text"  #t class="form-control" id="Inputtext1" placeholder="Enter Technology" required>
                          </div>
                        <div class="form-group">
                          <label for="Inputtext2">Skill</label>&nbsp;
                          <input type="text" #s class="form-control" id="Inputtext2" placeholder="Enter Skill" required >
                    </div>
                        <div class="form-group container text-center">
                          <button type="submit" class="btn-primary" data-toggle="modal" data-target="#myModal" (click)="addSubmit(t.value,s.value)">SUBMIT</button>
                        </div>
              </form>
          </div>
          <div *ngIf="sucess">
          <div class="modal fade" id="myModal" role="dialog" >
          <div class="modal-dialog">
          
            <!-- Modal content-->
            <div  *ngIf="sucess"class="modal-content">
              <div  class="modal-header" style="width:100%;margin:0px 0px 0px 0px;background-color:#6495ED" >
                <button  type="button" class="close" data-dismiss="modal"></button>
              </div>
              <div style="width:100%;margin:0px 0px 0px 0px;background-color:#6495ED " class="modal-body"><h3 class="text-center">Data Saved Successfully</h3>
              <h1 class="text-center"><i class="bi bi-check-circle text-center"></i></h1><h3 style="color:white" class="text-center"></h3>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn-secondary" data-dismiss="modal" (click)="redirect()">Close</button>
              </div>
            
          </div>
      
        </div>
        </div>
        </div>
    <!--button (click)="goBack()">Go Back</button-->
    `,
                styles: [`
   
    
      .form-group{
        width:90%;
        margin-left: auto; 
        margin-right: auto;
    }
    input{
      height:55px;
    }
      div{
          border:5px lightgrey;
      }
      .card{
        margin:20px 50px;
      }
    `]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["Evaluation"]; };
const _c1 = function () { return ["All Evaluations"]; };
const _c2 = function () { return ["showalltemplates"]; };
const _c3 = function () { return ["createtemplate"]; };
class AppComponent {
    constructor() {
        this.title = 'evaluation-management';
        this.h = 0;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand"], ["src", "assets/images/Picture2.png", "alt", "imag", "width", "25px", "height", "25px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "active"], ["id", "eval", "href", "#", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", "v", "current"], [1, "dropdown-menu"], [1, "active"], ["routerLinkActive", "selectedLink", 1, "dropdown-item", "nav-link", 2, "color", "black", 3, "routerLink"], [1, "nav-item", "dropdown"], ["id", "temp", "href", "#", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", "v"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UI GARAGE@ESIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Evaluation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " All Evaluations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " create Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "All template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " createtmplte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@media all and (min-width: 992px) {\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{ display: none; }\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%]{ color: #fff;  }\n    .selectedLink[_ngcontent-%COMP%]{color:red}\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%]{ display: block; }\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{ margin-top:0; }\n  }\n  @media (min-width: 544px) {  \n    td[_ngcontent-%COMP%] {font-size:1.5rem;} /1rem = 16px/\n  }\n\n  v[_ngcontent-%COMP%]{\n    background-color: red;\n    color: yellow;\n  }\n  .navbar-nav[_ngcontent-%COMP%] { \n    margin-left: auto; \n  } \n  .nav-link[_ngcontent-%COMP%]{\n    color:black;\n  }\n    .selectedLink[_ngcontent-%COMP%]{\n      color : skyblue\n    }\n    a[_ngcontent-%COMP%]:hover{\n      background-color: gray;\n      color: blue;\n    }\n    .dropdown-toggle[_ngcontent-%COMP%]::after{\n      content:none;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <h2 class="navbar-brand" ><img src="assets/images/Picture2.png" alt="imag" width=25px height=25px>UI GARAGE@ESIX</h2>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="nav navbar-nav ml-auto">
           <li class="nav-item dropdown active" >
           <a id="eval"class="nav-link   dropdown-toggle v current" href="#" data-toggle="dropdown"> Evaluation  </a>
           
           <ul class="dropdown-menu ">
           <li class="active"><a class="dropdown-item nav-link " style="color:black" routerLinkActive="selectedLink" [routerLink]="['Evaluation']"> All Evaluations</a></li>
           <li class="active"><a class="dropdown-item nav-link  " style="color:black" routerLinkActive="selectedLink" [routerLink]="['All Evaluations']"> create Evaluation</a></li>
         </ul>
     
         </li>
        <li class="nav-item dropdown ">
	      <a id="temp"class="nav-link  dropdown-toggle v" href="#" data-toggle="dropdown">  Template  </a>
	       
        <ul class="dropdown-menu">
		    
        <li><a class="dropdown-item nav-link" style="color:black"  routerLinkActive="selectedLink" [routerLink]="['showalltemplates']">All template</a></li>
		    <li><a class="dropdown-item nav-link" style="color:black" routerLinkActive="selectedLink" [routerLink]="['createtemplate']"> createtmplte </a></li>
	    </ul>
	</li>
    </ul>
    </div>
    </nav>
  <router-outlet></router-outlet>
  `,
                styles: [`
  @media all and (min-width: 992px) {
    .navbar .nav-item .dropdown-menu{ display: none; }
    .navbar .nav-item:hover .nav-link{ color: #fff;  }
    .selectedLink{color:red}
    .navbar .nav-item:hover .dropdown-menu{ display: block; }
    .navbar .nav-item .dropdown-menu{ margin-top:0; }
  }
  @media (min-width: 544px) {  
    td {font-size:1.5rem;} /1rem = 16px/
  }

  v{
    background-color: red;
    color: yellow;
  }
  .navbar-nav { 
    margin-left: auto; 
  } 
  .nav-link{
    color:black;
  }
    .selectedLink{
      color : skyblue
    }
    a:hover{
      background-color: gray;
      color: blue;
    }
    .dropdown-toggle::after{
      content:none;
    }
  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "+x+M");
/* harmony import */ var _eval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eval.component */ "nNZY");
/* harmony import */ var _alleval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alleval.component */ "LLpx");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template.component */ "E94Y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skill.service */ "j8k5");
/* harmony import */ var _tech_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tech.component */ "Jtg6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _createtemp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createtemp.component */ "Rf3e");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_skill_service__WEBPACK_IMPORTED_MODULE_9__["SkillService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_tech_component__WEBPACK_IMPORTED_MODULE_10__["TechComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _eval_component__WEBPACK_IMPORTED_MODULE_5__["EvalComponent"], _alleval_component__WEBPACK_IMPORTED_MODULE_6__["AllEvalComponent"], _template_component__WEBPACK_IMPORTED_MODULE_7__["TemplateComponent"], _createtemp_component__WEBPACK_IMPORTED_MODULE_12__["CreateTemplateComp"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _tech_component__WEBPACK_IMPORTED_MODULE_10__["TechComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _eval_component__WEBPACK_IMPORTED_MODULE_5__["EvalComponent"], _alleval_component__WEBPACK_IMPORTED_MODULE_6__["AllEvalComponent"], _template_component__WEBPACK_IMPORTED_MODULE_7__["TemplateComponent"], _createtemp_component__WEBPACK_IMPORTED_MODULE_12__["CreateTemplateComp"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                ],
                providers: [_skill_service__WEBPACK_IMPORTED_MODULE_9__["SkillService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "j8k5":
/*!**********************************!*\
  !*** ./src/app/skill.service.ts ***!
  \**********************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SkillService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        console.log("entered get");
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/template");
    }
    postsubmit(data) {
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/template", data);
    }
    getevalskills() {
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/evaluation");
    }
    postevalskills(data) {
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/evaluation", data);
    }
    getskills(val) {
        console.log("entered getskills");
        console.log("https://opportunity-tracking-dev.mybluemix.net/api/template/" + val);
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/template/" + val);
    }
    postsubmitskills(data) {
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/template/", data);
    }
    postskill(val, data) {
        console.log("link is", "https://opportunity-tracking-dev.mybluemix.net/api/template/" + val);
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/template/" + val, data);
    }
}
SkillService.ɵfac = function SkillService_Factory(t) { return new (t || SkillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SkillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SkillService, factory: SkillService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nNZY":
/*!***********************************!*\
  !*** ./src/app/eval.component.ts ***!
  \***********************************/
/*! exports provided: EvalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalComponent", function() { return EvalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill.service */ "j8k5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EvalComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skill: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
} }
function EvalComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EvalComponent_5_ng_template_0_Template, 5, 1, "ng-template", 3);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
} }
class EvalComponent {
    constructor(ds) {
        this.ds = ds;
        this.Technology = "Front End";
        this.addskil = false;
        this.editskil = false;
        this.userobj = { skill: "" };
        this.new = [];
        this.update = [];
        this.delete = [];
        this.oparr = [];
        this.callDataServer();
    }
    callDataServer() {
        this.ds.getUsers().subscribe((res) => {
            this.evallist = res;
            for (let i = 0; i < this.evallist.EVALUATION_TEMP.length; i++) {
                this.oparr.push(this.evallist.EVALUATION_TEMP[i].TEMPTECHNAME);
            }
            this.oparr = Array.from(new Set(this.oparr));
            console.log(this.oparr);
        });
    }
    handler() {
        this.editskil = true;
    }
    callData() {
        this.ds.getUsers().subscribe(res => this.skillslist = res);
    }
    editskill(fd) {
        for (let i = 0; i < this.skillslist.EVALUATION_TEMP.length; i++) {
            if (this.skillslist.EVALUATION_TEMP[i].TEMPID === this.editind) {
                this.skillslist.EVALUATION_TEMP[i].TEMPSKILL = fd;
            }
        }
        console.log("id is" + this.editind, "skill is:" + fd);
        this.update.push({ "TEMPID": this.editind, "TEMPSKILL": fd });
        console.log(this.update);
        this.editskil = false;
    }
    edit(val, v) {
        this.addskil = false;
        this.editskil = true;
        this.userobj.skill = v;
        this.editind = val;
    }
    addskill(val) {
        this.addskil = false;
        this.skillslist.EVALUATION_TEMP.unshift({ "TEMPSKILL": val, "TEMPTECHNAME": "FRONT-END-EXPERIENCE" });
        this.new.push({ "TEMPSKILL": val, "TEMPTECHNAME": "FRONT-END-EXPERIENCE" });
        this.userobj.skill = "";
        this.addskil = false;
    } /*
     removeskill(inde){
       this.addskil=false;
       let resobj={
         idd:inde
       }
      //console.log("Index is:",inde);
      this.ds.deleteUser(resobj).subscribe((res) => {
      //console.log("res:",res);
        this.skillslist=res;
      })
    }
    */
    submithandler() {
        let finaldata = {
            EVALUATION_TEMP: {
                "NEW": this.new,
                "UPDATE": this.update,
                "DELETE": this.delete
            }
        };
        this.ds.postsubmit(finaldata).subscribe((res) => {
            console.log("resobj:", res);
            this.finallist = res;
            console.log(this.finallist);
        });
    }
}
EvalComponent.p = 0;
EvalComponent.ɵfac = function EvalComponent_Factory(t) { return new (t || EvalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"])); };
EvalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvalComponent, selectors: [["app-alleval"]], decls: 6, vars: 1, consts: [["href", "", 3, "onclick"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [3, "ngIf"]], template: function EvalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello Evaluations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onclick", function EvalComponent_Template_a_onclick_2_listener() { return ctx.handler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ShowAllTemplates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EvalComponent_5_Template, 1, 1, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.oparr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["table[_ngcontent-%COMP%]{\n    border:1px solid gray;\n    width:30%;\n    margin:100px;\n    \n    table:layout:fixed;\n    text-align:center;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alleval',
                template: `
  <h1>Hello Evaluations</h1>
  <a href="" (onclick)="handler() ">ShowAllTemplates</a>
  <!--------
  <ng-template [ngIf]="true"  *ngFor="let skill of evallist.EVALUATION_TEMP; index as idx ">
  <table class="table table-bordered">
  <tr>
    <td>TECHNOLOGY </td>
    <td>{{skill.TEMPTECHNAME}}</td>
  </tr>
  </table>
  </ng-template>
  --->
  <table class="table table-bordered">
  <ng-template [ngIf]="true"  *ngFor="let skill of oparr; index as idx ">
  <tr>
    <td>Skill: </td>
    <td>{{skill}}</td>
  </tr>
  </ng-template>
  </table>
  `,
                styles: [`
  table{
    border:1px solid gray;
    width:30%;
    margin:100px;
    
    table:layout:fixed;
    text-align:center;
  }

  `
                ]
            }]
    }], function () { return [{ type: _skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alleval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alleval.component */ "LLpx");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "+x+M");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.component */ "E94Y");
/* harmony import */ var _tech_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tech.component */ "Jtg6");
/* harmony import */ var _createtemp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createtemp.component */ "Rf3e");









let routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Evaluation', component: _alleval_component__WEBPACK_IMPORTED_MODULE_2__["AllEvalComponent"] },
    { path: 'All Evaluations', component: _template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"] },
    { path: 'Template', component: _template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"] },
    { path: 'Technology', component: _tech_component__WEBPACK_IMPORTED_MODULE_5__["TechComponent"] },
    { path: 'showalltemplates', component: _tech_component__WEBPACK_IMPORTED_MODULE_5__["TechComponent"] },
    { path: 'createtemplate', component: _createtemp_component__WEBPACK_IMPORTED_MODULE_6__["CreateTemplateComp"] },
    { path: '**', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map