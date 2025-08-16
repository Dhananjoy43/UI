"use client"

import Image from "next/image"
import apexLogo from "@/assets/apex.png"
import acmeLogo from "@/assets/logo-acme.png"
import celestialLogo from "@/assets/logo-celestial.png"
import echoLogo from "@/assets/logo-echo.png"
import pulseLogo from "@/assets/logo-pulse.png"
import quantumLogo from "@/assets/logo-quantum.png"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const LOGOS = [
  { img: acmeLogo, alt: "Acme Logo" },
  { img: quantumLogo, alt: "Quantum Logo" },
  { img: echoLogo, alt: "Echo Logo" },
  { img: celestialLogo, alt: "Celestial Logo" },
  { img: pulseLogo, alt: "Pulse Logo" },
  { img: apexLogo, alt: "Apex Logo" },
]

export const LogoTicker = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-2">
        <h2 className="text-foreground/50 mb-9 text-center text-lg md:text-xl">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="relative overflow-hidden before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:content-[''] after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:content-['']">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                startDelay: 300,
                playOnInit: true,
                speed: 1,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {[...LOGOS, ...LOGOS].map((logo, index) => (
                <CarouselItem
                  key={`${logo.img.src}-${index}`}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <Image
                    key={`${logo.img.src}-${index}`}
                    src={logo.img.src}
                    height={60}
                    width={100}
                    alt={logo.alt}
                    className="h-7 w-auto flex-none md:h-8"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
