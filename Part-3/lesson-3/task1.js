const sayHello = function(name){

    console.log(`hello $${name}`);
}

function executeFunc(func, name){

    func(name);

}

executeFunc(sayHello, "Muhammad")

// Retuerning a function from another function

function createGreeter(greeting){

    return function(name){

        console.log("" + greeting + ", " + name + "!");
    }

}

const greeter = createGreeter("Hi");
greeter("Muhammad");
