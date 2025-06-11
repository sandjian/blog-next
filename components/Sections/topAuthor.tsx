// components/TopAuthors.tsx
import { getAllAuthors } from "@/lib/api";
import ProfileCard from "../Cards/ProfileCard"; // Ajusta la ruta según tu estructura
import Link from "next/link";

export default async function TopAuthors() {
  const authors = await getAllAuthors();
  const topAuthors = authors.slice(0, 3); // Tomar los 3 primeros

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-foreground dark:text-accent-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-accent-foreground">Top 3</span>
          Authors
        </h2>
      </div>

      <div className="grid gap-y-2">
        {topAuthors.map((author) => (
          <ProfileCard key={author.sys.id} author={author} />
        ))}
      </div>
      <Link href="/authors">
        <div className="w-full mt-6 p-3 hover:bg-primary flex justify-center items-center rounded-full bg-accent transition-all duration-300 ease-in-out hover:-translate-y-2">
          <button className="text-primary-foreground font-semibold">See more</button>
        </div>
      </Link>
    </section>
  );
}