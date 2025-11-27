"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { WifiOff, AlertTriangle, CameraOff, MapPinOff, Clock, Users } from "lucide-react"

interface ErrorModalProps {
  type: "network" | "validation" | "camera" | "location" | "session" | "event-full"
  open: boolean
  onOpenChange: (open: boolean) => void
  onRetry?: () => void
  onDismiss?: () => void
  message?: string
}

const errorConfig = {
  network: {
    icon: WifiOff,
    title: "Network Failure",
    description: "Unable to connect to server. Please check your internet connection.",
    actions: ["Retry", "Dismiss"],
  },
  validation: {
    icon: AlertTriangle,
    title: "Validation Error",
    description: "Please correct the highlighted fields.",
    actions: ["Fix highlighted fields", "Dismiss"],
  },
  camera: {
    icon: CameraOff,
    title: "Camera Access Denied",
    description: "Please enable camera access in your device settings to scan QR codes.",
    actions: ["Open Settings", "Enter Code Manually"],
  },
  location: {
    icon: MapPinOff,
    title: "Location Verification Failed",
    description: "We couldn't verify you're at the event venue.",
    actions: ["Retry", "Request Manual Check-in"],
  },
  session: {
    icon: Clock,
    title: "Session Expired",
    description: "Your session has expired. Please log in again.",
    actions: ["Log In"],
  },
  "event-full": {
    icon: Users,
    title: "Event is Full",
    description: "All spots for this event have been filled.",
    actions: ["Join Waitlist", "Find Other Events"],
  },
}

export function ErrorModal({
  type,
  open,
  onOpenChange,
  onRetry,
  onDismiss,
  message,
}: ErrorModalProps) {
  const config = errorConfig[type]
  const Icon = config.icon

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)}>
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-destructive" />
            <DialogTitle>{config.title}</DialogTitle>
          </div>
          <DialogDescription>
            {message || config.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 justify-end mt-4">
          {config.actions.map((action, idx) => {
            if (action === "Retry" || action === "Open Settings" || action === "Log In") {
              return (
                <Button
                  key={idx}
                  onClick={() => {
                    onRetry?.()
                    onOpenChange(false)
                  }}
                >
                  {action}
                </Button>
              )
            }
            if (action === "Dismiss" || action === "Enter Code Manually" || action === "Request Manual Check-in" || action === "Find Other Events") {
              return (
                <Button
                  key={idx}
                  variant="outline"
                  onClick={() => {
                    onDismiss?.()
                    onOpenChange(false)
                  }}
                >
                  {action}
                </Button>
              )
            }
            return (
              <Button
                key={idx}
                variant="secondary"
                onClick={() => onOpenChange(false)}
              >
                {action}
              </Button>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}

