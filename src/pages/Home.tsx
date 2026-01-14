import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const HomePage = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Banner Background Image */}
        <div class="absolute inset-0">
          <img 
            src="https://www.genspark.ai/api/files/s/z8568U7X" 
            alt="AI-Powered Automation" 
            class="w-full h-full object-cover opacity-90"
            style="object-position: center"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div class="max-w-5xl mx-auto text-center fade-in">
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-none">
              Empower Your<br />Small Business with<br /><span class="text-gradient bg-gradient-to-r from-tech-cyan via-glow-cyan to-tech-purple bg-clip-text text-transparent">AI Agents</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Learn, adopt, and scale productivity through intelligent automation — built for Malaysia's entrepreneurs.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#lead-form" class="btn-primary text-lg px-10 py-5">
                Get Started – Free AI Consultation
              </a>
              <a href="#why-ai" class="btn-secondary text-lg px-10 py-5">
                Learn More
              </a>
            </div>
            
            {/* Stats */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              <div class="stat-card">
                <div class="text-5xl font-black bg-gradient-to-r from-tech-cyan to-glow-cyan bg-clip-text text-transparent mb-2">50+</div>
                <div class="text-gray-300 text-lg">Malaysian SMEs Served</div>
              </div>
              <div class="stat-card">
                <div class="text-5xl font-black bg-gradient-to-r from-tech-cyan to-glow-cyan bg-clip-text text-transparent mb-2">30+</div>
                <div class="text-gray-300 text-lg">Hours Saved Weekly</div>
              </div>
              <div class="stat-card">
                <div class="text-5xl font-black bg-gradient-to-r from-tech-cyan to-glow-cyan bg-clip-text text-transparent mb-2">95%</div>
                <div class="text-gray-300 text-lg">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-tech-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Why AI Agents Now */}
      <section id="why-ai" class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="text-center mb-20 scroll-reveal">
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Why AI Agents Now?
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Small businesses face unprecedented challenges. AI agents deliver competitive advantages previously available only to enterprises.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="feature-card scroll-reveal">
              <div class="w-16 h-16 bg-gradient-to-br from-tech-cyan/20 to-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-tech-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Automate Repetition</h3>
              <p class="text-gray-400 leading-relaxed">
                Eliminate hours of manual data entry, customer follow-ups, and administrative tasks. Focus on growth.
              </p>
            </div>

            <div class="feature-card scroll-reveal" style="animation-delay: 0.1s">
              <div class="w-16 h-16 bg-gradient-to-br from-tech-cyan/20 to-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-tech-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Scale Intelligently</h3>
              <p class="text-gray-400 leading-relaxed">
                Handle 10x customer volume without 10x headcount. AI agents work 24/7 with consistent quality.
              </p>
            </div>

            <div class="feature-card scroll-reveal" style="animation-delay: 0.2s">
              <div class="w-16 h-16 bg-gradient-to-br from-tech-cyan/20 to-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-tech-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Reduce Costs</h3>
              <p class="text-gray-400 leading-relaxed">
                Average ROI of 300% in first year. Lower operational overhead while improving service quality.
              </p>
            </div>

            <div class="feature-card scroll-reveal" style="animation-delay: 0.3s">
              <div class="w-16 h-16 bg-gradient-to-br from-tech-cyan/20 to-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-tech-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Gain Insights</h3>
              <p class="text-gray-400 leading-relaxed">
                Data-driven decisions from automated analytics. Understand customer behavior patterns instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section id="education" class="py-32 bg-primary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="text-center mb-20 scroll-reveal">
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Educational Resources
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Learn how anyone can adopt AI for productivity. Free tutorials and workshops to get started.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div class="video-card scroll-reveal">
              <div class="aspect-video bg-secondary-bg rounded-lg overflow-hidden mb-6 group relative">
                <div class="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div class="w-20 h-20 bg-tech-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23111111' width='800' height='450'/%3E%3C/svg%3E" alt="Video thumbnail" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">How to Build Your First AI Agent</h3>
              <p class="text-gray-400 leading-relaxed mb-4">
                Step-by-step guide to creating a customer service AI agent in under 30 minutes. No coding required.
              </p>
              <a href="#" class="text-tech-cyan font-semibold hover:text-glow-cyan hover:underline inline-flex items-center">
                Watch Tutorial
                <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Video 2 */}
            <div class="video-card scroll-reveal" style="animation-delay: 0.1s">
              <div class="aspect-video bg-secondary-bg rounded-lg overflow-hidden mb-6 group relative">
                <div class="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div class="w-20 h-20 bg-tech-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23111111' width='800' height='450'/%3E%3C/svg%3E" alt="Video thumbnail" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">Automate Repetitive Tasks</h3>
              <p class="text-gray-400 leading-relaxed mb-4">
                Discover how Malaysian businesses automated invoicing, scheduling, and email management.
              </p>
              <a href="#" class="text-tech-cyan font-semibold hover:text-glow-cyan hover:underline inline-flex items-center">
                Watch Tutorial
                <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Video 3 */}
            <div class="video-card scroll-reveal" style="animation-delay: 0.2s">
              <div class="aspect-video bg-secondary-bg rounded-lg overflow-hidden mb-6 group relative">
                <div class="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div class="w-20 h-20 bg-tech-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23111111' width='800' height='450'/%3E%3C/svg%3E" alt="Video thumbnail" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">AI for Small Business ROI</h3>
              <p class="text-gray-400 leading-relaxed mb-4">
                Real case studies showing cost savings, time reduction, and revenue growth from AI adoption.
              </p>
              <a href="#" class="text-tech-cyan font-semibold hover:text-glow-cyan hover:underline inline-flex items-center">
                Watch Tutorial
                <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="scroll-reveal">
              <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
                Our Approach:<br />Teach, Then<br /><span class="bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">Implement</span>
              </h2>
              <p class="text-xl text-gray-300 leading-relaxed mb-8">
                We don't just build solutions. We educate your team to understand, manage, and expand AI capabilities independently.
              </p>
              <ul class="space-y-6">
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-white mb-2">Assessment & Strategy</h4>
                    <p class="text-gray-400">Analyze your workflows to identify high-impact automation opportunities.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-white mb-2">Education & Training</h4>
                    <p class="text-gray-400">Hands-on workshops teaching AI fundamentals and practical implementation.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-white mb-2">Custom Development</h4>
                    <p class="text-gray-400">Build tailored AI agents solving your specific business challenges.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-white mb-2">Ongoing Support</h4>
                    <p class="text-gray-400">Continuous optimization and scaling as your business grows.</p>
                  </div>
                </li>
              </ul>
              <a href="/services" class="btn-primary inline-block mt-10">Explore Services</a>
            </div>

            <div class="scroll-reveal" style="animation-delay: 0.2s">
              <div class="aspect-square bg-gradient-to-br from-tech-blue/20 to-transparent rounded-lg p-12 relative overflow-hidden">
                <div class="absolute inset-0 tech-pattern opacity-20"></div>
                <div class="relative z-10">
                  <svg class="w-full h-full text-tech-cyan opacity-80" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="150" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" />
                    <circle cx="200" cy="200" r="100" stroke="currentColor" stroke-width="2" />
                    <circle cx="200" cy="200" r="50" fill="currentColor" opacity="0.3" />
                    <circle cx="200" cy="50" r="15" fill="currentColor" />
                    <circle cx="350" cy="200" r="15" fill="currentColor" />
                    <circle cx="200" cy="350" r="15" fill="currentColor" />
                    <circle cx="50" cy="200" r="15" fill="currentColor" />
                    <line x1="200" y1="200" x2="200" y2="50" stroke="currentColor" stroke-width="2" />
                    <line x1="200" y1="200" x2="350" y2="200" stroke="currentColor" stroke-width="2" />
                    <line x1="200" y1="200" x2="200" y2="350" stroke="currentColor" stroke-width="2" />
                    <line x1="200" y1="200" x2="50" y2="200" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" class="py-32 bg-primary-bg">
        <div class="max-w-4xl mx-auto px-6 lg:px-12">
          <div class="text-center mb-16 scroll-reveal">
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Ready to Transform<br />Your Business?
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation. We'll analyze your workflows and show you exactly where AI can deliver immediate impact.
            </p>
          </div>

          <div class="bg-secondary-bg border border-border-gray rounded-lg p-8 md:p-12 scroll-reveal" style="animation-delay: 0.2s">
            <form id="leadForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                  <input type="text" name="name" required class="form-input" placeholder="John Tan" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                  <input type="email" name="email" required class="form-input" placeholder="john@company.com" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" name="phone" class="form-input" placeholder="+60 12-345 6789" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">Business Type</label>
                  <select name="businessType" class="form-input">
                    <option value="">Select type</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="services">Professional Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="hospitality">Hospitality & F&B</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-300 mb-2">What challenge do you want to automate? *</label>
                <textarea name="message" required rows="4" class="form-input" placeholder="Describe your biggest productivity bottleneck..."></textarea>
              </div>

              <div class="flex items-start">
                <input type="checkbox" name="privacy" required class="mt-1 mr-3 w-4 h-4 text-tech-blue bg-card-bg border-border-gray rounded focus:ring-tech-blue" />
                <label class="text-sm text-gray-400">
                  I agree to the privacy policy and consent to being contacted about AI automation solutions.
                </label>
              </div>

              <button type="submit" class="btn-primary w-full text-lg py-4">
                Get Free Consultation
              </button>

              <p class="text-center text-sm text-gray-500 mt-4">
                We typically respond within 24 hours. Your information is secure and never shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 text-center scroll-reveal">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            Join 50+ Malaysian Businesses<br />Leading with <span class="bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">AI</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Every day without automation is lost productivity. Start your AI transformation today.
          </p>
          <a href="/products" class="btn-primary text-lg px-10 py-5 inline-block">
            View Our AI Solutions
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
