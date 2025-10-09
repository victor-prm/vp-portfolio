import { Link } from "react-router";


export default function TagGroup({ tagArray }) {

    return (
        <ul className="flex flex-wrap gap-1">
            {
                tagArray.map(tag => (
                    <li>
                        <Link to="#" className="text-xs bg-vp-gray-600/30 rounded-4xl px-1.5 py-0.5 whitespace-nowrap" >{tag.name}</Link>
                    </li>
                ))}
        </ul>

    )
}