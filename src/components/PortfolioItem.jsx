import MasonryImage from "./MasonryImage";
import TagGroup from "./TagGroup";

export default function PortfolioItem({ title, year, featuredImage, technologies, roles, workTypes }) {
    return (
        <article
            className="
        border-vp-gray-800/30 border-2 rounded-3xl shadow
        relative overflow-clip grayscale-50 cursor-pointer
        hover:grayscale-0 transition-[filter] duration-1000
      "
        >
            {featuredImage?.node?.sourceUrl && (
                <MasonryImage image={featuredImage.node} />
            )}

            <div className="bg-gradient-to-br from-vp-gray-900/70 to-vp-gray-800/30 px-3 pt-1 pb-2 flex flex-col gap-0.5">
                <hgroup className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-vp-gray-100">{title}</h2>
                    <p className="text-xl font-semibold text-vp-gray-200">{year}</p>
                </hgroup>

                {technologies && (
                    <TagGroup
                        tagArray={workTypes.concat(roles)}
                    />
                )}
            </div>
        </article>
    );
}