import { Icalc } from "./interfaces/Icalc";

export class Character {
    constructor(
        private calc: Icalc,
        public role: string,
        private weight: number = 190,
        private height: number = 190,
        private sex: string = 'man'
    ) {
    }

    dumbCalculation(): number | void {
        return this.calc.something(this.weight, this.height, this.sex)
    }
}