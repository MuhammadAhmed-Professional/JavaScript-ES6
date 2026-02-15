function asyncOpt(callback, delay){

    console.log("Async operation will start after " + delay + " milliseconds at " + new Date().toLocaleTimeString());

    setTimeout(()=> {

        console.log("Async operation executed at " + new Date().toLocaleTimeString());
        callback()
    }, delay);
    
}

asyncOpt(() => console.log("Callback executed at " + new Date().toLocaleDateString()), 2000);