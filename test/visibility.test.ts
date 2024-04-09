describe("Visibility", () => {
  class Counter {
    protected counter: number = 0;
    public increment() {
      this.counter++;
    }
    public getCounter() {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
      this.counter + 2;
    }
  }

  it("should support visbility", () => {
    const counter: Counter = new Counter();
    console.info(counter.getCounter());
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());

    const double: DoubleCounter = new DoubleCounter();
    double.increment();
    double.increment();
  });
});
