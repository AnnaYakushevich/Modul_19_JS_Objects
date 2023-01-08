function Device(name) {
    this.name = name;
    this.voltage = 220;   
  }
  
  Device.prototype.turnOn = function(isOn, powerConsumption) {
    if (isOn) {
      console.group(`The ${this.name} info:`);
      console.log(`The ${this.name} is turned on!`);
      if (this.hasOwnProperty('brightness')) {
        console.log(`Brightness is ${this.brightness}`);
      }
      console.log(`Device power consumption is ${powerConsumption} watts`);
      console.groupEnd();
      
    } else {
      console.error(`Your ${this.name} is turned OFF`);    
    }  
  }
  
  function Computer(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  
  Computer.prototype = new Device();
  Computer.prototype.turnOn = function(isOn, powerConsumption) {
    if (isOn) {
      console.group(`The ${this.name} ${this.brand} info:`);
      console.log(`The ${this.name} is turned on!`);
      console.log(`Device power consumption is ${powerConsumption} watts`);
      console.groupEnd();
      
    } else {
      console.error(`The ${this.name} ${this.brand} is turned OFF`);    
    }  
  }
  
  const nightLamp = new Device('night lamp');
  
  const deskLamp = new Device('desk lamp');
  deskLamp.brightness = '600 lumen';
  
  const laptopHP = new Computer('laptop', 'Hewlett Packard');
  
  const laptopDell = new Computer('laptop', 'Dell');
  
  laptopHP.turnOn(true, 80);
  deskLamp.turnOn(true, 20);
  nightLamp.turnOn(true, 7);
  laptopHP.turnOn(false);
  laptopDell.turnOn(true, 85);
  deskLamp.turnOn(false);