import usePortfolioItems from '../hooks/usePortfolioItems';
import MasonryGrid from '../components/MasonryGrid';
import MasonryImage from '../components/MasonryImage';
import usePageTitle from '../hooks/usePageTitle';


export default function App() {
    const { posts, loading, error } = usePortfolioItems();
    const { page } = usePageTitle();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='p-4'>
            <h1 className="text-2xl font-semibold mb-4 capitalize">{page}</h1>
            <MasonryGrid>
                {posts.map((post) => (
                    <article key={post.title} className=" rounded-lg shadow relative overflow-clip">
                        <div className='absolute bottom-4 left-4 px-4 py-3 rounded-4xl bg-vp-gray-950/50 backdrop-blur-sm grayscale-100'> 
                            <h2 className="text-xl font-bold">{post.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                        </div>
                        {post.featuredImage?.node?.sourceUrl && (
                            <MasonryImage image={post.featuredImage.node} />
                        )}
                    </article>
                ))}
            </MasonryGrid>
        </div>
    );
}