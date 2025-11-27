"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step1_6Props {
  onNext: () => void
  formData: any
}

export default function Step1_6({ onNext, formData }: Step1_6Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {formData.fullName || "Volunteer"}!
        </h1>
        <p className="text-gray-600">Let's find your first volunteer opportunity</p>
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

          <div>
            <Button onClick={onNext} size="lg" className="w-full">
              Find Opportunities
            </Button>
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
                <Clock className="w-5 h-5 text-gray-400" />
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
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
              <p>No upcoming events yet</p>
              <p className="text-sm mt-1">Find opportunities to get started!</p>
            </div>
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

