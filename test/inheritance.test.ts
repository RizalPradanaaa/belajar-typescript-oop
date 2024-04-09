describe("Inheritance", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Manajer extends Employee {}
  class Director extends Employee {}

  it("should support inheritance", () => {
    const employe: Employee = new Employee("Rizal");
    console.info(employe.name);
    const manajer: Manajer = new Manajer("Nawang");
    console.info(manajer.name);
    const director: Director = new Director("Pradana");
    console.info(director.name);
  });
});
