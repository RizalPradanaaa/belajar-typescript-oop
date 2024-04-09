describe("Interface", () => {
  interface HasName {
    name: string;
  }
  interface CanSayHello {
    sayhello(name: string): void;
  }

  class Person implements HasName, CanSayHello {
    name: string;
    sayhello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
    constructor(name: string) {
      this.name = name;
    }
  }

  it("should support interface inheritance", () => {
    const person: Person = new Person("Rizal");
    person.sayhello("Boy");
  });
});
