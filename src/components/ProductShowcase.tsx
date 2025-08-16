import { SectionHeading } from "@/components/global/section-heading"
import { ProductShowcaseImage } from "@/components/ProductShowcaseImage"

export const ProductShowcase = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#5D2CAB] py-12">
      <SectionHeading
        pillText="AI-Powered"
        title="Transform Your Workflow with AI"
        description="Unleash the potential of your business with our cutting-edge AI tools, designed to automate tasks, deliver actionable insights, and drive growth effortlessly."
        className="mb-6 text-center"
      />
      <ProductShowcaseImage />
    </div>
  )
}
