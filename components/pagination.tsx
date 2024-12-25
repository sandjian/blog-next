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
    <div className="flex items-center justify-center mt-8 gap-2 ">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          flex items-center gap-1
          px-3 py-2 
          rounded-2xl 
          border border-gray-500
          bg-slate-700
          text-gray-200 
          disabled:opacity-50
          hover:bg-slate-600
          transition-colors
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
              className="px-3 py-2 text-gray-200 select-none"
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
              border border-gray-400
              transition-colors
              ${
                isActive
                  ? "bg-orange-600/90 text-slate-200 cursor-default"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
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
          border border-gray-500
          bg-slate-700
          text-gray-200 
          disabled:opacity-50
          hover:bg-slate-600
          transition-colors
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
