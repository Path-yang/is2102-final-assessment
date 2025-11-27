"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AlertTriangle, Calendar, Clock, CheckCircle2 } from "lucide-react"

interface Step1_9Props {
  onNext: (data: any) => void
  formData?: any
}

export default function Step1_9({ onNext, formData }: Step1_9Props) {
  const event = formData.event || formData.selectedEvent
  const [selectedShift, setSelectedShift] = useState("")
  const [specialRequirements, setSpecialRequirements] = useState("")
  const [emergencyContact, setEmergencyContact] = useState("")
  const [showConflictDialog, setShowConflictDialog] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedShift) {
      alert("Please select a shift")
      return
    }
    setShowConfirmDialog(true)
  }

  const handleConfirmSignup = () => {
    setShowConfirmDialog(false)
    // Go to intermediate confirmation page (step-1-9b)
    onNext({
      selectedShift,
      specialRequirements,
      emergencyContact,
      goToConfirmPage: true,
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
              Sign up
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Mock error message - for display only */}
      <div 
        className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
        onClick={() => setShowConflictDialog(true)}
      >
        <p className="text-xs sm:text-sm font-medium text-red-800 mb-1">
          ⚠️ Schedule Conflict Detected
        </p>
        <p className="text-xs text-red-700">
          You have a conflicting schedule with other volunteer activities. Please reselect a time slot.
        </p>
      </div>

      <Dialog open={showConflictDialog} onOpenChange={setShowConflictDialog}>
        <DialogContent onClose={() => setShowConflictDialog(false)}>
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <DialogTitle>Schedule Conflict Detected</DialogTitle>
            </div>
            <DialogDescription>
              You have a conflicting schedule with other volunteer activities. Please review the details below and reselect a time slot.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-semibold text-red-900 mb-2">Conflicting Activities:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-red-900">Community Garden Cleanup</p>
                    <p className="text-xs text-red-700">Saturday, Dec 7, 2024 • 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-red-900">Selected Event</p>
                    <p className="text-xs text-red-700">
                      {event?.name || "Weekly Food Pantry Distribution"} • {event?.date || "Saturday, Dec 7, 2024"} • {event?.time || "9:00 AM - 1:00 PM"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> These events overlap in time. Please choose a different shift or cancel one of your existing commitments.
              </p>
            </div>
            <Button 
              onClick={() => setShowConflictDialog(false)} 
              className="w-full"
            >
              I Understand
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent onClose={() => setShowConfirmDialog(false)}>
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <DialogTitle>Are you sure you want to sign up?</DialogTitle>
            </div>
            <DialogDescription>
              Please confirm that you want to sign up for this event. You will receive a confirmation email shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm font-semibold mb-2">Event Details:</p>
              <div className="space-y-1 text-sm text-gray-700">
                <p><strong>Event:</strong> {event?.name || "Weekly Food Pantry Distribution"}</p>
                <p><strong>Date & Time:</strong> {event?.date || "Saturday, Dec 7, 2024"} • {event?.time || "9:00 AM - 1:00 PM"}</p>
                <p><strong>Location:</strong> {event?.location || "Heartfelt Hands Community Center"}</p>
                {selectedShift && event?.shifts?.find((s: any) => s.id === selectedShift) && (
                  <p><strong>Selected Shift:</strong> {event.shifts.find((s: any) => s.id === selectedShift).roleName}</p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => setShowConfirmDialog(false)} 
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleConfirmSignup} 
                className="flex-1"
              >
                Yes, Sign Up
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

