const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string') return false;

	const numActivity = parseFloat(sampleActivity);

	if (isNaN(parseFloat(sampleActivity)) || numActivity <= 0 || numActivity > 15) {
		return false;
	}

	const k = 0.693 / HALF_LIFE_PERIOD;
	const t = Math.log(MODERN_ACTIVITY / numActivity) / k;

	return Math.ceil(t);
};
