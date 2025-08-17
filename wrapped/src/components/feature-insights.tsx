import Image from "next/image"
import { BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Motion } from "@/components/ui/motion"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

export default function FeatureInsights() {
  return (
    <MaxWidthWrapper
      as="section"
      aria-labelledby="feature-insights-heading"
      className="p-0"
    >
      <div className="mx-auto w-full rounded-4xl bg-gradient-to-r from-purple-50 to-pink-50 p-2 md:p-6">
        <Card className="overflow-hidden rounded-3xl border-0 p-0 shadow-2xl">
          <div className="p-4 md:px-12 lg:px-16 lg:pr-0">
            <div className="grid items-center lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2 md:space-y-4">
                <Motion
                  animation="slideLeft"
                  duration={0.8}
                  delay={0.1}
                  className="inline-flex items-center space-x-2 rounded-full bg-white/60 py-2 backdrop-blur-sm md:px-2"
                >
                  <BarChart className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">
                    Insights
                  </span>
                </Motion>

                <Motion animation="slideLeft" duration={0.8} delay={0.2}>
                  <Heading as="h2" id="feature-insights-heading">
                    Clarity-Focused, Insight-Driven Analysis
                  </Heading>
                </Motion>
                <Motion animation="slideLeft" duration={0.8} delay={0.4}>
                  <Paragraph>
                    Track every dollar. Get insights by categories, merchants,
                    and time intervals.
                  </Paragraph>
                </Motion>
                <Motion
                  animation="slideLeft"
                  duration={0.8}
                  delay={0.5}
                  className="flex flex-wrap gap-2"
                >
                  <Button
                    type="button"
                    variant={"outline"}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/icon/star.png"
                      alt=""
                      aria-hidden={true}
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    AI Analysis
                  </Button>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/icon/bar-chart.png"
                      alt=""
                      aria-hidden={true}
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Chart Analysis
                  </Button>
                </Motion>
              </div>

              <Motion
                animation="slideRight"
                duration={0.8}
                delay={0.2}
                className="relative"
              >
                <Image
                  src={"/images/clarity-focused-insights.png"}
                  height={500}
                  width={500}
                  alt="Illustration of a clarity-focused insights dashboard"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                  className="h-auto w-full"
                />
              </Motion>
            </div>
          </div>
        </Card>
      </div>
    </MaxWidthWrapper>
  )
}
