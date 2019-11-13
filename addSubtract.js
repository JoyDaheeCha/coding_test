//Answer to question 2. : Method chaining

const calculate = function() {
  this.sum = 0;
};

calculate.prototype.add = function(val) {
  this.sum += val;
  return this;
};

calculate.prototype.subtract = function(val) {
  this.sum -= val;
  return this;
};

calculate.prototype.getSum = function(val) {
  return this.sum;
};

function init() {
  let calculation = new calculate();
  const result = calculation
    .add(4)
    .add(5)
    .subtract(3)
    .getSum();
  console.log("Answer to question 2: ", result);
}

init();
