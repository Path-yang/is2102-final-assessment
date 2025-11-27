"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle2 } from "lucide-react"

interface Step1_5Props {
  onNext: () => void
  formData?: any
}

export default function Step1_5({ onNext, formData }: Step1_5Props) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold">Registration Successful!</h1>

            <div className="flex justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-600">
              We've sent a verification email to
            </p>
            <p className="text-sm sm:text-base font-semibold break-all px-2">{formData?.email}</p>

            <p className="text-xs sm:text-sm text-gray-500 px-2">
              Click the link in your email to activate your account
            </p>

            <div className="pt-3 sm:pt-4">
              <Button onClick={onNext} className="w-full">
                Continue
              </Button>
            </div>

            <button
              onClick={() => alert("Verification email resent!")}
              className="text-xs sm:text-sm text-primary hover:underline"
            >
              Resend verification email
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

