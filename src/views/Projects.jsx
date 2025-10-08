import usePortfolioItems from '../hooks/usePortfolioItems';
import MasonryGrid from '../components/MasonryGrid';
import usePageTitle from '../hooks/usePageTitle';


export default function App() {
  const { posts, loading, error } = usePortfolioItems();
  const {page} = usePageTitle();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 capitalize">{page}</h1>
      <MasonryGrid>
        {posts.map((post) => (
          <div key={post.title} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
            {post.featuredImage?.node?.sourceUrl && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText}
                className="rounded-lg mt-2"
              />
            )}
          </div>
        ))}
      </MasonryGrid>
    </div>
  );
}