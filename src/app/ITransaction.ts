export interface Transaction {
  id: number;
  product: string;
  date: Date;
  session: string;
  quantity: number;
  price: number;
}