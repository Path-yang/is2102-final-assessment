"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"
import { Badge } from "@/components/ui/badge"
import { Edit } from "lucide-react"

interface Step2_6Props {
  onNext: () => void
  onBack?: () => void
  formData?: any
}

export default function Step2_6({ onNext, onBack, formData }: Step2_6Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Preview & Confirm</h1>
        <p className="text-gray-600">Step 5: Review your event before creating</p>
      </div>

      <ProgressIndicator currentStep={5} totalSteps={5} />

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>Event Preview</CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Cover Image Preview</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">
              {formData.eventName || "Weekly Food Pantry Distribution"}
            </h2>
            <Badge>{formData.programCategory || "Food Bank Services"}</Badge>
          </div>

          <div>
            <p className="text-gray-600">
              {formData.description ||
                "Help distribute food packages to families in need..."}
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Location</p>
            <p className="text-sm text-gray-600">
              {formData.venueName || "Heartfelt Hands Community Center"}
            </p>
            <p className="text-sm text-gray-600">{formData.address || "123 Volunteer Ave"}</p>
            <div className="mt-2 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Map Preview</span>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1">Schedule</p>
            <p className="text-sm text-gray-600">
              Every {formData.daysOfWeek?.join(", ") || "Saturday"},{" "}
              {formData.eventTimeStart || "9:00 AM"} - {formData.eventTimeEnd || "1:00 PM"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Next 5 upcoming instances listed
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2">Shifts</p>
            <div className="space-y-2">
              {formData.shifts?.map((shift: any, idx: number) => (
                <div key={shift.id || idx} className="p-3 border rounded-lg">
                  <p className="font-medium">{shift.roleName}</p>
                  <p className="text-sm text-gray-600">
                    {shift.startTime} - {shift.endTime} • {shift.volunteersNeeded} volunteers
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm font-medium text-yellow-900">
              This event requires admin approval
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="outline" onClick={onBack} className="flex-1">
              Back
            </Button>
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
            <Button onClick={onNext} className="flex-1">
              Create Event
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

