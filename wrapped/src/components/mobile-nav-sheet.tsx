import Image from "next/image"
import Link from "next/link"
import { IconMenu4 } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const MobileNavSheet = ({
  nav_menus,
}: {
  nav_menus: { name: string; href: string }[]
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon" aria-label="Open navigation menu">
          <IconMenu4 />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <div className="flex items-center">
              <Image src={"/logo.svg"} height={30} width={120} alt="logo" />
            </div>
          </SheetHeader>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 px-2">
          {nav_menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start text-left"
              )}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
        <Button
          size={"lg"}
          className="mx-4 mt-auto mb-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
        >
          Get Free Trial
        </Button>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavSheet
