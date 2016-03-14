import {Injectable} from 'angular2/core';
import {users, User} from "./users"

@Injectable()
export class UserService {
    getUsers() {
        return new Promise<User[]>(resolve =>
            setTimeout(()=>resolve(users), 2000)
        );
    }
}
