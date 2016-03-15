import {Component, OnInit} from 'angular2/core';
import {UserService} from '../service/user.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from '../model/users';

@Component({
    selector: 'user-list',
    templateUrl: 'template/page/user-list.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class UserListComponent implements OnInit{
    constructor(private _userService: UserService) {}
    public users: User[];

    getUsers():void {
        this._userService.getUsers().then(users => this.users = users);
    }

    ngOnInit() {
        this.getUsers();
    }
}