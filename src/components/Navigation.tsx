export const Navigation = () => {
  return (
    <nav id="mainNav" class="fixed top-0 left-0 right-0 z-50 bg-primary-bg/90 backdrop-blur-md border-b border-border-gray">
      <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div class="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 bg-tech-blue rounded-sm flex items-center justify-center group-hover:bg-tech-blue-dark transition-colors">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-xl font-bold tracking-tight">Automateit</span>
          </a>

          {/* Desktop Menu */}
          <div class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Home</a>
            <a href="/about" class="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">About</a>
            <a href="/services" class="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Services</a>
            <a href="/products" class="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Products</a>
            <a href="/contact" class="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Contact</a>
            <a href="/contact" class="btn-primary ml-4">Get Started</a>
          </div>

          {/* Mobile Menu Button */}
          <button id="mobileMenuBtn" class="md:hidden text-white p-2 hover:bg-secondary-bg rounded transition-colors">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" class="hidden md:hidden border-t border-border-gray bg-secondary-bg">
        <div class="px-6 py-6 space-y-4">
          <a href="/" class="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2">Home</a>
          <a href="/about" class="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2">About</a>
          <a href="/services" class="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2">Services</a>
          <a href="/products" class="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2">Products</a>
          <a href="/contact" class="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2">Contact</a>
          <a href="/contact" class="btn-primary block text-center mt-4">Get Started</a>
        </div>
      </div>
    </nav>
  )
}
