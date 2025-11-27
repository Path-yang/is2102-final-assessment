import { ProcessCard } from "@/components/shared/ProcessCard"

export default function Home() {
  const processes = [
    {
      number: 1,
      title: "Volunteer Registration & First Event Sign-up",
      description: "Complete registration, verify email, and sign up for your first volunteer opportunity",
      actors: ["New Volunteer"],
      href: "/process-1",
    },
    {
      number: 2,
      title: "Coordinator Creates Recurring Event",
      description: "Create and configure a recurring volunteer event with multiple shifts",
      actors: ["Program Coordinator"],
      href: "/process-2",
    },
    {
      number: 3,
      title: "Admin Generates Year-End Report",
      description: "Generate comprehensive impact reports with metrics and visualizations",
      actors: ["Organization Administrator"],
      href: "/process-3",
    },
    {
      number: 4,
      title: "Hour Logging & Approval Workflow",
      description: "Volunteers log hours and coordinators review and approve submissions",
      actors: ["Volunteer", "Coordinator"],
      href: "/process-4",
    },
    {
      number: 5,
      title: "QR Check-in & Auto Hour Logging",
      description: "QR code check-in system with automatic hour tracking",
      actors: ["Coordinator", "Volunteer"],
      href: "/process-5",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ImpactHub Wireframe Prototype
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            IS2102 Final Assessment - Volunteer Management Platform
          </p>
          <p className="text-gray-500">
            Heartfelt Hands - Making a Difference Together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {processes.map((process) => (
            <ProcessCard key={process.number} {...process} />
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Select a process above to view the interactive wireframe flow</p>
        </div>
      </div>
    </div>
  )
}

