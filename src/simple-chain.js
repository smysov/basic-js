const CustomError = require('../extensions/custom-error');

const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length;
	},
	addLink(value) {
		if (value === undefined) {
			this.arr.push('');
		} else {
			this.arr.push(value);
		}
		return this;
	},
	removeLink(position) {
		if (typeof position !== 'number' || position < 0 || position > this.getLength) {
			this.arr = [];
			throw Error;
		}
		this.arr.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.arr.reverse();
		return this;
	},
	finishChain() {
		const finallyArr = this.arr.map(el => '( ' + el + ' )');
		const result = finallyArr.join('~~');
		this.arr = [];
		return result;
	},
};

module.exports = chainMaker;
