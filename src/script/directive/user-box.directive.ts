import {Component, Input} from 'angular2/core';
import {User} from '../model/users';

@Component({
    selector: 'user-box',
    templateUrl: 'template/directive/user-box.html',
    styleUrls: ['style/directive/user-box.css']
})
export class UserBox {
    @Input('user') user: User;
}