"use client"

import { useState } from "react"
import { BackButton } from "@/components/shared/BackButton"
import Step2_1 from "./steps/step-2-1"
import Step2_2 from "./steps/step-2-2"
import Step2_3 from "./steps/step-2-3"
import Step2_4 from "./steps/step-2-4"
import Step2_5 from "./steps/step-2-5"
import Step2_6 from "./steps/step-2-6"
import Step2_7 from "./steps/step-2-7"

export default function Process2() {
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
    { component: Step2_1, props: { onNext: handleNext } },
    { component: Step2_2, props: { onNext: handleNext, onBack: handleBack, formData, setFormData } },
    { component: Step2_3, props: { onNext: handleNext, onBack: handleBack, formData, setFormData } },
    { component: Step2_4, props: { onNext: handleNext, onBack: handleBack, formData, setFormData } },
    { component: Step2_5, props: { onNext: handleNext, onBack: handleBack, formData, setFormData } },
    { component: Step2_6, props: { onNext: handleNext, onBack: handleBack, formData } },
    { component: Step2_7, props: { formData } },
  ]

  const CurrentStepComponent = steps[currentStep - 1].component
  const currentStepProps = steps[currentStep - 1].props

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
        <BackButton />
        {/* @ts-ignore - Dynamic component props */}
        <CurrentStepComponent {...currentStepProps} />
      </div>
    </div>
  )
}

