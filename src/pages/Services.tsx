import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ServicesPage = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div class="absolute inset-0 opacity-20">
          <div class="tech-grid"></div>
        </div>
        
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div class="max-w-4xl mx-auto text-center fade-in">
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-none">
              <span class="text-tech-blue">AI Automation</span><br />Services
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive solutions from education to implementation. Every service designed to deliver measurable productivity gains.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="grid grid-cols-1 gap-16">
            
            {/* Service 1: Education & Training */}
            <div class="service-detail-card scroll-reveal">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div class="w-20 h-20 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-8">
                    <svg class="w-10 h-10 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                    AI Agent Education & Training
                  </h2>
                  <p class="text-xl text-gray-300 leading-relaxed mb-8">
                    Empower your team to understand, build, and manage AI agents independently. No technical background required.
                  </p>
                  
                  <h3 class="text-2xl font-bold text-white mb-4">What's Included:</h3>
                  <ul class="space-y-4 mb-8">
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Interactive workshops tailored to your industry</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Hands-on AI agent building exercises</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Video tutorials and documentation library</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">30-day implementation support post-training</span>
                    </li>
                  </ul>

                  <div class="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
                    <h4 class="text-lg font-bold text-white mb-3">Typical Outcomes:</h4>
                    <p class="text-gray-400 leading-relaxed">
                      Teams complete training able to identify automation opportunities, design basic AI workflows, and collaborate effectively with technical resources. 90% of participants deploy their first AI agent within 60 days.
                    </p>
                  </div>

                  <a href="/contact" class="btn-primary">Start Learning</a>
                </div>

                <div class="bg-gradient-to-br from-tech-blue/10 to-transparent border border-tech-blue/30 rounded-lg p-12 relative overflow-hidden h-full min-h-[500px] flex items-center justify-center">
                  <div class="absolute inset-0 tech-pattern opacity-10"></div>
                  <svg class="w-full h-full max-w-md text-tech-blue opacity-60" viewBox="0 0 400 400" fill="none">
                    <rect x="50" y="100" width="300" height="200" stroke="currentColor" stroke-width="3" rx="10" />
                    <circle cx="100" cy="150" r="15" fill="currentColor" />
                    <circle cx="200" cy="150" r="15" fill="currentColor" />
                    <circle cx="300" cy="150" r="15" fill="currentColor" />
                    <line x1="100" y1="165" x2="100" y2="250" stroke="currentColor" stroke-width="2" />
                    <line x1="200" y1="165" x2="200" y2="250" stroke="currentColor" stroke-width="2" />
                    <line x1="300" y1="165" x2="300" y2="250" stroke="currentColor" stroke-width="2" />
                    <circle cx="100" cy="250" r="20" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3" />
                    <circle cx="200" cy="250" r="20" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3" />
                    <circle cx="300" cy="250" r="20" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Service 2: Custom AI Agent Development */}
            <div class="service-detail-card scroll-reveal">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1 bg-gradient-to-br from-tech-blue/10 to-transparent border border-tech-blue/30 rounded-lg p-12 relative overflow-hidden h-full min-h-[500px] flex items-center justify-center">
                  <div class="absolute inset-0 tech-pattern opacity-10"></div>
                  <svg class="w-full h-full max-w-md text-tech-blue opacity-60" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="120" stroke="currentColor" stroke-width="3" />
                    <circle cx="200" cy="200" r="60" stroke="currentColor" stroke-width="3" />
                    <circle cx="200" cy="200" r="20" fill="currentColor" />
                    <circle cx="200" cy="80" r="25" stroke="currentColor" stroke-width="3" fill="currentColor" opacity="0.3" />
                    <circle cx="320" cy="200" r="25" stroke="currentColor" stroke-width="3" fill="currentColor" opacity="0.3" />
                    <circle cx="200" cy="320" r="25" stroke="currentColor" stroke-width="3" fill="currentColor" opacity="0.3" />
                    <circle cx="80" cy="200" r="25" stroke="currentColor" stroke-width="3" fill="currentColor" opacity="0.3" />
                    <line x1="200" y1="200" x2="200" y2="105" stroke="currentColor" stroke-width="2" />
                    <line x1="200" y1="200" x2="295" y2="200" stroke="currentColor" stroke-width="2" />
                    <line x1="200" y1="200" x2="200" y2="295" stroke="currentColor" stroke-width="2" />
                    <line x1="200" y1="200" x2="105" y2="200" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>

                <div class="order-1 lg:order-2">
                  <div class="w-20 h-20 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-8">
                    <svg class="w-10 h-10 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                    Custom AI Agent Development
                  </h2>
                  <p class="text-xl text-gray-300 leading-relaxed mb-8">
                    Bespoke AI agents engineered for your exact workflows. From customer service to data analysis, we build solutions that integrate seamlessly.
                  </p>
                  
                  <h3 class="text-2xl font-bold text-white mb-4">What's Included:</h3>
                  <ul class="space-y-4 mb-8">
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Deep workflow analysis and optimization planning</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Custom AI agent architecture and development</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Integration with existing software and databases</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Testing, deployment, and team training</span>
                    </li>
                  </ul>

                  <div class="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
                    <h4 class="text-lg font-bold text-white mb-3">Typical Outcomes:</h4>
                    <p class="text-gray-400 leading-relaxed">
                      Custom agents typically reduce task completion time by 60-80%. Average project delivers ROI within 4-6 months through labor savings and error reduction.
                    </p>
                  </div>

                  <a href="/contact" class="btn-primary">Request Proposal</a>
                </div>
              </div>
            </div>

            {/* Service 3: Automation Implementation */}
            <div class="service-detail-card scroll-reveal">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div class="w-20 h-20 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-8">
                    <svg class="w-10 h-10 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                    Automation Implementation
                  </h2>
                  <p class="text-xl text-gray-300 leading-relaxed mb-8">
                    End-to-end process automation across your business operations. We identify, design, and deploy automation that delivers immediate impact.
                  </p>
                  
                  <h3 class="text-2xl font-bold text-white mb-4">What's Included:</h3>
                  <ul class="space-y-4 mb-8">
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Comprehensive automation opportunity audit</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Workflow redesign for maximum automation potential</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Multi-system integration and data synchronization</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">90-day monitoring and optimization period</span>
                    </li>
                  </ul>

                  <div class="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
                    <h4 class="text-lg font-bold text-white mb-3">Typical Outcomes:</h4>
                    <p class="text-gray-400 leading-relaxed">
                      Clients eliminate 20-40 hours of manual work weekly. Most common automations: invoicing, inventory management, customer follow-ups, reporting, and data entry.
                    </p>
                  </div>

                  <a href="/contact" class="btn-primary">Get Audit</a>
                </div>

                <div class="bg-gradient-to-br from-tech-blue/10 to-transparent border border-tech-blue/30 rounded-lg p-12 relative overflow-hidden h-full min-h-[500px] flex items-center justify-center">
                  <div class="absolute inset-0 tech-pattern opacity-10"></div>
                  <svg class="w-full h-full max-w-md text-tech-blue opacity-60" viewBox="0 0 400 400" fill="none">
                    <rect x="50" y="50" width="100" height="100" stroke="currentColor" stroke-width="3" rx="10" fill="currentColor" opacity="0.2" />
                    <rect x="250" y="50" width="100" height="100" stroke="currentColor" stroke-width="3" rx="10" fill="currentColor" opacity="0.2" />
                    <rect x="50" y="250" width="100" height="100" stroke="currentColor" stroke-width="3" rx="10" fill="currentColor" opacity="0.2" />
                    <rect x="250" y="250" width="100" height="100" stroke="currentColor" stroke-width="3" rx="10" fill="currentColor" opacity="0.2" />
                    <circle cx="200" cy="200" r="40" fill="currentColor" />
                    <line x1="150" y1="100" x2="180" y2="180" stroke="currentColor" stroke-width="3" />
                    <line x1="250" y1="100" x2="220" y2="180" stroke="currentColor" stroke-width="3" />
                    <line x1="150" y1="300" x2="180" y2="220" stroke="currentColor" stroke-width="3" />
                    <line x1="250" y1="300" x2="220" y2="220" stroke="currentColor" stroke-width="3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Service 4: Productivity Audits & Consulting */}
            <div class="service-detail-card scroll-reveal">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1 bg-gradient-to-br from-tech-blue/10 to-transparent border border-tech-blue/30 rounded-lg p-12 relative overflow-hidden h-full min-h-[500px] flex items-center justify-center">
                  <div class="absolute inset-0 tech-pattern opacity-10"></div>
                  <svg class="w-full h-full max-w-md text-tech-blue opacity-60" viewBox="0 0 400 400" fill="none">
                    <rect x="100" y="50" width="200" height="30" stroke="currentColor" stroke-width="3" rx="5" fill="currentColor" opacity="0.3" />
                    <rect x="100" y="120" width="200" height="30" stroke="currentColor" stroke-width="3" rx="5" fill="currentColor" opacity="0.5" />
                    <rect x="100" y="190" width="200" height="30" stroke="currentColor" stroke-width="3" rx="5" fill="currentColor" opacity="0.7" />
                    <rect x="100" y="260" width="200" height="30" stroke="currentColor" stroke-width="3" rx="5" fill="currentColor" opacity="0.9" />
                    <circle cx="350" cy="65" r="10" fill="currentColor" />
                    <circle cx="350" cy="135" r="10" fill="currentColor" />
                    <circle cx="350" cy="205" r="10" fill="currentColor" />
                    <circle cx="350" cy="275" r="10" fill="currentColor" />
                  </svg>
                </div>

                <div class="order-1 lg:order-2">
                  <div class="w-20 h-20 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-8">
                    <svg class="w-10 h-10 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                    Productivity Audits & Consulting
                  </h2>
                  <p class="text-xl text-gray-300 leading-relaxed mb-8">
                    Strategic assessment of your operations to uncover hidden inefficiencies and quantify automation ROI before you invest.
                  </p>
                  
                  <h3 class="text-2xl font-bold text-white mb-4">What's Included:</h3>
                  <ul class="space-y-4 mb-8">
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">2-week operational analysis and time tracking</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Detailed automation opportunity report with ROI projections</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Prioritized implementation roadmap (quick wins to strategic)</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-300">Technology stack recommendations and vendor guidance</span>
                    </li>
                  </ul>

                  <div class="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
                    <h4 class="text-lg font-bold text-white mb-3">Typical Outcomes:</h4>
                    <p class="text-gray-400 leading-relaxed">
                      Audits reveal average automation potential of 25-35 hours per week. Reports provide clear cost-benefit analysis for C-suite decision making.
                    </p>
                  </div>

                  <a href="/contact" class="btn-primary">Book Audit</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-32 bg-primary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 text-center scroll-reveal">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            Not Sure Where<br />to <span class="text-tech-blue">Start?</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Schedule a free 30-minute consultation. We'll assess your needs and recommend the best path forward.
          </p>
          <a href="/contact" class="btn-primary text-lg px-10 py-5">
            Get Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
