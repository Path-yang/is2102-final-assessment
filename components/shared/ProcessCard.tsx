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
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {number}
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
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

