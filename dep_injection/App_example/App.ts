import { IDbService } from "./interface/IDbService";

export class App {
    public port: number;
    constructor(port: number, private dbService: IDbService){
        this.port = port
    }

    connectToDb(): boolean | void {
        return this.dbService.connect()
    }
}