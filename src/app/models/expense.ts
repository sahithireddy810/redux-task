export interface IExpense {
    id: number;
    categoryName: string;
    itemName: string;
    amount:number;
    expenseDate:Date;
    isActive: boolean;
}