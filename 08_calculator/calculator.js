const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
  if (num2 > num1) {
    return num2 - num1;
  }
  else {
    return num1 - num2;
  }
};

const sum = function(array) {
  let buffer = 0;
	for (i in array) {
    buffer = buffer + array[i];
  }
  return buffer;
};

const multiply = function(array) {
  if (array == []) {
    return 'empty';
  }
  else {
    let buffer = 1;
    for (i in array) {
      buffer = buffer * array[i];
    }
    return buffer;
  }
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }
  else {
    let buffer = 1;
    for (let i = 1; i < (num + 1); i++) {
      buffer = buffer * i;
    }
    return buffer;
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
