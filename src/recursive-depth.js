const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, numberDepth = []) {
  if (!Array.isArray(arr)) throw Error ('Err');
  numberDepth.push(count);
  for(let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) this.calculateDepth(arr[i], count + 1, numberDepth);
  }
  return Math.max.apply(null, numberDepth);
  }
};