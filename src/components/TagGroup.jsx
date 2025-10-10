import { useLocation } from "react-router";

export default function TagGroup({ title, tagArray, onClick, category }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeSlug = searchParams.get(category);

  return (
    <div>
      {title && <h2 className="text-sm text-vp-gray-100">{title}</h2>}
      <ul className="flex flex-wrap gap-1">
        {tagArray.map(tag => {
          const isActive = tag.slug === activeSlug;
          const baseClasses = "text-xs rounded-4xl px-1.5 py-0.5 whitespace-nowrap transition-colors";
          const activeClasses = isActive
            ? "bg-vp-gray-200 text-vp-gray-800"
            : "bg-vp-gray-600/30 text-vp-gray-100 hover:bg-vp-gray-600/50";

          return (
            <li key={tag.slug} className="tag cursor-a">
              <button
                onClick={() => onClick(tag)}
                className={`${baseClasses} ${activeClasses} cursor-pointer`}
              >
                {tag.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}