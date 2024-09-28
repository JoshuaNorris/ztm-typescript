/* eslint-disable */
import { strict as assert } from "assert";

const courseName: string = "typescript";
const amount: number = 10;
const fractionalAmount: number = 10.5;
const hexByte: number = 0xff;
const bigInteger: bigint = 9000n;

const yes: boolean = true;
const nope: boolean = false;

const missing: undefined = undefined;
const empty: null = null;

let someNum: number = 0;
someNum = 1;

let hello: string;
// cannot use `hello` until we assign it
// console.log(hello);  // ERROR: `hello` used before assigned
hello = "hi";
console.log(hello); // OK: `hello` is now assigned

function sum(lhs: number, rhs: number): number {
  const total = lhs + rhs;
  return total;
}

const four = sum(2, 2);
assert.equal(four, 4);

