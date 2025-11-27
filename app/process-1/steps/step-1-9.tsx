"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface Step1_9Props {
  onNext: (data: any) => void
  formData: any
}

export default function Step1_9({ onNext, formData }: Step1_9Props) {
  const event = formData.event || formData.selectedEvent
  const [selectedShift, setSelectedShift] = useState("")
  const [specialRequirements, setSpecialRequirements] = useState("")
  const [emergencyContact, setEmergencyContact] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedShift) {
      alert("Please select a shift")
      return
    }
    onNext({
      selectedShift,
      specialRequirements,
      emergencyContact,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Confirm Your Sign-up</h1>
        <p className="text-gray-600">Select your shift and provide any additional information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-6">
            <p className="font-semibold">{event?.name || "Weekly Food Pantry Distribution"}</p>
            <p className="text-sm text-gray-600">
              {event?.date || "Saturday, Dec 7, 2024"} • {event?.time || "9:00 AM - 1:00 PM"}
            </p>
            <p className="text-sm text-gray-600">{event?.location || "Heartfelt Hands Community Center"}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Choose your shift *
              </Label>
              <div className="space-y-3">
                {event?.shifts?.map((shift: any) => (
                  <div
                    key={shift.id}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedShift === shift.id
                        ? "border-primary bg-primary/5"
                        : "hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedShift(shift.id)}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shift"
                        value={shift.id}
                        checked={selectedShift === shift.id}
                        onChange={() => setSelectedShift(shift.id)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{shift.roleName}</p>
                        <p className="text-sm text-gray-600">
                          {shift.startTime} - {shift.endTime}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {shift.volunteersRegistered}/{shift.volunteersNeeded} spots filled
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="requirements">Special Requirements/Dietary Restrictions</Label>
              <Textarea
                id="requirements"
                placeholder="Optional: Any special requirements or dietary restrictions..."
                value={specialRequirements}
                onChange={(e) => setSpecialRequirements(e.target.value)}
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="emergency">Emergency Contact</Label>
              <Input
                id="emergency"
                type="text"
                placeholder="If not already on file, please provide emergency contact"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
              />
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-medium text-yellow-800 mb-1">
                Cancellation Policy
              </p>
              <p className="text-xs text-yellow-700">
                Please notify us at least 24 hours in advance if you need to cancel.
                Repeated no-shows may affect future event sign-ups.
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Confirm Sign-up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

