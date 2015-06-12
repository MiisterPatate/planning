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
            template: "\n\t\t<h1>Welcome Dr Baoudj !</h1>   \n\t\t<div id=\"calendar\">Test</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSw0Q0FENEM7QUFDNUMseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFFN0Q7SUFBQUE7SUFjQUMsQ0FBQ0E7SUFkREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO1NBQ2ZBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0xBLFFBQVFBLEVBQ1JBLGdGQUdDQTtTQUNEQSxDQUFDQTs7WUFJREE7SUFBREEsVUFBQ0E7QUFBREEsQ0FkQSxBQWNDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FwcCdcbn0pXG5cbkBWaWV3KHtcblx0dGVtcGxhdGU6IFxuXHRgXG5cdFx0PGgxPldlbGNvbWUgRHIgQmFvdWRqICE8L2gxPiAgIFxuXHRcdDxkaXYgaWQ9XCJjYWxlbmRhclwiPlRlc3Q8L2Rpdj5cblx0YFxufSlcblxuY2xhc3MgQXBwIHtcblxufVxuXG5ib290c3RyYXAoQXBwKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==