'use client'

import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context } from "@/context/Context";

const MobileSidebar = ({ sidebarItems }) => {
    const pathname = usePathname();
    const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);

    const {
        setResultData,
        setOnSubmit,
    } = useContext(Context);

    // Function to reset result data and display overlay leaf on submit
    const changeStates = () => {
        setOnSubmit(false);
        setResultData("");
    }

    useEffect(() => {
        const foundItem = sidebarItems.find(item => pathname.includes(item.link));
        setSelectedSidebarItem(foundItem);
    }, [pathname, sidebarItems]);

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
                    <SheetTitle>
                        <SheetDescription className="hidden">Menu</SheetDescription>
                    </SheetTitle>
                    <nav className="grid gap-2 text-base font-medium">
                        <div className="flex h-14 items-center px-4 py-5 lg:h-[60px] lg:px-6">
                            <Link href="/" className="flex justify-center items-center gap-2">
                                <div className="flex justify-center items-center bg-green w-8 h-8 rounded-lg">
                                    <img
                                        src="/leaf.svg"
                                        alt="FeatherAI Logo"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <span className="text-xl font-normal">
                                    Feather
                                    <span className="font-bold">AI</span>
                                </span>
                            </Link>
                        </div>
                        <div className="border-t py-4">
                            {
                                sidebarItems.map((item, index) => {
                                    const isDisabled = item.disabled;
                                    return (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            className={`flex items-center gap-3 rounded-lg px-4 py-5 transition-all ${isDisabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-300/40 hover:text-white hover:bg-green'} ${pathname.slice(0, -1) === item.link ? 'bg-green text-white' : ''}`}
                                            onClick={(e) => {
                                                if (isDisabled) {
                                                    e.preventDefault();
                                                    return;
                                                }
                                                changeStates();
                                            }}
                                        >
                                            <FontAwesomeIcon icon={item.icon} />
                                            <div>
                                                {item.name}
                                                <span className="text-xs block">{isDisabled ? '(coming soon)' : ''}</span>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
            {selectedSidebarItem && (
                <h3 className="text-xl md:text-3xl font-bold">{selectedSidebarItem.name}</h3>
            )}
        </header>
    )
}

export default MobileSidebar