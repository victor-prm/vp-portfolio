import MasonryImage from "./MasonryImage";

export default function PortfolioItem({ title, content, featuredImage }) {
  return (
    <article
      className="
        border-vp-gray-950/30 border-2 rounded-4xl shadow
        relative overflow-clip grayscale-50 cursor-pointer
        hover:grayscale-0 transition-[filter] duration-1000
      "
    >
      <div className="absolute bottom-4 left-4 px-4 py-2 rounded-4xl bg-vp-gray-950/50 backdrop-blur-sm">
        <h2 className="text-md font-bold text-vp-gray-100">{title}</h2>
        {content && <p dangerouslySetInnerHTML={{ __html: content }}></p>}
      </div>

      {featuredImage?.node?.sourceUrl && (
        <MasonryImage image={featuredImage.node} />
      )}
    </article>
  );
}