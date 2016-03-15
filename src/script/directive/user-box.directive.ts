import {Component, Input} from 'angular2/core';
import {User} from '../model/users';

@Component({
    selector: 'user-box',
    templateUrl: '/directive/user-box.html'
})
export class UserBox {
    @Input('user') user: User;
}