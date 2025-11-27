"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calendar, Users, Clock, MessageSquare, AlertTriangle, FileX, MapPin } from "lucide-react"

interface Step2_1Props {
  onNext: () => void
}

export default function Step2_1({ onNext }: Step2_1Props) {
  const [showIncompleteDialog, setShowIncompleteDialog] = useState(false)
  const [showConflictDialog, setShowConflictDialog] = useState(false)

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="px-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Program Coordinator Portal</h1>
        <p className="text-sm sm:text-base text-gray-600">Welcome, Jane Smith - Food Bank Program</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-gray-600 mt-1">Active Events</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">47</div>
              <div className="text-sm text-gray-600 mt-1">Volunteers This Month</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">12</div>
              <div className="text-sm text-gray-600 mt-1">Pending Hour Approvals</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-gray-600 mt-1">Upcoming Shifts</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Button onClick={onNext} size="lg" className="flex-1 w-full sm:w-auto">
          Create New Event
        </Button>
        <Button variant="outline" size="lg" className="flex-1 sm:flex-none">Manage Events</Button>
        <Button variant="outline" size="lg" className="flex-1 sm:flex-none">Approve Hours</Button>
        <Button variant="outline" size="lg" className="flex-1 sm:flex-none">Message Volunteers</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-semibold">Food Bank</p>
                <p className="text-sm text-gray-600">Active program</p>
              </div>
              <Badge variant="success">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-semibold">Holiday Food Drive</p>
                <p className="text-sm text-gray-600">Upcoming program</p>
              </div>
              <Badge variant="warning">Upcoming</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>John Doe signed up for Food Pantry Distribution</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span>5 volunteers checked in for today's event</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span>New hour submission from Sarah Lee</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error messages at bottom */}
      <div className="space-y-2 sm:space-y-3">
        {/* Incomplete Information Error */}
        <div 
          className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
          onClick={() => setShowIncompleteDialog(true)}
        >
          <p className="text-xs sm:text-sm font-medium text-red-800 mb-1">
            ⚠️ Incomplete Information
          </p>
          <p className="text-xs text-red-700">
            Some required information is missing. Please review and complete all required fields.
          </p>
        </div>

        {/* Conflicting Event Location Error */}
        <div 
          className="p-3 sm:p-4 bg-orange-50 border border-orange-200 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors"
          onClick={() => setShowConflictDialog(true)}
        >
          <p className="text-xs sm:text-sm font-medium text-orange-800 mb-1">
            ⚠️ Conflicting Event Location
          </p>
          <p className="text-xs text-orange-700">
            The selected location conflicts with another scheduled event. Click to review and override if needed.
          </p>
        </div>
      </div>

      {/* Incomplete Information Dialog */}
      <Dialog open={showIncompleteDialog} onOpenChange={setShowIncompleteDialog}>
        <DialogContent onClose={() => setShowIncompleteDialog(false)}>
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <FileX className="w-6 h-6 text-red-600" />
              <DialogTitle>Incomplete Information</DialogTitle>
            </div>
            <DialogDescription>
              Some required information is missing from your event setup. Please review and complete all required fields before proceeding.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-semibold text-red-900 mb-2">Missing Required Fields:</p>
              <ul className="space-y-1 text-sm text-red-800 list-disc list-inside">
                <li>Event description</li>
                <li>Volunteer capacity for at least one shift</li>
                <li>Emergency contact information</li>
                <li>Required skills or qualifications</li>
              </ul>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> You cannot publish this event until all required fields are completed.
              </p>
            </div>
            <Button 
              onClick={() => setShowIncompleteDialog(false)} 
              className="w-full"
            >
              I Understand
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Conflicting Event Location Dialog */}
      <Dialog open={showConflictDialog} onOpenChange={setShowConflictDialog}>
        <DialogContent onClose={() => setShowConflictDialog(false)}>
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-orange-600" />
              <DialogTitle>Conflicting Event Location</DialogTitle>
            </div>
            <DialogDescription>
              The selected location conflicts with another scheduled event. Please review the details below.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm font-semibold text-orange-900 mb-3">Conflicting Events:</p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border border-orange-200">
                  <p className="text-sm font-medium text-orange-900 mb-1">Your Event</p>
                  <p className="text-xs text-orange-700">Food Pantry Distribution</p>
                  <p className="text-xs text-orange-700">Saturday, Dec 7, 2024 • 9:00 AM - 1:00 PM</p>
                  <p className="text-xs text-orange-700">Heartfelt Hands Community Center</p>
                </div>
                <div className="p-3 bg-white rounded border border-orange-200">
                  <p className="text-sm font-medium text-orange-900 mb-1">Existing Event</p>
                  <p className="text-xs text-orange-700">Community Garden Cleanup</p>
                  <p className="text-xs text-orange-700">Saturday, Dec 7, 2024 • 8:00 AM - 12:00 PM</p>
                  <p className="text-xs text-orange-700">Heartfelt Hands Community Center</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Warning:</strong> Both events are scheduled at the same location with overlapping times. This may cause logistical issues.
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => setShowConflictDialog(false)} 
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  alert("Override confirmed - Event will be created despite location conflict")
                  setShowConflictDialog(false)
                }}
                className="flex-1"
                variant="destructive"
              >
                Override & Continue
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

