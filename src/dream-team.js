const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members.filter(e => typeof e === 'string').map(e => e.trim().toUpperCase()[0]).sort().join('') : false;
};
