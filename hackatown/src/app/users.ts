import { templateJitUrl } from "@angular/compiler";
import { User } from './user';


declare var require: any;
export class Users {
    private users: User[];

    constructor() {
        this.retreiveDataFromDatabase();
    }

    retreiveDataFromDatabase(): void {
        this.users = [];
        const user_data = require('./data_user.json').users;
        for (let us of user_data) {
            let temp = new User();
            temp.id = us.id;
            temp.name = us.name;
            temp.usePerDay = us.usePerDay;
            temp.totalUsePerMonth = us.totalUsePerMonth;
            temp.achievementsList = us.achievementsList;
            temp.localisation = us.localisation;
            this.users.push(temp);
        }
    }

    getUsers(): User[] {
        return this.users;
    }
}
