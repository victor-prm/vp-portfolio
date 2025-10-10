import { useState } from "react";

export default function SortToggle({ field, sortOrder, onChange, title }) {
  const handleClick = (order) => {
    if (onChange) onChange(field, order);
  };

  const baseClasses = "text-xs rounded-4xl px-2 py-1 whitespace-nowrap transition-colors";
  const activeClasses = "bg-vp-gray-200 text-vp-gray-800";
  const inactiveClasses = "bg-vp-gray-600/30 text-vp-gray-100 hover:bg-vp-gray-600/50";

  return (
    <div>
      {title && <h2 className="text-sm text-vp-gray-100">{title}</h2>}
      <ul className="flex flex-wrap gap-1">
        <li>
          <button
            onClick={() => handleClick("ASC")}
            className={`${baseClasses} ${sortOrder === "ASC" ? activeClasses : inactiveClasses}`}
          >
            Ascending
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("DESC")}
            className={`${baseClasses} ${sortOrder === "DESC" ? activeClasses : inactiveClasses}`}
          >
            Descending
          </button>
        </li>
      </ul>
    </div>
  );
}