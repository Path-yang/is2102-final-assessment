"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Calendar, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step1_10Props {
  onNext: () => void
  formData: any
}

export default function Step1_10({ onNext, formData }: Step1_10Props) {
  const event = formData.event || formData.selectedEvent || {
    name: "Weekly Food Pantry Distribution",
    date: "Saturday, Dec 7, 2024",
    time: "9:00 AM - 1:00 PM",
    location: "Heartfelt Hands Community Center, 123 Volunteer Ave",
  }

  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2">
                You're signed up for {event.name}!
              </h1>
              <p className="text-gray-600">We're excited to have you join us</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">
                    {event.date} • {event.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{event.location}</p>
              </CardContent>
            </Card>

            <div>
              <p className="font-semibold mb-3">Add to Calendar</p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm">
                  Google Calendar
                </Button>
                <Button variant="outline" size="sm">
                  Apple Calendar
                </Button>
                <Button variant="outline" size="sm">
                  Outlook
                </Button>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3">What to bring</p>
              <div className="text-left bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Comfortable clothing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Closed-toe shoes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Water bottle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Positive attitude!</span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3">Share with friends</p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={onNext} className="flex-1">
                Back to Dashboard
              </Button>
              <Button onClick={onNext} className="flex-1">
                Find More Events
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

