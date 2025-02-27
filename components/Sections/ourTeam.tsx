import { getAllAuthors } from "@/lib/api"; 
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {  ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default async function TeamSection() {
  const authors = await getAllAuthors(); 
  return (
    <section className="w-full max-w-7xl mx-auto pt-8 p-4">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">Meet</span>
          Our Team
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => {
          // Generar un slug seguro para el autor
          const authorSlug = typeof author.name === "string"
            ? author.name.toLowerCase().replace(/\s+/g, "-")
            : `author-${author.sys.id}`;

          return (
            <Card
              key={author.sys.id}
              className="border-0 bg-neutral-200 dark:bg-neutral-800 shadow-none rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative h-20 w-20">
                  <Image
                    src={author.profilePicture?.url} 
                    alt={`${author.name || "Author"} profile`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Información del autor */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    <Link href={`/authors/${authorSlug}`} className="hover:underline">
                      {author.name || "Unknown Author"}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    {author.role || "No role specified"}
                  </p>
                  <div className="flex gap-2 mb-4">
                    {author.socialLinks?.twitter && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {author.socialLinks?.github && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={author.socialLinks.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {author.socialLinks?.linkedin && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Botón de detalles */}
                  <Link
                    href={`/authors/${authorSlug}`}
                    className="text-primary dark:text-foreground dark:hover:text-accent hover:text-accent text-sm flex items-center gap-1"
                  >
                    See details about author
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