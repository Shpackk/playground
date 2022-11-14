interface Product {
  logSomething: () => void;
}

abstract class Creator {
  public abstract factoryInit(): Product;
  public productInfo(): string {
    const product = this.factoryInit()
    return `${product} - was initiated`
  }
}

class ConcreteCreator extends Creator {
  public factoryInit(): Product {
    return new ConcreteProduct()
  }
}

class ConcreteSecondCreator extends Creator {
  public factoryInit(): Product {
    return new ConcreteSecondProduct()
  }
}

class ConcreteProduct implements Product {
  logSomething = () => {
    console.log('Logging from product of Creator #1')
  }
}

class ConcreteSecondProduct implements Product {
  logSomething = () => {
    console.log('Logging from product of Creator #2')
  }
}

const startProgram = (creator: Creator) => {
  creator.factoryInit().logSomething()
}

startProgram(new ConcreteSecondCreator)
