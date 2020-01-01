const { getInputArray } = require("../utility");
const { runBOOST } = require("./helper");

const inputArr = getInputArray("day9/input.txt", ",");

exports.dayNinePartOne = () => {
  const output = runBOOST(inputArr);
  return `The BOOST keycode that intCode produce is: ${output}`;
};
