import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Image from 'next/image'
import { format } from 'date-fns'
import { getAllNews, getContentBySlug } from '../../lib/mdx'
import SectionCard from '../../components/SectionCard'

export default function NewsPost({ post }) {
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
          <p>Article not found</p>
        </div>
      </SectionCard>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | justbuild.ing</title>
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
            Back to News
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
                priority
              />
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">{post.title}</h1>
          
          <div className="flex items-center text-gray-400 mb-6">
            <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
            {post.author && (
              <>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          <div className="prose dark:prose-invert">
            <MDXRemote {...post.content} />
          </div>
        </SectionCard>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const news = getAllNews()
  return {
    paths: news.map(post => ({ params: { slug: post.slug } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const post = await getContentBySlug(params.slug, 'news')
  return {
    props: { post },
    // Revalidate every hour
    revalidate: 3600,
  }
}
