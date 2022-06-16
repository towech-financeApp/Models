import Transaction from "./transaction";

export default interface Debt {
  _id: string;
  user_id: string;
  loaner: string;
  amount: number;
  concept: string;
  date: Date;
  payments: Transaction[];
  completed: boolean;
  createdAt: Date;
}
