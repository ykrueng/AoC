function IntCodeProgram(input) {
  // Check for invalid input
  const isInvalid =
    !input.length || input.some(code => typeof code !== "number");
  if (isInvalid) throw "Invalid input codes";

  // Initialized the program
  this.codes = [...input];
  this.pointer = 0;
}

IntCodeProgram.prototype.run = function() {
  while (this.pointer < this.codes.length) {
    switch (this.codes[this.pointer]) {
      case 99:
        this.opCode99();
        break;
      case 1:
        this.opCode1();
        break;
      case 2:
        this.opCode2();
        break;
      default:
        console.error(
          `Encountered an invalid instruction: ${this.codes[this.pointer]}`
        );
        this.pointer = this.codes.length;
        break;
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
