import { Payment } from "./Payment";
export class PaymentService {
    private payments: Payment[];
    constructor() {
        this.payments = [];
    }

    public addPayment(payment: Payment): void {
        this.payments.push(payment);
    }

    public getPayments(): Payment[] {
        return this.payments;
    }

    public getTotalIncome(): number {
        let totalIncome = 0;

        for (let payment of this.payments) {
            if (payment.getType() === "Income") {
                totalIncome += payment.getAmount();
            }
        }

        return totalIncome;
    }

    public getTotalExpense(): number {
        let totalExpense = 0;

        for (let payment of this.payments) {
            if (payment.getType() === "Expense") {
                totalExpense += payment.getAmount();
            }
        }

        return totalExpense;
    }

    public getBalance(): number {
        return this.getTotalIncome() - this.getTotalExpense();
    }
}