import { Income } from "../main/Income";
import { Expense } from "../main/Expense";
import { Payment } from "../main/Payment";

describe("Clase Payment", function () {
  test("Deberia manejar diferentes tipos de pagos", function () {
    const payments: Payment[] = [
      new Income(1, 1000, "Sueldo", new Date("2026-04-04"), "Trabajo"),
      new Expense(17, 300, "Alquiler", new Date("2026-04-04"), "Vivienda"),
    ];

    expect(payments[0].getType()).toBe("Income");
    expect(payments[1].getType()).toBe("Expense");
    expect(payments[0].getAmount()).toBe(1000);
    expect(payments[1].getAmount()).toBe(300);
    expect(payments[0].getDescription()).toBe("Sueldo");
    expect(payments[1].getDescription()).toBe("Alquiler");
    expect(payments[0].getDate()).toEqual(new Date("2026-04-04"));
    expect(payments[1].getDate()).toEqual(new Date("2026-04-04"));
    expect(payments[0].getId()).toBe(1);
    expect(payments[1].getId()).toBe(17);
  });
});