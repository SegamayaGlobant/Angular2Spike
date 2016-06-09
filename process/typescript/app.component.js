System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, CREWMEMBERS_INFO;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.info = CREWMEMBERS_INFO;
                    this.preferenceFound = null;
                }
                //crewmemberID:string;
                //preference:string;
                /*
                  constructor(){
                    this.crewmemberID='a1';
                    this.preference='Blue';
                  }
                */
                AppComponent.prototype.sendId = function (preferenceID) {
                    console.log(preferenceID);
                    for (var i = 0; i < this.info.length; i++) {
                        if (this.info[i].id == preferenceID) {
                            console.log(this.info[i].preference);
                            return this.info[i].preference;
                        }
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'crewmemberData',
                        templateUrl: 'partials/app.html',
                        styleUrls: ['css/app.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            CREWMEMBERS_INFO = [
                { "id": "a3", "preference": "Red" }, { "id": "a1", "preference": "Blue" }, { "id": "a4", "preference": "Green" }, { "id": "a2", "preference": "Yellow" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map