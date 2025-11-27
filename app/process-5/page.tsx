"use client"

import { useState } from "react"
import { BackButton } from "@/components/shared/BackButton"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import CoordinatorSetup from "./coordinator-setup"
import VolunteerCheckin from "./volunteer-checkin"

export default function Process5() {
  const [activeTab, setActiveTab] = useState("coordinator")

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton />
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">QR Check-in & Auto Hour Logging</h1>
          <p className="text-gray-600">Coordinator setup and volunteer check-in</p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="coordinator">Coordinator Setup</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer Check-in</TabsTrigger>
          </TabsList>
          <TabsContent value="coordinator">
            <CoordinatorSetup />
          </TabsContent>
          <TabsContent value="volunteer">
            <VolunteerCheckin />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

