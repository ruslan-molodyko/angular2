import {Component, Input} from 'angular2/core';

@Component({
    selector: 'page-title',
    template: '{{title}}'
})
export class PageTitle {
    title: string;

    constructor() {
        this.title = 'Some title';
    }
}