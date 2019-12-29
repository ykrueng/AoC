exports.getPasswordCount = (loLimit, hiLimit) => {
  let count = 0;

  for (let i = loLimit; i <= hiLimit; i++) {
    const hasDouble = this.validateHasDouble(i.toString());
    const neverDecrease = this.validateNeverDecrease(i.toString());
    if (hasDouble && neverDecrease) count += 1;
  }
  return count;
};

exports.validateHasDouble = str => {
  if (typeof str !== "string" && str.length < 2) return false;

  let pointer = 1;
  let current = str[0];

  while (pointer < str.length) {
    if (str[pointer] === current) return true;

    current = str[pointer];
    pointer += 1;
  }

  return false;
};

exports.validateNeverDecrease = str => {
  if (typeof str !== "string" && str.length < 2) return false;

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] > str[i]) {
      return false;
    }
  }

  return true;
};
