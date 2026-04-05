
import { Payment } from "./Payment";

export class FixedExpense extends Payment {
  private dayOfMonth: number;

  constructor(id: number, amount: number, description: string, date: Date, dayOfMonth: number) {
    super(id, amount, description, date);
    this.dayOfMonth = dayOfMonth;
  }

  public getDayOfMonth(): number {
    return this.dayOfMonth;
  }

  public getType(): string {
    return "Gasto Fijo";
  }

  public appliesToCurrentMonth(): boolean {
    const today = new Date();
    return today.getDate() >= this.dayOfMonth;
  }

  //getDate() trae la fecha actual en la vida real
}