function outerFunc(){

    let privateVar = 0;

    return function innerFunc(){

        privateVar++;

        console.log("Private Variable Value: " + privateVar);
    }
}

const closureInstance = outerFunc();
closureInstance(); // Output: Private Variable Value: 1
closureInstance(); // Output: Private Variable Value: 2