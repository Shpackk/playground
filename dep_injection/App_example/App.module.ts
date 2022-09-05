import { App } from "./App";
import { DbService } from "./DbService";

class AppModule {
    private dbService: DbService;
    constructor(){
        this.dbService = new DbService('localhost:9000/user:admin::pass:admin::db:test')
    }
    init() {
        const app = new App(8080, this.dbService)
        const result = app.connectToDb()
        console.log(`Connection to DB ${result ? 'established' : 'error'}`)
    }
}

const appModule = new AppModule()
appModule.init()
