import { Link } from "react-router";


export default function TagGroup({ title, tagArray }) {

    return (
        <div>
            {title && (
                <h2 className="text-sm">
                    {title}
                </h2>
            )}
            <ul className="flex flex-wrap gap-1">
                {
                    tagArray.map(tag => (
                        <li key={tag.name} className="tag">
                            <Link to="#" className="text-xs bg-vp-gray-600/30 rounded-4xl px-1.5 py-0.5 whitespace-nowrap" >{tag.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}