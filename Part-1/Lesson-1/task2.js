try {
  var varVariable = "this is a var variable";
  console.log(varVariable);
  var varVariable = "this is a var variable redeclared";
  console.log(varVariable);
} catch (error) {
  console.log(`although there is no error, if there were they will be here: ${error}`);
}

try {
  eval(`
    let letVariable = "this is a let variable";
    console.log(letVariable);
    let letVariable = "this is a let variable redeclared";
    console.log(letVariable);
  `);
} catch (error) {
  console.log(`through let, the same named variable cannot be declared: ${error.message}`);
}

try {
  const constVariable = "this is a const variable";
  console.log(constVariable);
  eval(`
    let object { constVariable : "this is a const variable redeclared indirectly" }
    console.log(object.constVariable)
  `);

} catch (error) {
  console.log(`the const variable cannot be redeclared even indirectly: ${error.message}`);
}
