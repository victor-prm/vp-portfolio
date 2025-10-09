import { useState } from 'react';
import usePortfolioItems from '../hooks/usePortfolioItems';
import usePageTitle from '../hooks/usePageTitle';
import useTags from '../hooks/useTags';
import MasonryGrid from '../components/MasonryGrid';
import PortfolioItem from "../components/PortfolioItem";
import ErrorBoundary from '../errors/ErrorBoundary';
import TwoColumnLayout from '../components/TwoColumnLayout';
import TagGroup from '../components/TagGroup';

export default function Projects() {
    const { posts, loading, error } = usePortfolioItems();
    const { tags: technologies, loading: techLoading } = useTags('technologies');
    const { tags: roles, loading: roleLoading } = useTags('roles');
    const { tags: workTypes, loading: workLoading } = useTags('workTypes');
    const { page } = usePageTitle();

    // Sort order state: 'ASC' or 'DESC'
    const [sortOrder, setSortOrder] = useState('DESC');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Toggle handler
    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === 'ASC' ? 'DESC' : 'ASC'));
    };

    // Client-side sorting
    const sortedPosts = [...posts].sort((a, b) => {
        const yearA = a.customPortfolioFields.year || 0;
        const yearB = b.customPortfolioFields.year || 0;
        return sortOrder === 'ASC' ? yearA - yearB : yearB - yearA;
    });

    return (
        <TwoColumnLayout
            left={
                <>
                    <h1 className="text-2xl font-semibold capitalize">{page}</h1>
                    <button
                        onClick={toggleSortOrder}
                        className="p-2 border rounded flex items-center gap-2 w-fit"
                    >
                        {sortOrder === 'ASC' ? 'Year ↑' : 'Year ↓'}
                    </button>

                    {technologies && (
                        <TagGroup
                            title={"Technologies"}
                            tagArray={technologies}
                        />
                    )}
                    {roles && (
                        <TagGroup
                            title={"Roles"}
                            tagArray={roles}
                        />
                    )}
                    {workTypes && (
                        <TagGroup
                            title={"Type"}
                            tagArray={workTypes}
                        />
                    )}
                </>

            }
            right={
                <MasonryGrid>
                    {sortedPosts.map((post) => (
                        <ErrorBoundary key={post.slug}>
                            <PortfolioItem
                                featuredImage={post.featuredImage}
                                title={post.title}
                                year={post.customPortfolioFields.year}
                                slug={post.slug}
                                technologies={post.technologies.nodes}
                                roles={post.roles.nodes}
                                workTypes={post.workTypes.nodes}
                            />
                        </ErrorBoundary>
                    ))}
                </MasonryGrid>
            }
        />
    );
}