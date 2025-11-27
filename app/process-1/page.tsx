"use client"

import { useState } from "react"
import { BackButton } from "@/components/shared/BackButton"
import Step1_1 from "./steps/step-1-1"
import Step1_2 from "./steps/step-1-2"
import Step1_3 from "./steps/step-1-3"
import Step1_4 from "./steps/step-1-4"
import Step1_5 from "./steps/step-1-5"
import Step1_6 from "./steps/step-1-6"
import Step1_7 from "./steps/step-1-7"
import Step1_8 from "./steps/step-1-8"
import Step1_9 from "./steps/step-1-9"
import Step1_10 from "./steps/step-1-10"
import Step1_11 from "./steps/step-1-11"

export default function Process1() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<any>({})

  const handleNext = (data?: any) => {
    if (data) {
      setFormData((prev: any) => ({ ...prev, ...data }))
    }
    setCurrentStep((prev) => Math.min(prev + 1, 11))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const steps = [
    { component: Step1_1, props: { onNext: handleNext } },
    { component: Step1_2, props: { onNext: handleNext, formData, setFormData } },
    { component: Step1_3, props: { onNext: handleNext, onBack: handleBack, formData, setFormData } },
    { component: Step1_4, props: { onNext: handleNext, onBack: handleBack, formData, setFormData } },
    { component: Step1_5, props: { onNext: handleNext, formData } },
    { component: Step1_6, props: { onNext: handleNext, formData } },
    { component: Step1_7, props: { onNext: handleNext, formData } },
    { component: Step1_8, props: { onNext: handleNext, formData } },
    { component: Step1_9, props: { onNext: handleNext, formData } },
    { component: Step1_10, props: { onNext: handleNext, formData } },
    { component: Step1_11, props: { formData } },
  ]

  const CurrentStepComponent = steps[currentStep - 1].component
  const currentStepProps = steps[currentStep - 1].props

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton />
        <CurrentStepComponent {...currentStepProps} />
      </div>
    </div>
  )
}

