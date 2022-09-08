import { App } from "./App";
import { DbService } from "./DbService";

class AppModule {
    constructor(private dbService: DbService){}
    init() {
        const app = new App(this.dbService)
        const result = app.connectToDb()
        console.log(`Connection to DB ${result ? 'established' : 'error'}`)
    }
}
const dbService = new DbService('localhost:9000/user:admin::pass:admin::db:test')
const appModule = new AppModule(dbService)
appModule.init()
