import {Injectable} from 'angular2/core';
import {users, User} from "../model/users"

@Injectable()
export class UserService {
    getUsers() {
        return new Promise<User[]>(resolve =>
            setTimeout(()=>resolve(users), 0)
        );
    }

    getUser(id) {
        return new Promise<User>(resolve =>
                setTimeout(()=>resolve(users[id]), 0)
        );
    }
}
