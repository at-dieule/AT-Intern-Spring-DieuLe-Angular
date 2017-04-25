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
var TrainersComponent = (function () {
    function TrainersComponent(_trainerService) {
        var _this = this;
        this._trainerService = _trainerService;
        this.trainers = [];
        this.selected = null;
        this._trainerService.getAllTrainer()
            .subscribe(function (data) {
            _this.trainers = data.trainers;
        });
    }
    // viewDetail(i: number) {
    //   this.selected = i;
    // }
    TrainersComponent.prototype.viewDetail = function (i) {
        this.selected = this.trainers[i].name;
    };
    return TrainersComponent;
}());
TrainersComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './trainer.html',
        providers: [service_component_1.TrainersService],
    }),
    __metadata("design:paramtypes", [service_component_1.TrainersService])
], TrainersComponent);
exports.TrainersComponent = TrainersComponent;
//# sourceMappingURL=trainer.component.js.map