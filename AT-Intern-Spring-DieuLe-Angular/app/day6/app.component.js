"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var member_service_1 = require("./member.service");
var AppComponent = (function () {
    function AppComponent(_member) {
        var _this = this;
        this._member = _member;
        this.members = [];
        this._member.getAllMember()
            .subscribe(function (data) {
            _this.members = data.members;
        });
        this.selectedItem = 0;
    }
    AppComponent.prototype.viewDetail = function (i) {
        this.selectedItem = i;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [member_service_1.MemberService],
        templateUrl: './app.html'
    }),
    __metadata("design:paramtypes", [member_service_1.MemberService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map