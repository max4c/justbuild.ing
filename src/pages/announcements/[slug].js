import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Image from 'next/image'
import { format } from 'date-fns'
import { getAllAnnouncements, getContentBySlug } from '../../lib/mdx'
import SectionCard from '../../components/SectionCard'

export default function AnnouncementPost({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <SectionCard>
        <div className="flex justify-center items-center h-40">
          <p>Loading...</p>
        </div>
      </SectionCard>
    )
  }

  if (!post) {
    return (
      <SectionCard>
        <div className="flex justify-center items-center h-40">
          <p>Announcement not found</p>
        </div>
      </SectionCard>
    )
  }

  return (
    <>
      <Head>
        <title key="title">{`${post.title} | justbuild.ing`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      
      <article className="mb-10">
        {/* Back button */}
        <div className="mb-6">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Announcements
          </button>
        </div>
        
        <SectionCard>
          {post.coverImage && (
            <div className="relative h-64 md:h-80 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 rounded-t-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">{post.title}</h1>
          
          <div className="flex items-center text-gray-400 mb-6">
            <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          </div>

          {post.eventDate && (
            <div className="bg-dark-lighter p-4 rounded-lg mb-6">
              <h2 className="text-xl font-medium text-white mb-2">Event Details</h2>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{format(new Date(post.eventDate), 'MMMM dd, yyyy')}</span>
              </div>
              {post.location && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{post.location}</span>
                </div>
              )}
            </div>
          )}

          <div className="prose dark:prose-invert">
            <MDXRemote {...post.content} />
          </div>

          {post.registrationUrl && (
            <div className="mt-8 flex justify-center">
              <a 
                href={post.registrationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                Register Now
              </a>
            </div>
          )}
        </SectionCard>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const announcements = getAllAnnouncements()
  return {
    paths: announcements.map(post => ({ params: { slug: post.slug } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const post = await getContentBySlug(params.slug, 'announcements')
  
  // Return not found if no post was found
  if (!post) {
    return {
      notFound: true
    }
  }
  
  // Validate image URL exists
  const imageExists = post.coverImage ? 
    await fetch(post.coverImage, { method: 'HEAD' })
      .then(res => res.ok)
      .catch(() => false) : 
    false;
  
  // If image doesn't exist, use a fallback or remove it
  if (post.coverImage && !imageExists) {
    post.coverImage = "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop"; // Fallback image
  }
  
  return {
    props: { post },
    // Revalidate every hour
    revalidate: 3600,
  }
}
