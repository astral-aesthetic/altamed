import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Star, Video, Languages, Award, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Practitioner } from '../types';

export default function PractitionerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [practitioner, setPractitioner] = useState<Practitioner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadPractitioner();
    }
  }, [id]);

  async function loadPractitioner() {
    try {
      if (!supabase) {
        console.warn('[PractitionerDetailPage] Supabase not configured; skipping practitioner fetch');
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from('practitioners')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      setPractitioner(data);
    } catch (error) {
      console.error('Error loading practitioner:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-4" />
            <div className="h-6 bg-slate-200 rounded w-1/2 mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!practitioner) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Practitioner not found</h2>
          <Link to="/directory" className="text-blue-600 hover:text-blue-700">
            Return to directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          to="/directory"
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Directory</span>
        </Link>

        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{practitioner.full_name}</h1>
                <p className="text-blue-100 text-lg font-medium">
                  {practitioner.credentials.join(', ')}
                </p>
              </div>
              {practitioner.rating && (
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  <span className="text-xl font-bold">{practitioner.rating.toFixed(1)}</span>
                  <span className="text-blue-100 text-sm">({practitioner.review_count} reviews)</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Quick Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">{practitioner.practice_name || 'Private Practice'}</div>
                    <div className="text-slate-600 text-sm">
                      {practitioner.address}<br />
                      {practitioner.city}, {practitioner.state} {practitioner.zip_code}
                    </div>
                  </div>
                </div>

                {practitioner.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href={`tel:${practitioner.phone}`} className="text-slate-900 hover:text-blue-600 transition-colors">
                      {practitioner.phone}
                    </a>
                  </div>
                )}

                {practitioner.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href={`mailto:${practitioner.email}`} className="text-slate-900 hover:text-blue-600 transition-colors">
                      {practitioner.email}
                    </a>
                  </div>
                )}

                {practitioner.website && (
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a
                      href={practitioner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {practitioner.years_of_experience && (
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-900">{practitioner.years_of_experience} years of experience</span>
                  </div>
                )}

                <div className="flex items-start space-x-3">
                  <Languages className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-900">{practitioner.languages.join(', ')}</span>
                </div>

                {practitioner.telehealth_available && (
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-purple-600 font-medium">Telehealth Available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Specialties & Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {practitioner.specialty_areas.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium border border-blue-200"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            {practitioner.bio && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">About</h2>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{practitioner.bio}</p>
              </div>
            )}

            {/* Insurance */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Insurance</h2>
              <p className="text-slate-700">{practitioner.insurance_accepted}</p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-slate-200">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all transform hover:scale-[1.02]">
                Contact Practitioner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
