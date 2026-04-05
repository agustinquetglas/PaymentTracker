import { Menu } from "../main/Menu";
import { PaymentService } from "../main/PaymentService";
import { Income } from "../main/Income";
import { Expense } from "../main/Expense";
import { FixedExpense } from "../main/FixedExpense";
import { Payment } from "../main/Payment";


describe("Menu", function () {

  test("Deberia mostrar las opciones del menu", function () {
    const service = new PaymentService();
    const menu = new Menu(service);

    const result = menu.showMenu();

    expect(result).toContain("1. Agregar pago");
    expect(result).toContain("2. Listar pagos");
  });

  test("Deberia listar los pagos", function () {
    const service = new PaymentService();
    const menu = new Menu(service);

    const income = new Income(1, 1000, "Sueldo", new Date("2026-04-04"), "Laburo");

    service.addPayment(income);

    const result = menu.listPayments();

    expect(result).toContain("Sueldo");
    expect(result).toContain("1000");
  });

  test("Deberia mostrar el balance", function () {
    const service = new PaymentService();
    const menu = new Menu(service);

    const income = new Income(1, 1000, "Sueldo", new Date("2026-04-04"), "Laburo");

    service.addPayment(income);

    const result = menu.showBalance();

    expect(result).toContain("Ingresos");
    expect(result).toContain("1000");
  });

  test("Deberia emitir mensaje cuando no hay pagos registrados", function () {
    const service = new PaymentService();
    const menu = new Menu(service);

    const result = menu.listPayments();

    expect(result).toContain("No hay pagos registrados");
  });
  
});