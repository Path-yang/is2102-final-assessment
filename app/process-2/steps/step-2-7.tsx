"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, QrCode } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step2_7Props {
  formData: any
}

export default function Step2_7({ formData }: Step2_7Props) {
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
              <h1 className="text-3xl font-bold mb-2">Event Created Successfully!</h1>
              <p className="text-gray-600">
                Your event has been created and is ready for volunteers
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="text-left space-y-2">
                  <h3 className="font-semibold text-lg">
                    {formData.eventName || "Weekly Food Pantry Distribution"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formData.programCategory || "Food Bank Services"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-left space-y-3">
              <h3 className="font-semibold">Next Steps</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>
                    Volunteers matching this event's requirements will be notified
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>
                    You can manage shifts and volunteers from your dashboard
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <QrCode className="w-6 h-6 text-gray-600" />
                <p className="font-semibold">QR Code for Volunteer Check-in</p>
              </div>
              <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg mx-auto flex items-center justify-center">
                <QrCode className="w-32 h-32 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Display this QR code at the event venue
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1">
                View Event
              </Button>
              <Button variant="outline" className="flex-1">
                Create Another Event
              </Button>
              <Button className="flex-1">Back to Dashboard</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

