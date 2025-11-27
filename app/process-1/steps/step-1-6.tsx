"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step1_6Props {
  onNext: () => void
  formData?: any
}

export default function Step1_6({ onNext, formData }: Step1_6Props) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="px-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
          Welcome, {formData?.fullName || "Volunteer"}!
        </h1>
        <p className="text-sm sm:text-base text-gray-600">Let's find your first volunteer opportunity</p>
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Your Impact Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">0</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Total Hours</div>
            </div>
            <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">0</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Events Attended</div>
            </div>
            <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">0</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Impact Points</div>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <Button onClick={() => onNext({ showRecommended: false })} size="lg" className="w-full">
              Browse All Events
            </Button>
            <Button 
              onClick={() => onNext({ showRecommended: true })} 
              variant="outline" 
              size="lg" 
              className="w-full"
            >
              Recommended for You
            </Button>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Onboarding Checklist</h3>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">Create account</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">Verify email</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Complete first event</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Log first hours</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Upcoming Events</h3>
            <div className="text-center py-6 sm:py-8 text-gray-500 bg-gray-50 rounded-lg px-2">
              <p className="text-sm sm:text-base">No upcoming events yet</p>
              <p className="text-xs sm:text-sm mt-1">Find opportunities to get started!</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Recommended for You</h3>
            <div className="text-xs sm:text-sm text-gray-500 mb-2">
              Based on your skills and interests, we'll show you personalized
              opportunities here.
            </div>
            <Button 
              onClick={() => onNext({ showRecommended: true })} 
              variant="outline" 
              size="sm" 
              className="w-full sm:w-auto"
            >
              View Recommended Events
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

