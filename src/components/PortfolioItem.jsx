import MasonryImage from "./MasonryImage";
import TagGroup from "./TagGroup";

export default function PortfolioItem({ title, year, featuredImage, technologies, roles, workTypes }) {
    return (
        <article
            className="
        border-vp-gray-950/30 border-2 rounded-4xl shadow
        relative overflow-clip grayscale-50 cursor-pointer
        hover:grayscale-0 transition-[filter] duration-1000
      "
        >
            {featuredImage?.node?.sourceUrl && (
                <MasonryImage image={featuredImage.node} />
            )}

            <div className="px-3 pt-1 pb-4 bg-vp-gray-900/50 flex flex-col gap-1">
                <hgroup className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold text-vp-gray-100">{title}</h2>
                    <p>{year}</p>
                </hgroup>

                {technologies && (
                    <TagGroup
                        tagArray={roles.concat(workTypes)}
                    />
                )}
            </div>


        </article>
    );
}