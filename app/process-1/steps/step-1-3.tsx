"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"
import { mockSkills, mockInterests, mockLanguages } from "@/lib/mock-data"

interface Step1_3Props {
  onNext: (data: any) => void
  onBack?: () => void
  formData?: any
  setFormData?: (data: any) => void
}

export default function Step1_3({ onNext, onBack, formData, setFormData }: Step1_3Props) {
  const [localData, setLocalData] = useState({
    skills: formData.skills || [],
    interests: formData.interests || [],
    language: formData.language || "",
  })

  const toggleSkill = (skill: string) => {
    setLocalData({
      ...localData,
      skills: localData.skills.includes(skill)
        ? localData.skills.filter((s: string) => s !== skill)
        : [...localData.skills, skill],
    })
  }

  const toggleInterest = (interest: string) => {
    setLocalData({
      ...localData,
      interests: localData.interests.includes(interest)
        ? localData.interests.filter((i: string) => i !== interest)
        : [...localData.interests, interest],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData?.({ ...formData, ...localData })
    onNext(localData)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Skills & Interests</h1>
        <p className="text-gray-600">Help us match you with the right opportunities</p>
      </div>

      <ProgressIndicator currentStep={2} totalSteps={3} />

      <Card>
        <CardHeader>
          <CardTitle>Tell Us About Yourself</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Skills
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {mockSkills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={skill}
                      checked={localData.skills.includes(skill)}
                      onCheckedChange={() => toggleSkill(skill)}
                    />
                    <Label
                      htmlFor={skill}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="language" className="text-base font-semibold mb-2 block">
                Language Skills
              </Label>
              <Select
                id="language"
                value={localData.language}
                onChange={(e) =>
                  setLocalData({ ...localData, language: e.target.value })
                }
              >
                <option value="">Select a language</option>
                {mockLanguages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">
                Interest Areas
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {mockInterests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={localData.interests.includes(interest)}
                      onCheckedChange={() => toggleInterest(interest)}
                    />
                    <Label
                      htmlFor={interest}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Next
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

