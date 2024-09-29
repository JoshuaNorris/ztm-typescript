/* eslint-disable */
import { strict as assert } from "assert";

class Empty { }
class Color {
  r = 0;
  g = 0;
  b = 0;
}
// Without type annotation

const c = new Color(); // Color { r: 0,   g: 0, b: 0 }

// We use dot notation to set values within the object:
c.r = 255; // Color { r: 255, g: 0, b: 0 }

// And we can read values using dot notation as well:
const redValue = c.r;


// a class constructor:
class Dimension {
  length: number;
  width: number;
  height: number;

  constructor() {
    console.log("created a new default Dimension");
    this.length = 1;
    this.width = 1;
    this.height = 1;
  }
}

const one = new Dimension(); // 'created a new Dimension'

class Point {
  x: number;
  y: number;
  // These are automatically public

  /*
    You can actually do something like
    constructor(public x: number, y: number)
    and you wouldn't need to define the x above.
  */

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  translate(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

const a = new Point(5, 5); // Point { x: 5, y: 5 }
a.translate(-5, -5); // Point { x: 0, y: o }
assert.deepEqual([a.x, a.y], [0, 0]);