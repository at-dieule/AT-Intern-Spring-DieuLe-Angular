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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TrainersService = (function () {
    function TrainersService(_http) {
        this._http = _http;
    }
    TrainersService.prototype.getAllTrainer = function () {
        return this._http.get('./app/data/data.json')
            .map(function (res) {
            return res.json();
        });
    };
    TrainersService.prototype.getTrainer = function (name) {
        console.log(name);
        return this._http.get('./app/data/data.json')
            .map(function (res) {
            // return res.json().trainers;
            return res.json().trainers.filter(function (item) {
                return item.name === name;
            })[0];
        });
    };
    return TrainersService;
}());
TrainersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TrainersService);
exports.TrainersService = TrainersService;
//# sourceMappingURL=service.component.js.map