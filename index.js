const { dayOnePartOne, dayOnePartTwo } = require("./day1");
const { dayTwoPartOne, dayTwoPartTwo } = require("./day2");
const { dayThreePartOne, dayThreePartTwo } = require("./day3");
const { dayFourPartOne, dayFourPartTwo } = require("./day4");
const { dayFivePartOne, dayFivePartTwo } = require("./day5");

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
  console.log("===================");
  console.log("");

  console.log("Day 3 part 1");
  console.log(dayThreePartOne()); //709
  console.log("===================");
  console.log("");

  console.log("Day 3 part 2");
  console.log(dayThreePartTwo()); //13836
  console.log("===================");
  console.log("");

  console.log("Day 4 part 1");
  console.log(dayFourPartOne()); //1154
  console.log("===================");
  console.log("");

  console.log("Day 4 part 2");
  console.log(dayFourPartTwo()); //750
  console.log("===================");
  console.log("");

  console.log("Day 5 part 1");
  console.log(dayFivePartOne()); //12234644
  console.log("===================");
  console.log("");

  console.log("Day 5 part 2");
  console.log(dayFivePartTwo()); //3508186
}

main();
