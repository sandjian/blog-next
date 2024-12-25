"use client";

import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { Article } from "@/lib/api";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "./ui/badge";

type Props = {
  posts: Article[];
};

export default function HeroCarousel({ posts }: Props) {
  return (
    <section className="max-w-7xl mx-auto z-20">
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
              <Link href={`/publicaciones/${post.slug}`}>
                <Card className="relative flex justify-start items-center max-w-7xl h-[28rem] rounded-2xl border border-slate-800">
                  <div
                    className="absolute w-full h-full bg-cover bg-center filter brightness-50 rounded-2xl"
                    style={{
                      backgroundImage: `url(${post.articleImage.url})`,
                    }}
                  ></div>
                  <CardContent className="relative z-10 flex flex-col justify-center items-start  gap-y-4">
                    <div className="flex gap-2 ">
                      {post.categoryName && (
                        <Badge className="text-white bg-zinc-800 rounded-2xl">
                          {post.categoryName.charAt(0).toUpperCase() +
                            post.categoryName.slice(1)}
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-4xl font-bold text-start tracking-tight text-slate-50">
                      {post.title}
                    </h2>
                    {post.sumary && (
                      <p className="text-start text-slate-200">{post.sumary}</p>
                    )}
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-slate-300" />
                      <p className="text-slate-300">
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
 