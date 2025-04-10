import { calculatePoints } from "../helpers/calculatePoints";

describe("calculatePoints", () => {
  it("should return 0 for amount less than or equal to 50", () => {
    expect(calculatePoints(50)).toBe(0);
    expect(calculatePoints(30)).toBe(0);
  });

  it("should return correct points for amount between 50 and 100", () => {
    expect(calculatePoints(80)).toBe(30);
    expect(calculatePoints(75.5)).toBe(25);
  });

  it("should return correct points for amount over 100", () => {
    expect(calculatePoints(120)).toBe(90); 
    expect(calculatePoints(101)).toBe(52);
  });

  it("should handle fractional values correctly", () => {
    expect(calculatePoints(100.75)).toBe(50);
    expect(calculatePoints(99.99)).toBe(49);
  });
});
