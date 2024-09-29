/* eslint-disable */
import { strict as assert } from "assert";

// Type assertions allow you to tell the compiler that a value should be
// considered a certain type, even if TypeScript cannot infer the type
// automatically. You can use type assertions to help the compiler recognize
// the types of variables, function return types, and more.

const greeting: unknown = "hello";

const greet = greeting as string;

const numChars = (greeting as string).length;

interface Employee {
  position(): string;
}

class Manager implements Employee {
  position(): string {
    return "manager";
  }
  sayHello(): void {
    console.log("hi!");
  }
}


// Since `Manager` implements `Employee`, we can work with just the
// `Employee` implementation of `Manager`:
const alice: Employee = new Manager();
assert.equal(alice.position(), "manager");
// alice.sayHello();    // ERROR: sayHello is part of `Manager`, not `Employee`

// This works with uninitialized variables as well:
let bob: Employee;
bob = new Manager();
assert.equal(bob.position(), "manager");
// bob.sayHello();    // ERROR: sayHello is part of `Manager`, not `Employee`



const payload: any = {
  code: 404,
  msg: "not found",
};

// If we have an `any` type, using type annotations will force it to be
// interpreted as the given type. In this example, we tell TypeScript that
// `payload` is actually a `number`. This is incorrect. While this does
// compile, there will be a runtime error. (ESLint does check for this):
const code: number = payload;


// The above doesn't apply to unknown:
const unknownPayload: unknown = {
  code: 404,
  msg: "not found",
};

// ERROR: cannot assign to string
// const msg: string = unknownPayload;