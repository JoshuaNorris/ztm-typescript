/* eslint-disable */
import { strict as assert } from "assert";


type Name = string;
type Score = number;

const testScores: Map<Name, Score> = new Map();

testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);

assert.equal(testScores.size, 3);

// Maps are not sortable and the pairs
// will be accessed based on insertion order.
for (const [name, score] of testScores) {
  console.log(`${name} score is ${score}`);
}

// Delete a key from the map:
testScores.delete("Bob");
assert.equal(testScores.size, 2);

// Check if a key exists:
assert.equal(testScores.has("Bob"), false);

// If you just want the keys:
for (const name of testScores.keys()) {
  console.log(`Name: ${name}`);
}

// If you just want the values:
for (const score of testScores.values()) {
  console.log(`Score: ${score}`);
}

// If you want to delete all the keys from a map:
testScores.clear();
assert.equal(testScores.size, 0);


