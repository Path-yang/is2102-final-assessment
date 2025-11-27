"use client"

import { useState } from "react"
import { BackButton } from "@/components/shared/BackButton"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import VolunteerView from "./volunteer-view"
import CoordinatorView from "./coordinator-view"

export default function Process4() {
  const [activeTab, setActiveTab] = useState("volunteer")

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-4 sm:py-8">
      <div className="container mx-auto px-3 sm:px-3 sm:px-4max-w-6xl">
        <BackButton />
        <div className="mb-3 sm:mb-4 sm:mb-3 sm:mb-4 sm:mb-6 px-1">
          <h1 className="text-xl sm:text-2xl md:text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Hour Logging & Approval Workflow</h1>
          <p className="text-sm sm:text-base text-gray-600">View from volunteer or coordinator perspective</p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 text-xs sm:text-sm">
            <TabsTrigger value="volunteer" className="text-xs sm:text-sm">Volunteer View</TabsTrigger>
            <TabsTrigger value="coordinator" className="text-xs sm:text-sm">Coordinator View</TabsTrigger>
          </TabsList>
          <TabsContent value="volunteer">
            <VolunteerView />
          </TabsContent>
          <TabsContent value="coordinator">
            <CoordinatorView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

