import { Customer } from './ICustomer'

export var cust: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNum: 0,
    joinDate: new Date('2024-07-06'),
    lastInvoiceDate: new Date('2024-07-06'),
    quantityBought: 10,
    transactions:
      [
        {
          id: 1,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        },
        {
          id: 2,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 2,
          price: 100,
        },
        {
          id: 3,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        },
        {
          id: 4,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        }
      ]
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNum: 0,
    joinDate: new Date('2024-07-06'),
    lastInvoiceDate: new Date('2024-07-06'),
    quantityBought: 10,
    transactions:
      [
        {
          id: 1,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        },
        {
          id: 2,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 2,
          price: 100,
        },
        {
          id: 3,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        },
        {
          id: 4,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        }
      ]
  }, {
    id: 3,
    name: 'Jane Smith',
    email: 'Jane.Smith@example.com',
    phoneNum: 0,
    joinDate: new Date('2024-07-06'),
    lastInvoiceDate: new Date('2024-07-06'),
    quantityBought: 10,
    transactions:
      [
        {
          id: 1,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        },
        {
          id: 2,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 2,
          price: 100,
        },
        {
          id: 3,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        },
        {
          id: 4,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        }
      ]
  },
  {
    id: 4,
    name: 'John Do3',
    email: 'john.do3@example.com',
    phoneNum: 0,
    joinDate: new Date('202407-06'),
    lastInvoiceDate: new Date('2024-07-06'),
    quantityBought: 10,
    transactions:
      [
        {
          id: 1,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        },
        {
          id: 2,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 2,
          price: 100,
        },
        {
          id: 3,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Evening',
          quantity: 1,
          price: 50,
        },
        {
          id: 4,
          product: 'Milk',
          date: new Date('2024-07-06'),
          session: 'Morning',
          quantity: 1,
          price: 50,
        }
      ]
  }
];
