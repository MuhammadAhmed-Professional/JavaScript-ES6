const numbers = {
  [Symbol.iterator]() {
    let count = 1;

    return {
      next() {
        if (count <= 3) {
          return { value: count++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const num of numbers) {
  console.log(num);
}