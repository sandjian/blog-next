"use client";

import { Card, CardContent } from "./card";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { Article } from "@/lib/api";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "./badge";

type Props = {
  posts: Article[];
};

export default function HeroCarousel({ posts }: Props) {
  return (
    <section className="max-w-7xl w-full mx-auto z-20 px-4">
      <Carousel
        className="rounded-2xl flex justify-center items-center w-full"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="rounded-2xl">
          {posts.map((post) => (
            <CarouselItem className="rounded-2xl" key={post.sys.id}>
              <Link href={`/search/${post.slug}`}>
                <Card className="relative flex justify-start items-center max-w-7xl h-[27rem] rounded-2xl">
                  <div
                    className="absolute w-full h-full bg-cover bg-center filter brightness-50 rounded-2xl"
                    style={{
                      backgroundImage: `url(${post.articleImage.url})`,
                    }}
                  ></div>
                  <CardContent className="relative z-10 flex flex-col justify-center items-start  gap-y-4">
                    <div className="flex gap-2 ">
                      {post.categoryName && (
                        <Badge className="text-white bg-accent p-1.5 rounded-[7px]">
                          {post.categoryName.charAt(0).toUpperCase() +
                            post.categoryName.slice(1)}
                        </Badge>
                      )}
                    </div>
                    <h2 className=" text-3xl md:text-4xl font-bold bg-primary text-accent-foreground  dark:text-primary-foreground rounded-2xl p-2 text-start tracking-tight ">
                      {post.title}
                    </h2>
                    {post.sumary && (
                      <p className="text-start text-neutral-200 dark:neutral-800">{post.sumary}</p>
                    )}
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-neutral-200" />
                      <p className="text-neutral-200">
                        {new Date(post.date ?? "").toLocaleDateString("es-ES", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
 