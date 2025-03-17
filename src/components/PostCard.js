import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

export default function PostCard({ post, type = 'news' }) {
  return (
    <Link href={`/${type}/${post.slug}`} legacyBehavior>
      <a className="block">
        <div className="bg-dark-lighter p-5 rounded-lg shadow-md hover:translate-y-[-4px] transition-transform">
          {post.coverImage && (
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image 
                src={post.coverImage}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                // Remove fetchPriority attribute as it's causing warnings
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
          <div className="text-gray-400 text-sm mb-3">
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </div>
          <p className="text-gray-300">{post.excerpt}</p>
        </div>
      </a>
    </Link>
  )
}
