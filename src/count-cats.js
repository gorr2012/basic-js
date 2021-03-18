const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;

	for(let i = 0; i < matrix.length; i++){
		let idx = matrix[i].indexOf('^^');
		while (idx != -1) {
			counter++;
			idx = matrix[i].indexOf('^^', idx + 1);
		}
	}
	return counter;
};
