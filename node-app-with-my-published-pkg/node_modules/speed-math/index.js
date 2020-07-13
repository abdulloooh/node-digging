function add(...param) {
  var sum = 0;
  param.forEach((element) => {
    sum += element;
  });
  return sum;
}

function multiply(...param) {
  var product = 1;
  param.forEach((element) => {
    product *= element;
  });
  return product;
}

function differenceOf2Squares(a, b) {
  return multiply(a, a) - multiply(b, b);
}

module.exports = {
  add: add,
  multiply: multiply,
  squareDifference: differenceOf2Squares,
};
