const inputStr = `0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 0 0 0 0 0
0 0 0 1 1 1 0 0 0 0
0 1 1 1 1 1 1 0 0 0
0 1 1 1 1 1 1 1 1 0
0 1 1 1 1 1 1 1 1 0
0 0 1 1 1 1 1 1 0 0
0 0 0 1 1 1 1 0 0 0
0 0 0 0 1 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0`;

let inputArr = [];

function setInputList() {
  const inputRows = inputStr.split(`\n`);
  for (let rows = 0; rows < inputRows.length; rows++) {
    let rowArr = [];
    for (let cols = 0; cols < inputRows[rows].length; cols++) {
      if (cols % 2 == 0) {
        rowArr.push(parseInt(inputRows[rows][cols]));
      }
    }
    inputArr.push(rowArr);
  }
}

function setEachUnitDepth() {
  /*Let's assume there's a land with size of n*n. 
  The biggest lake's size will be (n-1)*(n-1) as a lake always has to be in land.
  For a land with size of 10*10 or 9*9, the deepest depth is 4.
  Therefore, we can get maxDepth like the following. */
  let maxDepth = Math.floor((inputArr.length - 2) / 2);

  //Iterate whole land.
  for (let k = 1; k < maxDepth; k++) {
    //Do not consider boundaries
    for (let rows = 1; rows < inputArr.length - 1; rows++) {
      for (let cols = 1; cols < inputArr[rows].length - 1; cols++) {
        let currentVal = inputArr[rows][cols];
        let up = inputArr[rows - 1][cols];
        let down = inputArr[rows + 1][cols];
        let right = inputArr[rows][cols + 1];
        let left = inputArr[rows][cols - 1];
        if (
          currentVal !== 0 &&
          up >= currentVal &&
          down >= currentVal &&
          left >= currentVal &&
          right >= currentVal
        ) {
          ++inputArr[rows][cols];
        }
      }
    }
  }
}

function getSumOfEachDepth() {
  function reducer(a, b) {
    return a + b;
  }
  return inputArr.flat().reduce(reducer);
}

function init() {
  setInputList();
  setEachUnitDepth();
  let sumOfEachDepth = getSumOfEachDepth();
  console.log("Answer to question 5 \nThe lake will look like this:");
  console.log(inputArr);
  console.log("Therefore, the sum of eath depth is: ", sumOfEachDepth);
}

init();
