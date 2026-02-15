function introduce(name, age, city){

    console.log("My name is " + name + ", I am " + age + " years old and I live in " + city);
}

// Using call
introduce.call(null, "Muhammad", 19, "Karachi" ) 

// Using apply
introduce.apply(null, ["Muhammad", 19, "Karachi"]) 

// Changing argument count using call
introduce.call(null, "Muhammad", 19) 
// Changing argument count using apply
introduce.apply(null, ["Muhammad", 19]) 