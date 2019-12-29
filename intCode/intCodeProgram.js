function IntCodeProgram(input, config = {}) {
  // Check for invalid input
  const isInvalid =
    !input.length || input.some(code => typeof code !== "number");
  if (isInvalid) throw "Invalid input codes";

  // Initialized the program
  this.codes = [...input];
  this.pointer = 0;
  this.input = typeof config.input === "number" ? config.input : null;
  this.phase = typeof config.phase === "number" ? config.phase : null;
  this.active = false;
  this.halted = false;

  if (config) {
    const { state } = config;
    if (state && state.noun) {
      this.codes[1] = state.noun;
    }
    if (state && state.verb) {
      this.codes[2] = state.verb;
    }
  }
}

IntCodeProgram.prototype.run = function() {
  const validInstruction = [1, 2, 3, 4, 5, 6, 7, 8, 99];
  this.active = true;

  while (this.pointer < this.codes.length && !this.halted) {
    const instruction = Math.floor(this.codes[this.pointer] % 100);

    if (validInstruction.includes(instruction)) {
      const output = this[`opCode${instruction}`]();
      if (typeof output === "number") return output;
    } else {
      console.error(
        `Encountered an invalid instruction: ${this.codes[this.pointer]}`
      );
      this.pointer = this.codes.length;
    }
  }
};

IntCodeProgram.prototype.continue = function(input) {
  if (input) {
    if (typeof input !== "number") throw "Invalid input";
    this.input = input;
  }

  this.halted = false;
  return this.run();
};

IntCodeProgram.prototype.getModes = function() {
  const instruction = this.codes[this.pointer].toString();
  if (instruction.length < 3) return "";

  const modes = instruction.substring(0, instruction.length - 2);

  return modes
    .split("")
    .reverse()
    .join("");
};

IntCodeProgram.prototype.opCode1 = function() {
  const modes = this.getModes();
  const params = this.codes.slice(this.pointer + 1, this.pointer + 4);

  const param1 = modes && modes[0] === "1" ? params[0] : this.codes[params[0]];
  const param2 = modes && modes[1] === "1" ? params[1] : this.codes[params[1]];

  this.codes[params[2]] = param1 + param2;
  this.pointer += 4;
};

IntCodeProgram.prototype.opCode2 = function() {
  const modes = this.getModes();
  const params = this.codes.slice(this.pointer + 1, this.pointer + 4);

  const param1 = modes && modes[0] === "1" ? params[0] : this.codes[params[0]];
  const param2 = modes && modes[1] === "1" ? params[1] : this.codes[params[1]];

  this.codes[params[2]] = param1 * param2;
  this.pointer += 4;
};

IntCodeProgram.prototype.opCode3 = function() {
  let input = null;
  if (typeof this.phase === "number") {
    input = this.phase;
    this.phase = null;
  } else if (typeof this.input === "number") {
    input = this.input;
    this.input = null;
  }

  if (typeof input === "number") {
    const params = this.codes.slice(this.pointer + 1, this.pointer + 2);
    this.codes[params[0]] = input;
    this.pointer += 2;
  } else {
    this.halted = true;
  }
};

IntCodeProgram.prototype.opCode4 = function() {
  const modes = this.getModes();
  const params = this.codes.slice(this.pointer + 1, this.pointer + 2);
  const param1 = modes && modes[0] === "1" ? params[0] : this.codes[params[0]];

  this.pointer += 2;
  this.halted = true;
  return param1;
};
IntCodeProgram.prototype.opCode5 = function() {
  const modes = this.getModes();
  const params = this.codes.slice(this.pointer + 1, this.pointer + 3);
  const param1 = modes && modes[0] === "1" ? params[0] : this.codes[params[0]];
  const param2 = modes && modes[1] === "1" ? params[1] : this.codes[params[1]];

  if (param1 !== 0) {
    this.pointer = param2;
  } else {
    this.pointer += 3;
  }
};
IntCodeProgram.prototype.opCode6 = function() {
  const modes = this.getModes();
  const params = this.codes.slice(this.pointer + 1, this.pointer + 3);
  const param1 = modes && modes[0] === "1" ? params[0] : this.codes[params[0]];
  const param2 = modes && modes[1] === "1" ? params[1] : this.codes[params[1]];

  if (param1 === 0) {
    this.pointer = param2;
  } else {
    this.pointer += 3;
  }
};
IntCodeProgram.prototype.opCode7 = function() {
  const modes = this.getModes();
  const params = this.codes.slice(this.pointer + 1, this.pointer + 4);
  const param1 = modes && modes[0] === "1" ? params[0] : this.codes[params[0]];
  const param2 = modes && modes[1] === "1" ? params[1] : this.codes[params[1]];

  if (param1 < param2) {
    this.codes[params[2]] = 1;
  } else {
    this.codes[params[2]] = 0;
  }
  this.pointer += 4;
};
IntCodeProgram.prototype.opCode8 = function() {
  const modes = this.getModes();
  const params = this.codes.slice(this.pointer + 1, this.pointer + 4);
  const param1 = modes && modes[0] === "1" ? params[0] : this.codes[params[0]];
  const param2 = modes && modes[1] === "1" ? params[1] : this.codes[params[1]];

  if (param1 === param2) {
    this.codes[params[2]] = 1;
  } else {
    this.codes[params[2]] = 0;
  }
  this.pointer += 4;
};

IntCodeProgram.prototype.opCode99 = function() {
  this.pointer = this.codes.length;
  this.active = false;
};

module.exports = IntCodeProgram;
