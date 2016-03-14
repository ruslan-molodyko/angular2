import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    templateUrl: '/template/zippy.html'
})
export class Zippy {
    public visible: boolean;
    @Input('title') title: string;

    constructor() {
        this.visible = true;
    }

    public toggle() {
        this.visible = !this.visible;
    }
}