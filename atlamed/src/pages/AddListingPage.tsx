import { useState } from 'react';
import { 
  UserPlus, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  FileText, 
  Globe, 
  Award,
  Stethoscope,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';

const AddListingPage = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Professional Information
    credentials: '',
    specialty: '',
    yearsExperience: '',
    licenseNumber: '',
    
    // Practice Information
    practiceName: '',
    practiceAddress: '',
    city: '',
    state: '',
    zipCode: '',
    website: '',
    
    // Services & Availability
    servicesOffered: '',
    acceptsInsurance: 'no',
    telehealth: 'no',
    consultationFee: '',
    
    // Additional Information
    bio: '',
    specializations: '',
    
    // Terms
    agreeToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.credentials.trim()) newErrors.credentials = 'Credentials are required';
    if (!formData.specialty.trim()) newErrors.specialty = 'Specialty is required';
    if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
    if (!formData.practiceName.trim()) newErrors.practiceName = 'Practice name is required';
    if (!formData.practiceAddress.trim()) newErrors.practiceAddress = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          credentials: '',
          specialty: '',
          yearsExperience: '',
          licenseNumber: '',
          practiceName: '',
          practiceAddress: '',
          city: '',
          state: '',
          zipCode: '',
          website: '',
          servicesOffered: '',
          acceptsInsurance: 'no',
          telehealth: 'no',
          consultationFee: '',
          bio: '',
          specializations: '',
          agreeToTerms: false
        });
      }, 3000);
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.border-red-300');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Add Your Listing - AtlaMed"
        description="Join AtlaMed's network of certified alternative medicine practitioners. List your practice and connect with patients seeking holistic healthcare."
        keywords="add listing, practitioner registration, alternative medicine directory, holistic healthcare provider"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-white/5" />
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-6">
              <UserPlus className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Network
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Expand your practice and connect with patients seeking alternative medicine solutions. 
              List your practice on AtlaMed today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>Verified Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>Patient Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>Telehealth Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl">
          {submitted && (
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Application Submitted Successfully!</h3>
                  <p className="text-slate-600">
                    Thank you for your interest in joining AtlaMed. We'll review your application and contact you within 2-3 business days.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border ${errors.email ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border ${errors.phone ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Professional Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="credentials" className="block text-sm font-semibold text-slate-700 mb-2">
                    Credentials *
                  </label>
                  <input
                    type="text"
                    id="credentials"
                    name="credentials"
                    value={formData.credentials}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.credentials ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="ND, LAc, DC, etc."
                  />
                  {errors.credentials && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.credentials}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="specialty" className="block text-sm font-semibold text-slate-700 mb-2">
                    Primary Specialty *
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.specialty ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  >
                    <option value="">Select a specialty</option>
                    <option value="naturopathy">Naturopathic Medicine</option>
                    <option value="functional">Functional Medicine</option>
                    <option value="acupuncture">Acupuncture</option>
                    <option value="chiropractic">Chiropractic</option>
                    <option value="holistic">Holistic Medicine</option>
                    <option value="integrative">Integrative Medicine</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.specialty && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.specialty}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="yearsExperience" className="block text-sm font-semibold text-slate-700 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    id="yearsExperience"
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="10"
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-semibold text-slate-700 mb-2">
                    License Number *
                  </label>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.licenseNumber ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="License #"
                  />
                  {errors.licenseNumber && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.licenseNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Practice Information */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-slate-900 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Practice Information</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="practiceName" className="block text-sm font-semibold text-slate-700 mb-2">
                    Practice Name *
                  </label>
                  <input
                    type="text"
                    id="practiceName"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.practiceName ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="Holistic Health Center"
                  />
                  {errors.practiceName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.practiceName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="practiceAddress" className="block text-sm font-semibold text-slate-700 mb-2">
                    Street Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="practiceAddress"
                      name="practiceAddress"
                      value={formData.practiceAddress}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border ${errors.practiceAddress ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="123 Main Street"
                    />
                  </div>
                  {errors.practiceAddress && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.practiceAddress}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.city ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="San Francisco"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-slate-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.state ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="CA"
                      maxLength={2}
                    />
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-semibold text-slate-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.zipCode ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="94102"
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.zipCode}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">
                    Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Availability */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Services & Availability</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="servicesOffered" className="block text-sm font-semibold text-slate-700 mb-2">
                    Services Offered
                  </label>
                  <textarea
                    id="servicesOffered"
                    name="servicesOffered"
                    value={formData.servicesOffered}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="List the primary services you offer (e.g., Herbal Medicine, Nutritional Counseling, Acupuncture)"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="acceptsInsurance" className="block text-sm font-semibold text-slate-700 mb-2">
                      Accepts Insurance
                    </label>
                    <select
                      id="acceptsInsurance"
                      name="acceptsInsurance"
                      value={formData.acceptsInsurance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                      <option value="some">Some Plans</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="telehealth" className="block text-sm font-semibold text-slate-700 mb-2">
                      Offers Telehealth
                    </label>
                    <select
                      id="telehealth"
                      name="telehealth"
                      value={formData.telehealth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="consultationFee" className="block text-sm font-semibold text-slate-700 mb-2">
                    Initial Consultation Fee
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="consultationFee"
                      name="consultationFee"
                      value={formData.consultationFee}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="150"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Additional Information</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="bio" className="block text-sm font-semibold text-slate-700 mb-2">
                    Professional Bio *
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border ${errors.bio ? 'border-red-300' : 'border-slate-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                    placeholder="Tell us about your practice philosophy, approach to patient care, and what makes your practice unique..."
                  />
                  {errors.bio && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.bio}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="specializations" className="block text-sm font-semibold text-slate-700 mb-2">
                    Areas of Specialization
                  </label>
                  <textarea
                    id="specializations"
                    name="specializations"
                    value={formData.specializations}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Women's Health, Digestive Disorders, Chronic Pain Management, etc."
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-slate-700">
                    I agree to the{' '}
                    <a href="/terms-of-service" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Privacy Policy
                    </a>
                    . I certify that all information provided is accurate and that I hold valid licenses to practice.
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.agreeToTerms}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-slate-900 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  Submit Application
                </button>

                <p className="text-sm text-slate-600 text-center">
                  Questions? Contact us at{' '}
                  <a href="mailto:practitioners@atlamed.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                    practitioners@atlamed.com
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Why List Your Practice on AtlaMed?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 p-8 text-center shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Reach More Patients</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect with patients actively seeking alternative medicine practitioners in your area.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 p-8 text-center shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Build Your Reputation</h3>
              <p className="text-slate-600 leading-relaxed">
                Showcase your credentials, specializations, and collect verified patient reviews.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 p-8 text-center shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Easy Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Update your profile, manage appointments, and respond to inquiries all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddListingPage;
