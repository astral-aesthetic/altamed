import { useState } from 'react';
import { Mail, Check, AlertCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface EmailSignupFormProps {
  source?: 'landing_page' | 'add_listing' | 'registration' | 'contact';
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export default function EmailSignupForm({
  source = 'landing_page',
  placeholder = 'Enter your email to join our community',
  buttonText = 'Join',
  className = ''
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }

    if (!validateEmail(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('email_signups')
        .insert({
          email: email.toLowerCase(),
          source,
          subscribed_to_newsletter: true
        });

      if (error) {
        // Handle unique constraint violation gracefully
        if (error.code === '23505') {
          setMessage({ type: 'success', text: 'Thank you! You\'re already on our list.' });
        } else {
          throw error;
        }
      } else {
        setMessage({ type: 'success', text: 'Thank you! Check your email for exclusive updates.' });
        setEmail('');
      }
    } catch (error: any) {
      console.error('Email signup error:', error);
      setMessage({ type: 'error', text: 'Failed to sign up. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={isLoading}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {email && !message && (
              <Mail className="absolute right-3 top-3.5 w-5 h-5 text-slate-400" />
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-slate-900 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                <span className="hidden sm:inline">Joining...</span>
              </>
            ) : (
              buttonText
            )}
          </button>
        </div>

        {message && (
          <div
            className={`flex items-center gap-2 text-sm py-2 px-3 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {message.type === 'success' ? (
              <Check className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
        )}
      </form>
    </div>
  );
}
