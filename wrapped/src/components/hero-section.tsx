import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Motion } from "@/components/ui/motion"
import { Spotlight } from "@/components/ui/spotlight-new"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-[url('/images/hero-bg.svg')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-between space-y-4">
        <div className="mt-40 flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
          <Motion
            animation="zoom"
            duration={1.5}
            delay={0.1}
            className="group bg-background relative flex items-center overflow-hidden rounded-full border px-4 py-1 text-xs"
          >
            {<Sparkles className="mr-1 size-3 text-purple-600" />}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-xs font-medium text-transparent">
              New: AI Financial Assistant
            </span>
          </Motion>
          <Motion animation="slideUp" duration={0.8} delay={0.2}>
            <Heading as="h1">
              Take Control of Your <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Spending Experience
              </span>
            </Heading>
          </Motion>
          <Motion animation="slideUp" duration={0.8} delay={0.3}>
            <Paragraph>
              Track your spending habits with AI-powered insights, real-time
              analytics, and personalized financial health with our platform.
            </Paragraph>
          </Motion>
          <Motion
            animation="slideUp"
            duration={0.8}
            delay={0.4}
            className="space-x-2"
          >
            <Button asChild>
              <Link href="/register">Register Now</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href="/signin">Sign In</Link>
            </Button>
          </Motion>
        </div>
        <Motion animation="slideUp" duration={0.8} delay={0.4}>
          <MaxWidthWrapper className="bg-background z-10 translate-y-10 rounded-3xl px-4 shadow-lg md:-mt-20 md:translate-y-40">
            <Image
              src="/images/hero.png"
              height={800}
              width={1200}
              alt="App dashboard showing spending analytics and trends"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </MaxWidthWrapper>
        </Motion>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-4 left-12 size-60 rounded-full bg-gradient-to-br from-purple-100 via-pink-100 to-purple-500 opacity-40 blur-3xl md:top-12" />
      <div className="absolute top-4 right-12 size-60 rounded-full bg-gradient-to-br from-purple-100 via-pink-100 to-purple-500 opacity-40 blur-3xl md:top-12" />
      <div className="absolute bottom-0 hidden h-80 w-full bg-gradient-to-b from-purple-50 via-pink-100 to-purple-300 opacity-90 blur-2xl md:block" />
      <Spotlight />
    </section>
  )
}
