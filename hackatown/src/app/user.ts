export class User {
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