import {Component, Input} from 'angular2/core';

@Component({
    selector: 'header-dashboard',
    templateUrl: './modules/header-dashboard/assets/template/index.html',
    styleUrls: ['./modules/header-dashboard/assets/style/main.css']
})
export class HeaderDashboard {

    /**
     * Width of menu
     * @type {string}
     */
    @Input() width:string = '300px';
}