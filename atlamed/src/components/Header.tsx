import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, LogOut, Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import AuthModals from './AuthModals';

export default function Header() {
  const { user, userProfile, signOut } = useAuth();
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSpecialtiesDropdown, setShowSpecialtiesDropdown] = useState(false);
  const [availableSpecialties, setAvailableSpecialties] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadSpecialties();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSpecialtiesDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  async function loadSpecialties() {
    try {
      const { data, error } = await supabase
        .from('practitioners')
        .select('specialty_areas');

      if (error) throw error;

      if (data) {
        const specialties = [...new Set(data.flatMap(p => p.specialty_areas))].sort();
        setAvailableSpecialties(specialties);
      }
    } catch (error) {
      console.error('Error loading specialties:', error);
    }
  }

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleSpecialtyClick = (specialty: string) => {
    setShowSpecialtiesDropdown(false);
    setIsMobileMenuOpen(false);
    navigate(`/directory?specialty=${encodeURIComponent(specialty)}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-900 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
                AtlaMed
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/considerations" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Considerations
              </Link>
              
              {/* Specialties Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowSpecialtiesDropdown(!showSpecialtiesDropdown)}
                  className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <span>Specialties</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showSpecialtiesDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showSpecialtiesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-slate-200">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Browse by Specialty</p>
                    </div>
                    {availableSpecialties.map((specialty) => (
                      <button
                        key={specialty}
                        onClick={() => handleSpecialtyClick(specialty)}
                        className="w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {specialty}
                      </button>
                    ))}
                    <div className="border-t border-slate-200 mt-2 pt-2">
                      <Link
                        to="/directory"
                        onClick={() => setShowSpecialtiesDropdown(false)}
                        className="block px-4 py-2 text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                      >
                        View All Practitioners
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/our-story" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Our Story
              </Link>
              
              <Link to="/resources" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Resources
              </Link>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600">
                    Welcome, {userProfile?.full_name || 'User'}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsRegisterOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-blue-500/30 transition-all"
                  >
                    Get Started
                  </button>
                </>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/considerations" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Considerations
                </Link>
                
                {/* Mobile Specialties */}
                <div>
                  <button
                    onClick={() => setShowSpecialtiesDropdown(!showSpecialtiesDropdown)}
                    className="flex items-center justify-between w-full text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    <span>Specialties</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showSpecialtiesDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showSpecialtiesDropdown && (
                    <div className="mt-2 ml-4 space-y-2 max-h-64 overflow-y-auto">
                      {availableSpecialties.map((specialty) => (
                        <button
                          key={specialty}
                          onClick={() => handleSpecialtyClick(specialty)}
                          className="block w-full text-left text-sm text-slate-600 hover:text-blue-600 py-1"
                        >
                          {specialty}
                        </button>
                      ))}
                      <Link
                        to="/directory"
                        onClick={() => { setShowSpecialtiesDropdown(false); setIsMobileMenuOpen(false); }}
                        className="block text-sm text-blue-600 hover:text-blue-700 font-medium py-1"
                      >
                        View All Practitioners
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  to="/our-story" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Our Story
                </Link>
                
                <Link 
                  to="/resources" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Resources
                </Link>
                
                {user ? (
                  <>
                    <span className="text-sm text-slate-600">
                      Welcome, {userProfile?.full_name || 'User'}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsLoginOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setIsRegisterOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-medium"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModals
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        onCloseLogin={() => setIsLoginOpen(false)}
        onCloseRegister={() => setIsRegisterOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
}
