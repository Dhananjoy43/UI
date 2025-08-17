import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import MobileNavSheet from "@/components/mobile-nav-sheet"

const NAV_MENUS = [
  { name: "Home", href: "#" },
  { name: "Product", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Resources", href: "#" },
  { name: "About", href: "#" },
]

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-purple-100 bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Image src={"/logo.svg"} height={30} width={120} alt="logo" />

        <nav aria-label="Main navigation" className="hidden lg:flex">
          <ul className="flex items-center space-x-8">
            {NAV_MENUS.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className="text-gray-700 transition-colors hover:text-purple-600"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          asChild
          className="hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl lg:block"
        >
          <Link href="/free-trial">Get Free Trial</Link>
        </Button>

        <MobileNavSheet nav_menus={NAV_MENUS} />
      </div>
    </header>
  )
}
