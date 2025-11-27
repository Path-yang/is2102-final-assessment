"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Download, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step3_5Props {
  onNext: () => void
  formData?: any
}

export default function Step3_5({ onNext, formData }: Step3_5Props) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Year-End Impact Report 2024 - Preview</h1>
          <p className="text-gray-600">Review your report before exporting</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            Edit Configuration
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This year, Heartfelt Hands has made significant strides in community
              impact through dedicated volunteer efforts and strategic program
              implementation. Our organization served over 2,340 families and
              contributed 8,547 volunteer hours across 156 events.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Active Volunteers", value: "342", change: "+15% YoY" },
            { label: "Hours Contributed", value: "8,547", change: "+23% YoY" },
            { label: "Events Completed", value: "156", change: "+8% YoY" },
            { label: "Families Served", value: "2,340", change: "" },
            { label: "Funds Raised", value: "$45,230", change: "+31% YoY" },
          ].map((metric, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                  {metric.change && (
                    <Badge variant="success" className="mt-2 text-xs">
                      {metric.change}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Volunteer Hours by Program</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Pie Chart Preview</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Volunteer Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Line Chart Preview</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Hours</th>
                    <th className="text-left p-2">Events</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "John Doe", hours: 120, events: 15 },
                    { name: "Jane Smith", hours: 98, events: 12 },
                    { name: "Mike Johnson", hours: 87, events: 10 },
                  ].map((volunteer, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2">{volunteer.name}</td>
                      <td className="p-2">{volunteer.hours}</td>
                      <td className="p-2">{volunteer.events}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button variant="outline" onClick={onNext} className="flex-1">
            Edit Configuration
          </Button>
          <Button onClick={onNext} className="flex-1">
            Export Report
          </Button>
        </div>
      </div>
    </div>
  )
}

