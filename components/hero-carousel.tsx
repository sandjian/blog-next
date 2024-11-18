"use client";

import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";


import Link from "next/link";
import { CalendarIcon } from "lucide-react";

import Post from "@/interfaces/post";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "./ui/badge";

type Props = {
  posts: Post[];
};

export default function HeroCarousel({ posts }: Props) {
  return (
    <section className="rounded-2xl">
      <Carousel
      className="rounded-2xl"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="rounded-2xl">
          {posts.map((post) => (
            <CarouselItem
              className="rounded-2xl"
              key={post.fields.title}
            >
              <Link href={`/entradas/${post.fields.slug}`}>
                <Card className="relative w-full h-[33rem] rounded-2xl border-slate-800">
                  <div
                    className={`absolute w-full h-full bg-cover bg-center filter brightness-50 rounded-2xl`}
                    style={{
                      backgroundImage: `url(${post.fields.image.fields.file.url})`,
                    }}
                  ></div>
                  <CardContent className="relative z-10 flex flex-col  justify-center items-start min-h-screen gap-y-4">
                  <div className="flex gap-2 ">
                      {post.fields.tags.map((tag) => (
                        <Badge key={tag} className=" text-white bg-slate-800/50 rounded-2xl">
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-4xl font-bold text-start tracking-tight text-slate-50">
                      {post.fields.title}
                    </h2>
                    <p className="text-start text-slate-200">
                      {post.fields.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-slate-300" />
                      <p className="text-slate-300">
                        {new Date(post.sys.createdAt).toLocaleDateString(
                          "es-ES",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
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