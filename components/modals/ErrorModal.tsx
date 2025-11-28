"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { WifiOff, AlertTriangle, CameraOff, MapPinOff, Clock, Users, X } from "lucide-react"

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
    details: ["No internet connection detected", "Server may be temporarily unavailable", "Please check your network settings"],
    note: "You cannot proceed without a stable internet connection.",
    actions: ["Retry", "Dismiss"],
  },
  validation: {
    icon: AlertTriangle,
    title: "Validation Error",
    description: "Please correct the highlighted fields.",
    details: ["Some required fields are missing", "Please review and complete all required fields"],
    note: "You cannot proceed until all required fields are completed.",
    actions: ["Fix highlighted fields", "Dismiss"],
  },
  camera: {
    icon: CameraOff,
    title: "Camera Permission Not Granted",
    description: "Camera access is required to scan QR codes. Please enable camera permissions in your device settings.",
    details: ["Camera permission denied", "QR code scanning requires camera access", "Please enable camera in device settings"],
    note: "You can also enter the check-in code manually if you prefer not to grant camera access.",
    actions: ["I Understand"],
  },
  location: {
    icon: MapPinOff,
    title: "Location Not Verified",
    description: "We couldn't verify that you're at the event venue. Please ensure location services are enabled.",
    details: ["Location services disabled", "Unable to verify your current location", "You may be too far from the venue"],
    note: "Location verification helps ensure accurate check-in. You can request manual check-in if needed.",
    actions: ["I Understand"],
  },
  session: {
    icon: Clock,
    title: "Session Expired",
    description: "Your session has expired. Please log in again.",
    details: ["Session timeout", "Please log in again to continue"],
    note: "For security reasons, sessions expire after a period of inactivity.",
    actions: ["Log In"],
  },
  "event-full": {
    icon: Users,
    title: "Event is Full",
    description: "All spots for this event have been filled.",
    details: ["All volunteer slots are taken", "No available positions"],
    note: "You can join the waitlist to be notified if a spot becomes available.",
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
          <div className="flex items-center gap-3 mb-2">
            <X className="w-6 h-6 text-red-600" />
            <DialogTitle>{config.title}</DialogTitle>
          </div>
          <DialogDescription>
            {message || config.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm font-semibold text-red-900 mb-2">Issue Details:</p>
            <ul className="space-y-1 text-sm text-red-800 list-disc list-inside">
              {config.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-800">
              <strong>Note:</strong> {config.note}
            </p>
          </div>
          <div className="flex gap-2">
            {config.actions.map((action, idx) => {
              if (action === "I Understand") {
                return (
                  <Button
                    key={idx}
                    onClick={() => {
                      onOpenChange(false)
                    }}
                    className="w-full"
                  >
                    {action}
                  </Button>
                )
              }
              if (action === "Retry" || action === "Open Settings" || action === "Log In" || action === "Join Waitlist") {
                return (
                  <Button
                    key={idx}
                    onClick={() => {
                      onRetry?.()
                      onOpenChange(false)
                    }}
                    className={config.actions.length === 1 ? "w-full" : "flex-1"}
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
                    className={config.actions.length === 1 ? "w-full" : "flex-1"}
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
                  className={config.actions.length === 1 ? "w-full" : "flex-1"}
                >
                  {action}
                </Button>
              )
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

