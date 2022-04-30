import Transaction from '../Objects/transaction';

export interface EditTransactionResponse {
  old: Transaction[];
  new: Transaction[];
}
