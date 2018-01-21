import { templateJitUrl } from "@angular/compiler";
import { User } from './user';

declare var require: any;
export class Users {
    private users: User[];

    constructor() {
        this.retreiveDataFromDatabase();
    }

    retreiveDataFromDatabase(): void {
<<<<<<< HEAD
        const user_data = require('./data_user.json').users;
        // for (let us of user_data) {

        // }
        console.log(user_data[0]);
    }
}
=======
        this.users = [];
        let user_data = require('./data_user.json').users;
        for (let us of user_data) {
            let tempUser = new User();
            tempUser.id = us.id;
            tempUser.name = us.name;
            tempUser.imageSrc = us.imageSrc;
            tempUser.usePerDay = us.usePerDay;
            tempUser.achievementsList = us.achievementsList;
            tempUser.localisation = us.localisation;
            console.log(tempUser);
            this.users.push(tempUser);
            console.log(tempUser.localisation.lat);
            console.log(tempUser.localisation.lng);
        }
        console.log(user_data[0]);
    }

    getUsers(): User[] {
        return this.users;
    }
}
>>>>>>> map
