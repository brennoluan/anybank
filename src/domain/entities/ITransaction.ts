import { ITransactionType } from "./ITransactionType";

export interface ITransaction {
  id: string;
  value: number;
  type: ITransactionType;
  date: Date;
}
