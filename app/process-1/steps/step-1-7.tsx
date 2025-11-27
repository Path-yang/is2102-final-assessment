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
    <div className="space-y-4 sm:space-y-6">
      <div className="px-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Find Opportunities</h1>
        <p className="text-sm sm:text-base text-gray-600">Discover volunteer opportunities that match your interests</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="lg:col-span-1">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
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

        <div className="lg:col-span-3 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <h2 className="text-lg sm:text-xl font-semibold">Recommended for You</h2>
            <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">List</Button>
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">Calendar</Button>
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">Map</Button>
            </div>
          </div>

          {mockEvents.map((event) => (
            <Card
              key={event.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNext({ selectedEvent: event })}
            >
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0">
                  <div className="flex-1 w-full">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{event.name}</h3>
                    <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                      <p>
                        📅 {event.date} • ⏰ {event.time}
                      </p>
                      <p>📍 {event.location}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                        {event.shifts.map((shift) => (
                          <Badge key={shift.id} variant="secondary" className="text-xs">
                            {shift.volunteersRegistered}/{shift.volunteersNeeded} spots
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto mt-2 sm:mt-0">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

