import {Component, Input, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {UserService} from '../service/user.service';
import {User} from '../model/users';
import {jobs} from '../model/job';

@Component({
    selector: 'user-form',
    templateUrl: 'template/directive/user-form.html',
    providers: [UserService]
})
export class UserForm implements OnInit{
    public user: User;
    @Input('id') id: number;
    public jobs:string[] = jobs;

    constructor(private _userService:UserService) {}

    ngOnInit() {
        this._userService.getUser(this.id).then(user => this.user = user);
    }

    get diagnostic() {
        return JSON.stringify(this.user);
    }

}