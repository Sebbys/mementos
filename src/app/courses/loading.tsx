export default async function Loading() {
  return (
    <div className='animate-pulse space-y-4'>
      <div className='h-6 bg-gray-200 rounded w-3/4 dark:bg-gray-800' />
      <div className='h-4 bg-gray-200 rounded w-1/2 dark:bg-gray-800' />
      <div className='space-y-2'>
        <div className='h-4 bg-gray-200 rounded dark:bg-gray-800' />
        <div className='h-4 bg-gray-200 rounded dark:bg-gray-800' />
        <div className='h-4 bg-gray-200 rounded w-5/6 dark:bg-gray-800' />
      </div>
      <div className='h-64 bg-gray-200 rounded dark:bg-gray-800' />
    </div>
  );
}
