import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function SupabaseDebug() {
  const [status, setStatus] = useState('Checking...');
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function checkConnection() {
      if (!supabase) {
        setStatus('❌ Supabase not configured - check .env file');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('practitioners')
          .select('*', { count: 'exact' });

        if (error) {
          setStatus(`❌ Error: ${error.message}`);
        } else {
          setCount(data?.length || 0);
          setStatus(`✅ Connected! Found ${data?.length} practitioners`);
        }
      } catch (err) {
        setStatus(`❌ Exception: ${err}`);
      }
    }

    checkConnection();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'white',
      border: '2px solid #3b82f6',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Supabase Debug</div>
      <div style={{ fontSize: '14px' }}>{status}</div>
      {count > 0 && (
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>
          Practitioners count: {count}
        </div>
      )}
    </div>
  );
}
