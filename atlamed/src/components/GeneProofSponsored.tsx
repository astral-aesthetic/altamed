import { Sparkles, Shield, Database, Brain, Lock, ExternalLink } from 'lucide-react';

export default function GeneProofSponsored() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-purple-200/50 shadow-2xl">
          {/* Sponsored Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-slate-800 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
              Featured Partner
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-slate-800 to-slate-900 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">AI-Powered Healthcare</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Introducing GeneProof
                </h2>
                <p className="text-xl text-purple-100 mb-6">
                  Your Personalized Health Companion
                </p>
                <p className="text-purple-100 leading-relaxed mb-6">
                  GeneProof is an AI-incentivized healthcare recommendations app that seamlessly integrates with Epic EHR systems. Upload your healthcare assessments, medical history, and screenings directly to receive personalized, data-driven health insights.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Database, text: 'Epic EHR Integration' },
                    { icon: Brain, text: 'AI-Powered Recommendations' },
                    { icon: Shield, text: 'Secure Medical History Storage' },
                    { icon: Sparkles, text: 'Personalized Health Insights' },
                    { icon: Lock, text: 'HIPAA Compliant' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-purple-50 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://breamiller.github.io/geneproof/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-slate-800 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Learn More About GeneProof
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>

              <div className="relative scale-125 origin-center">
                {/* GeneProof app image - 25% larger display without background */}
                <img
                  src={`${import.meta.env.BASE_URL}images/geneproof 2.0 - heart health.png`}
                  alt="GeneProof 2.0 - Heart Health app screenshot"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
