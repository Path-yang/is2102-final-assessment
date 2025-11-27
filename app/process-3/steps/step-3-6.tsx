"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Mail, Download } from "lucide-react"

interface Step3_6Props {
  onNext: () => void
  formData?: any
}

export default function Step3_6({ onNext, formData }: Step3_6Props) {
  const [exportFormat, setExportFormat] = useState("pdf")
  const [includeCharts, setIncludeCharts] = useState(true)
  const [includeTables, setIncludeTables] = useState(true)
  const [includeRawData, setIncludeRawData] = useState(false)
  const [recipients, setRecipients] = useState<string[]>([])
  const [customEmail, setCustomEmail] = useState("")

  const toggleRecipient = (email: string) => {
    setRecipients(
      recipients.includes(email)
        ? recipients.filter((r) => r !== email)
        : [...recipients, email]
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Export Report</h1>
        <p className="text-gray-600">Choose export format and delivery options</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Export Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="mb-3 block">Format</Label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "pdf", label: "PDF", desc: "Recommended for sharing", icon: FileText },
                { id: "excel", label: "Excel", desc: "For detailed analysis", icon: FileText },
                { id: "powerpoint", label: "PowerPoint", desc: "For presentations", icon: FileText },
              ].map((format) => (
                <Card
                  key={format.id}
                  className={`cursor-pointer hover:shadow-md transition-shadow ${
                    exportFormat === format.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setExportFormat(format.id)}
                >
                  <CardContent className="pt-6 text-center">
                    <format.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{format.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{format.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Label className="mb-3 block">Include Options</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={includeCharts}
                  onCheckedChange={(checked) => setIncludeCharts(!!checked)}
                />
                <Label>Charts and visualizations</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={includeTables}
                  onCheckedChange={(checked) => setIncludeTables(!!checked)}
                />
                <Label>Detailed data tables</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={includeRawData}
                  onCheckedChange={(checked) => setIncludeRawData(!!checked)}
                />
                <Label>Raw data appendix</Label>
              </div>
            </div>
          </div>

          <div>
            <Label className="mb-3 block">Email Report</Label>
            <div className="space-y-3">
              <div>
                <Label>Recipients</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={recipients.includes("board@heartfelthands.org")}
                      onCheckedChange={() =>
                        toggleRecipient("board@heartfelthands.org")
                      }
                    />
                    <Label>Board of Directors (group)</Label>
                  </div>
                  {[
                    "director1@example.com",
                    "director2@example.com",
                    "director3@example.com",
                  ].map((email) => (
                    <div key={email} className="flex items-center gap-2 ml-6">
                      <Checkbox
                        checked={recipients.includes(email)}
                        onCheckedChange={() => toggleRecipient(email)}
                      />
                      <Label className="text-sm">{email}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="customEmail">Custom Email</Label>
                <Input
                  id="customEmail"
                  type="email"
                  placeholder="email@example.com"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject Line</Label>
                <Input
                  id="subject"
                  value="Year-End Impact Report 2024 - Heartfelt Hands"
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="message">Message Body</Label>
                <Textarea
                  id="message"
                  rows={4}
                  defaultValue="Please find attached the Year-End Impact Report for 2024. This report summarizes our organization's achievements, volunteer contributions, and community impact over the past year."
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="outline" onClick={onNext} className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button onClick={onNext} className="flex-1">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

