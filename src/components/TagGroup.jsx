import { Link, useLocation } from "react-router";

export default function TagGroup({ title, tagArray, onClick, category, linkBase }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Support both ?category=slug and ?tag=slug
  const activeSlug = searchParams.get(category) || searchParams.get("tag");

  return (
    <div>
      {title && <h2 className="text-sm text-vp-gray-100 mb-1">{title}</h2>}
      <ul className="flex flex-wrap gap-1">
        {tagArray.map(tag => {
          const isActive = tag.slug === activeSlug;
          const baseClasses =
            "text-xs rounded-4xl px-1.5 py-0.5 whitespace-nowrap transition-colors cursor-pointer";
          const activeClasses = isActive
            ? "bg-vp-gray-200 text-vp-gray-800"
            : "bg-vp-gray-600/30 text-vp-gray-100 hover:bg-vp-gray-600/50";

          return (
            <li key={tag.slug} className="tag">
              {onClick ? (
                <button
                  onClick={() => onClick(tag)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {tag.name}
                </button>
              ) : (
                <Link
                  to={`${linkBase || "/projects"}?tag=${tag.slug}`}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {tag.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}