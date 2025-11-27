"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Users, User } from "lucide-react"

interface Step1_8Props {
  onNext: (data: any) => void
  formData?: any
}

export default function Step1_8({ onNext, formData }: Step1_8Props) {
  const event = formData.selectedEvent || {
    name: "Weekly Food Pantry Distribution",
    program: "Food Bank Services",
    date: "Saturday, Dec 7, 2024",
    time: "9:00 AM - 1:00 PM",
    duration: 4,
    location: "Heartfelt Hands Community Center, 123 Volunteer Ave",
    shifts: [
      {
        id: "shift-1",
        roleName: "Morning Setup",
        startTime: "8:00 AM",
        endTime: "10:00 AM",
        volunteersRegistered: 2,
        volunteersNeeded: 5,
      },
      {
        id: "shift-2",
        roleName: "Distribution",
        startTime: "9:00 AM",
        endTime: "1:00 PM",
        volunteersRegistered: 8,
        volunteersNeeded: 15,
      },
      {
        id: "shift-3",
        roleName: "Cleanup",
        startTime: "12:30 PM",
        endTime: "1:30 PM",
        volunteersRegistered: 3,
        volunteersNeeded: 5,
      },
    ],
    coordinator: {
      name: "Jane Smith",
      email: "jane@heartfelthands.org",
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
        <Badge>{event.program}</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium">Date & Time</p>
              <p className="text-sm text-gray-600">
                {event.date} • {event.time} ({event.duration} hours)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-gray-600">{event.location}</p>
              <div className="mt-2 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map Preview</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Description</p>
            <p className="text-sm text-gray-600">
              Help distribute food packages to families in need at our community
              center. This is a great opportunity to make a direct impact in your
              community.
            </p>
          </div>

          <div>
            <p className="font-medium mb-2">What you'll be doing</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Sort and organize food items</li>
              <li>Assist with food distribution</li>
              <li>Help families with their selections</li>
              <li>Clean up after the event</li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-2">Requirements</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Minimum age: 16</li>
              <li>• Skills needed: Food Handling (preferred, not required)</li>
              <li>• Physical requirements: Able to stand for extended periods</li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-3">Available Shifts</p>
            <div className="space-y-3">
              {event.shifts.map((shift: any) => (
                <div
                  key={shift.id}
                  className="p-3 border rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{shift.roleName}</p>
                    <p className="text-sm text-gray-600">
                      {shift.startTime} - {shift.endTime}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    {shift.volunteersRegistered}/{shift.volunteersNeeded} spots
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4 border-t">
            <User className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium">Coordinator</p>
              <p className="text-sm text-gray-600">{event.coordinator.name}</p>
              <p className="text-sm text-primary">{event.coordinator.email}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={() => onNext({ event })} className="flex-1" size="lg">
              Sign Up for This Event
            </Button>
            <Button variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

