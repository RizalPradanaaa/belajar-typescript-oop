describe("Paramater Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support paramater properties", () => {
    const person: Person = new Person("Zal");
    console.info(person.name);
  });
});
