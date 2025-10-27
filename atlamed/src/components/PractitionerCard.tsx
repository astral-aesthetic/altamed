import { Link } from 'react-router-dom';
import { MapPin, Star, Phone, Video } from 'lucide-react';
import { Practitioner } from '../types';

interface Props {
  practitioner: Practitioner;
}

export default function PractitionerCard({ practitioner }: Props) {
  const displaySpecialties = practitioner.specialty_areas.slice(0, 3);
  const hasMoreSpecialties = practitioner.specialty_areas.length > 3;

  return (
    <Link
      to={`/practitioner/${practitioner.id}`}
      className="block bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all p-6 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
            {practitioner.full_name}
          </h3>
          <p className="text-sm text-slate-600 font-medium">
            {practitioner.credentials.join(', ')}
          </p>
        </div>
        {practitioner.rating && (
          <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-slate-900">{practitioner.rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start space-x-2">
          <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-slate-600">
            {practitioner.city}, {practitioner.state}
          </span>
        </div>

        {practitioner.phone && (
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="text-sm text-slate-600">{practitioner.phone}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {displaySpecialties.map((specialty, idx) => (
            <span
              key={idx}
              className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium"
            >
              {specialty}
            </span>
          ))}
          {hasMoreSpecialties && (
            <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-medium">
              +{practitioner.specialty_areas.length - 3} more
            </span>
          )}
        </div>
      </div>

      {practitioner.telehealth_available && (
        <div className="flex items-center space-x-2 text-sm text-slate-700 font-medium">
          <Video className="w-4 h-4" />
          <span>Telehealth Available</span>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-slate-100">
        <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
          View Profile →
        </span>
      </div>
    </Link>
  );
}
