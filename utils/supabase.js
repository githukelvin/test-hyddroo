import { createClient } from "@supabase/supabase-js";

export const supabase = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseKey = config.public.supabaseAnonKey;
  const supabase = createClient(supabaseUrl, supabaseKey);
  return supabase;
};
