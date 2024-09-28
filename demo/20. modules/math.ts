/* eslint-disable */

// To make functionality or data available outside of this module, the `export`
// keyword is used. Only exported items are available for importing in other
// modules. All other items in the module that do not have an `export` keyword
// will remain private and only accessible within this module. Most things can
// be exported from a module such as functions and variables.

export function add(lhs: number, rhs: number): number {
  return lhs + rhs;
}

export const sub = (lhs: number, rhs: number): number => lhs - rhs;

export let pi = Math.PI;

export type Int = number;

export class Vec<T> {
  data: T[];
  constructor() {
    this.data = [];
  }
  push(el: T) {
    this.data.push(el);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
}


