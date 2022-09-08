import { Vehicle, vehicleTypes } from "./AbstractVehicle"


class Car extends Vehicle {
    constructor(topSpeed: number, vehicleType: vehicleTypes) {
        super(topSpeed, vehicleType)
    }

    averageSpeedOnTrack(this: Car, trackLength: number): string {
        return `You vehicle will pass the track in ${trackLength / this.topSpeed } hour`
    }
}

const coolCar = new Car(200, vehicleTypes.GROUND)
console.log(coolCar.averageSpeedOnTrack(200))
console.log(coolCar.isSafe());
console.log(coolCar.vehicleTopSpeed)
console.log(coolCar.upgradeTopSpeed(499))
console.log(coolCar.vehicleTopSpeed)
