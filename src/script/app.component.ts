import {Component, OnInit} from 'angular2/core';
import {Zippy} from './zippy.component';
import {PageTitle} from './page-title.component';
import {UserService} from './user.service';
import {User} from './users';

@Component({
    selector: 'app',
    templateUrl: 'template/app.html',
    directives: [Zippy],
    providers: [UserService]
})

export class App implements OnInit{
    constructor(private _userService: UserService) {}
    private users: User[];
    public user: User;

    getUsers() {
        this._userService.getUsers().then(function(users) {
            this.users = users;
            this.getFirst();
        }.bind(this));
    }

    getFirst() {
        this.user = this.users[0];
    }

    ngOnInit() {
        this.getUsers();
    }
}