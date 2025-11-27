"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface Step1_1Props {
  onNext: () => void
}

export default function Step1_1({ onNext }: Step1_1Props) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Make a Difference with Heartfelt Hands
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Join our community of volunteers dedicated to making a positive impact
          in the lives of those in need. Together, we can create lasting change.
        </p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
          <div className="space-y-4">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            <Button onClick={onNext} className="w-full" size="lg">
              Register as Volunteer
            </Button>
            <div className="text-center">
              <button
                onClick={onNext}
                className="text-xs sm:text-sm text-primary hover:underline"
              >
                Already have an account? Log in
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-2xl mx-auto mt-6 sm:mt-8 px-2">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">About Heartfelt Hands</h2>
        <p className="text-sm sm:text-base text-gray-600">
          Heartfelt Hands is a non-profit organization committed to serving our
          community through various programs including food bank services,
          environmental clean-ups, community workshops, and youth programs. We
          believe in the power of volunteerism to transform lives and build
          stronger communities.
        </p>
      </div>
    </div>
  )
}

