import { Archer } from "./Archer";
import { Fire } from "./Fire";

class ArcherService {
    constructor(private fire: Fire){}
    createAndShoot() {
        const archer = new Archer(this.fire)
        archer.action(10)
    }
}
const fireService = new Fire()
const archerShootTen = new ArcherService(fireService)
archerShootTen.createAndShoot()