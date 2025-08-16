import Image from "next/image"
import { TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Motion } from "@/components/ui/motion"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

export default function FeatureAnalysis() {
  return (
    <MaxWidthWrapper as="section">
      <div className="mx-auto max-w-7xl rounded-4xl bg-gradient-to-r from-purple-50 to-pink-50 p-2 md:p-6">
        <Card className="overflow-hidden rounded-4xl border-0 bg-white/80 p-0 shadow-sm backdrop-blur-sm">
          <div className="p-4 md:px-12 lg:px-16 lg:pr-0">
            <div className="grid items-center md:gap-12 lg:grid-cols-2">
              <div className="space-y-2 md:space-y-4">
                <Motion
                  animation="slideLeft"
                  duration={0.8}
                  delay={0.1}
                  className="inline-flex items-center space-x-2 rounded-full bg-white/60 px-2 py-2 backdrop-blur-sm"
                >
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">
                    Feature Analysis
                  </span>
                </Motion>
                <Motion animation="slideLeft" duration={0.8} delay={0.2}>
                  <Heading as="h2">
                    Real-Time <br /> Spending Analysis
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
                    variant={"outline"}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/icon/star.png"
                      alt="AI Analysis Icon"
                      width={16}
                      height={16}
                    />
                    AI Analysis
                  </Button>
                  <Button
                    variant={"outline"}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/icon/bar-chart.png"
                      alt="Chart Analysis Icon"
                      width={16}
                      height={16}
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
                  src={"/images/real-time-spending-analysis.png"}
                  height={500}
                  width={500}
                  alt="Real-time spending analysis illustration"
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
