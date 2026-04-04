import { Income } from "../main/Income";
import { Expense } from "../main/Expense";
import { Payment } from "../main/Payment";
import { PaymentService } from "../main/PaymentService";

describe("Clase PaymentService", function () {
  test("Deberia agregar y obtener pagos correctamente", function () {
    const paymentService = new PaymentService();
    const i1 = new Income(1, 1000, "Sueldo", new Date(), "Changuita");
    const i2 = new Income(1, 4000, "Sueldo", new Date(), "Aguinaldo");
    const expense = new Expense(2, 23000, "Comida", new Date(), "Mc donalds");
    paymentService.addPayment(i1);
    paymentService.addPayment(i2);
    paymentService.addPayment(expense);
    const payments = paymentService.getPayments();
    expect(payments).toHaveLength(3);
    expect(payments[2].getType()).toBe("Expense");
  });

    test("Deberia calcular el total de ingresos, gastos y balance correctamente", function () {
      const paymentService = new PaymentService();
      const i1 = new Income(1, 1000, "Sueldo", new Date(), "Changuita");
      const i2 = new Income(1, 4000, "Sueldo", new Date(), "Aguinaldo");
      const expense = new Expense(2, 23000, "Comida", new Date(), "Mc donalds");
      paymentService.addPayment(i1);
      paymentService.addPayment(i2);
      paymentService.addPayment(expense);

      expect(paymentService.getTotalIncome()).toBe(5000);
      expect(paymentService.getTotalExpense()).toBe(23000);
      expect(paymentService.getBalance()).toBe(-18000);
    });
});
