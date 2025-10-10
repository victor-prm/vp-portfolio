export default function TwoColumnLayout({ title, left, right, className = '' }) {
  return (
    <div className={`px-4 pb-8 flex gap-8 flex-col md:flex-row ${className}`}>
      <div className='flex flex-col gap-4 md:gap-8 min-h-32 shrink-0 md:w-64'>
        {title && <h1 className="text-vp-gray-200 text-5xl capitalize">{title}</h1>}
        {left}
      </div>
      <div className='flex-1'>
        {right}
      </div>
    </div>
  );
}