import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface PractitionerStats {
  total: number;
  states: number;
  specialties: number;
  loading: boolean;
}

/**
 * Custom hook to fetch and track practitioner statistics from Supabase
 * Automatically updates when practitioners are added or removed
 */
export function usePractitionerStats(): PractitionerStats {
  const [stats, setStats] = useState<PractitionerStats>({
    total: 0,
    states: 0,
    specialties: 0,
    loading: true
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    try {
      if (!supabase) {
        // Try a static fallback from public if present
        try {
          const res = await fetch(`${import.meta.env.BASE_URL}stats.json`, { cache: 'no-store' });
          if (res.ok) {
            const json = await res.json();
            setStats({
              total: Number(json.total) || 0,
              states: Number(json.states) || 0,
              specialties: Number(json.specialties) || 0,
              loading: false,
            });
            return;
          }
        } catch (e) {
          // ignore and fall through to zeros
        }
        console.warn('[usePractitionerStats] Supabase not configured; using zero stats');
        setStats({ total: 0, states: 0, specialties: 0, loading: false });
        return;
      }
      // Get total count of practitioners
      const { count: totalCount } = await supabase
        .from('practitioners')
        .select('*', { count: 'exact', head: true });

      // Get unique states
      const { data: statesData } = await supabase
        .from('practitioners')
        .select('state');

      // Get specialty count
      const { count: specialtyCount } = await supabase
        .from('specialties')
        .select('*', { count: 'exact', head: true });

      const uniqueStates = new Set(
        statesData?.filter(p => p.state).map(p => p.state)
      );

      setStats({
        total: totalCount || 0,
        states: uniqueStates.size,
        specialties: specialtyCount || 0,
        loading: false
      });
    } catch (error) {
      console.error('Error loading practitioner stats:', error);
      setStats(prev => ({ ...prev, loading: false }));
    }
  }

  return stats;
}

/**
 * Format practitioner count with locale-aware formatting and optional + symbol
 * @param count The number to format
 * @param showPlus Whether to append a + symbol
 * @returns Formatted string like "2,500+" or "142"
 */
export function formatPractitionerCount(count: number, showPlus: boolean = true): string {
  const formatted = count.toLocaleString();
  return showPlus ? `${formatted}+` : formatted;
}
