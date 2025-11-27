"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BackButton({ href = "/" }: { href?: string }) {
  return (
    <Link href={href}>
      <Button variant="ghost" className="mb-3 sm:mb-4 text-sm sm:text-base">
        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Button>
    </Link>
  )
}

