"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"

interface Step1_4Props {
  onNext: (data: any) => void
  onBack?: () => void
  formData?: any
  setFormData?: (data: any) => void
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const timeSlots = [
  { label: "Morning (8AM-12PM)", key: "morning" },
  { label: "Afternoon (12PM-5PM)", key: "afternoon" },
  { label: "Evening (5PM-9PM)", key: "evening" },
]

export default function Step1_4({ onNext, onBack, formData, setFormData }: Step1_4Props) {
  const [localData, setLocalData] = useState({
    availability: formData.availability || {},
    commitmentLevel: formData.commitmentLevel || "",
    referralSource: formData.referralSource || "",
    termsAccepted: formData.termsAccepted || false,
  })

  const toggleAvailability = (day: string, slot: string) => {
    setLocalData({
      ...localData,
      availability: {
        ...localData.availability,
        [day]: {
          ...localData.availability[day],
          [slot]: !localData.availability[day]?.[slot],
        },
      },
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!localData.termsAccepted) {
      alert("Please accept the terms and conditions")
      return
    }
    setFormData({ ...formData, ...localData })
    onNext(localData)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Availability Preferences</h1>
        <p className="text-gray-600">When are you available to volunteer?</p>
      </div>

      <ProgressIndicator currentStep={3} totalSteps={3} />

      <Card>
        <CardHeader>
          <CardTitle>Weekly Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Select your available times
              </Label>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 text-left">Time / Day</th>
                      {days.map((day) => (
                        <th key={day} className="border p-2 text-center">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((slot) => (
                      <tr key={slot.key}>
                        <td className="border p-2 text-sm">{slot.label}</td>
                        {days.map((day) => (
                          <td key={day} className="border p-2 text-center">
                            <Checkbox
                              checked={
                                localData.availability[day]?.[slot.key] || false
                              }
                              onCheckedChange={() =>
                                toggleAvailability(day, slot.key)
                              }
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <Label htmlFor="commitment" className="text-base font-semibold mb-2 block">
                Preferred Commitment Level
              </Label>
              <Select
                id="commitment"
                value={localData.commitmentLevel}
                onChange={(e) =>
                  setLocalData({ ...localData, commitmentLevel: e.target.value })
                }
                required
              >
                <option value="">Select commitment level</option>
                <option value="one-time">One-time events only</option>
                <option value="regular">Regular weekly commitment</option>
                <option value="flexible">Flexible/As available</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="referral" className="text-base font-semibold mb-2 block">
                How did you hear about us?
              </Label>
              <Select
                id="referral"
                value={localData.referralSource}
                onChange={(e) =>
                  setLocalData({ ...localData, referralSource: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="social-media">Social Media</option>
                <option value="friend">Friend/Family</option>
                <option value="website">Website</option>
                <option value="event">Community Event</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={localData.termsAccepted}
                onCheckedChange={(checked) =>
                  setLocalData({ ...localData, termsAccepted: !!checked })
                }
              />
              <Label htmlFor="terms" className="text-sm cursor-pointer">
                I accept the terms and conditions *
              </Label>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Complete Registration
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

