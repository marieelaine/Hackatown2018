class User {
    id: number;
    name: string;
    imageSrc: any;
    usePerDay: number;
    totalUsePerMonth: number;
    achievementsList: any = [1, 2, 3];
    localisation: any = {
        lat: 42.33333,
        lng: -43.3333
    };
}


export class Users {
    private users: User[];

    constructor() {
        this.retreiveDataFromDatabase();
    }

    retreiveDataFromDatabase(): void {
        var user_data = require('./data_user.json').users;
        // for (let us of user_data) {

        // }
        console.log(user_data[0]);
    }
}