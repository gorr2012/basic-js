const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!arr || !Array.isArray(arr)) throw new Error ('THROWN');

  let res = [];

  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '--discard-next': i === arr.length-1 ? res : i++; break;
      case '--discard-prev': arr[i-2] === '--discard-next' ? res : res.pop(); break;
      case '--double-next': i === arr.length-1 ? res : res.push(arr[i+1]); break;
      case '--double-prev': i === 0 || arr[i-2] === '--discard-next' ? res : res.push(arr[i-1]); break;
      default: res.push(arr[i]);
      }
    }
  return res;
};
