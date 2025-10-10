import { useParams } from "react-router";
import usePortfolioItemSingle from "../hooks/usePortfolioItemSingle";
import MasonryGrid from "../components/MasonryGrid";
import MasonryImage from "../components/MasonryImage";
import TwoColumnLayout from "../components/TwoColumnLayout";
import TagGroup from "../components/TagGroup";

export default function Post() {
  const { slug } = useParams();
  const { item, loading, error } = usePortfolioItemSingle(slug);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!item) return <p>Not found</p>;

  console.log(item)
  let images = item.customPortfolioFields.portfolioItemGallery.nodes
  console.log(images)

  return (
    <TwoColumnLayout
      left={
        <>
          <h1 className="text-gray-200 text-xl">{item.title}</h1>
          {item.content && (
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          )}

          <TagGroup
            tagArray={item.technologies.nodes}
            title="Technologies"
            linkBase="/projects"
            category="technology"
          />

          <TagGroup
            tagArray={item.roles.nodes}
            title="Roles"
            linkBase="/projects"
            category="role"
          />

          <TagGroup
            tagArray={item.workTypes.nodes}
            title="Work Type"
            linkBase="/projects"
            category="workType"
          />
        </>
      }
      right={
        <MasonryGrid>
          {images.map(item => (
            <MasonryImage
              image={item}
              classModifier={`border-vp-gray-500/40 border-2 rounded-3xl shadow-vp-gray-800/20 shadow-xl
        relative overflow-clip grayscale-50 cursor-pointer
        hover:grayscale-0 transition-[filter] duration-500"`}
            />
          )

          )}
        </MasonryGrid>
      }
    />





  );
}