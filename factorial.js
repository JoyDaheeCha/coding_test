/*Question 3. recursive function*/
function factorial(val) {
  return val == 1 ? 1 : val * factorial(--val);
}

/*Question 4. avoid stack overflow using tail recursive function.*/

//solution 4.1 tail recursive function - javascript ES5 doens't support it.
function factorialTail(val, acc) {
  if (val == 1) return 1 * acc;
  return factorialTail(val - 1, acc * val);
}

//solution 4.2 iterative function - javascript has limit in range of number. (up to 1.797693134862315E+308)
//because of this, when val is over 170, the result changed to infinity.
//Math.js library helps to show a big number, but as it's coding test, I didn't use it.
function recursiveIteration(val) {
  let result = 1;
  for (let i = 1; i <= val; i++) {
    result = result * i;
  }
  return result;
}

function init() {
  console.log("Answer to question 3: ", factorial(4));
  console.log("trial 1 to question 4: ", factorialTail(170, 1));
  console.log("trial 2 to question 4: ", recursiveIteration(1000000));
}

init();
