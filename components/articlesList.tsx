
'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { CalendarIcon } from "lucide-react";
import Pagination from "./pagination";
import { Article } from "@/lib/api"; 

interface ArticlesListProps {
  articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  
  const [currentPage, setCurrentPage] = React.useState(1);

  
  const pageSize = 6;
  const totalPages = Math.ceil(articles.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-7xl mx-auto pt-12 md:pt-10">
      <h2 className="text-3xl font-bold text-slate-100 relative mb-8">
        Nuestros articulos
        <span className="absolute -bottom-5 left-0 h-2 w-20 bg-orange-500 rounded-full"></span>
      </h2>

  
      <div className="w-full grid justify-center items-center mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {currentArticles.map((article) => {
          const formattedDate = new Date(article.date).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <CardContainer key={article.sys.id} className="inter-var w-full rounded-2xl">
              <CardBody className="relative group/card hover:shadow-2xl border border-slate-500 hover:shadow-slate-900/[0.8] bg-gradient-to-bl from-slate-800 via-slate-700 to-slate-700 w-full h-auto rounded-2xl p-8">
                <CardItem translateZ="50" className="text-xl h-20 font-bold text-neutral-100">
                  {article.title}
                </CardItem>
                <CardItem translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 h-20 overflow-hidden">
                  <p>{article.sumary}</p>
                </CardItem>

  
                <Link href={`/publicaciones/${article.slug}`}>
                  <CardItem translateZ="100" className="w-full mt-4 cursor-pointer">
                    <Image
                      src={article.articleImage.url}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </Link>

                <div className="flex justify-between items-center mt-14">
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal text-slate-200">
                    <div className="flex items-center gap-x-2">
                      <CalendarIcon className="w-4 h-4 text-slate-300" />
                      {formattedDate}
                    </div>
                  </CardItem>
                  <Link href={`/publicaciones/${article.slug}`}>
                    <CardItem translateZ={20} className="text-xs font-bold cursor-pointer">
                      <button className="px-4 py-2 rounded-xl bg-white text-orange-500">
                        Leer
                      </button>
                    </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>

  
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}
