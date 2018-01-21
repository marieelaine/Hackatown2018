import { templateJitUrl } from "@angular/compiler";
import { User } from './user';


declare var require: any;
declare var google: any;

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
            temp.usePerDayElec = us.usePerDayElec;
            temp.totalUsePerMonthElec = us.totalUsePerMonthElec;
            temp.useThisMonthElec = us.useThisMonthElec;
            temp.useThisMonthElec = us.useThisMonthElec;
            temp.usePerDayWater = us.usePerDayWater;
            temp.totalUsePerMonthWater = us.totalUsePerMonthWater;
            temp.useThisMonthWater = us.useThisMonthWater;
            temp.useLastMonthWater = us.useLastMonthWater;
            temp.achievementsList = us.achievementsList;
            temp.localisation = us.localisation;
            this.users.push(temp);
        }
    }

    getUsers(): User[] {
        return this.users;
    }

    getUser(latLng:any): User{
        for(let i = 0 ; i < this.users.length ; i++) {
            console.log(this.users[i].localisation.lat, latLng.lat(), this.users[i].localisation.lng, latLng.lng());
            if(this.users[i].localisation.lat == latLng.lat() && this.users[i].localisation.lng == latLng.lng()) {
                return this.users[i];
            }
        }
    }

    getUserByIndex(index:number): User {
        return this.users[index];
    }
}
