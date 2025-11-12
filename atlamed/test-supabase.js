import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error: Missing environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  console.error('Please check your .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);

const { data, error } = await supabase
  .from('practitioners')
  .select('*')
  .limit(5);

if (error) {
  console.error('Error:', error);
} else {
  console.log('Success! Found', data?.length, 'practitioners');
  console.log('Sample:', data?.[0]);
}
