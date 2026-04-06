import { createClient } from "@supabase/supabase-js";

// Ensure the URL is a valid string even if env vars are missing to prevent build-time crashes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn("Supabase keys are missing. Using placeholders for build stability. Please add real keys to your .env.local file or Vercel dashboard.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
