// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-200 dark:bg-neutral-800" role="status" aria-label="Loading">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-t-primary border-r-accent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute w-full h-full border-4 border-t-transparent border-r-primary border-b-accent border-l-transparent rounded-full animate-spin-slow"></div>
      </div>
      <p className="mt-6 text-xl font-semibold text-foreground animate-pulse">Loading...</p>
    </div>
  );
}
