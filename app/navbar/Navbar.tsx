import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import "./navbar.css";
export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-black text-white">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          prefetch={false}>
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          prefetch={false}>
          Tokenomics
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          prefetch={false}>
          Roadmap
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          prefetch={false}>
          How to Buy
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          prefetch={false}>
          FAQ
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}>
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}>
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
