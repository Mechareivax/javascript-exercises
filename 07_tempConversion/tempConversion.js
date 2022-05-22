const ftoc = function(temperature) {
  let result;

  result = (temperature-32) * (5/9);
  result = Math.round(result * 10) / 10;
  return result;
};

const ctof = function(temperature) {
  let result;

  result = temperature * (9/5) + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
