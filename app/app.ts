/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'app'
})

@View({
	template: 
	`
		<h1>Welcome Dr Baoudj !</h1>   
		<div id="calendar">Test</div>
	`
})

class App {

}

bootstrap(App);
