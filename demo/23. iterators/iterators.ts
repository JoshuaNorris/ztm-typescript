/* eslint-disable */

const abc = ["a", "b", "c"];

// Iterate through an array using a `for..of` loop:
for (const letter of abc) {
  console.log(letter); // 'a' 'b' 'c'
}

//********************************************************************************
// Iterate through object properties with a `for..in` loop. Only
// use this for objects you define in TypeScript. Browsers and other
// code can add additional properties to objects at runtime, which
// will also show up when iterating using `for..in`. Do not use
// a `for..in` loop to iterate arrays. Use `for..of` instead.
//********************************************************************************




// Anonymous object:
const nums = {
  one: 1,
  two: 2,
  three: 3,
};

// This will allow us to index into the object while iterating:
let property: keyof typeof nums;
// `for..in` iterates over properties:
for (property in nums) {
  // Print the property name and associated value:
  console.log(`[${property}]: ${nums[property]}`);
}

