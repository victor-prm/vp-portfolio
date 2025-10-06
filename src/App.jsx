import { useState, useEffect } from 'react'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Replace with your WordPress REST API URL
    const apiUrl = 'http://localhost:8888/vp-portfolio-cms/wp-json/wp/v2/portfolio_items?_embed'

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Fetched posts:', data) // Log posts to console
        setPosts(data)
      })
      .catch((error) => {
        console.error('Fetching posts failed:', error)
      })
  }, [])

  return (
    <>
      <h1 className='text-2xl'>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </>
  )
}