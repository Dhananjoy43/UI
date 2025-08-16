import Image from "next/image"
import Link from "next/link"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react"

const SOCIAL_LINKS = [
  {
    name: "Twitter",
    url: "https://twitter.com/yourprofile",
    icon: <IconBrandX size={24} aria-hidden="true" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: <IconBrandLinkedin size={24} aria-hidden="true" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/yourprofile",
    icon: <IconBrandGithub size={24} aria-hidden="true" />,
  },
]

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        "Features",
        "Pricing",
        "Security",
        "Enterprise",
        "Customer Stories",
      ],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "News", "Media Kit"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Events", "Help Centre", "Tutorials"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <Image src={"/logo.svg"} height={30} width={120} alt="logo" />

            <p className="text-sm leading-relaxed text-gray-400">
              Take control of your spending experience with AI-powered insights
              and real-time analytics.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/#"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 WrapperCo. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-gray-400 transition-colors hover:text-white"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
