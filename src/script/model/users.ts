import {jobs} from "./job"

export class User {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public job: string
    ) { }
}

export var users: User[] = [
    new User(0, "Ruslan", 22, jobs[0]),
    new User(1, "Roma", 21, jobs[1]),
    new User(2, "John", 34, jobs[2]),
];