const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  let amountCats = arr.flat();

  for (let i = 0; i < amountCats.length; i++) {
    if (amountCats[i] === '^^') count++;
  }
  return count;
};
