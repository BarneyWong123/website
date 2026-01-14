import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const AboutPage = () => {
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
              Democratizing<br /><span class="text-tech-blue">AI for Malaysia</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Our mission: Make AI agents and automation accessible, practical, and profitable for every small business in Malaysia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="max-w-5xl mx-auto scroll-reveal">
            <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-white mb-12">
              Our Mission
            </h2>
            <p class="text-2xl text-gray-300 leading-relaxed mb-8">
              <strong class="text-white">Automateit Malaysia exists to democratize AI agents and automation for small businesses in Malaysia through education and practical services.</strong>
            </p>
            <p class="text-xl text-gray-400 leading-relaxed mb-6">
              We believe that every Malaysian entrepreneur deserves enterprise-level AI capabilities. The technology exists. The barrier isn't cost anymore—it's knowledge and implementation.
            </p>
            <p class="text-xl text-gray-400 leading-relaxed">
              We bridge that gap through hands-on education, proven frameworks, and custom development that puts small businesses on equal footing with multinational competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section class="py-32 bg-primary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="scroll-reveal">
              <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
                Why We Started
              </h2>
              <div class="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  In 2023, we saw a critical gap: Malaysian SMEs were drowning in manual work while AI tools sat unused. Not because the tools didn't work, but because business owners didn't know where to start.
                </p>
                <p>
                  We launched Automateit with a radical premise: <strong class="text-white">teach first, then build.</strong> Instead of selling black-box solutions, we show clients exactly how AI works, where it fits, and how to manage it.
                </p>
                <p>
                  Today, we've helped over 50 Malaysian businesses reclaim thousands of hours through intelligent automation. Our clients don't just use AI—they understand it, control it, and expand it independently.
                </p>
                <p class="text-tech-blue font-semibold text-xl">
                  That's the difference between a vendor and a partner.
                </p>
              </div>
            </div>

            <div class="scroll-reveal" style="animation-delay: 0.2s">
              <div class="bg-gradient-to-br from-tech-blue/10 to-transparent border border-tech-blue/30 rounded-lg p-12 relative overflow-hidden">
                <div class="absolute inset-0 tech-pattern opacity-10"></div>
                <div class="relative z-10 space-y-8">
                  <div class="stat-highlight">
                    <div class="text-6xl font-black text-tech-blue mb-2">2023</div>
                    <div class="text-gray-400 text-lg">Founded in Malaysia</div>
                  </div>
                  <div class="stat-highlight">
                    <div class="text-6xl font-black text-tech-blue mb-2">50+</div>
                    <div class="text-gray-400 text-lg">Businesses Transformed</div>
                  </div>
                  <div class="stat-highlight">
                    <div class="text-6xl font-black text-tech-blue mb-2">1,500+</div>
                    <div class="text-gray-400 text-lg">Hours Saved Weekly</div>
                  </div>
                  <div class="stat-highlight">
                    <div class="text-6xl font-black text-tech-blue mb-2">15+</div>
                    <div class="text-gray-400 text-lg">Industries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="text-center mb-20 scroll-reveal">
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Our Values
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Principles that guide every client engagement, every workshop, every line of code.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="value-card scroll-reveal">
              <div class="w-20 h-20 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-8">
                <svg class="w-10 h-10 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-3xl font-black text-white mb-4">Education First</h3>
              <p class="text-gray-400 text-lg leading-relaxed">
                We teach clients to fish, not just give them fish. Knowledge transfer is mandatory in every engagement. You should understand your AI systems completely.
              </p>
            </div>

            <div class="value-card scroll-reveal" style="animation-delay: 0.1s">
              <div class="w-20 h-20 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-8">
                <svg class="w-10 h-10 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-3xl font-black text-white mb-4">Practical Results</h3>
              <p class="text-gray-400 text-lg leading-relaxed">
                No hype. No buzzwords. We measure success in hours saved, costs reduced, and revenue increased. If it doesn't deliver measurable ROI, we don't recommend it.
              </p>
            </div>

            <div class="value-card scroll-reveal" style="animation-delay: 0.2s">
              <div class="w-20 h-20 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-8">
                <svg class="w-10 h-10 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-3xl font-black text-white mb-4">Accessibility</h3>
              <p class="text-gray-400 text-lg leading-relaxed">
                AI shouldn't be reserved for tech giants. We design solutions that Malaysian small businesses can afford, implement, and maintain without huge teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section class="py-32 bg-primary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="text-center mb-20 scroll-reveal">
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Our Team
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              AI specialists, automation engineers, and business strategists united by one goal: democratizing intelligent technology.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div class="team-card scroll-reveal" style={`animation-delay: ${(member - 1) * 0.1}s`}>
                <div class="aspect-square bg-gradient-to-br from-tech-blue/20 to-transparent rounded-lg mb-6 flex items-center justify-center">
                  <svg class="w-24 h-24 text-tech-blue/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Team Member {member}</h3>
                <p class="text-tech-blue text-sm font-semibold mb-3">Role Title</p>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Expert in AI automation and business transformation with focus on Malaysian SME sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 text-center scroll-reveal">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            Ready to Work<br />with <span class="text-tech-blue">Real Partners?</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Let's discuss how AI automation can transform your business operations and bottom line.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" class="btn-primary text-lg px-10 py-5">
              Schedule Consultation
            </a>
            <a href="/services" class="btn-secondary text-lg px-10 py-5">
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
