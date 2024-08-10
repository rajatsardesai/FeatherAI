import { MobileSidebar, Sidebar } from '@/components'
import { sidebarItems } from "@/constants"
import Link from 'next/link'

const Main = ({ children }) => {
    return (
        <div className="grid w-full max-lg:h-dvh h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] p-5">
            <div className="hidden border rounded-xl md:block p-5">
                <div className="flex h-full max-h-screen flex-col gap-2 fixed">
                    <div className="flex h-14 justify-center items-center px-4 py-5 lg:h-[60px] lg:px-12">
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
                    <div className="flex-1 border-t py-4">
                        <Sidebar sidebarItems={sidebarItems} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <MobileSidebar sidebarItems={sidebarItems} />
                <main className="grid col-span-full xl:grid-cols-3 gap-4 mx-4 mt-4 lg:px-6 pt-6 lg:gap-6 lg:mt-6 border-t h-full">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Main