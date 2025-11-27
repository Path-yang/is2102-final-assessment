"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"
import { Plus, Trash2 } from "lucide-react"

interface Step2_4Props {
  onNext: (data: any) => void
  onBack?: () => void
  formData?: any
  setFormData?: (data: any) => void
}

export default function Step2_4({ onNext, onBack, formData, setFormData }: Step2_4Props) {
  const [shifts, setShifts] = useState(
    formData.shifts || [
      {
        id: "1",
        roleName: "Food Sorter",
        startTime: "09:00",
        endTime: "11:00",
        volunteersNeeded: 5,
        requiredSkills: [],
        minimumAge: 16,
        description: "Sort and organize donated food items",
      },
      {
        id: "2",
        roleName: "Distribution Helper",
        startTime: "10:00",
        endTime: "13:00",
        volunteersNeeded: 10,
        requiredSkills: [],
        minimumAge: 14,
        description: "Help distribute food packages to families",
      },
    ]
  )

  const updateShift = (id: string, field: string, value: any) => {
    setShifts(
      shifts.map((shift: any) =>
        shift.id === id ? { ...shift, [field]: value } : shift
      )
    )
  }

  const addShift = () => {
    setShifts([
      ...shifts,
      {
        id: Date.now().toString(),
        roleName: "",
        startTime: "",
        endTime: "",
        volunteersNeeded: 1,
        requiredSkills: [],
        minimumAge: 16,
        description: "",
      },
    ])
  }

  const removeShift = (id: string) => {
    setShifts(shifts.filter((shift: any) => shift.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const totalVolunteers = shifts.reduce(
      (sum: number, shift: any) => sum + shift.volunteersNeeded,
      0
    )
    setFormData?.({ ...formData, shifts, totalVolunteers })
    onNext({ shifts, totalVolunteers })
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Shift Configuration</h1>
        <p className="text-gray-600">Step 3: Define roles and shifts for this event</p>
      </div>

      <ProgressIndicator currentStep={3} totalSteps={5} />

      <Card>
        <CardHeader>
          <CardTitle>Event Shifts</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {shifts.map((shift: any, index: number) => (
              <Card key={shift.id} className="p-4">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="font-semibold">Shift {index + 1}</h3>
                  {shifts.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeShift(shift.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Role Name *</Label>
                    <Input
                      value={shift.roleName}
                      onChange={(e) =>
                        updateShift(shift.id, "roleName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Volunteers Needed *</Label>
                    <Input
                      type="number"
                      min="1"
                      value={shift.volunteersNeeded}
                      onChange={(e) =>
                        updateShift(
                          shift.id,
                          "volunteersNeeded",
                          parseInt(e.target.value)
                        )
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Start Time *</Label>
                    <Input
                      type="time"
                      value={shift.startTime}
                      onChange={(e) =>
                        updateShift(shift.id, "startTime", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>End Time *</Label>
                    <Input
                      type="time"
                      value={shift.endTime}
                      onChange={(e) =>
                        updateShift(shift.id, "endTime", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Minimum Age *</Label>
                    <Input
                      type="number"
                      min="1"
                      value={shift.minimumAge}
                      onChange={(e) =>
                        updateShift(
                          shift.id,
                          "minimumAge",
                          parseInt(e.target.value)
                        )
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Required Skills</Label>
                    <Input
                      placeholder="e.g., Food Handling"
                      value={shift.requiredSkills?.join(", ") || ""}
                      onChange={(e) =>
                        updateShift(
                          shift.id,
                          "requiredSkills",
                          e.target.value.split(", ").filter(Boolean)
                        )
                      }
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label>Description</Label>
                  <Textarea
                    value={shift.description}
                    onChange={(e) =>
                      updateShift(shift.id, "description", e.target.value)
                    }
                    rows={2}
                  />
                </div>
              </Card>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addShift}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Another Shift
            </Button>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold">
                Total volunteers needed per event:{" "}
                {shifts.reduce(
                  (sum: number, shift: any) => sum + shift.volunteersNeeded,
                  0
                )}
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

