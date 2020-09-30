
exports.min = function min(array) {
    return !array || !array.length ? 0 : Math.min(...array);
};

exports.max = function max(array) {
    return !array || !array.length ? 0 : Math.max(...array);
};

exports.avg = function avg(array) {
  if (!array || !array.length) {
    return 0;
  } else {
    const sum = array.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum / array.length;
  };
};
    
