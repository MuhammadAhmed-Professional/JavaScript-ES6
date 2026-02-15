function step1(callback){

    console.log("Step 1: starting");
    callback();
}

function step2(callback){
    
    console.log("Step 2: starting");
    callback();
}

function step3(callback){

    console.log("Step 3: starting");
    callback();
}

// Executing steps in order
step1(()=> step2(()=> step3(()=> console.log("All Steps Completed"))));