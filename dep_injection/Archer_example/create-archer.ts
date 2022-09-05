import { Archer } from "./Archer";
import { Fire } from "./Fire";

class ArcherService {
    createAndShoot() {
        const fire = new Fire()
        const archer = new Archer(fire)
        archer.action(10)
    }
}

const archerShootTen = new ArcherService()
archerShootTen.createAndShoot()