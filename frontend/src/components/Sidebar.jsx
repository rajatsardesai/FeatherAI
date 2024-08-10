'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from "react";
import { Context } from "@/context/Context";

const Sidebar = ({ sidebarItems }) => {
    const pathname = usePathname();

    const {
        setResultData,
        setOnSubmit,
    } = useContext(Context);

    // Function to reset result data and display overlay leaf on submit
    const changeStates = () => {
        setOnSubmit(false);
        setResultData("");
    }

    return (
        <nav className="grid items-start text-base font-medium gap-2">
            {sidebarItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    className={`flex items-center gap-3 rounded-lg p-4 transition-all text-gray-300/40 hover:text-white hover:bg-green ${pathname.slice(0, -1) === item.link ? 'bg-green text-white' : ''}`}
                    onClick={changeStates}
                >
                    <FontAwesomeIcon icon={item.icon} />
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}

export default Sidebar;