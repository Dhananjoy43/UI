import { Star, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Motion } from "@/components/ui/motion"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { MainHeading } from "@/components/typography/main-heading"
import { Paragraph } from "@/components/typography/paragraph"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Amanda Martinez",
      role: "Product Manager",
      rating: 5,
      review:
        "This spending tracker has completely transformed how I manage my finances. The AI insights are incredibly accurate.",
      avatar: "/avatar/avatar-01.jpg",
    },
    {
      name: "Sarah Smith",
      role: "Freelancer",
      rating: 5,
      review:
        "Finally found a tool that makes expense tracking effortless. The real-time analytics help me stay on budget.",
      avatar: "/avatar/avatar-02.jpg",
    },
    {
      name: "Rebecca Martinez",
      role: "Small Business Owner",
      rating: 5,
      review:
        "The category insights and spending predictions have helped me save over $500 this month alone.",
      avatar: "/avatar/avatar-03.jpg",
    },
    {
      name: "Emily Clark",
      role: "Marketing Director",
      rating: 5,
      review:
        "Love how it automatically categorizes all my transactions. Saves me hours of manual work every week.",
      avatar: "/avatar/avatar-04.jpg",
    },
    {
      name: "Lisa Thompson",
      role: "Financial Advisor",
      rating: 5,
      review:
        "I recommend this to all my clients. The spending coach feature provides excellent financial guidance.",
      avatar: "/avatar/avatar-03.jpg",
    },
    {
      name: "Jessica Williams",
      role: "Entrepreneur",
      rating: 5,
      review:
        "The subscription tracking feature alone is worth the price. Never miss a payment or unwanted charge again.",
      avatar: "/avatar/avatar-04.jpg",
    },
  ]

  return (
    <MaxWidthWrapper
      as="section"
      id="reviews"
      aria-labelledby="reviews-title"
      className="gap-6 bg-white py-20"
    >
      <MainHeading
        icon={Star}
        pill="Testimonials"
        title="Tested and"
        gradientText="Reviewed"
        description="See how WrapperCo is changing people's lives with over 1 Million+ reviews."
      />

      <Motion
        animation="fade"
        delay={0.6}
        className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {reviews.map((review, index) => (
          <Motion
            key={`${review.name}-${index}`}
            animation="slideUp"
            duration={0.4}
            delay={0.15 * (index + 1)} // Staggered delay: 0.2s, 0.4s, 0.6s, etc.
            scrollTrigger={true}
            scrollThreshold={0.1}
          >
            <Card className="rounded-2xl border-0 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-xs shadow-rose-500/10 transition-shadow duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src={review.avatar}
                      alt={review.name}
                      className="flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 object-contain"
                    />
                    <AvatarFallback className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400">
                      <User className="size-5 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @{review.role}
                    </div>
                  </div>
                </div>

                <div
                  className="flex space-x-1"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>

                <Paragraph>&quot;{review.review}&quot;</Paragraph>
              </div>
            </Card>
          </Motion>
        ))}
      </Motion>
    </MaxWidthWrapper>
  )
}
