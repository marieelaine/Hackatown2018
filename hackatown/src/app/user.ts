export class User {
    id: number;
    name: string;
    imageSrc: any;
    usePerDayElec: number;
    totalUsePerMonthElec: number;
    useThisMonthElec:number;
    useLastMonthElec:number;
    usePerDayWater:number;
    totalUsePerMonthWater:number;
    useThisMonthWater:number;
    useLastMonthWater:number;
    achievementsList: any = [1, 2, 3];
    localisation: any = {
        lat: 42.33333,
        lng: -43.3333
    };
}