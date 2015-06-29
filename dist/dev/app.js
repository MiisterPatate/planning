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
var calendar_1 = require('utils/calendar');
var App = (function () {
    function App() {
        this.myCalendar = new calendar_1.Calendar();
    }
    App.prototype.onSave = function (e, title, start_time) {
        e.preventDefault();
        data = {
            title: title,
            start: "2015-06-30T18:00:00",
            end: "2015-06-30T20:00:00"
        };
        console.log(data);
        this.myCalendar.addNewEvent(data);
        $('#calendar').fullCalendar('refetchEvents');
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            hostListeners: {
                'click#save': 'onSave()'
            }
        }),
        angular2_1.View({
            templateUrl: 'template/calendar.html',
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAub25TYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQ0EsNENBRDRDO0FBQzVDLHlCQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdELHlCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRXhDO0lBYUNBO1FBQ0NDLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLG1CQUFRQSxFQUFFQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUFFREQsb0JBQU1BLEdBQU5BLFVBQU9BLENBQUNBLEVBQUVBLEtBQUtBLEVBQUVBLFVBQVVBO1FBQzFCRSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUNuQkEsSUFBSUEsR0FBR0E7WUFDTkEsS0FBS0EsRUFBRUEsS0FBS0E7WUFDWkEsS0FBS0EsRUFBRUEscUJBQXFCQTtZQUM1QkEsR0FBR0EsRUFBRUEscUJBQXFCQTtTQUN6QkEsQ0FBQUE7UUFDSEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbEJBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUU3Q0EsQ0FBQ0E7SUE1QkZGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxhQUFhQSxFQUFDQTtnQkFDYkEsWUFBWUEsRUFBRUEsVUFBVUE7YUFDeEJBO1NBQ0RBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0xBLFdBQVdBLEVBQUVBLHdCQUF3QkE7U0FDckNBLENBQUNBOztZQXFCREE7SUFBREEsVUFBQ0E7QUFBREEsQ0E5QkEsQUE4QkNBLElBQUE7QUFFRCxvQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Q2FsZW5kYXJ9IGZyb20gJ3V0aWxzL2NhbGVuZGFyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXBwJyxcblx0aG9zdExpc3RlbmVyczp7XG5cdFx0J2NsaWNrI3NhdmUnOiAnb25TYXZlKCknXG5cdH1cbn0pXG5cbkBWaWV3KHtcblx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9jYWxlbmRhci5odG1sJywgXG59KVxuXG5jbGFzcyBBcHAge1xuXG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5teUNhbGVuZGFyID0gbmV3IENhbGVuZGFyKCk7XG5cdH0sXG5cblx0b25TYXZlKGUsIHRpdGxlLCBzdGFydF90aW1lKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZGF0YSA9IHtcblx0XHRcdHRpdGxlOiB0aXRsZSxcblx0XHRcdHN0YXJ0OiBcIjIwMTUtMDYtMzBUMTg6MDA6MDBcIixcblx0XHRcdGVuZDogXCIyMDE1LTA2LTMwVDIwOjAwOjAwXCJcblx0XHRcdH1cblx0Y29uc29sZS5sb2coZGF0YSk7XG5cdHRoaXMubXlDYWxlbmRhci5hZGROZXdFdmVudChkYXRhKTtcblx0JCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdyZWZldGNoRXZlbnRzJyk7XG5cblx0fVxuXG59XG5cbmJvb3RzdHJhcChBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9