import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, MapPin, Star, TrendingUp, Shield, Heart, CheckCircle, Award, Activity, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Practitioner } from '../types';
import SEO from '../components/SEO';
import GeneProofSponsored from '../components/GeneProofSponsored';
import ProfessionalProviderShowcase from '../components/ProfessionalProviderShowcase';
import ProviderListingCTA from '../components/ProviderListingCTA';
import { usePractitionerStats, formatPractitionerCount } from '../hooks/usePractitionerStats';

export default function LandingPage() {
  const [featuredPractitioners, setFeaturedPractitioners] = useState<Practitioner[]>([]);
  const stats = usePractitionerStats();
  const [loading, setLoading] = useState(true);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    loadData();
    setupScrollAnimations();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  function setupScrollAnimations() {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id');
            if (elementId) {
              setAnimatedElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[data-animate-id]').forEach((el) => {
      observerRef.current?.observe(el);
    });
  }

  async function loadData() {
    try {
      if (!supabase) {
        console.warn('[LandingPage] Supabase not configured; skipping featured practitioners fetch');
        return;
      }
      const { data: practitioners } = await supabase
        .from('practitioners')
        .select('*')
        .eq('is_featured', true)
        .limit(6);

      if (practitioners) {
        setFeaturedPractitioners(practitioners);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
      setTimeout(setupScrollAnimations, 100);
    }
  }

  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section with Bento Grid */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100/20" />
        <div className="container mx-auto relative max-w-7xl">
          {/* Header Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
            <div 
              className="space-y-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
              data-animate-id="hero-text"
              style={{ 
                opacity: animatedElements.has('hero-text') ? 1 : 0,
                transform: animatedElements.has('hero-text') ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-slate-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Traditional & Integrative Healthcare Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                Discover Our
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-slate-900 bg-clip-text text-transparent mt-2">
                  Trusted Practitioners
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Connect with certified alternative medicine professionals including naturopathic doctors, functional medicine specialists, and holistic health experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/directory"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-blue-500/30 transition-all transform hover:scale-105"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Find a Practitioner
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/our-story"
                  className="inline-flex items-center justify-center bg-white text-slate-700 px-8 py-4 rounded-2xl font-semibold border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div 
              className="opacity-0 translate-x-8 transition-all duration-700 ease-out delay-200"
              data-animate-id="stats-card"
              style={{ 
                opacity: animatedElements.has('stats-card') ? 1 : 0,
                transform: animatedElements.has('stats-card') ? 'translateX(0)' : 'translateX(2rem)'
              }}
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/practitioners/ken_berry.jpg`} 
                        alt="Dr. Ken Berry"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <img 
                        src={`${import.meta.env.BASE_URL}images/practitioners/chris_palmer.jpg`} 
                        alt="Dr. Chris Palmer"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <img 
                        src={`${import.meta.env.BASE_URL}images/practitioners/philip_ovadia.jpg`} 
                        alt="Dr. Philip Ovadia"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <img 
                        src={`${import.meta.env.BASE_URL}images/practitioners/paul_saladino.jpg`} 
                        alt="Dr. Paul Saladino"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-600">+{stats.total} Practitioners</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-slate-900">4.9</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
                      {stats.total}+
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Verified Practitioners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
                      {stats.states}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">States</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
                      {stats.specialties}+
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Specialties</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Trusted by patients nationwide</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Large Feature Card - Main Hero */}
            <div 
              className="md:col-span-2 lg:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl opacity-0 scale-95 transition-all duration-700 ease-out delay-300"
              data-animate-id="bento-1"
              style={{ 
                opacity: animatedElements.has('bento-1') ? 1 : 0,
                transform: animatedElements.has('bento-1') ? 'scale(1)' : 'scale(0.95)'
              }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/clinic.jpg`} 
                alt="Holistic Clinic"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  <Shield className="w-4 h-4" />
                  <span>Board Certified Practitioners</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  Comprehensive Alternative Medicine Directory
                </h3>
                <p className="text-blue-100 mb-6 max-w-lg">
                  Access our network of verified naturopathic doctors, functional medicine experts, and holistic health specialists.
                </p>
                <div className="flex items-center gap-6 text-white">
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-blue-200">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.total}+</div>
                    <div className="text-xs text-blue-200">Practitioners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.specialties}+</div>
                    <div className="text-xs text-blue-200">Specialties</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties Card */}
            <div 
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 text-white opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400"
              data-animate-id="bento-2"
              style={{ 
                opacity: animatedElements.has('bento-2') ? 1 : 0,
                transform: animatedElements.has('bento-2') ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              <Activity className="w-8 h-8 mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-4">Specialties</h3>
              <div className="space-y-2 text-sm">
                {['Naturopathic Medicine', 'Functional Medicine', 'Integrative Medicine', 'Osteopathic Care', 'Holistic Health'].map((specialty, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-50">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Card */}
            <div 
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500"
              data-animate-id="bento-3"
              style={{ 
                opacity: animatedElements.has('bento-3') ? 1 : 0,
                transform: animatedElements.has('bento-3') ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              <div className="flex items-center space-x-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-700 text-sm mb-4 italic">
                "Found an amazing naturopathic doctor who truly understands holistic care. Life-changing experience!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Sarah M.</div>
                  <div className="text-xs text-slate-500">Patient Review</div>
                </div>
              </div>
            </div>

            {/* Directory Features */}
            <div 
              className="md:col-span-1 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 border border-purple-200/50 opacity-0 scale-95 transition-all duration-700 ease-out delay-600"
              data-animate-id="bento-4"
              style={{ 
                opacity: animatedElements.has('bento-4') ? 1 : 0,
                transform: animatedElements.has('bento-4') ? 'scale(1)' : 'scale(0.95)'
              }}
            >
              <MapPin className="w-8 h-8 text-slate-700 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Search</h3>
              <p className="text-slate-600 text-sm mb-3">Filter by location, specialty, telehealth, and more</p>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Verified Credentials</span>
                  <CheckCircle className="w-3 h-3 text-green-500" />
                </div>
              </div>
            </div>

            {/* Wellness Image Card */}
            <div 
              className="relative overflow-hidden rounded-3xl opacity-0 translate-x-8 transition-all duration-700 ease-out delay-700"
              data-animate-id="bento-5"
              style={{ 
                opacity: animatedElements.has('bento-5') ? 1 : 0,
                transform: animatedElements.has('bento-5') ? 'translateX(0)' : 'translateX(2rem)'
              }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/wellness2.jpg`} 
                alt="Wellness Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-semibold text-sm">Natural Healing Spaces</div>
              </div>
            </div>

            {/* Telehealth Card */}
            <div 
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg opacity-0 translate-y-8 transition-all duration-700 ease-out delay-800"
              data-animate-id="bento-6"
              style={{ 
                opacity: animatedElements.has('bento-6') ? 1 : 0,
                transform: animatedElements.has('bento-6') ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-900 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Access</h3>
              <p className="text-slate-600 text-sm">Telehealth options available for convenient consultations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Practitioners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div 
            className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
            data-animate-id="featured-header"
            style={{ 
              opacity: animatedElements.has('featured-header') ? 1 : 0,
              transform: animatedElements.has('featured-header') ? 'translateY(0)' : 'translateY(2rem)'
            }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              <span>Top-Rated Professionals</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Alternative Medicine Practitioners
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover highly-rated holistic health professionals committed to your wellness journey.
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-100 rounded-2xl h-64 animate-pulse" />
              ))}
            </div>
          ) : featuredPractitioners.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPractitioners.slice(0, 3).map((practitioner, idx) => (
                <Link
                  key={practitioner.id}
                  to={`/practitioner/${practitioner.id}`}
                  className="group bg-white rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all p-6 opacity-0 translate-y-8"
                  data-animate-id={`practitioner-${idx}`}
                  style={{ 
                    opacity: animatedElements.has(`practitioner-${idx}`) ? 1 : 0,
                    transform: animatedElements.has(`practitioner-${idx}`) ? 'translateY(0)' : 'translateY(2rem)',
                    transitionDelay: `${900 + idx * 100}ms`,
                    transitionDuration: '700ms'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {practitioner.full_name}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        {practitioner.credentials.join(', ')}
                      </p>
                    </div>
                    {practitioner.rating && (
                      <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-lg">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold">{practitioner.rating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-slate-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {practitioner.city}, {practitioner.state}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {practitioner.specialty_areas.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    View Profile <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Link
                to="/directory"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-slate-900 hover:from-blue-700 hover:to-slate-950 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Explore Our Directory
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* GeneProof Sponsored Section */}
      <GeneProofSponsored />

      {/* Professional Provider Showcase Section */}
      <ProfessionalProviderShowcase />

      {/* Provider Listing CTA Section */}
      <ProviderListingCTA />

      {/* Transitional Image Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/4559759/pexels-photo-4559759.jpeg"
              alt="Healthcare professional using mobile technology"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Healthcare at Your Fingertips
              </h3>
              <p className="text-lg text-blue-100">
                Connect with certified practitioners anytime, anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div 
            className="relative overflow-hidden bg-white rounded-3xl p-12 opacity-0 scale-95 transition-all duration-700 ease-out border-4 border-transparent"
            data-animate-id="cta"
            style={{ 
              opacity: animatedElements.has('cta') ? 1 : 0,
              transform: animatedElements.has('cta') ? 'scale(1)' : 'scale(0.95)',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #3b82f6, #0f172a, #3b82f6)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM2ODJmNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-100" />
            <div className="relative text-center">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-slate-900 to-blue-600 bg-clip-text text-transparent mb-4">
                Ready to Find Your Alternative Medicine Practitioner?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of patients discovering natural healing solutions through our comprehensive practitioner directory.
              </p>
              <Link
                to="/directory"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-slate-900 hover:from-blue-700 hover:to-slate-950 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all transform hover:scale-105"
              >
                <Search className="w-6 h-6 mr-3" />
                Search Practitioners Now
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
