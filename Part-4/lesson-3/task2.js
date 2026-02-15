class CarClass{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    getDetails(){
        console.log("Car Make: " + this.make + ", Model: " + this.model);
    }
}

const car3 = new Car("BMW", "M8");
car3.getDetails(); 

console.log("Similarities: Both constructor functions and ES6 classes allow us to create objects with shared methods. Differences: ES6 classes provide a cleaner and more intuitive syntax, while constructor functions rely on prototypes for method sharing.");