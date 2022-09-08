import { IDbService } from "./interface/IDbService";

export class DbService implements IDbService {
    constructor(public connectionUrl: string){}
    
    connect(): boolean | void {
        return this.connectionUrl ? true : false
    }
}