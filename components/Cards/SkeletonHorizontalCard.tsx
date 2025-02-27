// components/Cards/SkeletonHorizontalCard.tsx
export default function SkeletonHorizontalCard() {
    return (
      <div className="bg-neutral-200 dark:bg-neutral-800 shadow-none rounded-2xl p-6 animate-pulse">
        <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 items-center md:gap-x-8 lg:gap-x-12">
          <div className="order-first sm:col-span-5">
            <div className="overflow-hidden rounded-xl">
              <div className="w-full h-80 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
            </div>
          </div>
          <div className="sm:col-span-5">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-0.5 bg-gray-300 dark:bg-gray-700 rounded w-1/2 my-4 opacity-75"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-12"></div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-x-2">
                <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              </div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
            <div className="mt-4 h-10 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }