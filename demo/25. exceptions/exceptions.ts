/* eslint-disable */


function divide(lhs: number, rhs: number): number {
  if (rhs === 0) {
    throw new Error("unable to divide by zero");
  }
  return lhs / rhs;
}

try {
  const num = divide(10, 0);
} catch (e) {
  console.log(`an error occurred: ${e}`);
  console.log("try a different number next time");
} finally {
  console.log("this block will execute no matter what");
}

// An error can be re-thrown if needed. This is useful if you do not intend
// to handle the error. Re-throwing allows a different part of the code to
// handle it.
function div(lhs: number, rhs: number) {
  try {
    const answer = divide(lhs, rhs);
  } catch (e) {
    console.log("division by zero error");
    throw e;
  }
}

try {
  const answer = div(10, 0);
} catch (e) {
  console.log(`looks like an error occurred: ${e}`);
}

// Throwing exceptions is _not_ a method of control flow. It is only for
// _exceptional_ circumstances. Code within a try/catch block can run
// anywhere from 10x-25x slower. It also makes code more difficult to
// work with because thrown exceptions aren't encoded into the type system,
// so there is no way to know if a function may throw an exception.