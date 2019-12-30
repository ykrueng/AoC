const { getInputString } = require("../utility");
const { decodeSpaceImage } = require("./helper");

const str = getInputString("day8/input.txt");

exports.day8Part1 = () => {
  const code = decodeSpaceImage(str);
  return `The the number of 1 digits multiplied by the number of 2 digits is: ${code}`;
};
