import { useEffect, useRef, useState } from "react";
import MiniMasonry from "../lib/masonry.min";

export default function MasonryGrid({ children }) {
  const containerRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(256);

  // Adjust baseWidth on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBaseWidth(180); // small screens
      else if (width < 1024) setBaseWidth(224); // medium
      else setBaseWidth(320); // large
    };

    handleResize(); // initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const masonry = new MiniMasonry({
      container: containerRef.current,
      baseWidth,
      gutterX: 4,
      gutterY: 8,
      ultimateGutter: 4,
      surroundingGutter: false,
      minify: true,
      wedge: true,
    });

    // Re-layout on children change
    masonry.layout();

    return () => masonry.destroy();
  }, [children, baseWidth]);

  return (
    <div ref={containerRef} className="masonry relative w-full">
      {children.map((child, idx) => (
        <div key={idx} className="masonry-item w-auto box-border absolute">
          {child}
        </div>
      ))}
    </div>
  );
}