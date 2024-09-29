/* eslint-disable */

type Color = "red" | "green" | "blue";

// This is type sensitive

const r: Color = "red";

function setBgColor(c: Color) {
  // Switch on each color (this is called a "type guard"):
  switch (c) {
    case "red":
      break;
    case "green":
      break;
    case "blue":
      break;
  }
}

// We can use numbers as well:
type OneTwoThree = 1 | 2 | 3;

// We can also create union types from existing types:
type StrOrNum = string | number;

// Union types can be used as function parameters:

// function sample(data: string | number) {    // alternative signature
function sample(data: StrOrNum) {

  // Note that `typeof` only works for primitive types
  if (typeof data === "string") {
    // Once we enter this block, TypeScript treats `data` as a string.
    // String methods can be used on it now.
    console.log(`Message: ${data.toUpperCase()}`);
  } else if (typeof data === "number") {
    console.log(`Total: ${8 + data}`);
  }
}

sample("hello");
sample(12);

// It is also possible to return union types. This function will return
// either a string or undefined:
function maybeSayHi(): string | undefined {
  return undefined;
}

