class vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = this.parts.engine * this.parts.power;
        this.fuel = fuel;
    }
    drive() {
        this.fuel.pop();
    }
}
let parts = {engine: 6, power: 100};
let car = new vehicle('a', 'b', parts, [1,1,2]);
car.drive();

console.log(car);