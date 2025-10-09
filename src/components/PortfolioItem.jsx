import MasonryImage from "./MasonryImage";
import TagGroup from "./TagGroup";
import { useNavigate } from "react-router";

export default function PortfolioItem({ title, year, featuredImage, slug, technologies, roles, workTypes }) {
    const navigate = useNavigate();
    const handleCardClick = (e) => {
        // Prevent navigation when clicking a tag
        if (e.target.closest(".tag")) return;
        navigate(`/projects/${slug ? slug : "#"}`);
    };


    return (
        <article
            onClick={handleCardClick}
            className="
        border-vp-gray-800/40 border-2 rounded-3xl shadow-vp-gray-700/10 shadow-md
        relative overflow-clip grayscale-50 cursor-pointer
        hover:grayscale-0 transition-[filter] duration-500"
        >
            {featuredImage?.node?.sourceUrl && (
                <MasonryImage image={featuredImage.node} />
            )}
            <div className="bg-gradient-to-br from-vp-gray-900/70 to-vp-gray-800/40 px-3 pb-0.5 flex flex-col absolute bottom-2 left-2 backdrop-blur-2xl rounded-2xl">
                <hgroup className="flex gap-4 items-center">
                    <h2 className="text-md text-vp-gray-100">{title}</h2>
                    <p className="text-md text-vp-gray-100">{year}</p>
                </hgroup>
            </div>
        </article>

    );
}