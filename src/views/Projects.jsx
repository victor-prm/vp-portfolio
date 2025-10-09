import usePortfolioItems from '../hooks/usePortfolioItems';
import MasonryGrid from '../components/MasonryGrid';
import usePageTitle from '../hooks/usePageTitle';
import PortfolioItem from "../components/PortfolioItem";
import ErrorBoundary from '../errors/ErrorBoundary';
import TestError from '../errors/TestError';



export default function Projects() {
    const { posts, loading, error } = usePortfolioItems();
    const { page } = usePageTitle();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='px-4 pb-8 flex flex-col sm:flex-row'>
            <div className='w-64 min-h-32 shrink-0'>
                <h1 className="text-2xl font-semibold mb-4 capitalize">{page}</h1>
            </div>
            <MasonryGrid>
                {posts.map((post) => {

                    /* console.log(post) */
                    return (
                        <ErrorBoundary>
                            < PortfolioItem
                                key={post.title}
                                featuredImage={post.featuredImage}
                                title={post.title}
                                year={post.customPortfolioFields.year}
                                slug={post.slug}
                                technologies={post.technologies.nodes}
                                roles={post.roles.nodes}
                                workTypes={post.workTypes.nodes}
                            />
                        </ErrorBoundary>
                    )
                }
                )}
            </MasonryGrid>
        </div>
    );
}