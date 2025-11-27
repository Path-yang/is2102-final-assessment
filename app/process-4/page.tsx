"use client"

import { useState } from "react"
import { BackButton } from "@/components/shared/BackButton"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import VolunteerView from "./volunteer-view"
import CoordinatorView from "./coordinator-view"

export default function Process4() {
  const [activeTab, setActiveTab] = useState("volunteer")

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton />
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Hour Logging & Approval Workflow</h1>
          <p className="text-gray-600">View from volunteer or coordinator perspective</p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="volunteer">Volunteer View</TabsTrigger>
            <TabsTrigger value="coordinator">Coordinator View</TabsTrigger>
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

