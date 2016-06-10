System.register(['angular2/core', './crewmembers.service', './crewmember-results.component'], function(exports_1, context_1) {
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
    var core_1, crewmembers_service_1, crewmember_results_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (crewmembers_service_1_1) {
                crewmembers_service_1 = crewmembers_service_1_1;
            },
            function (crewmember_results_component_1_1) {
                crewmember_results_component_1 = crewmember_results_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(crewmemberService) {
                    var _this = this;
                    this.crewmemberService = crewmemberService;
                    this.objectFound = null;
                    this.activeSearch = false;
                    this.crewmemberService.get()
                        .subscribe(function (info) {
                        _this.info = info;
                    }, function (error) { return console.log(error); });
                }
                AppComponent.prototype.sendId = function (preferenceID) {
                    this.objectFound = null;
                    this.activeSearch = true;
                    for (var i = 0; i < this.info.length; i++) {
                        if (this.info[i].id == preferenceID) {
                            this.objectFound = this.info[i];
                            console.log(this.objectFound);
                            return this.info[i].preference;
                        }
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'crewmemberData',
                        templateUrl: 'partials/app.html',
                        directives: [crewmember_results_component_1.CrewmemberResults],
                        providers: [crewmembers_service_1.CrewMemberService],
                        styleUrls: ['css/app.css']
                    }), 
                    __metadata('design:paramtypes', [crewmembers_service_1.CrewMemberService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map