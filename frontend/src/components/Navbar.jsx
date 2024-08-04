import Link from "next/link";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-20">
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
            </nav>
        </header>
    )
}

export default Navbar;