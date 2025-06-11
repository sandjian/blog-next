import { getAllAuthors } from "@/lib/api";
import { Card } from "@/components/ui/card"; // Assuming you still want to use your Card component as a wrapper
import { Button } from "@/components/ui/button"; 
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default async function TeamSection() {
  const authors = await getAllAuthors();

  return (
    <section className="w-full max-w-7xl mx-auto pt-8 p-4 px-8 bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl my-16">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground dark:text-accent-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-accent-foreground">Meet</span>
          Our Authors
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => {
          const authorSlug = typeof author.name === "string"
            ? author.name.toLowerCase().replace(/\s+/g, "-")
            : `author-${author.sys.id}`;

          return (
            <Card
              key={author.sys.id}
              className="bg-stone-200 dark:bg-neutral-900 p-2 rounded-3xl shadow-lg dark:shadow-2xl dark:shadow-black/80 overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.02] mx-auto w-full max-w-md"
            >
              <div className="relative overflow-hidden group rounded-t-2xl ">
                <Image
                  src={author.profilePicture?.url || 'https://via.placeholder.com/600x600'} 
                  alt={`${author.name || "Author"} profile`}
                  width={600} 
                  height={600} 
                  className="w-full aspect-square object-cover transition-transform duration-700 brightness-75 ease-out group-hover:scale-[1.03]"/>
                <div className="absolute inset-x-0 bottom-0 h-32  pointer-events-none"></div>
                <div className="absolute top-6 left-6">
                  <h2 className="text-2xl font-medium text-white drop-shadow-lg">{author.name || "Unknown Author"}</h2>
                  <p className="text-sm text-gray-200 drop-shadow-lg">{author.role || "Author"}</p>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden  ring-2 ring-gray-200 dark:ring-zinc-700">
                    <Image
                      src={author.profilePicture?.url || 'https://via.placeholder.com/100x100'} 
                      alt="Avatar"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link href={`/authors/${authorSlug}`} className="block transition-transform duration-500 ease-out hover:translate-x-1">
                    <div className="text-sm text-gray-700 dark:text-zinc-200 hover:underline">@{authorSlug}</div>
                  </Link>
                </div>
                <div className="flex gap-1"> 
                  {author.socialLinks?.twitter && (
                    <Button variant="ghost" size="icon" className="p-1 h-auto w-auto text-accent dark:text-white hover:scale-110 transition-transform duration-300" asChild>
                      <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-5 w-5" /> 
                      </a>
                    </Button>
                  )}
                  {author.socialLinks?.github && (
                    <Button variant="ghost" size="icon" className="p-1 h-auto w-auto text-accent dark:text-white hover:scale-110 transition-transform duration-300" asChild>
                      <a href={author.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-5 w-5" /> 
                      </a>
                    </Button>
                  )}
                  {author.socialLinks?.linkedin && (
                    <Button variant="ghost" size="icon" className="p-1 h-auto w-auto text-accent dark:text-white hover:scale-110 transition-transform duration-300" asChild>
                      <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-5 w-5" /> 
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-4 pt-0"> 
                <Link
                  href={`/authors/${authorSlug}`}
                  className="block bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 rounded-xl px-4 py-3 text-center text-sm font-medium transition-all duration-300 ease-out transform hover:scale-[1.01] hover:bg-gray-200 dark:hover:bg-zinc-700"
                >
                  View Author Profile <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}