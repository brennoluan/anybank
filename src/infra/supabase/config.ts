import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase url and key must be provided");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
