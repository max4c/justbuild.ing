import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'
import '../styles/globals.css'

// Custom components for MDX
const components = {
  h1: props => <h1 className="text-3xl font-bold mb-4 mt-8 text-white" {...props} />,
  h2: props => <h2 className="text-2xl font-bold mb-3 mt-6 text-white" {...props} />,
  h3: props => <h3 className="text-xl font-bold mb-2 mt-4 text-white" {...props} />,
  p: props => <p className="mb-4 text-gray-100" {...props} />,
  a: props => <a className="text-primary hover:text-primary-warm underline" {...props} />,
  ul: props => <ul className="list-disc pl-6 mb-4" {...props} />,
  li: props => <li className="mb-1 text-gray-200" {...props} />
}

function MyApp({ Component, pageProps }) {
  const getTitle = () => {
    // Extract page title from pageProps if available
    if (pageProps.post && pageProps.post.title) {
      return `${pageProps.post.title} | justbuild.ing`;
    }
    
    // Fall back to default title
    return undefined;
  }
  
  return (
    <MDXProvider components={components}>
      <Layout title={getTitle()}>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}

export default MyApp
