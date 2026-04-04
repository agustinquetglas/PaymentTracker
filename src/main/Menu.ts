import { PaymentService } from "./PaymentService";

export class Menu {
  private service: PaymentService;

  constructor(service: PaymentService) {
    this.service = service;
  }

  public showMenu(): string {
    return `
    1. Agregar pago
    2. Listar pagos
    3. Ver balance
    4. Salir
    `;
  }

  public listPayments(): string {
    const payments = this.service.getPayments();

    if (payments.length === 0) {
      return "No hay pagos registrados";
    }

    let result = "";

    for (let payment of payments) {
      result += `${payment.getType()} - ${payment.getDescription()} - $${payment.getAmount()}\n`;
    } 

    return result;
  }

  public showBalance(): string {
    const income = this.service.getTotalIncome();
    const expense = this.service.getTotalExpense();
    const balance = this.service.getBalance();

    return `
    Ingresos: $${income}
    Gastos: $${expense}
    Balance: $${balance}
    `;
  }
}