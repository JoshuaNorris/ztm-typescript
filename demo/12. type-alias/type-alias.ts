/* eslint-disable */
import { strict as assert } from "assert";

type PersonName = string;

// Type aliases are _just_ aliases. This means anywhere we see the
// type `PersonName`, we can use a `string` in it's place.
// These two are the same type (string):
const myName: PersonName = "Jayson";
const alsoMyName: string = "Jayson";

// example of a function with poor naming:
function print(thing: string) {
  console.log(`Name is ${thing}`);
}

// using proper naming and type aliases:
function displayGreeting(name: PersonName) {
  console.log(`Name is ${name}`);
}

