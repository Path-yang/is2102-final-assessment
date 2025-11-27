"use client"

import { useState } from "react"
import { BackButton } from "@/components/shared/BackButton"
import Step3_1 from "./steps/step-3-1"
import Step3_2 from "./steps/step-3-2"
import Step3_3 from "./steps/step-3-3"
import Step3_4 from "./steps/step-3-4"
import Step3_5 from "./steps/step-3-5"
import Step3_6 from "./steps/step-3-6"
import Step3_7 from "./steps/step-3-7"

export default function Process3() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<any>({})

  const handleNext = (data?: any) => {
    if (data) {
      setFormData((prev: any) => ({ ...prev, ...data }))
    }
    setCurrentStep((prev) => Math.min(prev + 1, 7))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const steps = [
    { component: Step3_1, props: { onNext: handleNext } },
    { component: Step3_2, props: { onNext: handleNext } },
    { component: Step3_3, props: { onNext: handleNext, onBack: handleBack, formData, setFormData } },
    { component: Step3_4, props: { onNext: handleNext } },
    { component: Step3_5, props: { onNext: handleNext, formData } },
    { component: Step3_6, props: { onNext: handleNext, formData } },
    { component: Step3_7, props: { formData } },
  ]

  const CurrentStepComponent = steps[currentStep - 1].component
  const currentStepProps = steps[currentStep - 1].props

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton />
        <CurrentStepComponent {...currentStepProps} />
      </div>
    </div>
  )
}

