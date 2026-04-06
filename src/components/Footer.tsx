import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-3">BridgeKo</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Connecting exceptional Korean bilingual talent with leading companies.
              Your bridge between cultures, languages, and opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>info@bridgeko.com</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} BridgeKo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
