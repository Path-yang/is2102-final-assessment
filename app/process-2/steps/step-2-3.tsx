"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"

interface Step2_3Props {
  onNext: (data: any) => void
  onBack?: () => void
  formData?: any
  setFormData?: (data: any) => void
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function Step2_3({ onNext, onBack, formData, setFormData }: Step2_3Props) {
  const [localData, setLocalData] = useState({
    recurrencePattern: formData.recurrencePattern || "weekly",
    daysOfWeek: formData.daysOfWeek || [],
    startDate: formData.startDate || "",
    endDate: formData.endDate || "",
    noEndDate: formData.noEndDate || false,
    eventTimeStart: formData.eventTimeStart || "",
    eventTimeEnd: formData.eventTimeEnd || "",
  })

  const toggleDay = (day: string) => {
    setLocalData({
      ...localData,
      daysOfWeek: localData.daysOfWeek.includes(day)
        ? localData.daysOfWeek.filter((d: string) => d !== day)
        : [...localData.daysOfWeek, day],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData?.({ ...formData, ...localData })
    onNext(localData)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Schedule & Recurrence</h1>
        <p className="text-gray-600">Step 2: Set up when this event will occur</p>
      </div>

      <ProgressIndicator currentStep={2} totalSteps={5} />

      <Card>
        <CardHeader>
          <CardTitle>Recurrence Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="recurrencePattern">Recurrence Pattern</Label>
              <Select
                id="recurrencePattern"
                value={localData.recurrencePattern}
                onChange={(e) =>
                  setLocalData({ ...localData, recurrencePattern: e.target.value })
                }
              >
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </Select>
            </div>

            <div>
              <Label>Repeat on</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {daysOfWeek.map((day) => (
                  <label key={day} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={localData.daysOfWeek.includes(day)}
                      onCheckedChange={() => toggleDay(day)}
                    />
                    <span>{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="startDate">Start Date *</Label>
              <Input
                id="startDate"
                type="date"
                required
                value={localData.startDate}
                onChange={(e) =>
                  setLocalData({ ...localData, startDate: e.target.value })
                }
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="noEndDate"
                checked={localData.noEndDate}
                onCheckedChange={(checked) =>
                  setLocalData({ ...localData, noEndDate: !!checked })
                }
              />
              <Label htmlFor="noEndDate">No end date (ongoing)</Label>
            </div>

            {!localData.noEndDate && (
              <div>
                <Label htmlFor="endDate">End Date *</Label>
                <Input
                  id="endDate"
                  type="date"
                  required={!localData.noEndDate}
                  value={localData.endDate}
                  onChange={(e) =>
                    setLocalData({ ...localData, endDate: e.target.value })
                  }
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="eventTimeStart">Event Start Time *</Label>
                <Input
                  id="eventTimeStart"
                  type="time"
                  required
                  value={localData.eventTimeStart}
                  onChange={(e) =>
                    setLocalData({ ...localData, eventTimeStart: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="eventTimeEnd">Event End Time *</Label>
                <Input
                  id="eventTimeEnd"
                  type="time"
                  required
                  value={localData.eventTimeEnd}
                  onChange={(e) =>
                    setLocalData({ ...localData, eventTimeEnd: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900">
                Preview: This will create 12 event instances from Jan 6 to Mar 30
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Next
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

