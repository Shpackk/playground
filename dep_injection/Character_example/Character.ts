import { Icalc } from "./interfaces/Icalc";

export class Character {
    private weight: number = 100;
    private height: number = 190;
    private sex: string = 'man';
    public role: string;
    constructor(
        private calc: Icalc,
        role: string
    ) {
        this.role = role;
    }

    dumbCalculation(): number | void {
        return this.calc.something(this.weight, this.height, this.sex)
    }
}