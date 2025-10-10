import { useState } from 'react';
import { useSearchParams } from 'react-router';
import usePortfolioItems from '../hooks/usePortfolioItems';
import usePageTitle from '../hooks/usePageTitle';
import useTags from '../hooks/useTags';
import MasonryGrid from '../components/MasonryGrid';
import PortfolioItem from "../components/PortfolioItem";
import ErrorBoundary from '../errors/ErrorBoundary';
import TwoColumnLayout from '../components/TwoColumnLayout';
import TagGroup from '../components/TagGroup';

export default function Projects() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Get active filters from URL
    const activeTech = searchParams.get('technology');
    const activeRole = searchParams.get('role');
    const activeWorkType = searchParams.get('workType');

    const { posts, loading, error } = usePortfolioItems();
    const { tags: technologies } = useTags('technologies');
    const { tags: roles } = useTags('roles');
    const { tags: workTypes } = useTags('workTypes');
    const { page } = usePageTitle();

    const [sortOrder, setSortOrder] = useState('DESC');

    const toggleSortOrder = () => {
        setSortOrder(prev => (prev === 'ASC' ? 'DESC' : 'ASC'));
    };

    // Filter posts based on selected tags
    const filteredPosts = posts.filter(post => {
        const techMatch = activeTech
            ? post.technologies.nodes.some(t => t.slug === activeTech)
            : true;
        const roleMatch = activeRole
            ? post.roles.nodes.some(r => r.slug === activeRole)
            : true;
        const workMatch = activeWorkType
            ? post.workTypes.nodes.some(w => w.slug === activeWorkType)
            : true;
        return techMatch && roleMatch && workMatch;
    });

    // Sort after filtering
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        const yearA = a.customPortfolioFields.year || 0;
        const yearB = b.customPortfolioFields.year || 0;
        return sortOrder === 'ASC' ? yearA - yearB : yearB - yearA;
    });

    // Handle tag click: set or remove filters
    const handleTagClick = (category, tag) => {
        const params = new URLSearchParams(searchParams);
        const active = params.get(category);
        if (active === tag.slug) {
            params.delete(category); // remove filter
        } else {
            params.set(category, tag.slug); // apply new filter
        }
        setSearchParams(params);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <TwoColumnLayout
            left={
                <>
                    <h1 className="text-2xl font-semibold capitalize">{page}</h1>
                    <button
                        onClick={toggleSortOrder}
                        className="p-2 border rounded flex items-center gap-2 w-fit mb-4"
                    >
                        {sortOrder === 'ASC' ? 'Year ↑' : 'Year ↓'}
                    </button>

                    {technologies && (
                        <TagGroup
                            title="Technologies"
                            tagArray={technologies}
                            category="technology"
                            onClick={(tag) => handleTagClick('technology', tag)}
                        />
                    )}
                    {roles && (
                        <TagGroup
                            title="Roles"
                            tagArray={roles}
                            category="role"
                            onClick={(tag) => handleTagClick('role', tag)}
                        />
                    )}
                    {workTypes && (
                        <TagGroup
                            title="Work Types"
                            tagArray={workTypes}
                            category="workType"
                            onClick={(tag) => handleTagClick('workType', tag)}
                        />
                    )}
                </>
            }
            right={
                sortedPosts.length > 0 ? (
                    <MasonryGrid>
                        {sortedPosts.map(post => (
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
                ) : (
                    <p className="text-center py-10">No projects match your filters.</p>
                )
            }
        />
    );
}