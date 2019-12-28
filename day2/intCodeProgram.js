function IntCodeProgram(input, config) {
  // Check for invalid input
  const isInvalid =
    !input.length || input.some(code => typeof code !== "number");
  if (isInvalid) throw "Invalid input codes";

  // Initialized the program
  this.codes = [...input];
  this.pointer = 0;

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
  const validInstruction = [1, 2, 99];

  while (this.pointer < this.codes.length) {
    const instruction = this.codes[this.pointer];

    if (validInstruction.includes(instruction)) {
      this[`opCode${instruction}`]();
    } else {
      console.error(
        `Encountered an invalid instruction: ${this.codes[this.pointer]}`
      );
      this.pointer = this.codes.length;
    }
  }
};

IntCodeProgram.prototype.opCode1 = function() {
  const params = this.codes.slice(this.pointer + 1, this.pointer + 4);
  this.codes[params[2]] = this.codes[params[0]] + this.codes[params[1]];

  this.pointer += 4;
};

IntCodeProgram.prototype.opCode2 = function() {
  const params = this.codes.slice(this.pointer + 1, this.pointer + 4);
  this.codes[params[2]] = this.codes[params[0]] * this.codes[params[1]];

  this.pointer += 4;
};

IntCodeProgram.prototype.opCode99 = function() {
  this.pointer = this.codes.length;
};

module.exports = IntCodeProgram;
