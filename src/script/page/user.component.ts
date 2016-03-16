import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_PROVIDERS} from 'angular2/router';
import {UserService} from '../service/user.service';
import {UserBox} from '../directive/user-box.directive';
import {UserForm} from '../directive/user-form.directive';
import {User} from '../model/users';

@Component({
    selector: 'user',
    templateUrl: 'template/page/user.html',
    directives: [UserBox, UserForm],
    providers: [UserService]
})
export class UserComponent implements OnInit{
    constructor(private _userService: UserService, private _routeParams:RouteParams) {}
    public user: User;
    public id: string;

    getUser(id: number):void {
        this._userService.getUser(id).then(user => this.user = user);
    }

    ngOnInit() {
        this.id = this._routeParams.get('id');
        this.getUser(parseInt(this.id));
    }
}