function Car(make, model){

    this.make = make;
    this.model = model;

}

Car.prototype.getDetails = function(){

    console.log("Car Make: " + this.make + ", Model: " + this.model);
}

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("BMW", "M5");

car1.getDetails()
car2.getDetails()