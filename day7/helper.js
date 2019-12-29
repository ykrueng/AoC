const IntCodeProgram = require("../intCode/intCodeProgram");

exports.runACS = (codes, phases, initialInput = 0) => {
  let intCodes = phases.map((phase, i) => {
    const config = {
      phase,
      input: i === 0 ? initialInput : null
    };
    return new IntCodeProgram(codes, config);
  });

  let lastOutput = null;
  intCodes.forEach(intCode => {
    let output = intCode.run();
    if (!output) {
      output = intCode.continue(lastOutput);
    }
    intCode.continue();
    lastOutput = output;
  });

  return lastOutput;
};

exports.findMaxThruster = codes => {
  let maxThruster = 0;

  const possiblePhases = generatePhases([0, 1, 2, 3, 4]);
  possiblePhases.forEach(phase => {
    const output = this.runACS(codes, phase);
    if (maxThruster < output) {
      maxThruster = output;
    }
  });

  return maxThruster;
};

function generatePhases(arr) {
  // https://en.wikipedia.org/wiki/Heap%27s_algorithm
  const c = [];
  const n = arr.length;
  const permutation = [[...arr]];

  for (let i = 0; i < n; i++) {
    c[i] = 0;
  }

  let i = 0;
  while (i < n) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
      } else {
        const temp = arr[c[i]];
        arr[c[i]] = arr[i];
        arr[i] = temp;
      }
      permutation.push([...arr]);
      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i += 1;
    }
  }
  return permutation;
}
