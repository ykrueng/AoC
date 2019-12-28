const { dayOnePartOne, dayOnePartTwo } = require("./day1");
const { dayTwoPartOne, dayTwoPartTwo } = require("./day2");

function main() {
  console.log("Advent of Code 2019");
  console.log("===================");
  console.log("");

  console.log("Day 1 part 1");
  console.log(dayOnePartOne()); // 3405721
  console.log("===================");
  console.log("");

  console.log("Day 1 part 2");
  console.log(dayOnePartTwo()); // 5105716
  console.log("===================");
  console.log("");

  console.log("Day 2 part 1");
  console.log(dayTwoPartOne()); //10566835
  console.log("===================");
  console.log("");

  console.log("Day 2 part 2");
  console.log(dayTwoPartTwo()); //2347
}

main();
