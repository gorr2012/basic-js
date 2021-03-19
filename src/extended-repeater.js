const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strAddition = [];
  let newStr = [];

  for (let key in options){
    if (options[key] === undefined || (options[key] === null && key.indexOf('Times') != -1)) options[key] = 1 ;
		if (options[key] === null) options[key] = 'null' ;
		if (!options.separator) options.separator = '+';
  }

	for(let i = 0; i < options.additionRepeatTimes; i++){
		strAddition.push(options.addition);
	}
	strAddition = strAddition.join(options.additionSeparator);

	for(let i = 0; i < options.repeatTimes; i++){
		newStr.push(str + strAddition);
	}
	newStr = newStr.join(options.separator);

  return newStr;
};
  