export default function Footer() {
    return (
    <footer className="relative bg-[#1A2238] text-gray-200 w-full rounded-t-3xl overflow-hidden">
      {/* Smudge Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="smudge1" cx="20%" cy="10%" r="60%" fx="20%" fy="10%" gradientTransform="rotate(10)">
              <stop offset="0%" stopColor="#2B7FFF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1A2238" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="smudge2" cx="80%" cy="90%" r="60%" fx="80%" fy="90%" gradientTransform="rotate(-10)">
              <stop offset="0%" stopColor="#2B7FFF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1A2238" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#smudge1)" />
          <rect width="1440" height="320" fill="url(#smudge2)" />
        </svg>
      </div>
      {/* Subscribe Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 max-w-xl">
              <h3 className="text-lg font-semibold mb-2 text-white">Subscribe</h3>
              <p className="text-sm text-gray-400">
                Stay updated with the latest NGO opportunities and development sector news
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Write Email"
                  className="px-4 py-2 rounded bg-[#232733] border border-blue-900 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 min-w-[200px] sm:min-w-[300px]"
                />
                <button className="bg-[#2B7FFF] text-white px-4 py-2 rounded hover:bg-[#1A5FCC] transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-3 text-white">NGO Hiring</h2>
            <p className="text-sm text-gray-400 mb-6">
              NGO Hiring.org – India's Top Platform for Jobs, Internships, Scholarships, Fellowships, Events, and Grants/Funding
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://whatsapp.com/channel/0029VaCxEqA0G0XoVCQyUx38"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/ngo-hiring-org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:mail@ngohiring.org"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
      
          {/* Quick Linkss */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
      
          {/* For Organizations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">For Organizations</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/employer/register" className="hover:text-white transition-colors">Create Employer Account</a></li>
              <li><a href="/post-job" className="hover:text-white transition-colors">Post a Job</a></li>
            </ul>
          </div>
      
          {/* For Jobseekers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">For Jobseekers</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/jobs" className="hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="/alerts" className="hover:text-white transition-colors">Subscribe for Alerts</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          </div>
        </div>
      
      {/* Bottom Strip */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-sm text-gray-400 text-center">
            © 2025 NGO Hiring. Powered by <a href="https://developmentwala.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Development Wala</a>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    );
  }