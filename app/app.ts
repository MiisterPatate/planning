/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Calendar} from 'utils/calendar';

@Component({
	selector: 'app',
	hostListeners:{
		'click#save': 'onSave()'
	}
})

@View({
	templateUrl: 'template/calendar.html', 
})

class App {

	constructor(){
		this.myCalendar = new Calendar();
	},

	onSave(e, title, start_time){
		e.preventDefault();
		data = {
			title: title,
			start: "2015-06-30T18:00:00",
			end: "2015-06-30T20:00:00"
			}
	console.log(data);
	this.myCalendar.addNewEvent(data);
	$('#calendar').fullCalendar('refetchEvents');

	}

}

bootstrap(App);
