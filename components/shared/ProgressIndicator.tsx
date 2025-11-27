import { Progress } from "@/components/ui/progress"

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
        <span className="text-xs sm:text-sm font-medium text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-xs sm:text-sm text-muted-foreground">{Math.round(percentage)}%</span>
      </div>
      <Progress value={percentage} />
    </div>
  )
}

