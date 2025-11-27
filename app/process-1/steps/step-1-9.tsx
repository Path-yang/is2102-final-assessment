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
  formData?: any
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
    <div className="space-y-4 sm:space-y-6">
      <div className="px-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Confirm Your Sign-up</h1>
        <p className="text-sm sm:text-base text-gray-600">Select your shift and provide any additional information</p>
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Event Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            <p className="text-sm sm:text-base font-semibold break-words">{event?.name || "Weekly Food Pantry Distribution"}</p>
            <p className="text-xs sm:text-sm text-gray-600">
              {event?.date || "Saturday, Dec 7, 2024"} • {event?.time || "9:00 AM - 1:00 PM"}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 break-words">{event?.location || "Heartfelt Hands Community Center"}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <Label className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 block">
                Choose your shift *
              </Label>
              <div className="space-y-2 sm:space-y-3">
                {event?.shifts?.map((shift: any) => (
                  <div
                    key={shift.id}
                    className={`p-3 sm:p-4 border rounded-lg cursor-pointer touch-target ${
                      selectedShift === shift.id
                        ? "border-primary bg-primary/5"
                        : "hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedShift(shift.id)}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <input
                        type="radio"
                        name="shift"
                        value={shift.id}
                        checked={selectedShift === shift.id}
                        onChange={() => setSelectedShift(shift.id)}
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base font-medium">{shift.roleName}</p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {shift.startTime} - {shift.endTime}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">
                          {shift.volunteersRegistered}/{shift.volunteersNeeded} spots filled
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="requirements" className="text-sm sm:text-base">Special Requirements/Dietary Restrictions</Label>
              <Textarea
                id="requirements"
                placeholder="Optional: Any special requirements or dietary restrictions..."
                value={specialRequirements}
                onChange={(e) => setSpecialRequirements(e.target.value)}
                rows={3}
                className="mt-1.5 sm:mt-2"
              />
            </div>

            <div>
              <Label htmlFor="emergency" className="text-sm sm:text-base">Emergency Contact</Label>
              <Input
                id="emergency"
                type="text"
                placeholder="If not already on file, please provide emergency contact"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
                className="mt-1.5 sm:mt-2"
              />
            </div>

            <div className="p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs sm:text-sm font-medium text-yellow-800 mb-1">
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

