import {Component} from 'angular2/core';

interface Hero {
    name: string;
    id: number;
}


@Component({
    selector: 'app',
    template: `
        <h1>My First Angular 2 {{hero.name}}</h1>
        <input [(ngModel)]="hero.name">
        `
})

export class AppComponent {
    public hero: Hero = {
        name: 'Ruslan',
        id: 0
    }
}