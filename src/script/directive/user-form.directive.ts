import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {User} from '../model/users';

@Component({
    selector: 'user-form',
    templateUrl: 'template/directive/user-form.html',
})
export class UserForm {
    public user: User = new User(0, 'Ruslan', 22, 'p');
}