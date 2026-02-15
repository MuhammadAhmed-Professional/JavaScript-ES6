console.log("1 Script start");

function normalFunction() {
  console.log("2 Normal function executed");
}

normalFunction();

setTimeout(() => {
  console.log("5 setTimeout (0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("4 Promise.then (microtask)");
});

setTimeout(() => {
  console.log("6 setTimeout (100ms)");
}, 100);

console.log("3 Script end");
