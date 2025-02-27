export default function SkeletonSmallCard() {
    return (
      <div className="border-0 bg-neutral-200 dark:bg-neutral-800 shadow-none rounded-2xl px-4 py-5 flex items-center animate-pulse">
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl mr-4 bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex-grow">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="flex items-center gap-x-2 mt-3">
            <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }