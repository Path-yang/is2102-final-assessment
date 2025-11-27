"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Calendar, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step1_10Props {
  onNext: () => void
  formData?: any
}

export default function Step1_10({ onNext, formData }: Step1_10Props) {
  const event = formData.event || formData.selectedEvent || {
    name: "Weekly Food Pantry Distribution",
    date: "Saturday, Dec 7, 2024",
    time: "9:00 AM - 1:00 PM",
    location: "Heartfelt Hands Community Center, 123 Volunteer Ave",
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
              </div>
            </div>

            <div className="px-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 break-words">
                You're signed up for {event.name}!
              </h1>
              <p className="text-sm sm:text-base text-gray-600">We're excited to have you join us</p>
            </div>

            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1.5 sm:space-y-2 text-left p-4 sm:p-6 pt-0">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-words">
                    {event.date} • {event.time}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 break-words">{event.location}</p>
              </CardContent>
            </Card>

            <div>
              <p className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Add to Calendar</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Google Calendar
                </Button>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Apple Calendar
                </Button>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Outlook
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">What to bring</p>
              <div className="text-left bg-gray-50 p-3 sm:p-4 rounded-lg space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Comfortable clothing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Closed-toe shoes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Water bottle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Positive attitude!</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Share with friends</p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
              <Button variant="outline" onClick={onNext} className="flex-1 w-full sm:w-auto">
                Back to Dashboard
              </Button>
              <Button onClick={onNext} className="flex-1 w-full sm:w-auto">
                Find More Events
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

