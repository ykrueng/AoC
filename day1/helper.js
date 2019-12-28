exports.getFuelCount = mass => {
  if (typeof mass !== "number") return NaN;
  
  const base = Math.floor(mass / 3);
  if (base <= 2) {
    return 0;
  } else {
    return base - 2;
  }
};
