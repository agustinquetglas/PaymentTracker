import { FixedExpense } from "../main/FixedExpense";
import { PaymentService } from "../main/PaymentService";

describe("FixedExpense", () => {
    describe("Constructor y gets", () => {
        it("Deberia crear un gasto fijo con las caracteristicas de expense", () => {
            const expense = new FixedExpense(1, 500, "Plan de Corolla GR", new Date(), 15);
            expect(expense.getDayOfMonth()).toBe(15);
            expect(expense.getType()).toBe("Gasto Fijo");
            expect(expense.getId()).toBe(1);
            expect(expense.getAmount()).toBe(500);
        });
    });

    it("testeo de add y get (FixedExpense)", () => {
        const service = new PaymentService();

        const exp1 = new FixedExpense(1, 5000, "Netflix", new Date(), 5);
        const exp2 = new FixedExpense(2, 10000, "Alquiler", new Date(), 1);

        service.addFixedExpense(exp1);
        service.addFixedExpense(exp2);

        const result = service.getFixedExpenses();

        expect(result).toHaveLength(2);
        expect(result).toContain(exp1);
        expect(result).toContain(exp2);
    });

    it("deberia devolver solo los gastos que aplican al mes actual", () => {
        const service = new PaymentService();

        const today = new Date().getDate();

        const exp1 = new FixedExpense(1, 8000, "Gym", new Date(), today - 1); // aplica
        const exp2 = new FixedExpense(2, 12000, "Netflix", new Date(), today + 5); // no aplica

        service.addFixedExpense(exp1);
        service.addFixedExpense(exp2);

        const result = service.getMonthlyFixedExpenses();
        expect(result).toHaveLength(1);
        expect(result[0]).toBe(exp1);
    });

    describe("Simulacion de Cuotas Mensuales", () => {
        it("Deberia crear cuotas mensuales fijas", () => {
            const quotas: FixedExpense[] = [];
            const monthlyPayment = 250;
            const dayOfPayment = 10;

            for (let i = 0; i < 12; i++) {
                const paymentDate = new Date(2026, i, dayOfPayment);
                const quota = new FixedExpense(
                    i + 1,
                    monthlyPayment,
                    `Numero de cuota del auto ${i + 1}`,
                    paymentDate,
                    dayOfPayment
                );
                quotas.push(quota);
            }

            expect(quotas).toHaveLength(12);
            expect(quotas[0].getAmount()).toBe(250);
            expect(quotas[11].getAmount()).toBe(250);
        });

        it("Deberia verificar que todas las cuotas sean gastos fijos", () => {
            const quotas: FixedExpense[] = [];
            for (let i = 0; i < 12; i++) {
                quotas.push(
                    new FixedExpense(i + 1, 300, `Cuota ${i + 1}`, new Date(2026, i, 20), 20)
                );
            }
            quotas.forEach((quota) => {
                expect(quota.getType()).toBe("Gasto Fijo");
            });
        });

        // Una vez pasada la fecha de pago, el gasto fijo se aplica a los egresos de ese mes
        it("Deberia aplicarse al mes actual cuando el día de pago haya pasado", () => {
            const today = new Date();
            const dayOfMonth = today.getDate() - 1;
            const expense = new FixedExpense(1, 250, "Pago del auto", today, dayOfMonth);
            expect(expense.appliesToCurrentMonth()).toBe(true);
        });
    });


});