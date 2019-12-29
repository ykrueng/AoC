const fs = require("fs");
const path = require("path");

const conversionMap = new Map([
  ["integer", parseInt],
  ["string", () => {}],
])

exports.getInputArray = (relPath, separator="\n", type="integer") => {
  // read the input file
  const inputStr = fs.readFileSync(
    path.join(__dirname, `../${relPath}`),
    "utf-8"
  );
  // convert input string into array
  const inputArr = inputStr
    .trim()
    .split(separator)
  
  return inputArr.map(input => conversionMap.get(type)(input))
};
