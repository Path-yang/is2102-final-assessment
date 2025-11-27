"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, User, Phone } from "lucide-react"

interface Step1_9bProps {
  onNext: () => void
  onBack: () => void
  formData?: any
}

export default function Step1_9b({ onNext, onBack, formData }: Step1_9bProps) {
  const event = formData.event || formData.selectedEvent || {
    name: "Weekly Food Pantry Distribution",
    date: "Saturday, Dec 7, 2024",
    time: "9:00 AM - 1:00 PM",
    location: "Heartfelt Hands Community Center, 123 Volunteer Ave",
  }

  const selectedShift = event?.shifts?.find((s: any) => s.id === formData.selectedShift)

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="px-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Confirm Your Sign-up</h1>
        <p className="text-sm sm:text-base text-gray-600">Please review your details before confirming</p>
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Event Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <p className="text-sm sm:text-base font-semibold mb-2 text-gray-700">Event Name</p>
              <p className="text-sm sm:text-base break-words">{event.name}</p>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-semibold mb-1 text-gray-700">Date & Time</p>
                <p className="text-sm sm:text-base text-gray-600">
                  {event.date} • {event.time}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-semibold mb-1 text-gray-700">Location</p>
                <p className="text-sm sm:text-base text-gray-600 break-words">{event.location}</p>
              </div>
            </div>

            {selectedShift && (
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-semibold mb-1 text-gray-700">Selected Shift</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    {selectedShift.roleName} ({selectedShift.startTime} - {selectedShift.endTime})
                  </p>
                </div>
              </div>
            )}

            {formData.specialRequirements && (
              <div>
                <p className="text-sm sm:text-base font-semibold mb-1 text-gray-700">Special Requirements</p>
                <p className="text-sm sm:text-base text-gray-600">{formData.specialRequirements}</p>
              </div>
            )}

            {formData.emergencyContact && (
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-semibold mb-1 text-gray-700">Emergency Contact</p>
                  <p className="text-sm sm:text-base text-gray-600">{formData.emergencyContact}</p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs sm:text-sm font-medium text-yellow-800 mb-1">
                Cancellation Policy
              </p>
              <p className="text-xs text-yellow-700">
                Please notify us at least 24 hours in advance if you need to cancel.
                Repeated no-shows may affect future event sign-ups.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="flex-1 w-full sm:w-auto"
              >
                Back
              </Button>
              <Button 
                onClick={onNext}
                className="flex-1 w-full sm:w-auto"
                size="lg"
              >
                Confirm Sign-up
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

