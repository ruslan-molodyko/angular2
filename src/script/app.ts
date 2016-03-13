import {Component} from 'angular2/core';

interface Hero {
    name: string;
    id: number;
    size: number;
}

@Component({
    selector: 'app',
    template: `
        <h1>My First Angular 2</h1>
        <ul>
            <li *ngFor="#hero of heroes" [style.fontSize.px]="hero.size" (click)="selectedHero = hero">{{hero.name}}</li>
        </ul>
        `
})

export class AppComponent {
    public heroes: Hero[] = [{
        name: 'Ruslan',
        id: 0,
        size: 13
    }, {
        name: 'Roma',
        id: 1,
        size: 23
    }];
}