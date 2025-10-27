import { Link } from 'react-router-dom';
import { Activity, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Newsletter signup coming soon!');
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - About AtlaMed */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-900 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AtlaMed</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connecting patients with certified alternative medicine practitioners
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/directory" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Find Practitioners
                </Link>
              </li>
              <li>
                <Link to="/considerations" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Considerations (Blog)
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - For Practitioners */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Practitioners</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/add-listing" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Add Your Listing
                </Link>
              </li>
              <li>
                <Link to="/practitioner-login" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Practitioner Login
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                id="newsletter-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
              >
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 AtlaMed. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm italic">
              Empowering patients through alternative medicine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
