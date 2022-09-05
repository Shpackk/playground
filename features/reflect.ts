class User {
    public name: string;
    public age: number;
    public height: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.height = 170
    }
}

// create instance
const UserInstance: User = Reflect.construct(User, ['Adam', 10])
// true for 'name' property
const hasName = Reflect.has(UserInstance, 'name')
