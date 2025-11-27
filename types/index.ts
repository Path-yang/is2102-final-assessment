export interface Volunteer {
  id: string
  name: string
  email: string
  phone: string
  skills: string[]
  interests: string[]
  availability: AvailabilityGrid
  commitmentLevel: "one-time" | "regular" | "flexible"
  totalHours: number
  eventsAttended: number
  impactPoints: number
  verified: boolean
}

export interface AvailabilityGrid {
  [day: string]: {
    morning: boolean
    afternoon: boolean
    evening: boolean
  }
}

export interface Event {
  id: string
  name: string
  program: string
  description: string
  date: string
  time: string
  duration: number
  location: string
  locationType: "physical" | "virtual" | "hybrid"
  coverImage?: string
  shifts: Shift[]
  coordinator: Coordinator
  requirements?: EventRequirements
  registrationSettings: RegistrationSettings
  isRecurring: boolean
  recurrencePattern?: RecurrencePattern
  status: "draft" | "published" | "completed" | "cancelled"
}

export interface Shift {
  id: string
  roleName: string
  startTime: string
  endTime: string
  volunteersNeeded: number
  volunteersRegistered: number
  requiredSkills: string[]
  minimumAge: number
  description: string
}

export interface Coordinator {
  id: string
  name: string
  email: string
  phone: string
  program: string
}

export interface EventRequirements {
  minimumAge?: number
  skillsNeeded?: string[]
  physicalRequirements?: string
  backgroundCheck?: boolean
  trainingRequired?: string
}

export interface RegistrationSettings {
  opensDaysBefore: number
  deadlineHoursBefore: number
  enableWaitlist: boolean
  maxWaitlistSize?: number
  allowGroupSignups: boolean
  requireApproval: boolean
}

export interface RecurrencePattern {
  frequency: "weekly" | "bi-weekly" | "monthly"
  daysOfWeek: string[]
  startDate: string
  endDate?: string
  exceptions?: string[]
}

export interface HourLog {
  id: string
  volunteerId: string
  eventId: string
  shiftId: string
  checkInTime: string
  checkOutTime: string
  hours: number
  tasksPerformed: string[]
  notes?: string
  status: "pending" | "approved" | "rejected"
  submittedAt: string
  approvedAt?: string
  approvedBy?: string
  rejectionReason?: string
}

export interface Report {
  id: string
  type: string
  dateRange: {
    start: string
    end: string
  }
  programs: string[]
  metrics: string[]
  generatedAt: string
  format: "pdf" | "excel" | "powerpoint"
}

export interface CheckIn {
  id: string
  volunteerId: string
  eventId: string
  shiftId: string
  checkInTime: string
  checkOutTime?: string
  locationVerified: boolean
  qrCode: string
}

