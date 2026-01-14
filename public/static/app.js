// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Scroll Reveal Animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach(el => observer.observe(el));

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      }
    });
  });

  // Nav Scroll Effect
  const nav = document.getElementById('mainNav');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', function() {
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    lastScrollY = window.scrollY;
  });

  // Form Submission Handler
  const forms = ['leadForm', 'contactForm'];
  
  forms.forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Add loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        form.classList.add('loading');
        
        try {
          // Send to API
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          
          const result = await response.json();
          
          // Remove any existing messages
          const existingMessages = form.querySelectorAll('.success-message, .error-message');
          existingMessages.forEach(msg => msg.remove());
          
          if (result.success) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = result.message || 'Thank you for your inquiry! We will contact you shortly.';
            form.appendChild(successMessage);
            
            // Reset form
            form.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
              successMessage.remove();
            }, 5000);
          } else {
            throw new Error(result.message || 'An error occurred');
          }
        } catch (error) {
          // Show error message
          const errorMessage = document.createElement('div');
          errorMessage.className = 'error-message';
          errorMessage.textContent = error.message || 'An error occurred. Please try again or contact us directly.';
          form.appendChild(errorMessage);
          
          // Remove error message after 5 seconds
          setTimeout(() => {
            errorMessage.remove();
          }, 5000);
        } finally {
          // Restore button state
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          form.classList.remove('loading');
        }
      });
    }
  });

  // Parallax Effect for Hero Sections
  const heroSections = document.querySelectorAll('section[class*="min-h"]');
  
  window.addEventListener('scroll', function() {
    heroSections.forEach(section => {
      const scrolled = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
        const techGrid = section.querySelector('.tech-grid');
        if (techGrid) {
          const offset = (scrolled - sectionTop) * 0.3;
          techGrid.style.transform = `translateY(${offset}px)`;
        }
      }
    });
  });

  // Video Play Button Handlers
  const videoCards = document.querySelectorAll('.video-card, .aspect-video');
  
  videoCards.forEach(card => {
    const playButton = card.querySelector('.bg-tech-blue');
    if (playButton) {
      playButton.addEventListener('click', function(e) {
        e.preventDefault();
        // In production, this would open a modal with the actual video
        alert('Video demo would open here. In production, integrate with YouTube/Vimeo API.');
      });
    }
  });

  // Hover Effects for Stats
  const statCards = document.querySelectorAll('.stat-card');
  
  statCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const number = this.querySelector('.text-5xl, .text-6xl');
      if (number) {
        number.style.transform = 'scale(1.1)';
        number.style.transition = 'transform 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const number = this.querySelector('.text-5xl, .text-6xl');
      if (number) {
        number.style.transform = 'scale(1)';
      }
    });
  });

  // FAQ Accordion Effect (Optional Enhancement)
  const faqCards = document.querySelectorAll('.faq-card');
  
  faqCards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });

  // Back to Top Button (Optional)
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  `;
  backToTopBtn.className = 'fixed bottom-8 right-8 w-14 h-14 bg-tech-blue hover:bg-tech-blue-dark text-white rounded-full shadow-lg transition-all duration-300 opacity-0 pointer-events-none z-50 flex items-center justify-center';
  backToTopBtn.id = 'backToTop';
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Typing Effect for Hero Headlines (Optional Enhancement)
  const heroHeadlines = document.querySelectorAll('h1 .text-tech-blue');
  
  heroHeadlines.forEach(headline => {
    const originalText = headline.textContent;
    headline.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < originalText.length) {
        headline.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    // Start typing effect when element is visible
    const typeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && headline.textContent === '') {
          typeWriter();
          typeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    typeObserver.observe(headline);
  });

  // Console Easter Egg
  console.log('%c🤖 Automateit Malaysia', 'font-size: 24px; font-weight: bold; color: #0055FF;');
  console.log('%cEmpowering Small Businesses with AI Agents & Automation', 'font-size: 14px; color: #666;');
  console.log('%cInterested in joining our team? Contact us at info@automateit.my', 'font-size: 12px; color: #999;');

  // Performance Monitoring (Optional)
  if ('performance' in window) {
    window.addEventListener('load', function() {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`Page load time: ${pageLoadTime}ms`);
    });
  }

  // Keyboard Navigation Enhancement
  document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });

  // Form Validation Enhancement
  const inputs = document.querySelectorAll('.form-input[required]');
  
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.style.borderColor = '#ff4444';
      } else {
        this.style.borderColor = '#333333';
      }
    });
    
    input.addEventListener('focus', function() {
      this.style.borderColor = '#0055FF';
    });
  });

  // Email Validation
  const emailInputs = document.querySelectorAll('input[type="email"]');
  
  emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = '#ff4444';
        
        // Show error message
        let errorMsg = this.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains('error-hint')) {
          errorMsg = document.createElement('div');
          errorMsg.className = 'error-hint text-red-500 text-sm mt-1';
          errorMsg.textContent = 'Please enter a valid email address';
          this.parentNode.insertBefore(errorMsg, this.nextSibling);
        }
      } else {
        this.style.borderColor = '#333333';
        const errorMsg = this.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-hint')) {
          errorMsg.remove();
        }
      }
    });
  });

  // Phone Number Formatting (Malaysia)
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  
  phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
      let value = this.value.replace(/\D/g, '');
      
      // Format Malaysian phone numbers
      if (value.startsWith('60')) {
        // International format
        if (value.length > 2) {
          value = '+60 ' + value.substring(2);
        }
      } else if (value.startsWith('0')) {
        // Local format
        if (value.length > 2) {
          value = value.substring(0, 3) + '-' + value.substring(3);
        }
      }
      
      this.value = value;
    });
  });

  console.log('Automateit Malaysia - Website Initialized ✅');
});
