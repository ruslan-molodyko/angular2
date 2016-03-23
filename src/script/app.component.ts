import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {UserListComponent} from './page/user-list.component'
import {UserComponent} from './page/user.component'
import {Title} from 'angular2/platform/browser';
import {MenuDashboard} from './module/menu-dashboard/index';

//@RouteConfig([
//    {path: '/', name: 'UserList', component: UserListComponent, useAsDefault: true},
//    {path: '/user/:id', name: 'User', component: UserComponent}
//])
@Component({
    selector: 'app',
    templateUrl: 'template/app.html',
    directives: [ROUTER_DIRECTIVES, MenuDashboard],
    providers: [Title]
})
export class App {
    constructor(title:Title) {
        title.setTitle('App');
    }
}