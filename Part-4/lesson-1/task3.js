const delatedGreet = person.greet.bind(person);

// Delayed execution using setTimeout
setTimeout(delatedGreet, 2000) // Output after 2 seconds: Hello, my name is Moiz (context is preserved using bind)

// Compare with a non-bind function
setTimeout(greetFunction, 2000) // Output after 2 seconds: Hello, my name is undefined (context is lost without bind)