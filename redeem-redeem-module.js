(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redeem-redeem-module"],{

/***/ "./src/app/redeem/redeem-form/redeem-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/redeem/redeem-form/redeem-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 767.98px) {\n\n    #redeem-form {\n        padding-top: 2rem;\n    }\n\n    #redeem-form .row div {\n        border-radius: 0.4rem;\n    }\n}\n\n#redeem-form h3 {\n    text-align: center;\n    font-weight: 300;\n    border-radius: 0.5rem;\n\n    background: #ECE9E6;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to bottom, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n#redeem-form .row > div,\n#card-panel .row > div {\n    background: white;\n    padding: 2rem;\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n\n.lds-ripple {\n    display: inline-block;\n    position: relative;\n    width: 640px;\n    height: 640px;\n}\n\n.lds-ripple div {\n    position: absolute;\n    border: 4px solid #fffc00;\n    opacity: 1;\n    border-radius: 50%;\n    -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple div:nth-child(2) {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s;\n}\n\n@-webkit-keyframes lds-ripple {\n    0% {\n        top: 280px;\n        left: 280px;\n        width: 0;\n        height: 0;\n        opacity: 1;\n    }\n    100% {\n        top: -1px;\n        left: -1px;\n        width: 580px;\n        height: 580px;\n        opacity: 0;\n    }\n}\n\n@keyframes lds-ripple {\n    0% {\n        top: 280px;\n        left: 280px;\n        width: 0;\n        height: 0;\n        opacity: 1;\n    }\n    100% {\n        top: -1px;\n        left: -1px;\n        width: 580px;\n        height: 580px;\n        opacity: 0;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkZWVtL3JlZGVlbS1mb3JtL3JlZGVlbS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCOztJQUVyQixtQkFBbUIsR0FBRyw4QkFBOEIsR0FDZSwrQkFBK0I7SUFDbEcsd0RBQXdELEVBQUUscUVBQXFFO0FBQ25JOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtBQUM5Qzs7QUFFQTtJQUNJLDhCQUE4QixFQUFFLFFBQVE7QUFDNUM7O0FBSUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNFQUE4RDtZQUE5RCw4REFBOEQ7QUFDbEU7O0FBQ0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLFFBQVE7UUFDUixTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7UUFDWixhQUFhO1FBQ2IsVUFBVTtJQUNkO0FBQ0o7O0FBZkE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsUUFBUTtRQUNSLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1YsWUFBWTtRQUNaLGFBQWE7UUFDYixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlZGVlbS9yZWRlZW0tZm9ybS9yZWRlZW0tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2Ny45OHB4KSB7XG5cbiAgICAjcmVkZWVtLWZvcm0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAjcmVkZWVtLWZvcm0gLnJvdyBkaXYge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgfVxufVxuXG4jcmVkZWVtLWZvcm0gaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcblxuICAgIGJhY2tncm91bmQ6ICNFQ0U5RTY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZGRkZGLCAjRUNFOUU2KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiwgI0VDRTlFNik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuI3JlZGVlbS1mb3JtIC5yb3cgPiBkaXYsXG4jY2FyZC1wYW5lbCAucm93ID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59XG5cblxuXG4ubGRzLXJpcHBsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjQwcHg7XG4gICAgaGVpZ2h0OiA2NDBweDtcbn1cbi5sZHMtcmlwcGxlIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmZjMDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XG59XG4ubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcbiAgICAwJSB7XG4gICAgICAgIHRvcDogMjgwcHg7XG4gICAgICAgIGxlZnQ6IDI4MHB4O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICB3aWR0aDogNTgwcHg7XG4gICAgICAgIGhlaWdodDogNTgwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/redeem/redeem-form/redeem-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/redeem/redeem-form/redeem-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [hidden]=\"!loading\">\n    <div class=\"row align-items-center\">\n        <div class=\"col-12\">\n            <div class=\"lds-ripple m-auto d-block\"><div></div><div></div></div>\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"loading\">\n    <div class=\"container\" id=\"redeem-form\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-sm-8 ml-auto mr-auto\">\n                <h3 class=\"pb-3 pt-3\">{{tokensAmount}} {{tokenName}}</h3>\n\n                <hr>\n\n                <form (ngSubmit)=\"f.form.valid && create()\" name=\"form\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-row pt-0\">\n                        <div class=\"col-12\">\n                            <select [(ngModel)]=\"fee\" class=\"form-control\"\n                                    id=\"fee\" name=\"fee\">\n                                <option *ngFor=\"let fee of fees\" [value]=\"fee.value\">{{fee.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"p-0 mt-3\" style=\"text-align: center\">\n                        <button class=\"btn btn-success btn-lg\" title=\"Approve transfer coins.\"\n                                type=\"submit\">\n                            REDEEM YOUR TOKENS\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/redeem/redeem-form/redeem-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/redeem/redeem-form/redeem-form.component.ts ***!
  \*************************************************************/
/*! exports provided: RedeemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemFormComponent", function() { return RedeemFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_qrtoken_smart_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/qrtoken-smart-contract */ "./src/app/util/qrtoken-smart-contract.ts");
/* harmony import */ var _util_merkle_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/merkle-tree */ "./src/app/util/merkle-tree.ts");






