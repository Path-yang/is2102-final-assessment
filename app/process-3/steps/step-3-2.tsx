"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BarChart3, Users, TrendingUp, DollarSign, Settings } from "lucide-react"

interface Step3_2Props {
  onNext: (data: any) => void
}

const reportTypes = [
  {
    id: "year-end",
    title: "Year-End Impact Report",
    description: "Comprehensive annual report with all key metrics",
    icon: FileText,
    useCase: "Board meetings, annual reviews",
  },
  {
    id: "monthly",
    title: "Monthly Summary",
    description: "Monthly activity and performance summary",
    icon: BarChart3,
    useCase: "Regular updates, team reviews",
  },
  {
    id: "program",
    title: "Program Performance",
    description: "Detailed analysis of individual programs",
    icon: TrendingUp,
    useCase: "Program evaluation, improvements",
  },
  {
    id: "volunteer",
    title: "Volunteer Engagement",
    description: "Volunteer participation and retention metrics",
    icon: Users,
    useCase: "Volunteer management, recognition",
  },
  {
    id: "fundraising",
    title: "Fundraising Report",
    description: "Financial contributions and fundraising activities",
    icon: DollarSign,
    useCase: "Financial reporting, donor updates",
  },
  {
    id: "custom",
    title: "Custom Report",
    description: "Create a report with custom metrics and filters",
    icon: Settings,
    useCase: "Specific analysis needs",
  },
]

export default function Step3_2({ onNext }: Step3_2Props) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Generate Report</h1>
        <p className="text-gray-600">Select the type of report you want to generate</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-3 gap-4">
        {reportTypes.map((report) => {
          const Icon = report.icon
          return (
            <Card
              key={report.id}
              className={`cursor-pointer hover:shadow-lg transition-shadow ${
                report.id === "year-end" ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => onNext({ reportType: report.id })}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                </div>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-500">Use case: {report.useCase}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-end">
        <Button onClick={() => onNext({ reportType: "year-end" })} size="lg">
          Next: Configure Report
        </Button>
      </div>
    </div>
  )
}

