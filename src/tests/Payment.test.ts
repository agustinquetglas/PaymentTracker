import { Income } from "../main/Income";
import { Expense } from "../main/Expense";
import { Payment } from "../main/Payment";

describe("Payment Polymorphism", function () {
  test("Deberia manejar diferentes tipos de pagos", function () {
    const payments: Payment[] = [
      new Income(1, 1000, "Sueldo", new Date(), "Trabajo"),
      new Expense(2, 300, "Alquiler", new Date(), "Vivienda"),
    ];

    expect(payments[0].getType()).toBe("Income");
    expect(payments[1].getType()).toBe("Expense");
  });
});