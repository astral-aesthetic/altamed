import { Shield, Award, Heart, TrendingUp } from 'lucide-react';
import { usePractitionerStats, formatPractitionerCount } from '../hooks/usePractitionerStats';

export default function ProfessionalProviderShowcase() {
  const stats = usePractitionerStats();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/provider-showcase.jpg`}
                alt="Professional Naturopathic Doctor Consulting with Patient"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {stats.loading ? '...' : formatPractitionerCount(stats.total)}
                      </div>
                      <div className="text-sm text-slate-600">Certified Practitioners</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">5+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">4.9</div>
                      <div className="text-sm text-slate-600">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-3xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                <span>Trusted Alternative Medicine Experts</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Meet Our Certified Practitioners
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Every practitioner in our network is board-certified and committed to providing evidence-based, patient-centered holistic care.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Fully Credentialed</h3>
                  <p className="text-slate-600">All practitioners hold valid licenses and board certifications in their specialties</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Patient-Centered Care</h3>
                  <p className="text-slate-600">Focused on treating the whole person, not just symptoms</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Proven Expertise</h3>
                  <p className="text-slate-600">Average of 5+ years of experience in alternative medicine</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Exceptional Results</h3>
                  <p className="text-slate-600">95% patient satisfaction rate across our network</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-slate-700 italic mb-2">
                "Finding a naturopathic doctor who truly understood my health goals changed my life. The AtlaMed directory made it easy to connect with the right practitioner for me."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Jennifer R.</div>
                  <div className="text-xs text-slate-600">Patient, California</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
