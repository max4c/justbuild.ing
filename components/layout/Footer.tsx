import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-32 py-8">
          <div className="text-center mb-8">
            <a 
              href="https://tinyurl.com/jb-slackinvite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-bridge-500 text-white font-semibold rounded-lg hover:bg-bridge-600 transition-all duration-300"
            >
              Ready to build? Join Slack
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image 
                  src="/assets/wordmark.png" 
                  alt="JustBuild wordmark" 
                  width={140} 
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-600">Connecting Silicon Valley to Silicon Slopes</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-bridge-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-600 hover:text-bridge-500 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-bridge-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://tinyurl.com/jb-slackinvite" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-bridge-500 transition-colors"
                  >
                    Join Slack
                  </a>
                </li>
                <li>
                  <a 
                    href="https://lu.ma/justbuild" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-bridge-500 transition-colors"
                  >
                    Events Calendar
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://x.com/justbuildHQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-bridge-500 transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/justbuild" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-bridge-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}