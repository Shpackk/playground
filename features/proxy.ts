const user = {
    general: {
        name: 'Cool-Capibara', 
        surname: 'Even-Cooler',
        age: 20,
    },
    location: {
        country: 'Canada',
        city: 'Toronto',
        street: 'Capibara'
    },
    createdAt: Date.now(),
    superSecretField: 'hash-of-crypto-wallet',
    rawPoints: 100,
    currencyByLeague: 0.5
}
const otherUser = {
    role: 'admin'
}
// target = whole object we are pointing to (in this case <user>)
// prop = key that we want to access <createdAt>
// reciever = same as target
const handler: ProxyHandler<any> = {
    get(target: any, prop: string | symbol, reciever: any): any {
        if(prop === 'createdAt') return `it was created at ${Date.now()}`
        if(prop === 'superSecretField' && otherUser.role === 'admin') return `steal his money from ${prop}`
        if(prop === 'rawPoints') return target[prop] * target.currencyByLeague
    }
}

const newProxy = new Proxy(user, handler)
console.log(newProxy.rawPoints)