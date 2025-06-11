// components/AllPosts.tsx
'use client';

import React from "react";
import VerticalCard from "../Cards/VerticalCard"; 
import Pagination from "../pagination";
import { Article } from "@/lib/api";

interface PostsListProps {
  posts: Article[];
}

export default function AllPosts({ posts }: PostsListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const pageSize = 6;
  const totalPages = Math.ceil(posts.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = posts.slice(startIndex, endIndex);

  return (
    <section className="w-full mx-auto pt-8 px-1">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground dark:text-accent-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-accent-foreground">All</span>
          Posts
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <VerticalCard key={article.sys.id} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </section>
  );
}