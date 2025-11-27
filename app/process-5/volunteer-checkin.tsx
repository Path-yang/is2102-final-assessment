"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MapPin, Clock, Star, Share2, AlertCircle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function VolunteerCheckin() {
  const [currentStep, setCurrentStep] = useState(1)

  if (currentStep === 1) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
              <p className="font-semibold text-blue-900">You have an event today!</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Food Pantry Distribution</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        9:00 AM - 1:00 PM
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Heartfelt Hands Community Center
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => setCurrentStep(2)} size="lg" className="w-full">
                    Check In
                  </Button>
                  <button className="text-sm text-primary hover:underline w-full text-center">
                    View Event Details
                  </button>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold">QR Scanner</h1>
              <div className="relative">
                <div className="w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="border-4 border-white rounded-lg w-64 h-64 flex items-center justify-center">
                    <p className="text-white text-sm">Camera View</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <Button variant="outline" size="sm">Flash</Button>
                  <Button variant="outline" size="sm">Switch Camera</Button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Point your camera at the check-in QR code
              </p>
              <button
                onClick={() => setCurrentStep(3)}
                className="text-sm text-primary hover:underline"
              >
                Having trouble? Enter code manually
              </button>
              <Button onClick={() => setCurrentStep(3)} className="w-full">
                Simulate QR Scan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 3) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-xl font-bold">Verifying your location...</h1>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center relative">
                <div className="absolute top-4 left-4 bg-red-500 w-4 h-4 rounded-full border-2 border-white"></div>
                <div className="absolute bottom-4 right-4 bg-blue-500 w-4 h-4 rounded-full border-2 border-white"></div>
                <p className="text-gray-500">Map View</p>
              </div>
              <p className="text-sm text-gray-600">You are 50 meters from the venue</p>
              <Button onClick={() => setCurrentStep(4)} className="w-full">
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 4) {
    return (
      <div className="space-y-6">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Welcome to Food Pantry Distribution!
                </h1>
                <p className="text-gray-600">Check-in successful</p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Check-in time: 9:02 AM</span>
                    </div>
                    <div>
                      <p className="font-semibold">Your shift: Distribution Helper</p>
                      <p className="text-sm text-gray-600">9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="font-semibold mb-3 text-left">What to do now:</h3>
                <div className="space-y-2 text-left">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Report to: Main Hall, Table 5</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Your supervisor: Jane Smith</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Today's tasks: Food distribution</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setCurrentStep(5)} className="flex-1">
                  View Event Schedule
                </Button>
                <Button variant="outline" className="flex-1">
                  I have a question
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
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
              <p className="font-semibold text-blue-900">Active Event</p>
            </div>
            <div className="text-center mb-4">
              <p className="text-2xl font-bold">2 hours 15 minutes</p>
              <p className="text-sm text-gray-600">into your shift</p>
            </div>
            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                Check Out Early
              </Button>
              <Button variant="outline" className="w-full">
                Report Issue
              </Button>
              <Button onClick={() => setCurrentStep(6)} className="w-full">
                Continue to Check-out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 6) {
    const [rating, setRating] = useState(0)
    const [feedback, setFeedback] = useState("")

    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Ready to check out?</h1>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Checked in:</span>
                      <span className="text-sm font-medium">9:02 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current time:</span>
                      <span className="text-sm font-medium">1:05 PM</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="font-semibold">Hours:</span>
                      <span className="font-bold text-primary">4 hours 3 minutes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <Label className="mb-2 block">How was your experience?</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-2"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="mb-2 block">Quick feedback</Label>
                <div className="flex flex-wrap gap-2">
                  {["Great team", "Well organized", "Would do again"].map((tag) => (
                    <Badge
                      key={tag}
                      variant={feedback.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() =>
                        setFeedback(
                          feedback.includes(tag)
                            ? feedback.replace(tag, "").trim()
                            : feedback + " " + tag
                        )
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="comments">Comments (optional)</Label>
                <Textarea id="comments" rows={3} placeholder="Share your thoughts..." />
              </div>

              <Button onClick={() => setCurrentStep(7)} className="w-full" size="lg">
                Confirm Check-out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 7) {
    return (
      <div className="space-y-6">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Thanks for volunteering today!
                </h1>
                <p className="text-gray-600">Your hours have been automatically logged</p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Hours auto-logged:</span>
                      <span className="font-semibold">4 hours</span>
                    </div>
                    <Badge variant="warning" className="mt-2">
                      Pending coordinator approval
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm font-medium text-green-900">
                  Impact: You helped serve approximately 50 families today!
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">You've now completed 8 events!</p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              <Button onClick={() => setCurrentStep(1)} className="w-full">
                Back to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}

