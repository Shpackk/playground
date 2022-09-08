import { IDbService } from "./interface/IDbService";

export class App {
    constructor(private dbService: IDbService){}

    connectToDb(): boolean | void {
        return this.dbService.connect()
    }
}