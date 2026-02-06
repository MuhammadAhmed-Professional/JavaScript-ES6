function makeCounter() {
  let count = 0;
  console.log("Counter created with count =", count);

  return function () {
    console.log("Current count:", count);
    count++;
  };
}

let counter = makeCounter();

// changing outer variable by calling the function
counter();
counter();
counter();

let counter2 = makeCounter();

counter2();
counter2();