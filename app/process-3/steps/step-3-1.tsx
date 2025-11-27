"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react"

interface Step3_1Props {
  onNext: () => void
}

export default function Step3_1({ onNext }: Step3_1Props) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Organization Administrator Portal</h1>
        <p className="text-gray-600">Welcome, Admin User</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">342</div>
              <div className="text-sm text-gray-600 mt-1">Total Active Volunteers</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">8,547</div>
              <div className="text-sm text-gray-600 mt-1">Total Hours This Year</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">156</div>
              <div className="text-sm text-gray-600 mt-1">Events Completed</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">$45,230</div>
              <div className="text-sm text-gray-600 mt-1">Funds Raised</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button onClick={onNext} size="lg" className="flex-1">
          Generate Report
        </Button>
        <Button variant="outline" size="lg">Manage Volunteers</Button>
        <Button variant="outline" size="lg">Manage Programs</Button>
        <Button variant="outline" size="lg">Fundraising Campaigns</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:p-6>
        <Card>
          <CardHeader>
            <CardTitle>Volunteer Hours Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Line Chart Preview</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Donations by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Bar Chart Preview</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-medium">3 volunteers pending approval</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium">Year-end report due for board meeting</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

