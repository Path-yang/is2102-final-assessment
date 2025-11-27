"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, FileText } from "lucide-react"

interface Step3_7Props {
  formData?: any
}

export default function Step3_7({ formData }: Step3_7Props) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Report Generated Successfully!</h1>
              <p className="text-gray-600">Your report has been processed and delivered</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">Format:</span>
                    <span className="text-gray-600">PDF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">Action:</span>
                    <span className="text-gray-600">Emailed to 5 recipients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">File size:</span>
                    <span className="text-gray-600">2.4 MB</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <p className="text-sm text-gray-600 mb-2">
                Report saved to:{" "}
                <button className="text-primary hover:underline">
                  Generated Reports
                </button>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button variant="outline" className="flex-1 w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download a Copy
              </Button>
              <Button variant="outline" className="flex-1 w-full sm:w-auto">
                Generate Another Report
              </Button>
              <Button className="flex-1 w-full sm:w-auto">Back to Dashboard</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {[
                    { name: "Year-End Impact Report 2024", date: "Dec 15, 2024" },
                    { name: "Monthly Summary - November", date: "Dec 1, 2024" },
                    { name: "Program Performance Q3", date: "Oct 15, 2024" },
                  ].map((report, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span>{report.name}</span>
                      </div>
                      <span className="text-gray-500">{report.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

