import { templateJitUrl } from "@angular/compiler";
import { User } from './user';

declare var require: any;
export class Users {
    private users: User[];

    constructor() {
        this.retreiveDataFromDatabase();
    }

    retreiveDataFromDatabase(): void {
        const user_data = require('./data_user.json').users;
        // for (let us of user_data) {

        // }
        console.log(user_data[0]);
    }
}
