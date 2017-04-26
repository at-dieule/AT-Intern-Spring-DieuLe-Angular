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
var service_component_1 = require("./service.component");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var TrainersComponent = (function () {
    function TrainersComponent(fb) {
        this.memberForm = fb.group({
            'firstname': ["Le", forms_2.Validators.required],
            'lastname': ["DIeu", forms_2.Validators.required],
            'birthday': "",
            'team': ["PHP", forms_2.Validators.required],
            'email': [null, forms_2.Validators.required],
            'github': ["at-dieule", forms_2.Validators.required],
        });
    }
    TrainersComponent.prototype.addMember = function (form) {
        console.log(form.value);
        this.member.push(form.value);
    };
    TrainersComponent.prototype.addEmail = function () {
        var email = this.firstname.value + '.' + this.lastname.value + '@asiantech.vn';
        this.email.setValue(email);
    };
    return TrainersComponent;
}());
TrainersComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './trainer.html',
        providers: [service_component_1.TrainersService, forms_1.NgModel],
    }),
    __metadata("design:paramtypes", [forms_2.FormBuilder])
], TrainersComponent);
exports.TrainersComponent = TrainersComponent;
//# sourceMappingURL=trainer.component.js.map