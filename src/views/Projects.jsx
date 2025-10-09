import usePortfolioItems from '../hooks/usePortfolioItems';
import MasonryGrid from '../components/MasonryGrid';
import usePageTitle from '../hooks/usePageTitle';
import PortfolioItem from "../components/PortfolioItem";
import ErrorBoundary from '../errors/ErrorBoundary';
import TestError from '../errors/TestError';



export default function App() {
    const { posts, loading, error } = usePortfolioItems();
    const { page } = usePageTitle();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='p-4'>
            <h1 className="text-2xl font-semibold mb-4 capitalize">{page}</h1>
            <MasonryGrid>
                {posts.map((post) => {

                    console.log(post)
                    return (
                        <ErrorBoundary>
                            < PortfolioItem
                                key={post.title}
                                title={post.title}
                                featuredImage={post.featuredImage}
                            />
                        </ErrorBoundary>
                    )
                }
                )}
            </MasonryGrid>
        </div>
    );
}