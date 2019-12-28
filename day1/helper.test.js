const {
  getFuelCount,
  getTotalFuelCount,
  getFinalFuelCount,
  getTotalFinalFuelCount
} = require("./helper");

describe("Fuel required to launch a module", () => {
  test("getFuelCount", () => {
    expect(getFuelCount(0)).toEqual(0);
    expect(getFuelCount(12)).toEqual(2);
    expect(getFuelCount(14)).toEqual(2);
    expect(getFuelCount(1969)).toEqual(654);
    expect(getFuelCount(100756)).toEqual(33583);
    expect(getFuelCount("100756")).toEqual(NaN);
  });
});

describe("Total fuel required to launch modules", () => {
  test("GetTotalFuelCount", () => {
    expect(getTotalFuelCount([0, 12, 14, 1969, 100756])).toEqual(34241);
  });
});

describe("Final fuel required to launch a module", () => {
  test("getFinalFuelCount", () => {
    expect(getFinalFuelCount(0)).toEqual(0);
    expect(getFinalFuelCount(12)).toEqual(2);
    expect(getFinalFuelCount(14)).toEqual(2);
    expect(getFinalFuelCount(1969)).toEqual(966);
    expect(getFinalFuelCount(100756)).toEqual(50346);
    expect(getFinalFuelCount("100756")).toEqual(NaN);
  });
});

describe("Total final fuel required to launch modules", () => {
  test("getTotalFinalFuelCount", () => {
    expect(getTotalFinalFuelCount([0, 12, 14, 1969, 100756])).toEqual(51316);
  });
});
