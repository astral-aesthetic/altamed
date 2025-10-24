import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin, Star, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Practitioner, SearchFilters } from '../types';
import PractitionerCard from '../components/PractitionerCard';

export default function DirectoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
  const [filteredPractitioners, setFilteredPractitioners] = useState<Practitioner[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    searchQuery: '',
    state: '',
    city: '',
    specialty: '',
    minRating: 0,
    telehealthOnly: false
  });

  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [availableSpecialties, setAvailableSpecialties] = useState<string[]>([]);

  useEffect(() => {
    loadPractitioners();
  }, []);

  useEffect(() => {
    // Check for specialty parameter in URL
    const specialtyParam = searchParams.get('specialty');
    if (specialtyParam) {
      setFilters(prev => ({ ...prev, specialty: specialtyParam }));
      setShowFilters(true);
    }
  }, [searchParams]);

  useEffect(() => {
    applyFilters();
  }, [filters, practitioners]);

  async function loadPractitioners() {
    try {
      const { data, error } = await supabase
        .from('practitioners')
        .select('*')
        .order('full_name');

      if (error) throw error;

      if (data) {
        setPractitioners(data);
        setFilteredPractitioners(data);

        // Extract unique states
        const states = [...new Set(data.filter(p => p.state).map(p => p.state))].sort();
        setAvailableStates(states);

        // Extract unique specialties
        const specialties = [...new Set(data.flatMap(p => Array.isArray(p.specialty_areas) ? p.specialty_areas : []))].sort();
        setAvailableSpecialties(specialties);
      }
    } catch (error) {
      console.error('Error loading practitioners:', error);
    } finally {
      setLoading(false);
    }
  }

  function applyFilters() {
    let filtered = [...practitioners];

    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        (p.full_name ?? '').toLowerCase().includes(query) ||
        (Array.isArray(p.specialty_areas) && p.specialty_areas.some(s => (s ?? '').toLowerCase().includes(query))) ||
        (p.city ?? '').toLowerCase().includes(query)
      );
    }

    // State filter
    if (filters.state) {
      filtered = filtered.filter(p => p.state === filters.state);
    }

    // City filter
    if (filters.city) {
      filtered = filtered.filter(p => (p.city ?? '').toLowerCase().includes(filters.city.toLowerCase()));
    }

    // Specialty filter
    if (filters.specialty) {
      filtered = filtered.filter(p => p.specialty_areas.includes(filters.specialty));
    }

    // Rating filter
    if (filters.minRating > 0) {
      filtered = filtered.filter(p => p.rating && p.rating >= filters.minRating);
    }

    // Telehealth filter
    if (filters.telehealthOnly) {
      filtered = filtered.filter(p => p.telehealth_available);
    }

    setFilteredPractitioners(filtered);
  }

  function clearFilters() {
    setFilters({
      searchQuery: '',
      state: '',
      city: '',
      specialty: '',
      minRating: 0,
      telehealthOnly: false
    });
  }

  const activeFilterCount = [
    filters.state,
    filters.city,
    filters.specialty,
    filters.minRating > 0,
    filters.telehealthOnly
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Find Your Practitioner
          </h1>
          <p className="text-xl text-slate-600">
            Discover certified alternative medicine professionals near you
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, specialty, or location..."
                value={filters.searchQuery}
                onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl transition-all font-medium"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State
                  </label>
                  <select
                    value={filters.state}
                    onChange={(e) => setFilters({ ...filters, state: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All States</option>
                    {availableStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city..."
                    value={filters.city}
                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Specialty
                  </label>
                  <select
                    value={filters.specialty}
                    onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Specialties</option>
                    {availableSpecialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Minimum Rating
                  </label>
                  <select
                    value={filters.minRating}
                    onChange={(e) => setFilters({ ...filters, minRating: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="0">Any Rating</option>
                    <option value="3.0">3.0+ Stars</option>
                    <option value="4.0">4.0+ Stars</option>
                    <option value="4.5">4.5+ Stars</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.telehealthOnly}
                    onChange={(e) => setFilters({ ...filters, telehealthOnly: e.target.checked })}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-700">Telehealth Available Only</span>
                </label>

                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear Filters</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredPractitioners.length}</span> of{' '}
            <span className="font-semibold text-slate-900">{practitioners.length}</span> practitioners
          </p>
        </div>

        {/* Practitioners Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 animate-pulse">
                <div className="h-48 bg-slate-200 rounded-xl mb-4" />
                <div className="h-6 bg-slate-200 rounded mb-2" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredPractitioners.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPractitioners.map((practitioner) => (
              <PractitionerCard key={practitioner.id} practitioner={practitioner} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <MapPin className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No practitioners found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
