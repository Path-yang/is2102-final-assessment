"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"

interface Step2_2Props {
  onNext: (data: any) => void
  onBack?: () => void
  formData?: any
  setFormData?: (data: any) => void
}

export default function Step2_2({ onNext, onBack, formData, setFormData }: Step2_2Props) {
  const [localData, setLocalData] = useState({
    eventName: formData.eventName || "",
    programCategory: formData.programCategory || "",
    eventType: formData.eventType || "one-time",
    description: formData.description || "",
    locationType: formData.locationType || "physical",
    venueName: formData.venueName || "",
    address: formData.address || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ ...formData, ...localData })
    onNext(localData)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
        <p className="text-gray-600">Step 1: Basic Information</p>
      </div>

      <ProgressIndicator currentStep={1} totalSteps={5} />

      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="eventName">Event Name *</Label>
              <Input
                id="eventName"
                required
                value={localData.eventName}
                onChange={(e) =>
                  setLocalData({ ...localData, eventName: e.target.value })
                }
                placeholder="e.g., Weekly Food Pantry Distribution"
              />
            </div>

            <div>
              <Label htmlFor="programCategory">Program Category *</Label>
              <Select
                id="programCategory"
                required
                value={localData.programCategory}
                onChange={(e) =>
                  setLocalData({ ...localData, programCategory: e.target.value })
                }
              >
                <option value="">Select category</option>
                <option value="food-bank">Food Bank Services</option>
                <option value="environmental">Environmental Clean-ups</option>
                <option value="workshop">Community Workshops</option>
                <option value="youth">Youth Programs</option>
                <option value="elderly">Elderly Care</option>
              </Select>
            </div>

            <div>
              <Label>Event Type</Label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eventType"
                    value="one-time"
                    checked={localData.eventType === "one-time"}
                    onChange={(e) =>
                      setLocalData({ ...localData, eventType: e.target.value })
                    }
                  />
                  One-time
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eventType"
                    value="recurring"
                    checked={localData.eventType === "recurring"}
                    onChange={(e) =>
                      setLocalData({ ...localData, eventType: e.target.value })
                    }
                  />
                  Recurring
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                required
                rows={4}
                value={localData.description}
                onChange={(e) =>
                  setLocalData({ ...localData, description: e.target.value })
                }
                placeholder="Describe the event and what volunteers will be doing..."
              />
            </div>

            <div>
              <Label htmlFor="locationType">Location Type</Label>
              <Select
                id="locationType"
                value={localData.locationType}
                onChange={(e) =>
                  setLocalData({ ...localData, locationType: e.target.value })
                }
              >
                <option value="physical">Physical</option>
                <option value="virtual">Virtual</option>
                <option value="hybrid">Hybrid</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="venueName">Venue Name *</Label>
              <Input
                id="venueName"
                required
                value={localData.venueName}
                onChange={(e) =>
                  setLocalData({ ...localData, venueName: e.target.value })
                }
                placeholder="e.g., Heartfelt Hands Community Center"
              />
            </div>

            <div>
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                required
                value={localData.address}
                onChange={(e) =>
                  setLocalData({ ...localData, address: e.target.value })
                }
                placeholder="123 Volunteer Ave, Singapore"
              />
            </div>

            <div>
              <Label htmlFor="coverImage">Upload Cover Image</Label>
              <Input id="coverImage" type="file" accept="image/*" />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                Save as Draft
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

