const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let newStr = [];
 
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '';
  if(options.addition === undefined) options.addition = '';
  if(options.addition === null) options.addition = 'null';
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if(!options.repeatTimes) options.repeatTimes = 1;
  if(options.additionRepeatTimes < 2 ) options.additionSeparator = '';
  if(!options.additionSeparator && options.addition) options.additionSeparator = '|';
  

  for(let i = 0; i < options.additionRepeatTimes; i++){
    newStr.push(options.addition); 
  }
  let addStr = newStr.join(options.additionSeparator);
  newStr = [];

  for(let i = 0; i < options.repeatTimes; i++){
		newStr.push( str + addStr );
	}
  
  return newStr.join(options.separator);

};
  