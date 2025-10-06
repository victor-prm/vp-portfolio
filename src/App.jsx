import { useEffect, useState } from 'react'
import { GET_PORTFOLIO_ITEMS } from './graphql/queries'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const graphqlEndpoint = 'http://localhost:8888/vp-portfolio-cms/graphql'

    fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({query: GET_PORTFOLIO_ITEMS }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('GraphQL result:', result)
        setPosts(result.data.portfolioItems.nodes)
      })
      .catch((err) => console.error('GraphQL fetch error:', err))
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>Portfolio Items</h1>
      <ul className='space-y-4'>
        {posts.map((post) => (
          <li key={post.title} className='border rounded-lg p-4 shadow'>
            <h2 className='text-xl font-bold'>{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
            {post.featuredImage?.node?.sourceUrl && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText}
                className='rounded-lg mt-2'
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}