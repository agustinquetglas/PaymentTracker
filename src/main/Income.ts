import { Payment } from "./Payment";
export class Income extends Payment {
    private source: string;

    constructor(id: number, amount: number, description: string, date: Date, source: string) {
        super(id, amount, description, date);
        this.source = source;
    }

    public getType(): string {
        return "Income";
    }

    public getSource(): string {
        return this.source;
    }
}