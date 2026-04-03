import { Expense } from "../main/Expense";

describe("Expense Class", function () {
  test("Deberia crear un gasto correctamente", function () {
    const expense = new Expense(2, 200, "Comida", new Date(), "Food");

    expect(expense.getAmount()).toBe(200);
    expect(expense.getDescription()).toBe("Comida");
    expect(expense.getType()).toBe("Expense");
    expect(expense.getCategory()).toBe("Food");
  });
});