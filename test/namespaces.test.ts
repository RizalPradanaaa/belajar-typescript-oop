import { MathUtil } from "../src/math-util";

describe("Namespaces", () => {
  it("support", () => {
    console.info(MathUtil.PI);
    expect(MathUtil.sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
