// You are working on a task that requires you to iterate over a sequence of
// numbers. However, instead of creating the entire sequence upfront, you want
// to generate the numbers one at a time as you iterate over them. You'll
// create an iterator using a generator function that produces numbers in a
// specified range.
//
// Requirements:
// - Create a generator function named `range` that takes three parameters:
// -     `start`: A number indicating the starting value of the sequence.
// -     `end`: A number indicating the ending value of the sequence (inclusive).
// -     `step`: A number indicating the step between each value in the sequence.
// - The generator should yield each number in the sequence from `start` to
//   `end` based on the `step` value.
// - Use a `for...of` loop to iterate over the sequence generated by the range
//   function and print each number.
// - Ensure that the range function works correctly when the step value is
//   positive, negative, or omitted (defaulting to 1).

import { strict as assert } from "assert";


// Test cases
const result1 = Array.from(range(1, 5, 1));
assert.deepEqual(result1, [1, 2, 3, 4, 5]);

const result2 = Array.from(range(5, 1, -1));
assert.deepEqual(result2, [5, 4, 3, 2, 1]);

const result3 = Array.from(range(1, 3));
assert.deepEqual(result3, [1, 2, 3]);
