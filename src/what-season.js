const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(!date.getTime()) throw Error ('Err');
  let seasonsArr = ['winter', 'spring', 'summer', 'autumn'];
  return seasonsArr[Math.floor((date.getMonth() + 1) / 3) % 4];
};
