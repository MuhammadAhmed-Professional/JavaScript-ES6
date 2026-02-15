function repearFunc(func, times){

    for(let i = 0; i < times; i++){
        func();
    }
}

// function to be repeated
function sayHi(){

    console.log("Hi");
}

// Repeating the function 3 times
repearFunc(sayHi, 3);