var qrtokenContractArtifacts = __webpack_require__(/*! ../../util/QRTokenABI.json */ "./src/app/util/QRTokenABI.json");
var RedeemFormComponent = /** @class */ (function () {
    function RedeemFormComponent(route, web3Service) {
        this.route = route;
        this.web3Service = web3Service;
        this.loading = false;
        this.tokensAmount = 1;
        this.tokenName = 'BNB';
        this.fee = 10;
        this.fees = [
            {
                name: '2.5%',
                value: 2.5
            },
            {
                name: '5%',
                value: 5
            },
            {
                name: '10%',
                value: 10
            },
            {
                name: '15%',
                value: 15
            },
        ];
    }
    RedeemFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.web3Service.getAccounts().subscribe(function (addresses) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var data, buffer, privateKey, proof, proofs, slice, account, _a, root, index, contract, distribution;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                data = this.route.snapshot.paramMap.get('data')
                                    .replace(/-/g, '/')
                                    .replace(/_/g, '+');
                                buffer = new Buffer(data, 'base64');
                                privateKey = buffer.slice(0, 32);
                                proof = buffer.slice(32);
                                console.log('privateKey', privateKey.toString('hex'));
                                proofs = [];
                                while (proof.slice(0, 20).length > 0) {
                                    slice = proof.slice(0, 20);
                                    proof = proof.slice(20);
                                    proofs.push(slice.toString('hex'));
                                }
                                account = this.web3Service.web3.eth.accounts
                                    .privateKeyToAccount('0x' + privateKey.toString('hex'));
                                _a = _util_merkle_tree__WEBPACK_IMPORTED_MODULE_5__["MerkleTree"].applyProof(account.address, proofs), root = _a.root, index = _a.index;
                                console.log('Account', account);
                                console.log('Root', '0x' + root.toString('hex'));
                                console.log('Index', index);
                                console.log('proofs', proofs);
                                contract = new this.web3Service.web3.eth.Contract(qrtokenContractArtifacts, _util_qrtoken_smart_contract__WEBPACK_IMPORTED_MODULE_4__["QRTOKEN_SMART_CONTRACT_ADDRESS"]);
                                return [4 /*yield*/, contract.methods
                                        .distributions('0x' + root.toString('hex'))
                                        .call()];
                            case 1:
                                distribution = _b.sent();
                                console.log('distribution', distribution);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RedeemFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redeem-form',
            template: __webpack_require__(/*! ./redeem-form.component.html */ "./src/app/redeem/redeem-form/redeem-form.component.html"),
            styles: [__webpack_require__(/*! ./redeem-form.component.css */ "./src/app/redeem/redeem-form/redeem-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _util_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]])
    ], RedeemFormComponent);
    return RedeemFormComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/redeem/redeem.module.ts":
/*!*****************************************!*\
  !*** ./src/app/redeem/redeem.module.ts ***!
  \*****************************************/
/*! exports provided: RedeemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemModule", function() { return RedeemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _redeem_form_redeem_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redeem-form/redeem-form.component */ "./src/app/redeem/redeem-form/redeem-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [
    {
        path: '',
        component: _redeem_form_redeem_form_component__WEBPACK_IMPORTED_MODULE_3__["RedeemFormComponent"],
        children: []
    }
];
var RedeemModule = /** @class */ (function () {
    function RedeemModule() {
    }
    RedeemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_redeem_form_redeem_form_component__WEBPACK_IMPORTED_MODULE_3__["RedeemFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], RedeemModule);
    return RedeemModule;
}());



/***/ })

}]);
//# sourceMappingURL=redeem-redeem-module.js.map