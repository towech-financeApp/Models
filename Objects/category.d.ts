export default interface Category {
  _id: string;
  icon_id: number;
  parent_id: string;
  name: string;
  type: 'Income' | 'Expense';
  user_id: string;
}