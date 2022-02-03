export default interface Category {
  _id: string;
  parent_id: string;
  name: string;
  type: 'Income' | 'Expense';
  user_id: string;
}