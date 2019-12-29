exports.getPasswordCount = (loLimit, hiLimit, strict = false) => {
  let count = 0;

  for (let i = loLimit; i <= hiLimit; i++) {
    const hasDouble = this.validateHasDouble(i.toString(), strict);
    const neverDecrease = this.validateNeverDecrease(i.toString());
    if (hasDouble && neverDecrease) count += 1;
  }
  return count;
};

exports.validateHasDouble = (str, strict = false) => {
  if (typeof str !== "string" && str.length < 2) return false;

  let headPointer = 1;
  let tailPointer = 0;
  let count = 1;

  while (headPointer < str.length) {
    if (str[tailPointer] === str[headPointer]) {
      count += 1;
      if (!strict) return true;
      if (count === 2) {
        const lastIndex = headPointer === str.length - 1;
        const nextEl = str[headPointer + 1];

        if (lastIndex || nextEl !== str[headPointer]) return true;
      }
      headPointer = headPointer + 1;
      count += 1;
    } else {
      tailPointer = headPointer;
      headPointer = headPointer + 1;
      count = 1;
    }
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
