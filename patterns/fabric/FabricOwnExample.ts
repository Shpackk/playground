interface Vehicle {
  deliverPackage(): void;
}

abstract class Shipment {
  public abstract shipmentFabric(): Vehicle;
  public initProduct(): void {
    console.log('something valuable is being logged')
  };
}

class DeliverByWater extends Shipment {
  public shipmentFabric(): Vehicle {
      return new Ship();
  }
}

class DeliverByGround extends Shipment {
  public shipmentFabric(): Vehicle {
      return new Truck();
  }
}

class Truck implements Vehicle {
  deliverPackage(): void {
      console.log('Delivering something by ground')
  }
}
class Ship implements Vehicle {
  deliverPackage(): void {
      console.log('Delivering something by water')
  }
}

const initCompany = (instance: Shipment) => {
  instance.shipmentFabric().deliverPackage()
}

initCompany(new DeliverByWater)
initCompany(new DeliverByGround)