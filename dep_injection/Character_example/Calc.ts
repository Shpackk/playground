import { Icalc } from "./interfaces/Icalc";

export class Calc implements Icalc {
    something(weight: number, height: number, sex: string): number | void {
        return sex === 'man' ? height * weight : height * weight - 100 
    }
}