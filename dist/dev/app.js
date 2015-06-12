if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: '<h1>Welcome !</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSw0Q0FENEM7QUFDNUMseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFFN0Q7SUFBQUE7SUFXQUMsQ0FBQ0E7SUFYREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO1NBQ2ZBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0xBLFFBQVFBLEVBQ1JBLG9CQUFvQkE7U0FDcEJBLENBQUNBOztZQUlEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQVhBLEFBV0NBLElBQUE7QUFFRCxvQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXBwJ1xufSlcblxuQFZpZXcoe1xuXHR0ZW1wbGF0ZTogXG5cdCc8aDE+V2VsY29tZSAhPC9oMT4nXG59KVxuXG5jbGFzcyBBcHAge1xuXG59XG5cbmJvb3RzdHJhcChBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9