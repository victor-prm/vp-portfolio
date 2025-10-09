export default function TwoColumnLayout({ left, right, className = '' }) {
  return (
    <div className={`px-4 pb-8 flex gap-8 flex-col sm:flex-row ${className}`}>
      <div className='flex flex-col gap-4 w-full min-h-32 shrink-0 sm:w-64'>
        {left}
      </div>
      <div className='flex-1'>
        {right}
      </div>
    </div>
  );
}