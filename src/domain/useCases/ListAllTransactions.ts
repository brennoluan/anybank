import { ITransactionRepository } from "../repositories/ITransactionRepository";

export class ListAllTransactions {
  constructor(private transactionRepository: ITransactionRepository) {}
  async execute(): Promise<void> {
    return this.transactionRepository.listAll();
  }
}
