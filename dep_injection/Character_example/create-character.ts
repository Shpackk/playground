import { Calc } from "./Calc";
import { Character } from "./Character";

class CharacterService {
    createChar() {
        const icalc = new Calc()
        const char = new Character(icalc, 'dumb dude')
        const dumbResult = char.dumbCalculation()
        console.log(dumbResult)
    }
}

const character = new CharacterService()
character.createChar()