import { IDbService } from "./interface/IDbService";

export class DbService implements IDbService {
    connectionUrl: string;
    constructor(connectionUrl: string){
        this.connectionUrl = connectionUrl;
    }
    connect(): boolean | void {
        return this.connectionUrl ? true : false
    }
}