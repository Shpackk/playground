export enum vehicleTypes {
    GROUND = 'A car probably',
    AIR = 'Some flying shit probably',
    WATER = 'Some swimming shit probably',
    SPACE = 'Same as air probably'
}
/* 
    so the abstract class is a TRUE blueprint
    methods, properties declated with -abstract- notation
    should be implemented by a class which inherits abstract class
*/
export abstract class Vehicle {
    constructor(protected topSpeed: number, protected vehicleType: vehicleTypes){}

    abstract averageSpeedOnTrack(this: Vehicle, trackLength: number): string;

    upgradeTopSpeed(amountToAdd: number) {
        this.topSpeed += amountToAdd;
        return 'Top speed upgraded'
    }

    isSafe() {
        return this.vehicleType + ' is not safe at all'
    }

    get vehicleTopSpeed() {
        return this.topSpeed > 200 ? 'You\'re going to die anyway' : this.topSpeed + 'km/h'
    }
}