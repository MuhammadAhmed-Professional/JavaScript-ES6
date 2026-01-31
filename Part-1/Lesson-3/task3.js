function normal (param) {
    param
}

let arrow = (param) => {
    param
} 

function callback () {
    console.log("hello world")
}

normal(callback())
arrow(callback())