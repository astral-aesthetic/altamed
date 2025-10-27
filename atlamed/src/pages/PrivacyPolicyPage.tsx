import { Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - AtlaMed"
        description="AtlaMed's privacy policy. Learn how we collect, use, and protect your personal information when you use our alternative medicine practitioner directory."
      />
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Legal Information</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Last Updated: October 27, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 mb-12 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Privacy Matters</h2>
                  <p className="text-slate-600 leading-relaxed">
                    AtlaMed ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our alternative medicine practitioner directory platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Information</h3>
                  <p className="text-slate-600 mb-3">When you create an account or use our services, we may collect:</p>
                  <ul className="text-slate-600 space-y-2">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Profile information and preferences</li>
                    <li>Communication history with practitioners</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Practitioner Information</h3>
                  <p className="text-slate-600 mb-3">For healthcare practitioners listing on our platform:</p>
                  <ul className="text-slate-600 space-y-2">
                    <li>Professional credentials and certifications</li>
                    <li>Practice information and location</li>
                    <li>Specialties and areas of expertise</li>
                    <li>Professional biography and experience</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Automatically Collected Information</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, search queries)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">How We Use Your Information</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To provide, maintain, and improve our directory services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To connect patients with appropriate healthcare practitioners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To process and manage user accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To send service-related communications and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To analyze and improve user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To prevent fraud and ensure platform security</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Data Security</h2>
              </div>
              
              <p className="text-slate-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-2">Encryption</div>
                  <p className="text-sm text-slate-600">Data transmitted over networks is encrypted using industry-standard protocols</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-2">Access Controls</div>
                  <p className="text-sm text-slate-600">Limited access to personal information on a need-to-know basis</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-2">Regular Audits</div>
                  <p className="text-sm text-slate-600">Periodic security assessments and vulnerability testing</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-2">Secure Storage</div>
                  <p className="text-sm text-slate-600">Data stored with reputable third-party service providers</p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <UserCheck className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Your Rights</h2>
              </div>
              
              <p className="text-slate-600 mb-4">You have the right to:</p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Access Your Data</div>
                    <p className="text-sm text-slate-600">Request a copy of the personal information we hold about you</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Correct Inaccuracies</div>
                    <p className="text-sm text-slate-600">Update or correct your personal information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Delete Your Data</div>
                    <p className="text-sm text-slate-600">Request deletion of your account and associated data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Opt-Out</div>
                    <p className="text-sm text-slate-600">Unsubscribe from marketing communications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-slate-900 rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <Mail className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Questions About Privacy?</h2>
                  <p className="text-blue-100 mb-4">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <a href="mailto:privacy@atlamed.com" className="text-white font-semibold underline hover:text-blue-200 transition-colors">
                    privacy@atlamed.com
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
