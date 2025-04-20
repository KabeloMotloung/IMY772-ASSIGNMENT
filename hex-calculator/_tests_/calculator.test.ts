import { hexAdd } from "../utils/hexCalculator";

describe("Hex Calculator - Addition", () => {
  it("adds two valid hex numbers", () => {
    expect(hexAdd("A", "1")).toBe("000B");
    expect(hexAdd("1A", "1")).toBe("001B");
  });

  it("throws error if input is longer than 2-digits", () => {
    expect(() => hexAdd("1A3", "2")).toThrow();
  });

  it("throws error for invalid hex input", () => {
    expect(() => hexAdd("ZZ", "2")).toThrow();
  });
});
