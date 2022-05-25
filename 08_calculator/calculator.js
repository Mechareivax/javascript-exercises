const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, currentElement) => total + currentElement, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentElement) => total * currentElement, 1);
};

const power = function(a,b) {
	let result = 1;
  
  for (i = 0; i < b; i++) {
    result *= a;
  }

  return result;
};

const factorial = function(num) {
  if(num===0){
    return 1
  } else {
    let result = 1;
    for (i=1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
