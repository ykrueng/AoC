const { getTotalFuel } = require("./helper");

describe("Fuel required to launch a module", () => {
  test("getModuleTotalFuel", () => {
    expect(getTotalFuel(0)).toEqual(0);
    expect(getTotalFuel(12)).toEqual(2);
    expect(getTotalFuel(14)).toEqual(2);
    expect(getTotalFuel(1969)).toEqual(654);
    expect(getTotalFuel(100756)).toEqual(33583);
    expect(getTotalFuel("100756")).toEqual(NaN);
  });
});
