import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProcessCardProps {
  number: number
  title: string
  description: string
  actors: string[]
  href: string
}

export function ProcessCard({ number, title, description, actors, href }: ProcessCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
                {number}
              </div>
              <CardTitle className="text-base sm:text-lg md:text-xl leading-tight break-words">{title}</CardTitle>
            </div>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 mt-1" />
          </div>
          <CardDescription className="mt-2 text-sm sm:text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {actors.map((actor, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
              >
                {actor}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

