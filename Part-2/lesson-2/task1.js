sayHello();

function sayHello() {
  console.log("Function sayHello ran successfully");
}


console.log("Value of varA before declaration:", varA);
var varA = 10;
console.log("Value of varA after declaration:", varA);


try {
  console.log("Value of letB before declaration:", letB);
} catch (error) {
  console.log("Error with letB:", error.message);
}
let letB = 20;
console.log("Value of letB after declaration:", letB);


try {
  console.log("Value of constC before declaration:", constC);
} catch (error) {
  console.log("Error with constC:", error.message);
}
const constC = 30;
console.log("Value of constC after declaration:", constC);

console.log("End of program");