import {Component} from 'angular2/core';
import {Zippy} from './zippy';
import {PageTitle} from './page-title';

@Component({
    selector: 'app',
    templateUrl: 'template/app.html',
    directives: [Zippy]
})
export class App {

}