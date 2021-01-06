const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
	const ourStr = String(str);
	const addition = options.addition !== undefined ? String(options.addition) : '';
	const separator = options.separator !== undefined ? options.separator : '+';
	const additionSeparator =
		options.additionSeparator !== undefined ? options.additionSeparator : '|';
	const repeatTimes =
		Number.isInteger(options.repeatTimes) && options.repeatTimes > 0
			? options.repeatTimes
			: 1;
	const additionRepeatTimes =
		Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes > 0
			? options.additionRepeatTimes
			: 1;

	const additionalArr = [];

	for (let i = 1; i <= additionRepeatTimes; i++) {
		additionalArr.push(addition);
	}

	let additional = additionalArr.join(options.additionSeparator);
	let resultArr = [];

	for (let i = 1; i <= repeatTimes; i++) {
		resultArr.push(ourStr + additional);
	}

	result = resultArr.join(separator);
	return result;
};
