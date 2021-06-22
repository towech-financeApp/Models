export default interface Transaction {
  _id: string;
  user_id: string;
  wallet_id: string;
  concept: string;
  amount: number;
  transactionDate: Date;
  createdAt: Date;
}
