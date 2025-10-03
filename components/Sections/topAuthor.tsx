import { getAllAuthors } from "@/lib/api";
import ProfileCard from "../Cards/ProfileCard";
import Link from "next/link";

export default async function TopAuthors() {
  const authors = await getAllAuthors();
  const topAuthors = authors.slice(0, 3);

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">Top 3</span>
          Authors
        </h2>
      </div>

      <div className="grid gap-y-2">
        {topAuthors.map((author) => (
          <ProfileCard key={author.sys.id} author={author} />
        ))}
      </div>
      <Link href="/authors">
        <div className="w-full mt-6 p-3 hover:bg-primary flex justify-center items-center rounded-xl dark:bg-neutral-800 bg-accent transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/[0.1]">
          <button className="text-primary-foreground font-semibold">See more</button>
        </div>
      </Link>
    </section>
  );
}