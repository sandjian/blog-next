import { getAllAuthors } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default async function TeamSection() {
  const authors = await getAllAuthors();

  return (
    <section className="w-full max-w-6xl mx-auto pt-8 p-2   rounded-2xl my-16">
      <div className="mt-6 mb-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">
            Meet
          </span>
          Our Authors
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {authors.map((author) => {
          const authorSlug =
            typeof author.name === "string"
              ? author.name.toLowerCase().replace(/\s+/g, "-")
              : `author-${author.sys.id}`;

          return (
            <Card
              key={author.sys.id}
              className="relative w-full flex flex-row bg-neutral-100 dark:bg-neutral-900 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/80  mx-auto  max-w-xl"
            >
              {/* Imagen */}
              <div className="relative h-48 rounded-2xl">
                <Image
                  src={
                    author.profilePicture?.url ||
                    "https://via.placeholder.com/600x600"
                  }
                  alt={`${author.name || "Author"} profile`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-l-2xl "
                />
              </div>
              <div className="w-full z-10 h-full  flex flex-col ">

                <div className="w-full flex flex-col p-4">
                  <h2 className="text-xl font-semibold text-foreground dark:text-accent-foreground drop-shadow-lg">
                    {author.name || "Unknown Author"}
                  </h2>
                  <p className="text-sm text-foreground  dark:text-accent-foreground italic drop-shadow-lg">
                    {author.role || "Author"}
                  </p>

                    <div className="flex gap-3 w-full my-4 ">
                      {author.socialLinks?.twitter && (
                        <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="h-5 w-5 text-foreground" />
                        </a>
                      )}
                      {author.socialLinks?.github && (
                        <a href={author.socialLinks.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="h-5 w-5 text-foreground" />
                        </a>
                      )}
                      {author.socialLinks?.linkedin && (
                        <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="h-5 w-5 text-foreground" />
                        </a>
                      )}
                    </div>


                </div>
                    <div className=" flex justify-end h-full border-t items-end  py-4 px-1">
                      <Link
                        href={`/authors/${authorSlug}`}
                        className="flex items-center gap-2 text-foreground dark:text-accent-foreground px-4  text-sm font-medium "
                      >
                        View Profile
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
