import { getAllAnnouncements } from '../../lib/mdx'
import SectionCard from '../../components/SectionCard'
import PostCard from '../../components/PostCard'

export default function Announcements({ announcements }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-white">Announcements</h1>
      
      <SectionCard>
        <div className="mb-6">
          <p>Stay informed about upcoming hackathons, events, and community announcements.</p>
        </div>

        {announcements.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400">No announcements yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {announcements.map((post) => (
              <PostCard key={post.slug} post={post} type="announcements" />
            ))}
          </div>
        )}
      </SectionCard>

      <SectionCard title="Interested in Participating?">
        <p className="mb-4">
          If you're interested in joining our next hackathon or event, please reach out to us directly. 
          We're always looking for talented builders to join our community.
        </p>
        <div className="flex justify-center">
          <a 
            href="mailto:hello@justbuild.ing?subject=Participating%20in%20justbuild.ing%20Events" 
            className="cta-button"
          >
            Get in Touch
          </a>
        </div>
      </SectionCard>
    </div>
  )
}

export async function getStaticProps() {
  const announcements = getAllAnnouncements()
  return {
    props: { announcements }
  }
}
