import { ITransactionType } from "../../domain/entities/ITransactionType";
import { ITransactionTypeRepository } from "../../domain/repositories/ITransactionTypeRepository";
import { supabase } from "./config";

export class TransactionTypeSupabaseRepository implements ITransactionTypeRepository {
  async listAll(): Promise<ITransactionType[]> {
    const { data, error } = await supabase.from("transaction_type").select("*");

    if (error) {
      throw error;
    }

    return (data ?? []).map((row) => ({
      id: String(row.id),
      display: row.display,
    }));
  }
}
