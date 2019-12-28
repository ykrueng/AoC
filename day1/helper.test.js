const { getFuelCount, getTotalFuelCount } = require("./helper");

describe("Fuel required to launch a module", () => {
  test("getModuleTotalFuel", () => {
    expect(getFuelCount(0)).toEqual(0);
    expect(getFuelCount(12)).toEqual(2);
    expect(getFuelCount(14)).toEqual(2);
    expect(getFuelCount(1969)).toEqual(654);
    expect(getFuelCount(100756)).toEqual(33583);
    expect(getFuelCount("100756")).toEqual(NaN);
  });
});

describe("Fuel required to launch a module", () => {
  test("getModuleTotalFuel", () => {
    expect(getTotalFuelCount([0, 12, 14, 1969, 100756])).toEqual(34241);
  });
});

