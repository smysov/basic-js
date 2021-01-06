const CustomError = require('../extensions/custom-error');
const hasNestedArray = arr => arr.some(item => Array.isArray(item));

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let depth = 1;
		if (hasNestedArray(arr)) {
			const newArr = arr.reduce((acc, item) => acc.concat(item), []);
			return depth + this.calculateDepth(newArr);
    }
    return depth;
	}
};
