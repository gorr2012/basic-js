const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
	if (members === null || members === undefined) return false;

	let newMembers = [];

	for(let i = 0; i < members.length; i++){
		if(typeof members[i] === 'string') newMembers.push(members[i].trim().toUpperCase());
	} 

	newMembers.sort();
	let str = '';

	for(let i = 0; i < newMembers.length; i++){
		str += newMembers[i][0];
	}

	return str;
};
