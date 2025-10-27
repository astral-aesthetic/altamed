import { useState } from 'react';
import { Plus, Briefcase, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ProviderListingForm from './ProviderListingForm';

export default function ProviderListingCTA() {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleAddListing = () => {
    if (!user) {
      setShowLoginPrompt(true);
      setTimeout(() => setShowLoginPrompt(false), 3000);
      return;
    }
    setShowForm(true);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Briefcase className="w-4 h-4" />
                  <span>For Practitioners</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Grow Your Practice with AtlaMed
                </h2>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Join our network of trusted alternative medicine professionals. Reach patients actively seeking holistic and integrative care.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-10 text-left">
                  {[
                    'Verified practitioner profile',
                    'Increased patient visibility',
                    'Professional credibility badge',
                    'Direct patient connections',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-white">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Plus className="w-4 h-4 text-green-900" />
                      </div>
                      <span className="text-blue-50">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleAddListing}
                  className="group inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all transform hover:scale-105"
                >
                  Add Your Provider Listing
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {showLoginPrompt && (
                  <div className="mt-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-xl text-sm">
                    Please log in or create an account to add your listing.
                  </div>
                )}

                {/* Stats */}
                <div className="mt-12 pt-10 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">500+</div>
                      <div className="text-sm text-blue-200">Active Practitioners</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">50K+</div>
                      <div className="text-sm text-blue-200">Monthly Searches</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">95%</div>
                      <div className="text-sm text-blue-200">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <ProviderListingForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
}
