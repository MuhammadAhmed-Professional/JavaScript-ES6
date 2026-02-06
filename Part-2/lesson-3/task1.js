let user = {
  name: "Muhammad",
  age: 18
};

console.log("Original object:", user);


let {
  name,
  age,
  country = "Pakistan",
  role = "Student"
} = user;

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);
console.log("Role:", role);
console.log(user)
