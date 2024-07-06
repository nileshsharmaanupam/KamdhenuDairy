import {Transaction} from './ITransaction'

export interface Customer {
    id: number;
    name: string;
    email: string;
    phoneNum: number;
    joinDate : Date;
    lastInvoiceDate: Date;
    quantityBought: number; 
    transactions : Transaction[]
  }