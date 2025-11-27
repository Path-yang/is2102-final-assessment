"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, X, AlertCircle, Clock } from "lucide-react"

export default function CoordinatorView() {
  const [currentStep, setCurrentStep] = useState(1)
  const [rejectionReason, setRejectionReason] = useState("")

  if (currentStep === 1) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Coordinator Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-900">12 Pending Approvals</span>
              </div>
            </div>

            <Button onClick={() => setCurrentStep(2)} size="lg" className="w-full">
              Approve Hours
            </Button>

            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Recent Submissions</h3>
              <div className="space-y-3">
                {[
                  { name: "John Doe", event: "Food Pantry", hours: 4.5, date: "Dec 2" },
                  { name: "Jane Smith", event: "Clean-up", hours: 3, date: "Dec 1" },
                ].map((submission, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2.5 sm:p-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm sm:text-base font-medium">{submission.name}</p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {submission.event} • {submission.hours} hours • {submission.date}
                        </p>
                      </div>
                      <Badge variant="warning" className="text-xs">Pending</Badge>
                    </div>
                    <div className="px-2.5 sm:px-3 pb-2.5 sm:pb-3">
                      <Button 
                        onClick={() => setCurrentStep(2)} 
                        size="sm" 
                        className="w-full sm:w-auto"
                      >
                        Approve Hours
                      </Button>
                    </div>
                  </div>
                ))}
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Hour Approval Queue</h1>
          <p className="text-sm sm:text-base text-gray-600">Review and approve volunteer hour submissions</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Pending Approvals</CardTitle>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  id: 1,
                  name: "John Doe",
                  event: "Food Pantry Distribution",
                  date: "Dec 2, 2024",
                  hours: 4.5,
                  submitted: "Dec 2, 2024",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => setCurrentStep(3)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.event}</p>
                      <p className="text-sm text-gray-600">
                        {item.date} • {item.hours} hours • Submitted: {item.submitted}
                      </p>
                    </div>
                    <Button onClick={() => setCurrentStep(3)}>Review</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Approve All Visible
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 3) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Review Hour Entry</h1>
          <p className="text-gray-600">Verify volunteer hours and approve or reject</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Volunteer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-600">john@example.com</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-semibold">Food Pantry Distribution</p>
              <p className="text-sm text-gray-600">Dec 2, 2024</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submitted Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Check-in</Label>
                <p className="text-lg font-semibold">9:00 AM</p>
              </div>
              <div>
                <Label>Check-out</Label>
                <p className="text-lg font-semibold">1:30 PM</p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-semibold text-blue-900">Total: 4.5 hours</p>
            </div>
            <div>
              <Label>Tasks</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge>Food sorting</Badge>
                <Badge>Distribution</Badge>
              </div>
            </div>
            <div>
              <Label>Notes from volunteer</Label>
              <p className="text-sm text-gray-600 mt-1">Great experience!</p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-900">
                  Volunteer was checked in via QR
                </span>
              </div>
              <p className="text-xs text-green-700 mt-1">
                Check-in timestamp: Dec 2, 2024 9:02 AM
              </p>
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => setCurrentStep(4)}
                className="flex-1"
                variant="destructive"
              >
                <X className="w-4 h-4 mr-2" />
                Reject
              </Button>
              <Button
                onClick={() => setCurrentStep(6)}
                variant="outline"
                className="flex-1"
              >
                Request Clarification
              </Button>
              <Button onClick={() => setCurrentStep(5)} className="flex-1">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Approve
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Step 4: Rejection Reason Input
  if (currentStep === 4) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Reject Hour Entry</h1>
          <p className="text-gray-600">Please provide a reason for rejecting this submission</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Volunteer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-600">Food Pantry Distribution • Dec 2, 2024 • 4.5 hours</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rejection Reason *</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="rejectionReason">Please explain why this submission is being rejected</Label>
              <Textarea
                id="rejectionReason"
                rows={5}
                placeholder="e.g., Hours do not match event duration, volunteer was not checked in, incorrect event selected..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="mt-2"
                required
              />
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> The volunteer will receive this rejection reason via email notification.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(3)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (rejectionReason.trim()) {
                    setCurrentStep(7)
                  } else {
                    alert("Please provide a rejection reason")
                  }
                }}
                variant="destructive"
                className="flex-1"
              >
                <X className="w-4 h-4 mr-2" />
                Confirm Rejection
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Step 5: Approval Success
  if (currentStep === 5) {
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
              <h1 className="text-2xl font-bold">Hours Approved</h1>
              <p className="text-gray-600">Volunteer has been notified</p>
              <Button onClick={() => setCurrentStep(2)} className="w-full">
                Next Pending Approval
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Step 6: Request Clarification
  if (currentStep === 6) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold">Clarification Requested</h1>
              <p className="text-gray-600">The volunteer has been notified to provide additional information</p>
              <Button onClick={() => setCurrentStep(2)} className="w-full">
                Back to Queue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Step 7: Rejection Success
  if (currentStep === 7) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-10 h-10 text-red-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold">Hours Rejected</h1>
              <p className="text-gray-600">The volunteer has been notified with your rejection reason</p>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-left">
                <p className="text-xs font-medium text-gray-700 mb-1">Rejection Reason:</p>
                <p className="text-sm text-gray-600">{rejectionReason}</p>
              </div>
              <Button onClick={() => {
                setRejectionReason("")
                setCurrentStep(2)
              }} className="w-full">
                Next Pending Approval
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}

