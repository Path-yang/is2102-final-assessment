"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { TrendingUp, Download, RefreshCw, AlertTriangle, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Step3_5Props {
  onNext: () => void
  formData?: any
}

export default function Step3_5({ onNext, formData }: Step3_5Props) {
  const [showInsufficientDialog, setShowInsufficientDialog] = useState(false)

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 px-1">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 break-words">Year-End Impact Report 2024 - Preview</h1>
          <p className="text-xs sm:text-sm text-gray-600">Review your report before exporting</p>
        </div>
        <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">
            <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">
            Edit Configuration
          </Button>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
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

      {/* Insufficient Information Error - Mock error at bottom */}
      <div 
        className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
        onClick={() => setShowInsufficientDialog(true)}
      >
        <p className="text-xs sm:text-sm font-medium text-red-800 mb-1">
          ⚠️ Insufficient Information
        </p>
        <p className="text-xs text-red-700">
          The year hasn't ended yet. Year-end reports can only be generated after the year has concluded.
        </p>
      </div>

      {/* Insufficient Information Dialog */}
      <Dialog open={showInsufficientDialog} onOpenChange={setShowInsufficientDialog}>
        <DialogContent onClose={() => setShowInsufficientDialog(false)}>
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <DialogTitle>Insufficient Information</DialogTitle>
            </div>
            <DialogDescription>
              The year hasn't ended yet. Year-end reports require complete annual data to be generated accurately.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-semibold text-red-900 mb-2">Issue Details:</p>
              <div className="space-y-2 text-sm text-red-800">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Current Date: December 15, 2024</p>
                    <p className="text-xs text-red-700 mt-1">Year-end reports are typically generated after December 31st</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-red-200">
                  <p className="font-medium mb-1">Why this matters:</p>
                  <ul className="list-disc list-inside text-xs text-red-700 space-y-1">
                    <li>Year-end reports require complete annual data</li>
                    <li>Final metrics and statistics are only available after year completion</li>
                    <li>Some data may still be pending or incomplete</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> You can generate a partial year report or wait until after December 31st to generate the complete year-end report.
              </p>
            </div>
            <Button 
              onClick={() => setShowInsufficientDialog(false)} 
              className="w-full"
            >
              I Understand
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

