'use client'

import { ChevronLeft, ChevronRight } from "lucide-react" 

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  
  const pages = getPagesArray(currentPage, totalPages, 5)

  if (totalPages <= 1) return null 

  return (
    <div className="flex items-center justify-center mt-8 mb-12 gap-2 bg-neutral-200 dark:bg-neutral-800 rounded-2xl p-2 ">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          flex items-center gap-1
          px-3 py-2 
          rounded-2xl 
          bg-neutral-200 dark:bg-neutral-800
          dark:hover:bg-neutral-700
          text-foreground 
          disabled:opacity-50
          hover:bg-neutral-300
          transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-accent
        "
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Anterior</span>
      </button>

      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={index}
              className="px-3 py-2 text-primary select-none"
            >
              ...
            </span>
          )
        }

        const isActive = currentPage === page
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page as number)}
            className={`
              flex items-center justify-center
              px-5 py-2 rounded-2xl w-3 h-9
              
              transition-colors
              ${
                isActive
                  ? "bg-primary text-primary-foreground cursor-default "
                  : "bg-neutral-200 dark:bg-neutral-700 text-foreground hover:border-1 hover:border-primary dark:hover:bg-neutral-600 border-neutral-300"
              }
            `}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          flex items-center gap-1
          px-3 py-2 
          rounded-2xl 
          bg-neutral-200 dark:bg-neutral-800
          text-foreground 
          disabled:opacity-50
          hover:bg-neutral-300
          dark:hover:bg-neutral-700
          transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
        "
      >
        <span className="text-sm font-medium">Siguiente</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

function getPagesArray(
  currentPage: number,
  totalPages: number,
  pageRangeDisplayed: number
): Array<number | "..."> {
  const pages: Array<number | "..."> = []
  const halfPageRange = Math.floor(pageRangeDisplayed / 2)

  const startPage = Math.max(1, currentPage - halfPageRange)
  const endPage = Math.min(totalPages, currentPage + halfPageRange)

  if (startPage > 1) {
    pages.push(1)
    if (startPage > 2) {
      pages.push("...")
    }
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page)
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push("...")
    }
    pages.push(totalPages)
  }

  return pages
}