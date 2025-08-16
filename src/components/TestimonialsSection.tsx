import { Testimonial, TestimonialProps } from "@/components/ui/testimonial"
import { SectionHeading } from "@/components/global/section-heading"

export const TESTIMONIALS: TestimonialProps[] = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    company: "TechCorp",
    testimonial:
      "The AI-powered insights transformed how we analyze data. We make faster, smarter decisions now!",
    rating: 5,
    image: "https://example.com/alice.jpg",
  },
  {
    name: "Bob Smith",
    role: "Freelance Developer",
    testimonial:
      "The integration ecosystem saved me hours by connecting all my tools seamlessly. A game-changer for solo work!",
    rating: 4,
    image: "https://example.com/bob.jpg",
  },
  {
    name: "Clara Nguyen",
    role: "Marketing Lead",
    company: "GrowEasy",
    testimonial:
      "Predictive analytics helped us forecast trends with incredible accuracy. Our campaigns are now 30% more effective!",
    rating: 5,
    image: "https://example.com/clara.jpg",
  },
  {
    name: "David Patel",
    role: "CTO",
    company: "Innovate Inc.",
    testimonial:
      "The automated workflows reduced our manual tasks by half. It’s like having an extra team member!",
    rating: 5,
    image: "https://example.com/david.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Small Business Owner",
    testimonial:
      "The smart chat assistant handles customer queries 24/7, letting me focus on growing my business.",
    rating: 4,
    image: "https://example.com/emma.jpg",
  },
  {
    name: "Frank Wilson",
    role: "Data Analyst",
    company: "DataDriven",
    testimonial:
      "Real-time processing means I get insights instantly. It’s a must-have for data-heavy projects!",
    rating: 5,
    image: "https://example.com/frank.jpg",
  },
  {
    name: "Grace Lee",
    role: "Operations Manager",
    company: "ScaleUp",
    testimonial:
      "The goal-setting tools keep our team aligned and on track. We hit our targets 20% faster now!",
    rating: 4,
    image: "https://example.com/grace.jpg",
  },
  {
    name: "Henry Kim",
    role: "Enterprise Architect",
    company: "GlobalCorp",
    testimonial:
      "With end-to-end encryption, we trust this platform with our sensitive data. Security is top-notch!",
    rating: 5,
    image: "https://example.com/henry.jpg",
  },
  {
    name: "Isabella Martinez",
    role: "Startup Founder",
    testimonial:
      "The collaborative AI learning adapts to our team’s needs, making our processes smarter every day.",
    rating: 5,
    image: "https://example.com/isabella.jpg",
  },
  {
    name: "James Carter",
    role: "Software Engineer",
    company: "CodeZap",
    testimonial:
      "API access and custom integrations let us build exactly what we needed. Developer-friendly and powerful!",
    rating: 4,
    image: "https://example.com/james.jpg",
  },
  {
    name: "Katherine Brown",
    role: "Customer Success Manager",
    company: "SupportPro",
    testimonial:
      "The 24/7 support and dedicated account manager make enterprise adoption a breeze. Highly recommend!",
    rating: 5,
    image: "https://example.com/katherine.jpg",
  },
  {
    name: "Liam Davis",
    role: "Project Coordinator",
    company: "TeamSync",
    testimonial:
      "The intuitive interface and automation features make project management effortless. We love it!",
    rating: 5,
    image: "https://example.com/liam.jpg",
  },
]

export const TestimonialsSection = async () => {
  return (
    <div className="container mx-auto py-12">
      <SectionHeading
        pillText="testimonials"
        title="Hear from Our Users"
        description="Discover how our AI-driven tools empower teams and individuals to achieve more, from startups to enterprises."
        className="mb-12 text-center"
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            testimonial={testimonial.testimonial}
            rating={testimonial.rating}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  )
}
