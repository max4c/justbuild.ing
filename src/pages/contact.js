import Link from 'next/link'
import SectionCard from '../components/SectionCard'

export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
      
      <SectionCard>
        <p className="text-lg mb-6">
          We're always looking to connect with builders, mentors, sponsors, and community members.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">General Inquiries</h3>
            <p className="mb-2">
              For questions about the community or upcoming events:
            </p>
            <a 
              href="mailto:hello@justbuild.ing" 
              className="text-primary hover:text-primary-warm flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@justbuild.ing
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Social Media</h3>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
              <a 
                href="https://www.linkedin.com/company/justbuild-ing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary-warm"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://x.com/justbuildHQ"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary-warm"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X (Twitter)
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Hackathon Information</h3>
            <p className="mb-2">
              For details about our next hackathon:
            </p>
            <Link href="/announcements" legacyBehavior>
              <a className="text-primary hover:text-primary-warm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                View Announcements
              </a>
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Location</h3>
            <p className="mb-1">justbuild.ing</p>
            <p>Utah County, UT</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Join Our Community">
        <p className="mb-5">
          Interested in joining our community of builders? Our events are designed to foster collaboration and innovation among Utah's top tech talent.
        </p>
        <div className="flex justify-center">
          <a 
            href="mailto:hello@justbuild.ing?subject=Joining%20justbuild.ing%20Community"
            className="cta-button"
          >
            Connect With Us
          </a>
        </div>
      </SectionCard>
    </div>
  )
}
