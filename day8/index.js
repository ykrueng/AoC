const { getInputString } = require("../utility");
const { decodeSpaceImage, paintMessage } = require("./helper");

const str = getInputString("day8/input.txt");

exports.day8Part1 = () => {
  const code = decodeSpaceImage(str);
  return `The number of 1 digits multiplied by the number of 2 digits is: ${code}`;
};

exports.day8Part2 = () => {
  paintMessage(str);
  return `The message that is produced after decoding the image is shown above.`;
};
