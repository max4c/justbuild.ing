import Link from 'next/link'
import SectionCard from '../components/SectionCard'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-6xl font-logo text-white mb-6">{'{ 404 }'}</h1>
      
      <SectionCard className="text-center max-w-lg">
        <h2 className="text-2xl font-medium text-white mb-4">Page Not Found</h2>
        <p className="mb-6">The page you're looking for doesn't seem to exist.</p>
        <p className="mb-8">Maybe you should build it? 😉</p>
        
        <div className="flex justify-center">
          <Link href="/" legacyBehavior>
            <a className="cta-button">Return Home</a>
          </Link>
        </div>
      </SectionCard>
    </div>
  )
}
