import { IFire } from "./interfaces/IFire";

export class Fire implements IFire {
    arrows(amount: number) {
        console.log(`Fired ${amount} arrows`)
    }
}