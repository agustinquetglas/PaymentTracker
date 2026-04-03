import { Income } from "../main/Income";

describe("Income Class", function () {
  test("should create an income correctly", function () {
    const income = new Income(1, 1000, "Sueldo", new Date(), "Trabajo");

    expect(income.getAmount()).toBe(1000);
    expect(income.getDescription()).toBe("Sueldo");
    expect(income.getType()).toBe("Income");
    expect(income.getSource()).toBe("Trabajo");
  });
});