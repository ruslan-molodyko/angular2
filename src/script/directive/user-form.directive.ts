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
    public user: User = new User(0, 'Ruslan', 22, jobs[0]);
    @Input('id') id: number;
    public jobs:string[] = jobs;

    constructor(private _userService:UserService) {}

    ngOnInit() {
        //this._userService.getUser(this.id).then(user => this.user = user);
    }

    active = true;
    submitted = false;

    newUser() {
        this.submitted = true;
        //this.user = new User(0, '', null, '');
        this.active = false;
        setTimeout(()=> this.active = true, 0);
    }
}