const { getInputString } = require("../utility");
const { getClosestDistance, getMinSteps } = require("./helper");

const str = getInputString("day3/input.txt", "\n", "string");

exports.dayThreePartOne = () => {
  const closestDistance = getClosestDistance(str);
  return `The Manhattan distance from the central port to the closest intersection is: ${closestDistance}`;
};

exports.dayThreePartTwo = () => {
  const minSteps = getMinSteps(str);
  return `The fewest combined steps the wires must take to reach an intersection: ${minSteps}`;
};
