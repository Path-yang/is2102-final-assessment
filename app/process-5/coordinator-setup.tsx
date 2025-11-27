"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { QrCode, Download, Printer, Share2, Users, Clock } from "lucide-react"

export default function CoordinatorSetup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [checkedInCount, setCheckedInCount] = useState(8)

  if (currentStep === 1) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Event Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Today's Events</label>
                <Select defaultValue="food-pantry">
                  <option value="food-pantry">Food Pantry Distribution</option>
                  <option value="cleanup">Community Clean-up</option>
                </Select>
              </div>
              <Button onClick={() => setCurrentStep(2)} className="w-full" size="lg">
                Generate Check-in QR Code
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">QR Code Generated</h1>
          <p className="text-gray-600">Display this QR code at the event venue</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <div>
                <p className="font-semibold text-lg mb-2">Food Pantry Distribution</p>
                <p className="text-sm text-gray-600">Saturday, Dec 7, 2024</p>
              </div>

              <div className="flex justify-center">
                <div className="w-64 h-64 bg-white border-4 border-gray-300 rounded-lg flex items-center justify-center">
                  <QrCode className="w-48 h-48 text-gray-800" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline">
                  <Printer className="w-4 h-4 mr-2" />
                  Print QR Code
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PNG
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep(3)}>
                  Display Full Screen
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Link
                </Button>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  Instructions: Display this QR code at the event venue for volunteers to scan
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-semibold mb-1">Live Attendance</p>
                <p className="text-2xl font-bold text-primary">
                  {checkedInCount}/15 checked in
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === 3) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Live Attendance Dashboard</h1>
          <p className="text-gray-600">Real-time volunteer check-in monitoring</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-primary/10 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Total Checked In</p>
              <p className="text-4xl font-bold text-primary">8/15</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">By Shift Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>Food Sorter</span>
                  <Badge>3/5</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>Distribution</span>
                  <Badge>5/10</Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Recent Check-ins</h3>
              <div className="space-y-2">
                {[
                  { name: "John Doe", time: "9:02 AM" },
                  { name: "Jane Smith", time: "9:05 AM" },
                  { name: "Mike Johnson", time: "9:10 AM" },
                ].map((checkin, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{checkin.name} checked in at {checkin.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Checked In Volunteers</h3>
              <div className="space-y-1">
                {["John Doe", "Jane Smith", "Mike Johnson", "Sarah Lee"].map((name, idx) => (
                  <div key={idx} className="p-2 border rounded text-sm">{name}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Expected but Not Checked In</h3>
              <div className="space-y-1">
                {["Alice Brown", "Bob Wilson"].map((name, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">{name}</span>
                    <Button variant="outline" size="sm">Contact</Button>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">
              Send Reminder to Not Checked In
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}

