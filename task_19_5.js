class Device {
  constructor (name) {
    this.name = name;
    this.voltage = 220;   
  }  
}

class Computer extends Device {
  constructor(brand, name) {
    super(name);
    this.brand = brand;
  }
  
  turnOn(isOn, powerConsumption) {
    if (isOn) {
      console.group(`The ${this.name} ${this.brand} info:`);
      console.log(`The ${this.name} is turned on!`);
      console.log(`Device power consumption is ${powerConsumption} watts`);
      console.groupEnd();    
    } else {
      console.error(`The ${this.name} ${this.brand} is turned OFF`);    
    }
  }
}

class Lamp extends Device {
  constructor (name, brightness) {
    super(name);
    this.brightness = brightness;      
  }
  
  turnOn(isOn, powerConsumption) {
    if (isOn) {
      console.group(`The ${this.name} info:`);
      console.log(`The ${this.name} is turned on!`);     
      console.log(`Device power consumption is ${powerConsumption} watts`);
      console.log(`Voltage is ${this.voltage}`);
      if (this.brightness) {
        console.log(`Brightness is ${this.brightness}`);
      }      
      console.groupEnd();
    } else {
      console.error(`Your ${this.name} is turned OFF`);    
    }  
  } 
}
  
const nightLamp = new Lamp('night lamp');

const deskLamp = new Lamp('desk lamp', '600 lumen');

const laptopHP = new Computer('Hewlett Packard', 'laptop');

const serverDell = new Computer('Dell', 'server');

laptopHP.turnOn(true, 80);
deskLamp.turnOn(true, 15);
nightLamp.turnOn(true, 5);
laptopHP.turnOn(false);
serverDell.turnOn(true, 1300);
deskLamp.turnOn(false);
