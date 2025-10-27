import React from 'react';
import { FileText, Download, CheckCircle, Stethoscope, Baby, Heart, Activity, Brain, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

interface Guide {
  id: string;
  title: string;
  description: string;
  specialty: string;
  fileName: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

const guides: Guide[] = [
  {
    id: 'primary-care',
    title: 'Questions for Your Primary Care Doctor',
    description: 'Essential questions to maximize your annual physical and routine checkups. Covers preventive care, health screenings, and maintaining overall wellness.',
    specialty: 'Primary Care',
    fileName: 'primary-care-questions.md',
    icon: Stethoscope,
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    id: 'pediatrician',
    title: 'Questions for Your Pediatrician (Newborn Care)',
    description: 'Comprehensive guide for new parents navigating the first months. Includes feeding, sleep, development milestones, and when to call the doctor.',
    specialty: 'Pediatrics',
    fileName: 'pediatrician-newborn-questions.md',
    icon: Baby,
    gradient: 'from-blue-300 to-blue-500'
  },
  {
    id: 'cardiologist',
    title: 'Questions for Your Cardiologist',
    description: 'Important questions about heart health, cardiac conditions, treatment options, and lifestyle modifications to protect your cardiovascular system.',
    specialty: 'Cardiology',
    fileName: 'cardiologist-questions.md',
    icon: Heart,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'gastroenterologist',
    title: 'Questions for Your Gastroenterologist',
    description: 'Guide to discussing digestive health, GI symptoms, diagnostic procedures, and treatment plans for conditions affecting your digestive system.',
    specialty: 'Gastroenterology',
    fileName: 'gastroenterologist-questions.md',
    icon: Activity,
    gradient: 'from-blue-600 to-slate-800'
  },
  {
    id: 'neurologist',
    title: 'Questions for Your Neurologist',
    description: 'Essential questions about neurological conditions, brain and nervous system health, treatment options, and managing neurological symptoms.',
    specialty: 'Neurology',
    fileName: 'neurologist-questions.md',
    icon: Brain,
    gradient: 'from-blue-700 to-slate-900'
  }
];

const ResourcesPage: React.FC = () => {
  const handleDownload = async (guide: Guide) => {
    try {
      const response = await fetch(`/guides/${guide.fileName}`);
      const text = await response.text();
      
      // Create a blob and download
      const blob = new Blob([text], { type: 'text/markdown' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = guide.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading guide:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Patient Resources - Medical Guide Downloads | AtlaMed"
        description="Download free patient guides with essential questions to ask your doctors. Comprehensive resources for primary care, cardiology, neurology, pediatrics, and gastroenterology visits."
        keywords="patient resources, medical questions, doctor visit guide, healthcare questions, patient education, medical guides"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/20" />
        <div className="container mx-auto relative max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-slate-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Patient Education Resources</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Empower Your
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-slate-900 bg-clip-text text-transparent mt-2">
                Healthcare Journey
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Download our free comprehensive guides to help you have more productive conversations with your healthcare providers. Be prepared, ask the right questions, and take control of your health.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Evidence-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Instant Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Prepared Patients Get Better Care</h2>
            <p className="text-lg text-slate-600">
              Research shows that patients who come prepared with questions have more productive appointments, better understanding of their conditions, and improved health outcomes. Our guides help you make the most of your valuable time with healthcare providers.
            </p>
          </div>

          {/* Guides Bento Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => {
              const IconComponent = guide.icon;
              return (
                <div
                  key={guide.id}
                  className="group bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-br ${guide.gradient} p-8 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                    <div className="relative">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30">
                        {guide.specialty}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                    <p className="text-slate-600 mb-6 min-h-[80px] text-sm leading-relaxed">{guide.description}</p>
                    
                    <button
                      onClick={() => handleDownload(guide)}
                      className={`w-full bg-gradient-to-r ${guide.gradient} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg`}
                    >
                      <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                      Download Guide
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100" />
        <div className="container mx-auto max-w-7xl relative">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">How to Use These Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 p-8 text-center shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">1</div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Download & Review</h3>
              <p className="text-slate-600 leading-relaxed">Download the guide for your upcoming appointment and review the questions beforehand.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 p-8 text-center shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">2</div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Personalize</h3>
              <p className="text-slate-600 leading-relaxed">Highlight or select the questions most relevant to your specific situation and concerns.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-slate-200/50 p-8 text-center shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">3</div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Bring & Discuss</h3>
              <p className="text-slate-600 leading-relaxed">Bring the guide to your appointment and use it to guide your conversation with your provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-slate-800 to-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Looking for More Resources?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're constantly adding new guides and resources. Check back regularly or explore our directory of alternative medicine providers who can offer personalized guidance.
              </p>
              <a
                href="/directory"
                className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-4 px-10 rounded-2xl hover:bg-blue-50 transition-all duration-200 shadow-xl"
              >
                Explore Provider Directory
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
