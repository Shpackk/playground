import { Calc } from "./Calc";
import { Character } from "./Character";

class CharacterService {
    constructor(private calc: Calc){}
    createChar() {
        const char = new Character(this.calc, 'dumb dude')
        const dumbResult = char.dumbCalculation()
        console.log(dumbResult)
    }
}
const calc = new Calc()
const character = new CharacterService(calc)
character.createChar()