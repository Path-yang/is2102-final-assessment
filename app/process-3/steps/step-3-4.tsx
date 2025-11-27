"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Loader2, CheckCircle2 } from "lucide-react"

interface Step3_4Props {
  onNext: () => void
}

export default function Step3_4({ onNext }: Step3_4Props) {
  const steps = [
    { id: 1, label: "Fetching volunteer data...", completed: true },
    { id: 2, label: "Calculating hours by program...", completed: true },
    { id: 3, label: "Aggregating donation data...", completed: false, loading: true },
    { id: 4, label: "Generating visualizations...", completed: false },
    { id: 5, label: "Compiling report...", completed: false },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Generating Report</h1>
        <p className="text-gray-600">Please wait while we compile your report</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Progress value={60} className="mb-4" />
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-3">
                {step.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : step.loading ? (
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                )}
                <span
                  className={
                    step.completed
                      ? "text-gray-600"
                      : step.loading
                      ? "text-primary font-medium"
                      : "text-gray-400"
                  }
                >
                  {step.label}
                </span>
              </div>
            ))}
            <p className="text-sm text-gray-500 mt-4">
              This may take a few moments for large date ranges
            </p>
            <Button variant="outline" onClick={onNext} className="mt-4">
              Continue (Demo)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

