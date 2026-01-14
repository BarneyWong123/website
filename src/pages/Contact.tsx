import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ContactPage = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div class="absolute inset-0 opacity-20">
          <div class="tech-grid"></div>
        </div>
        
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div class="max-w-4xl mx-auto text-center fade-in">
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-none">
              Let's Discuss<br />Your <span class="text-tech-blue">AI Transformation</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Schedule a free consultation. We'll analyze your workflows and show you exactly where AI can deliver immediate impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div class="scroll-reveal">
              <h2 class="text-4xl md:text-5xl font-black text-white mb-8">
                Get Started Today
              </h2>
              <p class="text-lg text-gray-400 mb-12 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. All consultations are free and no-obligation.
              </p>

              <form id="contactForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                    <input type="text" name="name" required class="form-input" placeholder="John Tan" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-300 mb-2">Company Name</label>
                    <input type="text" name="company" class="form-input" placeholder="ABC Sdn Bhd" />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                    <input type="email" name="email" required class="form-input" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required class="form-input" placeholder="+60 12-345 6789" />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">Business Type</label>
                  <select name="businessType" class="form-input">
                    <option value="">Select your industry</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="services">Professional Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="hospitality">Hospitality & F&B</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance & Insurance</option>
                    <option value="logistics">Logistics & Transportation</option>
                    <option value="realestate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">Business Size</label>
                  <select name="businessSize" class="form-input">
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">What challenge do you want to automate? *</label>
                  <textarea name="message" required rows="6" class="form-input" placeholder="Describe your biggest productivity bottleneck or workflow challenge. The more specific, the better we can help..."></textarea>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">Preferred Solution (Optional)</label>
                  <select name="preferredSolution" class="form-input">
                    <option value="">I'm not sure yet</option>
                    <option value="education">AI Education & Training</option>
                    <option value="custom">Custom AI Agent Development</option>
                    <option value="automation">Automation Implementation</option>
                    <option value="audit">Productivity Audit & Consulting</option>
                    <option value="customer-service">Customer Service AI Agent</option>
                    <option value="sales">Sales Automation Suite</option>
                    <option value="content">Content & Social AI Tools</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">When would you like to start?</label>
                  <select name="timeline" class="form-input">
                    <option value="immediately">Immediately</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="planning">Just planning/researching</option>
                  </select>
                </div>

                <div class="flex items-start">
                  <input type="checkbox" name="privacy" required class="mt-1 mr-3 w-5 h-5 text-tech-blue bg-card-bg border-border-gray rounded focus:ring-tech-blue" />
                  <label class="text-sm text-gray-400 leading-relaxed">
                    I agree to the privacy policy and consent to being contacted about AI automation solutions. I understand my information is secure and never shared with third parties.
                  </label>
                </div>

                <button type="submit" class="btn-primary w-full text-lg py-5">
                  Submit Inquiry – Get Free Consultation
                </button>

                <p class="text-center text-sm text-gray-500 mt-4">
                  We typically respond within 24 hours during business days. Urgent inquiries? Call us directly.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div class="scroll-reveal" style="animation-delay: 0.2s">
              <div class="bg-card-bg border border-border-gray rounded-lg p-10 mb-8">
                <h3 class="text-3xl font-black text-white mb-8">Contact Information</h3>
                
                <div class="space-y-8">
                  <div class="flex items-start">
                    <div class="w-14 h-14 bg-tech-blue/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <svg class="w-7 h-7 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-gray-400 mb-2">Email</div>
                      <a href="mailto:info@automateit.my" class="text-xl text-white hover:text-tech-blue transition-colors">
                        info@automateit.my
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="w-14 h-14 bg-tech-blue/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <svg class="w-7 h-7 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-gray-400 mb-2">Phone</div>
                      <a href="tel:+60123456789" class="text-xl text-white hover:text-tech-blue transition-colors">
                        +60 12-345 6789
                      </a>
                      <p class="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM MYT</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="w-14 h-14 bg-tech-blue/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <svg class="w-7 h-7 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-gray-400 mb-2">Location</div>
                      <div class="text-xl text-white">Klang Valley, Selangor</div>
                      <p class="text-sm text-gray-500 mt-1">Serving all of Malaysia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-tech-blue/10 to-transparent border border-tech-blue/30 rounded-lg p-10">
                <h3 class="text-2xl font-black text-white mb-6">Business Hours</h3>
                <div class="space-y-4 text-gray-300">
                  <div class="flex justify-between">
                    <span class="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-semibold">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-semibold">Sunday</span>
                    <span class="text-gray-500">Closed</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-semibold">Public Holidays</span>
                    <span class="text-gray-500">Closed</span>
                  </div>
                </div>
                <p class="text-sm text-gray-400 mt-6 leading-relaxed">
                  <strong class="text-white">Urgent support?</strong> Existing clients have access to 24/7 emergency hotline.
                </p>
              </div>

              <div class="mt-8">
                <h3 class="text-2xl font-black text-white mb-6">Connect on Social</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-14 h-14 bg-secondary-bg hover:bg-tech-blue border border-border-gray hover:border-tech-blue rounded-lg flex items-center justify-center transition-all group">
                    <svg class="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-14 h-14 bg-secondary-bg hover:bg-tech-blue border border-border-gray hover:border-tech-blue rounded-lg flex items-center justify-center transition-all group">
                    <svg class="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-14 h-14 bg-secondary-bg hover:bg-tech-blue border border-border-gray hover:border-tech-blue rounded-lg flex items-center justify-center transition-all group">
                    <svg class="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-14 h-14 bg-secondary-bg hover:bg-tech-blue border border-border-gray hover:border-tech-blue rounded-lg flex items-center justify-center transition-all group">
                    <svg class="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section class="py-20 bg-primary-bg">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div class="scroll-reveal">
            <h2 class="text-4xl md:text-5xl font-black text-white mb-8 text-center">
              Serving All of Malaysia
            </h2>
            <p class="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              Based in Klang Valley, but working with businesses across Malaysia. Remote consultations available nationwide.
            </p>
            <div class="aspect-video bg-secondary-bg rounded-lg overflow-hidden border border-border-gray">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3253641649!2d101.46971815!3d3.1390197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-32 bg-secondary-bg">
        <div class="max-w-4xl mx-auto px-6 lg:px-12">
          <div class="text-center mb-20 scroll-reveal">
            <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-gray-400 leading-relaxed">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div class="space-y-6">
            <div class="faq-card scroll-reveal">
              <h3 class="text-2xl font-bold text-white mb-4">How quickly can we see results?</h3>
              <p class="text-gray-400 leading-relaxed">
                Most clients see measurable productivity gains within 30-60 days of implementation. Simple automations can deliver results in as little as 1 week.
              </p>
            </div>

            <div class="faq-card scroll-reveal" style="animation-delay: 0.1s">
              <h3 class="text-2xl font-bold text-white mb-4">Do we need technical staff to use AI agents?</h3>
              <p class="text-gray-400 leading-relaxed">
                No. Our solutions are designed for non-technical users. We provide comprehensive training and documentation. Most clients manage their AI agents with existing staff.
              </p>
            </div>

            <div class="faq-card scroll-reveal" style="animation-delay: 0.2s">
              <h3 class="text-2xl font-bold text-white mb-4">What's the typical ROI timeline?</h3>
              <p class="text-gray-400 leading-relaxed">
                Average ROI of 3-6 months through labor savings and efficiency gains. Productivity audits provide specific ROI projections for your business.
              </p>
            </div>

            <div class="faq-card scroll-reveal" style="animation-delay: 0.3s">
              <h3 class="text-2xl font-bold text-white mb-4">Can AI agents integrate with our existing software?</h3>
              <p class="text-gray-400 leading-relaxed">
                Yes. We integrate with most popular business software: CRMs, ERPs, accounting systems, e-commerce platforms, and communication tools.
              </p>
            </div>

            <div class="faq-card scroll-reveal" style="animation-delay: 0.4s">
              <h3 class="text-2xl font-bold text-white mb-4">What happens if we need changes after deployment?</h3>
              <p class="text-gray-400 leading-relaxed">
                All packages include ongoing support. We provide monthly optimization sessions and respond to change requests within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
