export default interface Transaction {
  _id: string;
  wallet_it: string;
  concept: string;
  amount: number;
  transactionDate: Date;
  createdAt: Date;
}
