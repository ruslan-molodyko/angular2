import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {PageComponent} from './page.component'
import {DashboardComponent} from './dashboard.component'

@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Page']">Page</a>
            <a [routerLink]="['Dashboard']">Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, PageComponent],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/page',
        name: 'Page',
        component: PageComponent,
        useAsDefault: true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    }
])
export class App {
}