describe("Class", () => {
  class Customer {
    constructor() {
      console.info("Create new user");
    }
  }
  class Order {}

  it("should support class", () => {
    const customer: Customer = new Customer();
    const order = new Order();
  });

  it("should support constructor", () => {
    new Customer();
    new Customer();
  });
});
