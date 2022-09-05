import { IFire } from "./interfaces/IFire";

export class Archer {
    constructor(private fire: IFire){}

    action(amount: number) {
        this.fire.arrows(amount)
    }
}