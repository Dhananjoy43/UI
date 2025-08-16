import { FeatureCard } from "@/components/FeatureCard"
import { SectionHeading } from "@/components/global/section-heading"

const FEATURES = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    icon: "Puzzle",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    icon: "Target",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: "Shield",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage machine learning algorithms to gain valuable insights and make data-driven decisions.",
    icon: "Brain",
  },
  {
    title: "Smart Chat Assistant",
    description:
      "24/7 AI chatbot support to answer questions and provide instant assistance to your customers.",
    icon: "MessageSquare",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast trends and patterns using advanced AI algorithms to stay ahead of the curve.",
    icon: "BarChart",
  },
  {
    title: "Automated Workflows",
    description:
      "Streamline your processes with AI-powered automation, saving time and reducing errors.",
    icon: "Zap",
  },
  {
    title: "Real-time Processing",
    description:
      "Process and analyze data in real-time for immediate insights and faster decision making.",
    icon: "Clock",
  },
  {
    title: "Collaborative AI Learning",
    description:
      "Work together with AI models that learn and adapt to your team's specific needs and patterns.",
    icon: "Users",
  },
]

export const Features = () => {
  return (
    <div className="py-12">
      <SectionHeading
        pillText="Features"
        title=" Everything You Need to Know"
        description=" Experience the power of AI-driven solutions with our comprehensive
          suite of tools. From smart automation to predictive analytics, we've
          got everything you need to transform your business."
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 p-2 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  )
}
