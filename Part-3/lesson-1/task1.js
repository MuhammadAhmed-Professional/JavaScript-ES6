const mySet = new Set();

mySet.add(43);
mySet.add("Moiz");
mySet.add({name: "Moiz", age: 23});
mySet.add([1, 2, 3]);

//duolicate
mySet.add(43);
mySet.add("Moiz");

console.log("Size of set:", mySet.size);
console.log("Contents of set:", mySet);
//modify
mySet.forEach(value => {
    if (typeof value === 'object' && !Array.isArray(value)){
        value.age = 24;
    }
})

console.log("modified set:", mySet);
