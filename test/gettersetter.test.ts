describe("Setter and Getter", () => {
  class Category {
    _name?: string;

    public get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }

    public set name(v: string) {
      if (this._name !== "") {
        this._name = v;
      }
    }
  }

  it("should support get dan set", () => {
    const category: Category = new Category();
    console.info(category.name);
    category.name = "Boy";
    console.info(category.name);
    category.name = "";
    console.info(category.name);
  });
});
