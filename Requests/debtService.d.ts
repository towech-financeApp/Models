export interface WorkerCreateDebt {
  user_id: string;
  loaner: string;
  amount: number;
  concept: string;
  date: Date;
  deduct: boolean;
}

export interface WorkerPayDebt {
  user_id: string;
  debt_id: string;
  amount: number;
  wallet_id: string;
}
