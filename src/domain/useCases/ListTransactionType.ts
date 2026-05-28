import { ITransactionType } from "../entities/ITransactionType";
import { ITransactionTypeRepository } from "../repositories/ITransactionTypeRepository";

export class ListTransactionType {
  constructor(private transactionTypeRepository: ITransactionTypeRepository) {}
  async execute(): Promise<ITransactionType[]> {
    return this.transactionTypeRepository.listAll();
  }
}
