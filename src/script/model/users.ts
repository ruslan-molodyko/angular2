export class User {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public job: string
    ) { }
}

export var users: User[] = [
    new User(0, "Ruslan", 22, "Programmer"),
    new User(1, "Roma", 21, "Student"),
    new User(2, "John", 34, "Taxi Driver"),
];