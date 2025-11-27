"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { mockPrograms } from "@/lib/mock-data"

interface Step3_3Props {
  onNext: (data: any) => void
  onBack?: () => void
  formData?: any
  setFormData?: (data: any) => void
}

export default function Step3_3({ onNext, onBack, formData, setFormData }: Step3_3Props) {
  const [localData, setLocalData] = useState({
    dateRange: formData.dateRange || "this-year",
    startDate: formData.startDate || "2024-01-01",
    endDate: formData.endDate || "2024-12-31",
    programs: formData.programs || mockPrograms,
    metrics: formData.metrics || [
      "volunteer-hours",
      "number-volunteers",
      "events-completed",
      "beneficiaries-served",
      "donation-summary",
      "program-breakdown",
    ],
    yearOverYear: formData.yearOverYear || true,
  })

  const toggleProgram = (program: string) => {
    setLocalData({
      ...localData,
      programs: localData.programs.includes(program)
        ? localData.programs.filter((p: string) => p !== program)
        : [...localData.programs, program],
    })
  }

  const toggleMetric = (metric: string) => {
    setLocalData({
      ...localData,
      metrics: localData.metrics.includes(metric)
        ? localData.metrics.filter((m: string) => m !== metric)
        : [...localData.metrics, metric],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ ...formData, ...localData })
    onNext(localData)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Report Configuration</h1>
        <p className="text-gray-600">Configure your Year-End Impact Report</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label>Date Range</Label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="dateRange"
                    value="this-year"
                    checked={localData.dateRange === "this-year"}
                    onChange={(e) =>
                      setLocalData({ ...localData, dateRange: e.target.value })
                    }
                  />
                  This Year
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="dateRange"
                    value="last-year"
                    checked={localData.dateRange === "last-year"}
                    onChange={(e) =>
                      setLocalData({ ...localData, dateRange: e.target.value })
                    }
                  />
                  Last Year
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="dateRange"
                    value="custom"
                    checked={localData.dateRange === "custom"}
                    onChange={(e) =>
                      setLocalData({ ...localData, dateRange: e.target.value })
                    }
                  />
                  Custom
                </label>
              </div>
              {localData.dateRange === "custom" && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      type="date"
                      value={localData.startDate}
                      onChange={(e) =>
                        setLocalData({ ...localData, startDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="date"
                      value={localData.endDate}
                      onChange={(e) =>
                        setLocalData({ ...localData, endDate: e.target.value })
                      }
                    />
                  </div>
                </div>
              )}
              {localData.dateRange !== "custom" && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: Jan 1, 2024 - Dec 31, 2024
                </p>
              )}
            </div>

            <div>
              <Label className="mb-2 block">Programs to Include</Label>
              <div className="flex items-center gap-2 mb-2">
                <Checkbox
                  checked={localData.programs.length === mockPrograms.length}
                  onCheckedChange={(checked) =>
                    setLocalData({
                      ...localData,
                      programs: checked ? mockPrograms : [],
                    })
                  }
                />
                <Label>Select All</Label>
              </div>
              <div className="space-y-2">
                {mockPrograms.map((program) => (
                  <div key={program} className="flex items-center gap-2">
                    <Checkbox
                      checked={localData.programs.includes(program)}
                      onCheckedChange={() => toggleProgram(program)}
                    />
                    <Label>{program}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Metrics to Include</Label>
              <div className="space-y-2">
                {[
                  { id: "volunteer-hours", label: "Volunteer Hours" },
                  { id: "number-volunteers", label: "Number of Volunteers" },
                  { id: "events-completed", label: "Events Completed" },
                  { id: "beneficiaries-served", label: "Beneficiaries Served" },
                  { id: "donation-summary", label: "Donation Summary" },
                  { id: "program-breakdown", label: "Program Breakdown" },
                  { id: "individual-volunteer", label: "Individual Volunteer Details" },
                  { id: "financial-report", label: "Detailed Financial Report" },
                ].map((metric) => (
                  <div key={metric.id} className="flex items-center gap-2">
                    <Checkbox
                      checked={localData.metrics.includes(metric.id)}
                      onCheckedChange={() => toggleMetric(metric.id)}
                    />
                    <Label>{metric.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={localData.yearOverYear}
                  onCheckedChange={(checked) =>
                    setLocalData({ ...localData, yearOverYear: !!checked })
                  }
                />
                <Label>Include year-over-year comparison</Label>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Generate Preview
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

