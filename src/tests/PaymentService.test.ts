import { Income } from "../main/Income";
import { Expense } from "../main/Expense";
import { Payment } from "../main/Payment";
import { PaymentService } from "../main/PaymentService";
import { FixedExpense } from "../main/FixedExpense";

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

    
    describe("Balance mensual", () => {
    it("Deberia calcular el balance mensual correctamente (ingresos - gastos - fijos)", () => {
        const service = new PaymentService();

        // Ingreso (marzo)
        const i1 = new Income(1, 1000, "Sueldo", new Date(2025, 2, 5), "Trabajo");

        // Gasto (marzo)
        const e1 = new Expense(2, 300, "Comida", new Date(2025, 2, 15), "Supermercado");

        service.addPayment(i1);
        service.addPayment(e1);

        // Gasto fijo (se aplica)
        const fixed = new FixedExpense(3, 200, "Alquiler", new Date(2025, 2, 1), 1);

        service.addFixedExpense(fixed);

        const result = service.getMonthlyBalance(2, 2025);

        // 1000 - 300 - 200 = 500
        expect(result).toBe(500);
      });

    it("Deberia ignorar pagos de otros meses", () => {
        const service = new PaymentService();

        const i1 = new Income(1, 1000, "Sueldo", new Date(2025, 3, 5), "Trabajo"); // abril
        service.addPayment(i1);

        const result = service.getMonthlyBalance(2, 2025); // marzo

        expect(result).toBe(0);
    });

    it("Deberia devolver 0 cuando no existen pagos", () => {
        const service = new PaymentService();

        const result = service.getMonthlyBalance(2, 2025);

        expect(result).toBe(0);
    });


});
});
