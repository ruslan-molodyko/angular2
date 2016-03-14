import {Component, OnInit} from 'angular2/core';
import {Zippy} from './zippy.component';
import {PageTitle} from './page-title.component';
import {UserService} from './user.service';
import {User} from './users';

@Component({
    selector: 'page',
    templateUrl: 'template/page.html',
    directives: [Zippy],
    providers: [UserService]
})

export class PageComponent implements OnInit{
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