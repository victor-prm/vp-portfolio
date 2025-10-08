export default function MasonryImage({ image }) {
  if (!image) return null;

  const img = image.node || image;

  const { sourceUrl, altText = "", mediaDetails: { width, height } = {} } = img;
  if (!sourceUrl || !width || !height) return null;

  const ratio = width / height;

  // Aspect ratio constants
  const LANDSCAPE_RATIO = 3 / 2;
  const PORTRAIT_RATIO = 2 / 3;
  const SQUARE_RATIO = 1;

  // Find closest type
  const diffs = [
    { type: "landscape", diff: Math.abs(ratio - LANDSCAPE_RATIO) },
    { type: "portrait", diff: Math.abs(ratio - PORTRAIT_RATIO) },
    { type: "square", diff: Math.abs(ratio - SQUARE_RATIO) },
  ];

  const closest = diffs.reduce((prev, curr) =>
    curr.diff < prev.diff ? curr : prev
  ).type;

  // Map to Tailwind aspect classes (strings only)
  const aspectClasses = {
    landscape: "aspect-[4/3]", // Tailwind-safe string
    portrait: "aspect-[4/5]",
    square: "aspect-square",
  };

  return (
    <div className={`overflow-hidden rounded-lg ${aspectClasses[closest]}`}>
      <img src={sourceUrl} alt={altText} className="w-full h-full object-cover" />
    </div>
  );
}