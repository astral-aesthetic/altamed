import { Sparkles, Shield, Database, Brain, Lock, ExternalLink } from 'lucide-react';

export default function GeneProofSponsored() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-purple-200/50 shadow-2xl">
          {/* Sponsored Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
              Featured Partner
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 p-8 lg:p-12">
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
                  className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Learn More About GeneProof
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="bg-gradient-to-br from-white/90 to-white/70 rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500">AI Analysis</div>
                          <div className="text-lg font-bold text-slate-900">Real-time Insights</div>
                        </div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse" />
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        {['Health Score', 'Risk Analysis', 'Recommendations'].map((label, idx) => (
                          <div key={idx} className="bg-purple-50 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-purple-600">{85 + idx * 5}</div>
                            <div className="text-xs text-slate-600">{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
