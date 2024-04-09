describe("Instance Of", () => {
  class Employee {}
  class Manajer {}
  const budi: Employee = new Employee();
  const eko: Manajer = new Manajer();

  it("should problem witht type of", () => {
    console.info(typeof budi);
    console.info(typeof eko);
  });

  it("should support instance of", () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manajer).toBe(false);
    expect(eko instanceof Employee).toBe(false);
    expect(eko instanceof Manajer).toBe(true);
  });
});
