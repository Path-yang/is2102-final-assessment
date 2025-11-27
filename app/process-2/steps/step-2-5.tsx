"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"

interface Step2_5Props {
  onNext: (data: any) => void
  onBack?: () => void
  formData?: any
  setFormData?: (data: any) => void
}

export default function Step2_5({ onNext, onBack, formData, setFormData }: Step2_5Props) {
  const [localData, setLocalData] = useState({
    registrationOpensDays: formData.registrationOpensDays || 7,
    registrationDeadlineHours: formData.registrationDeadlineHours || 2,
    enableWaitlist: formData.enableWaitlist || true,
    maxWaitlistSize: formData.maxWaitlistSize || 10,
    allowGroupSignups: formData.allowGroupSignups || false,
    requireApproval: formData.requireApproval || false,
    reminderDays: formData.reminderDays || [],
    customReminderMessage: formData.customReminderMessage || "",
    backgroundCheckRequired: formData.backgroundCheckRequired || false,
    trainingRequired: formData.trainingRequired || "",
    customRequirements: formData.customRequirements || "",
    specialInstructions: formData.specialInstructions || "",
  })

  const toggleReminderDay = (day: string) => {
    setLocalData({
      ...localData,
      reminderDays: localData.reminderDays.includes(day)
        ? localData.reminderDays.filter((d: string) => d !== day)
        : [...localData.reminderDays, day],
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
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Additional Settings</h1>
        <p className="text-gray-600">Step 4: Configure registration and notification settings</p>
      </div>

      <ProgressIndicator currentStep={4} totalSteps={5} />

      <Card>
        <CardHeader>
          <CardTitle>Registration Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="opensDays">Registration opens (days before event)</Label>
                <Input
                  id="opensDays"
                  type="number"
                  min="0"
                  value={localData.registrationOpensDays}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      registrationOpensDays: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="deadlineHours">Registration deadline (hours before event)</Label>
                <Input
                  id="deadlineHours"
                  type="number"
                  min="0"
                  value={localData.registrationDeadlineHours}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      registrationDeadlineHours: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="waitlist"
                checked={localData.enableWaitlist}
                onCheckedChange={(checked) =>
                  setLocalData({ ...localData, enableWaitlist: !!checked })
                }
              />
              <Label htmlFor="waitlist">Enable waitlist</Label>
            </div>

            {localData.enableWaitlist && (
              <div>
                <Label htmlFor="waitlistSize">Maximum waitlist size</Label>
                <Input
                  id="waitlistSize"
                  type="number"
                  min="1"
                  value={localData.maxWaitlistSize}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      maxWaitlistSize: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            )}

            <div className="flex items-center gap-2">
              <Checkbox
                id="groupSignups"
                checked={localData.allowGroupSignups}
                onCheckedChange={(checked) =>
                  setLocalData({ ...localData, allowGroupSignups: !!checked })
                }
              />
              <Label htmlFor="groupSignups">Allow group sign-ups</Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="requireApproval"
                checked={localData.requireApproval}
                onCheckedChange={(checked) =>
                  setLocalData({ ...localData, requireApproval: !!checked })
                }
              />
              <Label htmlFor="requireApproval">Require coordinator approval</Label>
            </div>

            <div>
              <Label className="mb-2 block">Send reminder</Label>
              <div className="space-y-2">
                {["1 day before", "2 days before", "1 week before"].map((day) => (
                  <div key={day} className="flex items-center gap-2">
                    <Checkbox
                      checked={localData.reminderDays.includes(day)}
                      onCheckedChange={() => toggleReminderDay(day)}
                    />
                    <Label>{day}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="reminderMessage">Custom reminder message (optional)</Label>
              <Textarea
                id="reminderMessage"
                rows={3}
                value={localData.customReminderMessage}
                onChange={(e) =>
                  setLocalData({
                    ...localData,
                    customReminderMessage: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label className="mb-2 block">Volunteer Requirements</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={localData.backgroundCheckRequired}
                    onCheckedChange={(checked) =>
                      setLocalData({
                        ...localData,
                        backgroundCheckRequired: !!checked,
                      })
                    }
                  />
                  <Label>Background check required</Label>
                </div>
                <div>
                  <Label htmlFor="training">Training required</Label>
                  <Input
                    id="training"
                    value={localData.trainingRequired}
                    onChange={(e) =>
                      setLocalData({
                        ...localData,
                        trainingRequired: e.target.value,
                      })
                    }
                    placeholder="e.g., Food Safety Certification"
                  />
                </div>
                <div>
                  <Label htmlFor="customReq">Custom requirements</Label>
                  <Textarea
                    id="customReq"
                    rows={2}
                    value={localData.customRequirements}
                    onChange={(e) =>
                      setLocalData({
                        ...localData,
                        customRequirements: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="instructions">Special Instructions for Volunteers</Label>
              <Textarea
                id="instructions"
                rows={4}
                value={localData.specialInstructions}
                onChange={(e) =>
                  setLocalData({
                    ...localData,
                    specialInstructions: e.target.value,
                  })
                }
                placeholder="Parking information, what to bring, etc."
              />
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

