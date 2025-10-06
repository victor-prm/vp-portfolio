import usePortfolioItems from './hooks/usePortfolioItems';

export default function App() {
  const { posts, loading, error } = usePortfolioItems();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Portfolio Items</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.title} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
            {post.featuredImage?.node?.sourceUrl && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText}
                className="rounded-lg mt-2"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}