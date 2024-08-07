'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ sidebarItems }) => {
    const pathname = usePathname();

    return (
        <nav className="grid items-start text-base font-medium gap-2">
            {sidebarItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    className={`flex items-center gap-3 rounded-lg p-4 transition-all text-gray-300/40 hover:text-white hover:bg-green ${pathname.slice(0, -1) === item.link ? 'bg-green text-white' : ''}`}
                >
                    <img src={item.icon} alt={item.label} />
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}

export default Sidebar;