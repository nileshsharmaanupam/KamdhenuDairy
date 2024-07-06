export interface Transaction {
    id: number;
    product: string;
    dateOfPurcahse: Date;
    session: string;
    quantity:number;
    amount: number;
  }