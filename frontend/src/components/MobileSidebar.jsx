'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileSidebar = ({ sidebarItems }) => {
    const pathname = usePathname();

    return (
        <header className="flex items-center gap-4 bg-muted/40 px-4 lg:px-6 pt-7">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col bg-white">
                    <nav className="grid gap-2 text-base font-medium">
                        <div className="flex h-14 items-center px-4 py-5 lg:h-[60px] lg:px-6">
                            <Link href="/" className="flex justify-center items-center gap-2">
                                <div className="flex justify-center items-center bg-green w-8 h-8 rounded-lg">
                                    <img
                                        src="/leaf.svg"
                                        alt="AirderEase Logo"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <span className="text-xl font-normal">
                                    Airder
                                    <span className="font-bold">Ease</span>
                                </span>
                            </Link>
                        </div>
                        <div className="border-t py-4">
                            {
                                sidebarItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className={`flex items-center gap-3 rounded-lg px-4 py-5 transition-all text-gray-300/40 hover:text-white hover:bg-green ${pathname.slice(0, -1) === item.link ? 'bg-green text-white' : ''}`}
                                    >
                                        <img src={item.icon} alt={item.label} />
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
            <h3 className="text-3xl font-bold">AI Email Write </h3>
        </header>
    )
}

export default MobileSidebar