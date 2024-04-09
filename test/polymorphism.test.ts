describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manajer extends Employee {}
  class VicePresident extends Employee {}

  // Method Polymorphism
  function SayHello(employe: Employee): void {
    console.info(`Hello ${employe.name}`);
  }

  it("should support", () => {
    let employe: Employee = new Employee("Rizal");
    console.info(employe);
    employe = new Manajer("nawang");
    console.info(employe);
    employe = new VicePresident("Pradana");
    console.info(employe);
  });

  it("should support method polymorphism", () => {
    SayHello(new Employee("Rizal"));
    SayHello(new Manajer("Nawang"));
    SayHello(new VicePresident("Pradana"));
  });
});
