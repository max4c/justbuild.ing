import Link from 'next/link'
import SectionCard from '../components/SectionCard'
import FounderCard from '../components/FounderCard'

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-logo text-5xl mb-2 text-white">{'{ jb }'}</h1>
        <em className="text-gray-400 block mb-8">"talk is cheap, show me the code" - Linus Torvalds</em>
      </div>

      <SectionCard>
        <p className="text-lg mb-4">Top builders elevate each other.</p>
        <p className="mb-4">This community is dedicated to gathering the best builders to provide the sharpest edge of top programming talent.</p>
        <p>Based in Utah County, we aim to continue to sharpen this edge by building a network that helps start companies.</p>
      </SectionCard>
      
      <SectionCard title="Connect With Us">
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://www.linkedin.com/company/justbuild-ing/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-dark-lighter rounded-md hover:translate-y-[-2px] transition-transform"
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
            className="flex items-center gap-2 px-4 py-2 bg-dark-lighter rounded-md hover:translate-y-[-2px] transition-transform"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X (Twitter)
          </a>
        </div>
      </SectionCard>
      
      <SectionCard title="Founded By">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FounderCard 
            name="Max Forsey"
            position="Co-founder"
            description={[
              "AI Research Assistant at BYU's Perception Control and Cognition Lab",
              "Former CTO & Co-founder of Sameday(YC W23)"
            ]}
            link="https://www.linkedin.com/in/max-forsey/"
          />
          
          <FounderCard 
            name="Jacob Wright"
            position="Co-founder"
            description={[
              "Engineer at RunPod",
              "Founded Sister Glow Up (Scaled to $100k+ ARR & 25k+ users in 3 months)",
              "Former CTO & Cofounder at Proxy (HF0 S23)"
            ]}
            link="https://www.linkedin.com/in/jacob-c-wright/"
          />
        </div>
      </SectionCard>
      
      <SectionCard title="Next Hackathon">
        <p className="mb-4">Join our upcoming hackathon and build something amazing with fellow developers.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div>
            <h3 className="font-medium text-white mb-1">Interested?</h3>
            <p className="text-gray-300">Check our announcements for details</p>
          </div>
          <Link href="/announcements" legacyBehavior>
            <a className="cta-button">View Upcoming Events</a>
          </Link>
        </div>
      </SectionCard>
      
      <SectionCard title="Get in Touch">
        <p>
          Questions about joining? <a href="mailto:hello@justbuild.ing" className="text-primary hover:text-primary-warm">Reach out to us here ↗</a>
        </p>
      </SectionCard>
    </div>
  )
}
