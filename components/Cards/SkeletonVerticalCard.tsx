// components/Cards/SkeletonVerticalCard.tsx
export default function SkeletonVerticalCard() {
    return (
      <div className="border-0 bg-neutral-200 dark:bg-neutral-800 shadow-md rounded-2xl p-4 animate-pulse">
        <div className="overflow-hidden rounded-xl shadow-md mb-4">
          <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-y-3 px-2">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-0.5 bg-gray-300 dark:bg-gray-700 rounded w-1/2 my-3 opacity-75"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-12"></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 rounded-lg p-2">
            <div className="flex items-center gap-x-2">
              <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
            </div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/5"></div>
          </div>
          <div className="mt-4 h-10 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
        </div>
      </div>
    );
  }