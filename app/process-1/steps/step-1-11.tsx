"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step1_11Props {
  formData?: any
}

export default function Step1_11({ formData }: Step1_11Props) {
  const event = formData.event || formData.selectedEvent || {
    name: "Weekly Food Pantry Distribution",
    date: "Saturday, Dec 7, 2024",
    time: "9:00 AM - 1:00 PM",
  }

  const daysUntil = 5

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {formData.fullName || "Volunteer"}!
        </h1>
        <p className="text-gray-600">Your volunteer journey starts here</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Impact Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-600 mt-1">Total Hours</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-600 mt-1">Events Attended</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-600 mt-1">Impact Points</div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-900 mb-1">
              Your next event is in {daysUntil} days!
            </p>
            <p className="text-sm text-blue-700">
              Don't forget: {event.name} on {event.date}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Onboarding Checklist</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Create account</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Verify email</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Complete first event</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>Log first hours</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Upcoming Events</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{event.name}</h4>
                      <Badge variant="success">Registered</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Recommended for You</h3>
            <div className="text-sm text-gray-500">
              Based on your skills and interests, we'll show you personalized
              opportunities here.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

