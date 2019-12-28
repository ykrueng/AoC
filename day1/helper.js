exports.getFuelCount = mass => {
  if (typeof mass !== "number") return NaN;

  const base = Math.floor(mass / 3);
  if (base <= 2) {
    return 0;
  } else {
    return base - 2;
  }
};

exports.getTotalFuelCount = modules => {
  if (modules.length <= 0) return 0;

  const isInvalid = modules.some(module => typeof module !== "number");
  if (isInvalid) return NaN;

  return modules.reduce((acc, module) => acc + this.getFuelCount(module), 0);
};

exports.getFinalFuelCount = mass => {
  if (typeof mass !== 'number') return NaN
  if (mass <= 0) {
    return 0
  } else {
    const fuel = this.getFuelCount(mass)
    return fuel + this.getFinalFuelCount(fuel)
  }
}

exports.getTotalFinalFuelCount = modules => {
  if (modules.length <= 0) return 0;

  const isInvalid = modules.some(module => typeof module !== "number");
  if (isInvalid) return NaN;

  return modules.reduce((acc, module) => acc + this.getFinalFuelCount(module), 0);
};