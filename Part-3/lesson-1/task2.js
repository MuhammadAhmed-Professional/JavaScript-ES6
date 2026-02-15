const obj = {
    name: "Moiz",
    age: 23,
    educuation: "BSSE"
};
const myMap = new Map();

// Adding entries
myMap.set("name", "Moiz");
myMap.set("age", 23);
myMap.set("education", "BSSE");

// Retrieving values
console.log("Object name:", obj.name);
console.log("Map name:", myMap.get("name"));

// Using non-string keys
const keyObj = {key: "objectkey"};
myMap.set(keyObj,"This is a non-string key")
console.log("Value for non-string key in Map:", myMap.get(keyObj));

//Differences
console.log("Object keys:", Object.keys(obj));
console.log("Map keys:", Array.from(myMap.keys()));