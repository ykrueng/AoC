const { getInputString } = require("../utility");
const { getClosestIntersection } = require("./helper");

const str = getInputString("day3/input.txt", "\n", "string");

exports.dayThreePartOne = () => {
  const closestDistance = getClosestIntersection(str);
  return `The Manhattan distance from the central port to the closest intersection is: ${closestDistance}`;
};
