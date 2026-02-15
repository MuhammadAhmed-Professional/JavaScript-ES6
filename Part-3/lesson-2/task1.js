function greet(name = "anythng") {

    console.log(`hello ${name}`);
}

greet();

greet(undefined) // uses default value "anything"

greet(null) // uses null as value

greet("Muhammad") // will use the provided value "Muhammad"