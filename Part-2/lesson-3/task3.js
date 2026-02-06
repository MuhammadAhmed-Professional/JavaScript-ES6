const original = {
  name: "Muhammad",
  address: {
    city: "Karachi",
    zip: 10001
  }
};

console.log(original);

const shallowCopy = { ...original };

shallowCopy.address.city = "Islamabad";
console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);


const directReference = original;

directReference.name = "Bob";

console.log("Original:", original);
console.log("Direct Reference:", directReference);