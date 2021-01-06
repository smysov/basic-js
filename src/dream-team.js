const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(arr) {
	if (!Array.isArray(arr)) return false;
	return arr
		.filter(string => typeof string === 'string')
		.map(string => string.trim().slice(0, 1).toUpperCase())
		.sort()
		.join('');
};
