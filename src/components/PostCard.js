import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { useState } from 'react'

export default function PostCard({ post, type = 'news' }) {
  const [imageError, setImageError] = useState(false)
  
  const fallbackImage = "https://images.unsplash.com/photo-1526378800651-c1a63a2d223d?q=80&w=1600&auto=format&fit=crop" // Generic tech image as fallback
  
  return (
    <Link href={`/${type}/${post.slug}`} legacyBehavior>
      <a className="block">
        <div className="bg-dark-lighter p-5 rounded-lg shadow-md hover:translate-y-[-4px] transition-transform">
          {post.coverImage && !imageError ? (
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image 
                src={post.coverImage}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="relative h-48 mb-4 rounded-md overflow-hidden bg-dark-light flex items-center justify-center">
              <span className="text-gray-500 text-sm">{post.title}</span>
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
