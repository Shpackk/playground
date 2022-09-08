class DbService {
    private static instance: DbService;
    private typeOfConnection: string;

    private constructor(private url: string, private method: string) {
        this.typeOfConnection = `${this.url}:${this.method}`
    }

    static getInstance(url: string, method: string) {
        if (!this.instance) this.instance = Reflect.construct(DbService, [url, method])
        return this.instance
    }

    get connectionInfo() {
        return this.typeOfConnection
    }
}

const dbService = DbService.getInstance('localhost/mysql::user::hhEHhfj2884Ij', 'WRITE:READ')
console.log(dbService) // return dbservice with parameters frm line 19
const dbServiceTwo = DbService.getInstance('lhaha', 'ahah')
console.log(dbServiceTwo) // return same dbservice instance frm line 19