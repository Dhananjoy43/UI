import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Paragraph } from "@/components/typography/paragraph"

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: IconBrandInstagram,
    href: "www.instagram.com/",
  },
  {
    label: "X",
    icon: IconBrandX,
    href: "www.x.com/",
  },
  {
    label: "Discord",
    icon: IconBrandDiscord,
    href: "www.discord.com/",
  },
  {
    label: "YouTube",
    icon: IconBrandYoutube,
    href: "www.youtube.com/",
  },
]

export const Footer = () => {
  return (
    <footer className="border-t py-3">
      <div className="container mx-auto flex flex-col items-center justify-between gap-1 md:flex-row">
        <Paragraph className="text-sm md:text-base">
          &copy; 2024 Your Company, Inc. All rights reserved
        </Paragraph>
        <ul className="flex gap-2">
          {SOCIAL_LINKS.map((link) => (
            <Button
              asChild
              key={link.label}
              size={"icon"}
              variant={"ghost"}
              className="cursor-pointer"
            >
              <li>
                <a href={link.href} target="_blank">
                  <link.icon className="size-5" />
                </a>
              </li>
            </Button>
          ))}
        </ul>
      </div>
    </footer>
  )
}
