const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(!date.getTime()) throw Error ('Err');

  let seasonNumber = Math.floor((date.getMonth() + 1) / 3) % 4;

  if(seasonNumber === 0) return 'winter';
  if(seasonNumber === 1) return 'spring';
  if(seasonNumber === 2) return 'summer';
  if(seasonNumber === 3) return 'autumn';
};
