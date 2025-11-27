"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BackButton({ href = "/" }: { href?: string }) {
  return (
    <Link href={href}>
      <Button variant="ghost" className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>
    </Link>
  )
}

