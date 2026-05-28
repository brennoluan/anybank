import { ITransactionRepository } from "../../domain/repositories/ITransactionRepository";
import { supabase } from "./config";

export class TransactionSupabaseRepository implements ITransactionRepository {
  async create(value: number, typeId: number, userId: string): Promise<void> {
    const { error } = await supabase.from("transaction").insert({
      value,
      transaction_type_id: typeId,
      user_id: userId,
    });

    if (error) {
      throw error;
    }
  }
}
