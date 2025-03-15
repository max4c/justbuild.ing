import { getAllNews } from '../../lib/mdx'
import SectionCard from '../../components/SectionCard'
import PostCard from '../../components/PostCard'

export default function News({ news }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-white">News & Stories</h1>
      
      <SectionCard>
        <div className="mb-6">
          <p>Stay updated with the latest happenings in our community, including hackathon recaps, member spotlights, and more.</p>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400">No news articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((post) => (
              <PostCard key={post.slug} post={post} type="news" />
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  )
}

export async function getStaticProps() {
  const news = getAllNews()
  return {
    props: { news }
  }
}
