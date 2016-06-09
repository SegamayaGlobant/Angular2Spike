System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CrewMemberService;
    return {
        setters:[],
        execute: function() {
            CrewMemberService = (function () {
                function CrewMemberService() {
                    this.CREWMEMBERS_INFO = [
                        { "id": "a3", "preference": "Red" }, { "id": "a1", "preference": "Blue" }, { "id": "a4", "preference": "Green" }, { "id": "a2", "preference": "Yellow" }
                    ];
                }
                CrewMemberService.prototype.get = function () {
                    return this.CREWMEMBERS_INFO;
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
                return CrewMemberService;
            }());
            exports_1("CrewMemberService", CrewMemberService);
        }
    }
});
//# sourceMappingURL=crewmembers.service.js.map