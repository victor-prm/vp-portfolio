import usePortfolioItems from '../hooks/usePortfolioItems';
import MasonryGrid from '../components/MasonryGrid';
import MasonryImage from '../components/MasonryImage';
import usePageTitle from '../hooks/usePageTitle';
import PortfolioItem from "../components/PortfolioItem";



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
                    <PortfolioItem
                        key={post.title}
                        title={post.title}
                        content={post.content}
                        featuredImage={post.featuredImage}
                    />
                ))}
            </MasonryGrid>
        </div>
    );
}