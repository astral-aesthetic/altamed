import { Cookie, Settings, Eye, ToggleLeft, Info } from 'lucide-react';
import SEO from '../components/SEO';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Cookie Policy - AtlaMed"
        description="AtlaMed's cookie policy. Learn about how we use cookies and similar technologies on our alternative medicine practitioner directory."
      />
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Cookie className="w-4 h-4" />
            <span>Privacy & Tracking</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cookie Policy
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
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Are Cookies?</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-white border-2 border-blue-600 rounded-xl overflow-hidden">
                  <div className="bg-blue-600 text-white px-6 py-3">
                    <h3 className="text-xl font-bold m-0">Essential Cookies</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-3">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="font-semibold text-slate-900 mb-2">Examples:</div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Authentication and security</li>
                        <li>• Session management</li>
                        <li>• Load balancing</li>
                        <li>• Form submission</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-white border-2 border-slate-300 rounded-xl overflow-hidden">
                  <div className="bg-slate-700 text-white px-6 py-3">
                    <h3 className="text-xl font-bold m-0">Functional Cookies</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-3">
                      Remember your preferences and settings to enhance your experience.
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="font-semibold text-slate-900 mb-2">Examples:</div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Language preferences</li>
                        <li>• Location settings</li>
                        <li>• Previously viewed practitioners</li>
                        <li>• Search filters and preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-white border-2 border-slate-300 rounded-xl overflow-hidden">
                  <div className="bg-slate-600 text-white px-6 py-3">
                    <h3 className="text-xl font-bold m-0">Analytics Cookies</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-3">
                      Help us understand how visitors interact with our website.
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="font-semibold text-slate-900 mb-2">Examples:</div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Page views and navigation patterns</li>
                        <li>• Time spent on pages</li>
                        <li>• Click tracking</li>
                        <li>• Error messages encountered</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-white border-2 border-slate-300 rounded-xl overflow-hidden">
                  <div className="bg-slate-500 text-white px-6 py-3">
                    <h3 className="text-xl font-bold m-0">Marketing Cookies</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-3">
                      Track your browsing habits to deliver personalized advertising.
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="font-semibold text-slate-900 mb-2">Examples:</div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Retargeting advertisements</li>
                        <li>• Social media integration</li>
                        <li>• Third-party ad networks</li>
                        <li>• Conversion tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <ToggleLeft className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Managing Your Cookie Preferences</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 mb-6">
                <p className="text-slate-600 mb-4">
                  You have several options to manage cookies:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Browser Settings</div>
                      <p className="text-sm text-slate-600">Most browsers allow you to control cookies through their settings. You can block or delete cookies, but this may affect functionality.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Cookie Consent Tool</div>
                      <p className="text-sm text-slate-600">Use our cookie consent banner to customize your preferences for non-essential cookies when you first visit our site.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Opt-Out Links</div>
                      <p className="text-sm text-slate-600">Some third-party services provide opt-out mechanisms for their tracking technologies.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <Eye className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900 mb-2">Important Note:</div>
                    <p className="text-sm text-slate-600">
                      Blocking or deleting certain cookies may impact your ability to use some features of our platform. Essential cookies cannot be disabled as they are necessary for the website to function.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Instructions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Browser-Specific Instructions</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">Google Chrome</div>
                  <p className="text-sm text-slate-600">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">Mozilla Firefox</div>
                  <p className="text-sm text-slate-600">Settings → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">Safari</div>
                  <p className="text-sm text-slate-600">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="font-semibold text-slate-900 mb-2">Microsoft Edge</div>
                  <p className="text-sm text-slate-600">Settings → Cookies and site permissions → Manage cookies</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <Cookie className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Questions About Cookies?</h2>
                  <p className="text-blue-100 mb-4">
                    If you have questions about our use of cookies, please contact us:
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
