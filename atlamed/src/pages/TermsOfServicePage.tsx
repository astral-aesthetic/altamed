import { FileText, Scale, AlertCircle, Shield, UserX, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service - AtlaMed"
        description="AtlaMed's terms of service. Review the terms and conditions for using our alternative medicine practitioner directory platform."
      />
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            Last Updated: October 27, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-12 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Agreement to Terms</h2>
                  <p className="text-slate-600 leading-relaxed">
                    By accessing or using AtlaMed's services, you agree to be bound by these Terms of Service. Please read them carefully before using our platform. If you do not agree to these terms, you may not use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Service Description</h2>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-4">
                <p className="text-slate-600 mb-4">
                  AtlaMed provides an online directory connecting patients with certified alternative medicine practitioners, including naturopathic doctors, functional medicine specialists, and holistic health professionals.
                </p>
                <p className="text-slate-600">
                  Our platform serves as a connection service only. We do not provide medical advice, diagnosis, or treatment. All medical decisions should be made in consultation with qualified healthcare professionals.
                </p>
              </div>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">2. User Accounts</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Account Creation</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• You must provide accurate and complete information</li>
                    <li>• You are responsible for maintaining account security</li>
                    <li>• You must be at least 18 years old to create an account</li>
                    <li>• One person or entity may not maintain multiple accounts</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Practitioner Accounts</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Must hold valid professional licenses and certifications</li>
                    <li>• Must provide accurate credentials and practice information</li>
                    <li>• Must comply with all applicable healthcare regulations</li>
                    <li>• Must maintain professional liability insurance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">3. Prohibited Uses</h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-slate-700 font-semibold mb-4">You may not use AtlaMed to:</p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Provide false or misleading information</li>
                  <li>• Impersonate any person or entity</li>
                  <li>• Violate any laws or regulations</li>
                  <li>• Infringe upon intellectual property rights</li>
                  <li>• Transmit malicious code or harmful content</li>
                  <li>• Harass, threaten, or abuse other users</li>
                  <li>• Scrape or harvest user data</li>
                  <li>• Interfere with platform functionality</li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">4. Medical Disclaimer</h2>
              </div>
              
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8">
                <p className="text-slate-700 font-semibold mb-4">IMPORTANT MEDICAL DISCLAIMER:</p>
                <div className="space-y-3 text-slate-600">
                  <p>
                    AtlaMed is NOT a healthcare provider and does NOT provide medical advice, diagnosis, or treatment. The information on our platform is for informational purposes only.
                  </p>
                  <p>
                    All practitioners listed on our directory are independent healthcare professionals. AtlaMed does not employ, recommend, or endorse any specific practitioner.
                  </p>
                  <p>
                    Always seek the advice of qualified healthcare professionals regarding any medical condition. Never disregard professional medical advice or delay seeking it because of information accessed through AtlaMed.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Limitation of Liability</h2>
              
              <div className="bg-slate-50 border border-slate-300 rounded-xl p-6">
                <p className="text-slate-600 mb-4">
                  To the maximum extent permitted by law, AtlaMed shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Use or inability to use our services</li>
                  <li>• Interactions with practitioners found through our directory</li>
                  <li>• Medical treatment or advice received from practitioners</li>
                  <li>• Errors or inaccuracies in content</li>
                  <li>• Unauthorized access to your account or data</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <UserX className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">6. Termination</h2>
              </div>
              
              <p className="text-slate-600 mb-4">
                We reserve the right to suspend or terminate your account at any time, with or without notice, for:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">Violation of Terms</div>
                  <p className="text-sm text-slate-600">Breach of these Terms of Service</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">Fraudulent Activity</div>
                  <p className="text-sm text-slate-600">Suspected fraud or misrepresentation</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">Legal Requirements</div>
                  <p className="text-sm text-slate-600">Court orders or legal obligations</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">User Request</div>
                  <p className="text-sm text-slate-600">Upon your request for account deletion</p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Changes to Terms</h2>
              
              <p className="text-slate-600 mb-4">
                We may modify these Terms of Service at any time. We will notify users of material changes via email or platform notification. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Questions About These Terms?</h2>
                  <p className="text-blue-200 mb-4">
                    If you have questions about these Terms of Service, please contact our legal team:
                  </p>
                  <a href="mailto:legal@atlamed.com" className="text-white font-semibold underline hover:text-blue-300 transition-colors">
                    legal@atlamed.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
