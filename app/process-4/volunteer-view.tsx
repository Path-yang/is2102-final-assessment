"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle2, AlertCircle } from "lucide-react"

export default function VolunteerView() {
  const [currentStep, setCurrentStep] = useState(1)

  if (currentStep === 1) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Volunteer Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">20.5</div>
                <div className="text-sm text-gray-600 mt-1">Total Hours</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-gray-600 mt-1">Events Attended</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-gray-600 mt-1">Pending Hours</div>
              </div>
            </div>

            <div>
              <Button onClick={() => setCurrentStep(2)} size="lg" className="w-full">
                Log Hours
              </Button>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Recent Activity</h3>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2.5 sm:p-3 border rounded-lg">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm sm:text-base font-medium break-words">Food Pantry Distribution</p>
                    <p className="text-xs sm:text-sm text-gray-600">Dec 2, 2024</p>
                  </div>
                  <Badge variant="warning" className="text-xs">Awaiting log</Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Pending Hours</h3>
              <div className="p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs sm:text-sm font-medium text-yellow-900">
                  4 hours awaiting approval
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="px-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Log Your Volunteer Hours</h1>
          <p className="text-sm sm:text-base text-gray-600">Select an event to log hours for</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Completed Events Awaiting Hour Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => setCurrentStep(3)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Food Pantry Distribution</p>
                    <p className="text-sm text-gray-600">Date attended: Dec 2, 2024</p>
                    <p className="text-sm text-gray-600">Shift: Distribution (9:00 AM - 1:00 PM)</p>
                    <p className="text-sm text-gray-600">Expected hours: 4 hours</p>
                  </div>
                  <Badge variant="secondary">Awaiting your log</Badge>
                </div>
                <Button className="mt-3" onClick={() => setCurrentStep(3)}>
                  Log Hours
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Note: Hours must be logged within 7 days of event
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 3) {
    const [formData, setFormData] = useState({
      checkInTime: "09:00",
      checkOutTime: "13:30",
      tasks: [] as string[],
      notes: "",
    })

    const toggleTask = (task: string) => {
      setFormData({
        ...formData,
        tasks: formData.tasks.includes(task)
          ? formData.tasks.filter((t) => t !== task)
          : [...formData.tasks, task],
      })
    }

    const calculateHours = () => {
      const [inH, inM] = formData.checkInTime.split(":").map(Number)
      const [outH, outM] = formData.checkOutTime.split(":").map(Number)
      const totalMinutes = (outH * 60 + outM) - (inH * 60 + inM)
      const hours = Math.floor(totalMinutes / 60)
      const minutes = totalMinutes % 60
      return `${hours} hours ${minutes} minutes`
    }

    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Hour Entry Form</h1>
          <p className="text-gray-600">Enter your volunteer hours for this event</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Event Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-3 sm:mb-4 sm:mb-6">
              <p className="font-semibold">Food Pantry Distribution</p>
              <p className="text-sm text-gray-600">Dec 2, 2024 • Distribution Shift</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setCurrentStep(4)
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkIn">Check-in Time *</Label>
                  <Input
                    id="checkIn"
                    type="time"
                    required
                    value={formData.checkInTime}
                    onChange={(e) =>
                      setFormData({ ...formData, checkInTime: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="checkOut">Check-out Time *</Label>
                  <Input
                    id="checkOut"
                    type="time"
                    required
                    value={formData.checkOutTime}
                    onChange={(e) =>
                      setFormData({ ...formData, checkOutTime: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm font-medium text-blue-900">
                  Calculated hours: {calculateHours()}
                </p>
              </div>

              <div>
                <Label className="mb-2 block">Tasks Performed *</Label>
                <div className="space-y-2">
                  {["Food sorting", "Distribution", "Setup", "Cleanup"].map((task) => (
                    <div key={task} className="flex items-center gap-2">
                      <Checkbox
                        checked={formData.tasks.includes(task)}
                        onCheckedChange={() => toggleTask(task)}
                      />
                      <Label>{task}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Notes/Comments (optional)</Label>
                <Textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>

              <div>
                <Label htmlFor="feedback">Anything we should know?</Label>
                <Textarea
                  id="feedback"
                  rows={2}
                  placeholder="Optional feedback..."
                />
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" className="flex-1">
                  Save as Draft
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Hours
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 4) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold">Hours Submitted Successfully!</h1>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2 text-left">
                    <p className="font-semibold">Event: Food Pantry Distribution</p>
                    <p className="text-sm text-gray-600">Date: Dec 2, 2024</p>
                    <p className="text-sm text-gray-600">Hours: 4.5 hours</p>
                    <Badge variant="warning" className="mt-2">
                      Pending Coordinator Approval
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm text-gray-600">
                Your coordinator will review within 48 hours
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                  Log More Hours
                </Button>
                <Button onClick={() => setCurrentStep(1)} className="flex-1">
                  Back to Dashboard
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 5) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h1 className="text-xl font-bold">Your hours have been approved!</h1>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-lg font-semibold text-green-900">
                  You've now contributed 24.5 hours!
                </p>
                <p className="text-sm text-green-700 mt-1">
                  5 more hours until Silver Volunteer badge
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}

