import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '⚠️ Missing Supabase environment variables (VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY). ' +
    'The app will run with limited functionality. Database features will not work.'
  );
  // Create a placeholder client with dummy values to prevent app crashes
  // All database operations will fail gracefully
  supabaseClient = createClient(
    'https://placeholder.supabase.co',
    'placeholder-anon-key'
  );
} else {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseClient;
