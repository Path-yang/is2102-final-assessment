"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Clock, MessageSquare } from "lucide-react"

interface Step2_1Props {
  onNext: () => void
}

export default function Step2_1({ onNext }: Step2_1Props) {
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
    </div>
  )
}

