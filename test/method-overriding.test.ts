describe("Method Overriding", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manajer extends Employee {
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name} iam your Manajer`);
    }
  }
  it("should support Method Overriding", () => {
    const employe: Employee = new Employee("Rizal");
    employe.sayHello("Boy");

    const manajer: Manajer = new Manajer("Rizal");
    manajer.sayHello("Boy");
  });
});
