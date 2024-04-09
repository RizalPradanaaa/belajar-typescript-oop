describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar Typescript OOP";
    static VERSION: string = "1.0.0";
    static AUTHOR: string = "Rizal Nawang Pradana";
  }

  class Mathutil {
    static Sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }
  }
  it("should support static", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });

  it("should ", () => {
    expect(Mathutil.Sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
