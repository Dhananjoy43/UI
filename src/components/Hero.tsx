import { Button } from "@/components/ui/button"
import { Pill } from "@/components/global/pill"
import { HeroDragableImages } from "@/components/HeroDragableImages"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

export const Hero = () => {
  return (
    <div className="relative overflow-clip bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-20 sm:py-24 md:py-40 lg:py-32">
      <div className="relative z-10 container mx-auto mb-20 flex max-w-3xl flex-col items-center justify-center gap-2 p-2">
        <Pill />
        <div className="relative mt-6 inline-flex">
          <Heading as="h1" className="mb-0 text-center tracking-tighter">
            The Future of Intelligent Automation
          </Heading>
          <HeroDragableImages />
        </div>
        <Paragraph className="text-center text-xl">
          Empower your team with our cutting-edge AI platform. Automate complex
          processes, analyze data in real-time, and unlock new levels of
          efficiency and innovation.
        </Paragraph>
        <Button size={"lg"}>Get for Free</Button>
      </div>
      <div className="sm:h[40rem] xl: absolute top-[calc(100%-96px)] left-1/2 h-[23rem] w-[47rem] -translate-x-1/2 rounded-[100%] border bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:w-[60rem] md:h-[60rem] md:w-[90rem] lg:top-[calc(100%-200px)] lg:h-[80rem] lg:w-[120rem] xl:top-[calc(100%-190px)] xl:h-[60rem] xl:w-[160rem]" />
    </div>
  )
}
