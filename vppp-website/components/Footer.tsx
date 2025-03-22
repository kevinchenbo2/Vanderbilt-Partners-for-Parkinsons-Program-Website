import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">
              <a href="mailto:lucas.m.chang@vanderbilt.edu" className="hover:text-blue-400">
                lucas.m.chang@vanderbilt.edu
              </a>
            </p>
            <p>2301 Vanderbilt Place<br />Nashville, TN 37203</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-blue-400">
                  Past Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          {/* Commented out as requested
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          */}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vanderbilt for Partners for Parkinson's Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 