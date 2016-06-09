System.register(['angular2/http', 'angular2/core', './rxjs-operators', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var CrewMemberService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CrewMemberService = (function () {
                function CrewMemberService(http) {
                    this.http = http;
                    this.crewurl = 'http://localhost:8094/create'; // URL to web API
                    this.CREWMEMBERS_INFO = [
                        { "id": "a3", "preference": "Red" }, { "id": "a1", "preference": "Blue" }, { "id": "a4", "preference": "Green" }, { "id": "a2", "preference": "Hola" }
                    ];
                }
                CrewMemberService.prototype.extractData = function (res) {
                    var body = res.json();
                    console.log(body);
                    this.CREWMEMBERS_INFO = body;
                    return body;
                };
                CrewMemberService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                CrewMemberService.prototype.get = function () {
                    return this.http.get(this.crewurl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                CrewMemberService.prototype.add = function (newInfo) {
                    this.CREWMEMBERS_INFO.push(newInfo);
                };
                CrewMemberService.prototype.delete = function (newInfo) {
                    var index = this.CREWMEMBERS_INFO.indexOf(newInfo);
                    if (index >= 0) {
                        this.CREWMEMBERS_INFO.splice(index, 1);
                    }
                };
                CrewMemberService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CrewMemberService);
                return CrewMemberService;
            }());
            exports_1("CrewMemberService", CrewMemberService);
        }
    }
});
//# sourceMappingURL=crewmembers.service.js.map