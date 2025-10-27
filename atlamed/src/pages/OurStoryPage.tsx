import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, Sparkles, Target, TrendingUp, CheckCircle, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { usePractitionerStats, formatPractitionerCount } from '../hooks/usePractitionerStats';

export default function OurStoryPage() {
  const stats = usePractitionerStats();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Story - Empowering Patients and Supporting Doctors"
        description="AtlaMed connects patients with personalized alternative medicine care while providing doctors with tools to focus on what matters most - treating patients. Discover our mission to revolutionize holistic healthcare."
        keywords="personalized healthcare, patient empowerment, doctor efficiency, alternative medicine, holistic healthcare, naturopathic medicine, patient-centered care, healthcare innovation"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Mission & Vision</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Story
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Transforming healthcare by empowering patients and supporting practitioners in delivering personalized, holistic care.
          </p>
        </div>
      </section>

      {/* Mission Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* For Patients Mission */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Heart className="w-4 h-4" />
                  <span>For Patients</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Empowering Your Health Journey
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  We believe every patient deserves healthcare that aligns with their individual needs, values, and wellness goals. AtlaMed was founded on the principle that personalized care isn't a luxury—it's a fundamental right.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Our platform connects you with certified alternative medicine practitioners who take the time to understand your unique health story, offering holistic solutions that treat you as a whole person, not just a set of symptoms.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Personalized Care Matching</h3>
                      <p className="text-slate-600">Find practitioners whose philosophies and specialties align with your health goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Transparent Information</h3>
                      <p className="text-slate-600">Access detailed practitioner profiles, credentials, and patient reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Informed Decision Making</h3>
                      <p className="text-slate-600">Educational resources to help you make confident healthcare choices</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400 rounded-full opacity-20 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-20 blur-3xl" />
                  <div className="relative">
                    <Heart className="w-16 h-16 text-blue-600 mb-6" />
                    <div className="space-y-6">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-slate-900 mb-1">
                          {stats.loading ? '...' : formatPractitionerCount(stats.total)}
                        </div>
                        <div className="text-slate-600">Certified Practitioners</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-slate-900 mb-1">1K+</div>
                        <div className="text-slate-600">Patients Connected</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-slate-900 mb-1">4.9/5</div>
                        <div className="text-slate-600">Average Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For Doctors Mission */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-400 rounded-full opacity-20 blur-3xl" />
                  <div className="relative">
                    <Shield className="w-16 h-16 text-blue-600 mb-6" />
                    <div className="space-y-6">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <Target className="w-8 h-8 text-blue-600" />
                          <div className="text-xl font-bold text-slate-900">Focus on Care</div>
                        </div>
                        <div className="text-slate-600">Less paperwork, more patient time</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <TrendingUp className="w-8 h-8 text-green-600" />
                          <div className="text-xl font-bold text-slate-900">Grow Practice</div>
                        </div>
                        <div className="text-slate-600">Reach ideal patients efficiently</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <Award className="w-8 h-8 text-purple-600" />
                          <div className="text-xl font-bold text-slate-900">Build Reputation</div>
                        </div>
                        <div className="text-slate-600">Showcase expertise and reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Shield className="w-4 h-4" />
                  <span>For Practitioners</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Freeing You to Do What You Do Best
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Practitioners didn't enter healthcare to spend their days buried in administrative tasks. We created AtlaMed to give you back what matters most: time with your patients.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Our platform streamlines patient discovery, profile management, and practice visibility, allowing you to focus your energy where it belongs—on delivering exceptional, personalized care.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Simplified Patient Acquisition</h3>
                      <p className="text-slate-600">Reach patients actively seeking your specific expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Streamlined Administrative Tools</h3>
                      <p className="text-slate-600">Manage your profile, credentials, and availability with ease</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Enhanced Professional Presence</h3>
                      <p className="text-slate-600">Showcase your credentials, specialties, and patient testimonials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            <span>Our Vision</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            A Healthcare System That Works for Everyone
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We envision a future where every patient has access to personalized, holistic healthcare that respects their individuality, and every practitioner has the tools and freedom to provide the exceptional care they trained for.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            AtlaMed is more than a directory—it's a movement toward patient-centered, practitioner-supported healthcare. Together, we're building a community that values wellness, authenticity, and the healing power of personalized medicine.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Patient-Centered</h3>
              <p className="text-slate-600 text-sm">Healthcare that honors your unique needs and values</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Practitioner-Supported</h3>
              <p className="text-slate-600 text-sm">Tools that free doctors to focus on healing</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Innovation-Driven</h3>
              <p className="text-slate-600 text-sm">Continuously improving the healthcare experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Whether you're seeking personalized care or looking to grow your practice, AtlaMed is here to support your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/directory"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              Find a Practitioner
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              List Your Practice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
