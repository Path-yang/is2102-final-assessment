import { Event, Volunteer, HourLog, Coordinator } from "@/types"

export const mockVolunteers: Volunteer[] = [
  {
    id: "vol-1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+65 9123 4567",
    skills: ["Driving", "Food Handling"],
    interests: ["Food Bank Services"],
    availability: {},
    commitmentLevel: "flexible",
    totalHours: 0,
    eventsAttended: 0,
    impactPoints: 0,
    verified: false,
  },
]

export const mockCoordinators: Coordinator[] = [
  {
    id: "coord-1",
    name: "Jane Smith",
    email: "jane@heartfelthands.org",
    phone: "+65 9876 5432",
    program: "Food Bank Services",
  },
]

export const mockEvents: Event[] = [
  {
    id: "event-1",
    name: "Weekly Food Pantry Distribution",
    program: "Food Bank Services",
    description: "Help distribute food packages to families in need at our community center.",
    date: "2024-12-07",
    time: "9:00 AM - 1:00 PM",
    duration: 4,
    location: "Heartfelt Hands Community Center, 123 Volunteer Ave",
    locationType: "physical",
    shifts: [
      {
        id: "shift-1",
        roleName: "Morning Setup",
        startTime: "8:00 AM",
        endTime: "10:00 AM",
        volunteersNeeded: 5,
        volunteersRegistered: 2,
        requiredSkills: [],
        minimumAge: 16,
        description: "Set up tables and organize food items",
      },
      {
        id: "shift-2",
        roleName: "Distribution",
        startTime: "9:00 AM",
        endTime: "1:00 PM",
        volunteersNeeded: 15,
        volunteersRegistered: 8,
        requiredSkills: [],
        minimumAge: 14,
        description: "Help distribute food packages to families",
      },
      {
        id: "shift-3",
        roleName: "Cleanup",
        startTime: "12:30 PM",
        endTime: "1:30 PM",
        volunteersNeeded: 5,
        volunteersRegistered: 3,
        requiredSkills: [],
        minimumAge: 16,
        description: "Clean up and organize remaining items",
      },
    ],
    coordinator: mockCoordinators[0],
    requirements: {
      minimumAge: 16,
      skillsNeeded: ["Food Handling"],
      physicalRequirements: "Able to stand for extended periods",
    },
    registrationSettings: {
      opensDaysBefore: 7,
      deadlineHoursBefore: 2,
      enableWaitlist: true,
      maxWaitlistSize: 10,
      allowGroupSignups: false,
      requireApproval: false,
    },
    isRecurring: false,
    status: "published",
  },
]

export const mockHourLogs: HourLog[] = [
  {
    id: "log-1",
    volunteerId: "vol-1",
    eventId: "event-1",
    shiftId: "shift-2",
    checkInTime: "2024-12-02T09:00:00",
    checkOutTime: "2024-12-02T13:30:00",
    hours: 4.5,
    tasksPerformed: ["Food sorting", "Distribution"],
    notes: "Great experience!",
    status: "pending",
    submittedAt: "2024-12-02T14:00:00",
  },
]

export const mockPrograms = [
  "Food Bank Services",
  "Environmental Clean-ups",
  "Community Workshops",
  "Youth Programs",
  "Elderly Care",
]

export const mockSkills = [
  "Driving (has valid license)",
  "Cooking/Food Preparation",
  "Teaching/Tutoring",
  "Graphic Design",
  "Photography",
  "Physical Labor/Heavy Lifting",
  "First Aid Certified",
  "Language Skills",
  "Administrative/Clerical",
  "Event Planning",
]

export const mockInterests = [
  "Food Bank Services",
  "Environmental Clean-ups",
  "Community Workshops",
  "Elderly Care",
  "Youth Programs",
]

export const mockLanguages = ["Mandarin", "Malay", "Tamil", "English", "Hindi"]

