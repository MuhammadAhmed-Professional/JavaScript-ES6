let numbers = [10, 15, 20, 25, 30, 35];
console.log("Original numbers:", numbers);

console.log("CONDITION 1: numbers greater than 20 ");

let filtered = numbers.filter((num) => {
  console.log("filter checking:", num);
  return num > 20;
});

console.log("Filtered result:", filtered);

let total = filtered.reduce((acc, num) => {
  console.log("reduce acc:", acc, "current:", num);
  return acc + num;
}, 0);

console.log("Final sum:", total);