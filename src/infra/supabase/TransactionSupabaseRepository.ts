import { ITransactionRepository } from "../../domain/repositories/ITransactionRepository";
import { ITransaction } from "../../presentation/Transaction";
import { supabase } from "./config";

export class TransactionSupabaseRepository implements ITransactionRepository {
  async create(
    value: number,
    typeId: number,
    userId: string,
  ): Promise<ITransaction> {
    const { data, error } = await supabase.from("transaction").insert({
      value,
      transaction_type_id: typeId,
      user_id: userId,
    }).select(`
      *,
      transaction_type (id, display)
  `);

    if (error) {
      throw error;
    }

    if (!data || data.length == 0) {
      throw new Error("Falha ao obter transação cadastrada!");
    }

    if (!data[0].transaction_type) {
      throw new Error("Falha ao obter o tipo transação cadastrada!");
    }

    return {
      date: new Date(data[0].created_at),
      value: data[0].value,
      type: data[0].transaction_type,
      id: data[0].id,
    };
  }
  async listAll(): Promise<ITransaction[]> {
    const { data, error } = await supabase
      .from("transaction")
      .select(`*, transaction_type( id, display));`);

    if (error) {
      throw error;
    }

    if (!data) {
      return [];
    }

    const result: ITransaction[] = data.map((row) => {
      if (!row.transaction_type_id) {
        throw new Error("Transaction type not found");
      }

      return {
        id: String(row.id),
        value: row.value,
        type: String(row.transaction_type_id),
        date: new Date(row.created_at),
      };
    });

    return result;
  }
}
