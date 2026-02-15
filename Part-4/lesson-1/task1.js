const person = {
    name: 'Muhammad',
    greet: function()
    {
        console.log("Hello, my name is " + this.name);
    }
};

// Call the method normally
person.greet(); // Output: Hello, my name is Muhammad

// Assign the method to a variable and call it
const greetFunction = person.greet;

greetFunction() // Output: Hello, my name is undefined (context is lost)

// fixing the broken context using call
greetFunction.call(person) // Output: Hello, my name is Muhammad (context is restored using call)