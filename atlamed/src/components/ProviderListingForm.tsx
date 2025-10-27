import { useState } from 'react';
import { X, Upload, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { ProviderSubmission } from '../types';

interface ProviderListingFormProps {
  onClose: () => void;
}

export default function ProviderListingForm({ onClose }: ProviderListingFormProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<ProviderSubmission>({
    full_name: '',
    credentials: '',
    specialty_areas: [],
    practice_name: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    phone: '',
    email: '',
    website: '',
    insurance_accepted: '',
    languages: ['English'],
    years_of_experience: 0,
    bio: '',
    photo_url: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error: submitError } = await supabase
        .from('provider_submissions')
        .insert({
          ...formData,
          user_id: user?.id,
        });

      if (submitError) throw submitError;

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit listing');
    } finally {
      setLoading(false);
    }
  };

  const handleSpecialtyChange = (specialty: string) => {
    const current = formData.specialty_areas;
    if (current.includes(specialty)) {
      setFormData({ ...formData, specialty_areas: current.filter(s => s !== specialty) });
    } else {
      setFormData({ ...formData, specialty_areas: [...current, specialty] });
    }
  };

  const specialties = [
    'Naturopathic Medicine',
    'Functional Medicine',
    'Integrative Medicine',
    'Osteopathic Medicine',
    'Chiropractic Care',
    'Acupuncture',
    'Holistic Health',
    'Ayurveda',
    'Traditional Chinese Medicine',
    'Homeopathy',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-8 my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-slate-900 mb-2">Add Your Provider Listing</h2>
        <p className="text-slate-600 mb-6">Submit your information for review</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-4">
            <span className="text-sm">Listing submitted successfully! We'll review it shortly.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Credentials *</label>
              <input
                type="text"
                id="credentials"
                name="credentials"
                required
                placeholder="e.g., ND, MD, DO"
                value={formData.credentials}
                onChange={(e) => setFormData({ ...formData, credentials: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Specialty Areas * (Select all that apply)</label>
            <div className="grid grid-cols-2 gap-2">
              {specialties.map((specialty) => (
                <label key={specialty} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id={`specialty-${specialty.toLowerCase().replace(/\s+/g, '-')}`}
                    name="specialty_areas"
                    checked={formData.specialty_areas.includes(specialty)}
                    onChange={() => handleSpecialtyChange(specialty)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-slate-700">{specialty}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Practice Name</label>
            <input
              type="text"
              id="practice_name"
              name="practice_name"
              value={formData.practice_name}
              onChange={(e) => setFormData({ ...formData, practice_name: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">State *</label>
              <input
                type="text"
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Zip Code *</label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                required
                value={formData.zip_code}
                onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Website</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience *</label>
              <input
                type="number"
                id="years_of_experience"
                name="years_of_experience"
                required
                min="0"
                value={formData.years_of_experience}
                onChange={(e) => setFormData({ ...formData, years_of_experience: parseInt(e.target.value) })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Accepted</label>
              <input
                type="text"
                id="insurance_accepted"
                name="insurance_accepted"
                placeholder="e.g., Most major insurances"
                value={formData.insurance_accepted}
                onChange={(e) => setFormData({ ...formData, insurance_accepted: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Bio / Description *</label>
            <textarea
              id="bio"
              name="bio"
              required
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Tell patients about your practice philosophy and approach to care..."
            />
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : success ? 'Submitted!' : 'Submit Listing for Review'}
          </button>
        </form>
      </div>
    </div>
  );
}
