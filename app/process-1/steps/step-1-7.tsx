"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { mockEvents } from "@/lib/mock-data"

interface Step1_7Props {
  onNext: (data: any) => void
  formData?: any
}

export default function Step1_7({ onNext, formData }: Step1_7Props) {
  const [filters, setFilters] = useState({
    dateRange: "",
    programType: "",
    skills: "",
    location: "",
    timeOfDay: "",
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Find Opportunities</h1>
        <p className="text-gray-600">Discover volunteer opportunities that match your interests</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="dateRange">Date Range</Label>
              <Input
                id="dateRange"
                type="date"
                value={filters.dateRange}
                onChange={(e) =>
                  setFilters({ ...filters, dateRange: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="programType">Program Type</Label>
              <Select
                id="programType"
                value={filters.programType}
                onChange={(e) =>
                  setFilters({ ...filters, programType: e.target.value })
                }
              >
                <option value="">All Programs</option>
                <option value="food-bank">Food Bank Services</option>
                <option value="environmental">Environmental Clean-ups</option>
                <option value="workshop">Community Workshops</option>
                <option value="youth">Youth Programs</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter location"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="timeOfDay">Time of Day</Label>
              <Select
                id="timeOfDay"
                value={filters.timeOfDay}
                onChange={(e) =>
                  setFilters({ ...filters, timeOfDay: e.target.value })
                }
              >
                <option value="">Any Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recommended for You</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">List</Button>
              <Button variant="outline" size="sm">Calendar</Button>
              <Button variant="outline" size="sm">Map</Button>
            </div>
          </div>

          {mockEvents.map((event) => (
            <Card
              key={event.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNext({ selectedEvent: event })}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        📅 {event.date} • ⏰ {event.time}
                      </p>
                      <p>📍 {event.location}</p>
                      <div className="flex gap-2 mt-2">
                        {event.shifts.map((shift) => (
                          <Badge key={shift.id} variant="secondary">
                            {shift.volunteersRegistered}/{shift.volunteersNeeded} spots
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button>View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

