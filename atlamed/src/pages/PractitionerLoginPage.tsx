import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LogIn, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  UserCheck,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';

const PractitionerLoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (loginError) {
      setLoginError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    // Simulate API call
    setTimeout(() => {
      // For demo purposes - in production this would call your auth API
      if (formData.email && formData.password) {
        console.log('Login attempt:', { email: formData.email, rememberMe: formData.rememberMe });
        // Redirect to practitioner dashboard
        alert('Login functionality coming soon! This will redirect to your practitioner dashboard.');
      } else {
        setLoginError('Please enter both email and password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Practitioner Login - AtlaMed"
        description="Login to your AtlaMed practitioner account. Manage your profile, view patient inquiries, and update your practice information."
        keywords="practitioner login, provider portal, alternative medicine practitioner dashboard"
      />

      <div className="min-h-screen flex">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white">
          <div className="w-full max-w-md">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-900 rounded-2xl mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Practitioner Login
              </h1>
              <p className="text-slate-600">
                Access your AtlaMed practitioner dashboard
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {loginError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{loginError}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="practitioner@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-slate-700">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Logging in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Login to Dashboard
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-sm text-slate-500">New to AtlaMed?</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Sign Up Link */}
            <Link
              to="/add-listing"
              className="block w-full text-center bg-white text-slate-900 font-bold py-3 px-6 rounded-xl border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              Create Practitioner Account
            </Link>

            {/* Help Text */}
            <p className="mt-6 text-center text-sm text-slate-600">
              Need help? Contact us at{' '}
              <a href="mailto:practitioners@atlamed.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                practitioners@atlamed.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Info Panel */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative flex flex-col justify-center px-12 py-16 text-white">
            <div className="max-w-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
                <Shield className="w-10 h-10" />
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Manage Your Practice Dashboard
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed mb-12">
                Access your practitioner portal to manage your profile, respond to patient inquiries, 
                and grow your practice with AtlaMed.
              </p>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Update Your Profile</h3>
                    <p className="text-blue-100">
                      Keep your practice information, credentials, and availability up to date.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Patient Inquiries</h3>
                    <p className="text-blue-100">
                      Receive and respond to messages from potential patients seeking care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Manage Availability</h3>
                    <p className="text-blue-100">
                      Set your hours, appointment types, and telehealth options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 pt-12 border-t border-white/20">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-sm text-blue-200">Active Practitioners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">10K+</div>
                    <div className="text-sm text-blue-200">Patient Connections</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">4.8★</div>
                    <div className="text-sm text-blue-200">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <section className="bg-gradient-to-r from-blue-50 to-slate-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3 text-center">
            <Shield className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-slate-600">
              Your data is protected with industry-standard encryption and security measures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PractitionerLoginPage;
