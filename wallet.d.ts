export default interface Wallet {
  _id: string;
  user_id: string;
  name: string;
  money: number;
  createdAt: Date;
}