const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let motion = Math.pow(2, disksNumber) - 1
  let speed = Math.floor(motion / (turnsSpeed / 3600))
  return {
    turns: motion,
    seconds: speed
  }
};
