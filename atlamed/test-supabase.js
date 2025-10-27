import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://mszwhncbjafstxtqfcaw.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zendobmNiamFmc3R4dHFmY2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTMwNzMsImV4cCI6MjA3NjEyOTA3M30.d7_l2BcqDT7Hd5r1FLqM74Seya4Nf77tkckF1GP_viA';

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
