let array = ["Muhammad", "Asjad", "Qasim", "Tariq"];
console.log(`The original array is: ${array}`);

let newarr = array.map((item) => {
  let updated = item + " Dev";
  return updated;
});
console.log(`Result after map: ${newarr}`);


array.forEach((item, index) => {
  item = item + " Dev";
});
console.log(`Result after forEach: ${array}`);


let reduceArr = array.reduce((acc, item) => {
  let updated = item + " Dev";
  acc.push(updated);
  return acc;
}, []);

console.log(`Result after reduce: ${reduceArr}`);
