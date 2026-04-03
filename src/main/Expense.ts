import { Payment } from "./Payment";
export class Expense extends Payment {
    private category: string;

    constructor(amount: number, id: number, description: string, date: Date, category: string) {
        super(amount, id, description, date);
        this.category = category;
    }

    public getType(): string {
        return "Expense";
    }

    public getCategory(): string {
        return this.category;
    }
}