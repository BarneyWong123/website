import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ProductsPage = () => {
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
              <span class="text-tech-blue">Pre-Built</span><br />AI Solutions
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Deploy proven AI agents and automation templates. Tested with Malaysian SMEs, ready to implement in days.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          {/* Product 1: Customer Service AI Agent */}
          <div class="product-card scroll-reveal mb-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-block bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full text-sm font-bold mb-6">
                  MOST POPULAR
                </div>
                <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                  Customer Service AI Agent
                </h2>
                <p class="text-xl text-gray-300 leading-relaxed mb-8">
                  24/7 intelligent customer support handling FAQs, order tracking, appointment scheduling, and tier-1 inquiries. Escalates complex issues to humans seamlessly.
                </p>
                
                <h3 class="text-2xl font-bold text-white mb-4">Key Features:</h3>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Multi-channel: WhatsApp, Facebook, website chat, email</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Bilingual: English & Bahasa Malaysia native support</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">CRM integration (HubSpot, Salesforce, Zoho)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Smart escalation with context handoff</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Analytics dashboard with sentiment tracking</span>
                  </li>
                </ul>

                <div class="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-lg font-bold text-white">Typical Results:</h4>
                  </div>
                  <ul class="space-y-2 text-gray-400">
                    <li>• 70% reduction in tier-1 support tickets</li>
                    <li>• 2-hour to 2-minute average response time</li>
                    <li>• 40% cost savings vs. human-only support</li>
                  </ul>
                </div>

                <div class="flex items-center space-x-4 mb-8">
                  <div>
                    <div class="text-4xl font-black text-white">From RM 2,500<span class="text-2xl text-gray-500">/mo</span></div>
                    <div class="text-sm text-gray-400">Includes setup, training & support</div>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" class="btn-primary">Request Demo</a>
                  <button class="btn-secondary">Watch Video</button>
                </div>
              </div>

              <div class="aspect-video bg-primary-bg rounded-lg overflow-hidden group relative">
                <div class="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div class="w-20 h-20 bg-tech-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23111111' width='800' height='450'/%3E%3C/svg%3E" alt="Customer Service Demo" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Product 2: Sales Automation Suite */}
          <div class="product-card scroll-reveal mb-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="order-2 lg:order-1 aspect-video bg-primary-bg rounded-lg overflow-hidden group relative">
                <div class="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div class="w-20 h-20 bg-tech-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23111111' width='800' height='450'/%3E%3C/svg%3E" alt="Sales Automation Demo" class="w-full h-full object-cover" />
              </div>

              <div class="order-1 lg:order-2">
                <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                  Sales Automation Suite
                </h2>
                <p class="text-xl text-gray-300 leading-relaxed mb-8">
                  Complete lead generation, qualification, and nurturing pipeline. From first contact to closed deal, automated with human oversight.
                </p>
                
                <h3 class="text-2xl font-bold text-white mb-4">Key Features:</h3>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Lead capture from web, social, and events</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">AI-powered lead scoring and prioritization</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Automated follow-up sequences (email, SMS, calls)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Meeting scheduler with calendar sync</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Pipeline reporting and forecasting</span>
                  </li>
                </ul>

                <div class="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
                  <h4 class="text-lg font-bold text-white mb-4">Typical Results:</h4>
                  <ul class="space-y-2 text-gray-400">
                    <li>• 3x increase in qualified leads contacted</li>
                    <li>• 50% faster sales cycle</li>
                    <li>• 25% improvement in conversion rates</li>
                  </ul>
                </div>

                <div class="flex items-center space-x-4 mb-8">
                  <div>
                    <div class="text-4xl font-black text-white">From RM 3,500<span class="text-2xl text-gray-500">/mo</span></div>
                    <div class="text-sm text-gray-400">Includes CRM integration & training</div>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" class="btn-primary">Request Demo</a>
                  <button class="btn-secondary">Watch Video</button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3: Content & Social AI Tools */}
          <div class="product-card scroll-reveal">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                  Content & Social AI Tools
                </h2>
                <p class="text-xl text-gray-300 leading-relaxed mb-8">
                  Consistent, brand-aligned content creation and social media management. From blog posts to Instagram captions, automated with your voice.
                </p>
                
                <h3 class="text-2xl font-bold text-white mb-4">Key Features:</h3>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">AI content generator trained on your brand voice</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Multi-platform scheduling (IG, FB, LinkedIn, TikTok)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Image generation and video editing automation</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Engagement monitoring and auto-response</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">Performance analytics and optimization</span>
                  </li>
                </ul>

                <div class="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
                  <h4 class="text-lg font-bold text-white mb-4">Typical Results:</h4>
                  <ul class="space-y-2 text-gray-400">
                    <li>• 15 hours/week saved on content creation</li>
                    <li>• 4x increase in posting consistency</li>
                    <li>• 60% higher engagement rates</li>
                  </ul>
                </div>

                <div class="flex items-center space-x-4 mb-8">
                  <div>
                    <div class="text-4xl font-black text-white">From RM 1,800<span class="text-2xl text-gray-500">/mo</span></div>
                    <div class="text-sm text-gray-400">Content generation limits apply</div>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" class="btn-primary">Request Demo</a>
                  <button class="btn-secondary">Watch Video</button>
                </div>
              </div>

              <div class="aspect-video bg-primary-bg rounded-lg overflow-hidden group relative">
                <div class="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div class="w-20 h-20 bg-tech-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23111111' width='800' height='450'/%3E%3C/svg%3E" alt="Content Tools Demo" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section class="py-32 bg-primary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="text-center mb-20 scroll-reveal">
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Enterprise Pricing,<br />SME <span class="text-tech-blue">Affordability</span>
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. All packages include implementation, training, and ongoing support.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="pricing-card scroll-reveal">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-white mb-4">Starter</h3>
                <div class="text-5xl font-black text-white mb-2">RM 1,500<span class="text-2xl text-gray-500">/mo</span></div>
                <p class="text-gray-400">For single-process automation</p>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">1 AI agent or automation</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Setup & configuration</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">2 hours training</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Email support</span>
                </li>
              </ul>
              <a href="/contact" class="btn-secondary w-full text-center">Get Started</a>
            </div>

            <div class="pricing-card pricing-card-featured scroll-reveal" style="animation-delay: 0.1s">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-tech-blue text-white px-6 py-2 rounded-full text-sm font-bold">RECOMMENDED</span>
              </div>
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-white mb-4">Professional</h3>
                <div class="text-5xl font-black text-white mb-2">RM 3,500<span class="text-2xl text-gray-500">/mo</span></div>
                <p class="text-gray-400">For comprehensive automation</p>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">3 AI agents or automations</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Full setup & integration</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">8 hours training</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Priority support</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Monthly optimization</span>
                </li>
              </ul>
              <a href="/contact" class="btn-primary w-full text-center">Get Started</a>
            </div>

            <div class="pricing-card scroll-reveal" style="animation-delay: 0.2s">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div class="text-5xl font-black text-white mb-2">Custom</div>
                <p class="text-gray-400">For full-scale transformation</p>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Unlimited agents</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Custom development</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">Dedicated support team</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-tech-blue mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300">24/7 monitoring</span>
                </li>
              </ul>
              <a href="/contact" class="btn-secondary w-full text-center">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 text-center scroll-reveal">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            See These Tools<br />in <span class="text-tech-blue">Action</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Book a personalized demo. We'll show you exactly how these AI solutions work in businesses like yours.
          </p>
          <a href="/contact" class="btn-primary text-lg px-10 py-5">
            Schedule Demo
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
