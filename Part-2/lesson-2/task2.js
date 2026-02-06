console.log("Program start");

function first() {
  console.log("Enter first()");
  second();
  console.log("Exit first()");
}

function second() {
  console.log("Enter second()");
  third();
  console.log("Exit second()");
}

function third() {
  console.log("Enter third()");

  setTimeout(() => {
    console.log("Async task inside third()");
  }, 0);

  console.log("Exit third()");
}

first();

console.log("Program end");