function counterFactory(){

    let count = 0;

    return function counter(){

        count++;
        console.log("Counter Value: " + count);
    }
}

const counter1 = counterFactory();
const counter2 = counterFactory();

counter1(); 
counter2();
counter1();
counter2();
