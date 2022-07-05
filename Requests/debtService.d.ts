export interface WorkerCreateDebt {
  user_id: string;
  loaner: string;
  amount: number;
  concept: string;
  date: Date;
  deduct: boolean;
}
