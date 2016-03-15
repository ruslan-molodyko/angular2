import {Injectable} from 'angular2/core';
import {users, User} from "../data/users"

@Injectable()
export class UserService {
    getUsers() {
        return new Promise<User[]>(resolve =>
            setTimeout(()=>resolve(users), 1000)
        );
    }

    getUser(id) {
        return new Promise<User[]>(resolve =>
                setTimeout(()=>resolve(users[id]), 1000)
        );
    }
}
