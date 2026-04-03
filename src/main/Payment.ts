export abstract class Payment {
    protected amount: number;
    protected id: number;
    protected description: string;
    protected date: Date;

    constructor(id: number, amount: number, description: string, date: Date){
        this.amount = amount;
        this.id = id;
        this.description = description;
        this.date = date;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getId(): number {
        return this.id;
    }
    public getDescription(): string {
        return this.description;
    }
    public getDate(): Date {
        return this.date;
    }

    public abstract getType(): string;
}