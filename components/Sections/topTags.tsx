import { getTopTags } from "@/lib/api";

export default async function TopTags() {
  const popularTags = await getTopTags(14); // Obtener los 25 tags más populares

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">Popular</span>
          Tags
        </h2>
      </div>

      <div className="rounded-lg overflow-hidden">
        <div className="flex flex-wrap gap-3">
          {popularTags.map((tag, index) => (
            <div
              key={index}
              className="bg-neutral-200 dark:bg-neutral-800 px-4 py-3 rounded-2xl text-foreground font-medium hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
            >
              #{tag.toLowerCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}