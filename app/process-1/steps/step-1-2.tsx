"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProgressIndicator } from "@/components/shared/ProgressIndicator"

interface Step1_2Props {
  onNext: (data: any) => void
  formData?: any
  setFormData?: (data: any) => void
}

export default function Step1_2({ onNext, formData, setFormData }: Step1_2Props) {
  const [localData, setLocalData] = useState({
    fullName: formData.fullName || "",
    email: formData.email || "",
    phone: formData.phone || "",
    password: formData.password || "",
    confirmPassword: formData.confirmPassword || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData?.(localData)
    onNext(localData)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="px-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Create Your Account</h1>
        <p className="text-sm sm:text-base text-gray-600">Let's get started with your basic information</p>
      </div>

      <ProgressIndicator currentStep={1} totalSteps={3} />

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Registration Form</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="mb-4 sm:mb-6">
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => {
                // Mock SingPass sign-in
                alert("Sign in with SingPass - This would redirect to SingPass authentication")
              }}
            >
              Sign in with SingPass
            </Button>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                required
                value={localData.fullName}
                onChange={(e) =>
                  setLocalData({ ...localData, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={localData.email}
                onChange={(e) =>
                  setLocalData({ ...localData, email: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={localData.phone}
                onChange={(e) =>
                  setLocalData({ ...localData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                required
                value={localData.password}
                onChange={(e) =>
                  setLocalData({ ...localData, password: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password *</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={localData.confirmPassword}
                onChange={(e) =>
                  setLocalData({ ...localData, confirmPassword: e.target.value })
                }
              />
            </div>

            <Button type="submit" className="w-full">
              Next: Skills & Interests
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

