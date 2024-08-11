import { BlurEllipses, Footer, Navbar } from "@/components"

const Page = () => {
    return (
        <main className="bg-green-gradient/10 min-h-screen">
            <div className="absolute overflow-hidden w-full h-screen -z-[50]">
                <BlurEllipses className="top-[-380px] left-[-417px]" />
                <BlurEllipses className="bottom-[217px] right-[-517px]" />
            </div>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="hero">
                    <div className="flex-1 padding-x">
                        <div className="m-auto left-0 right-0 bg-green rounded-full w-[70px] h-[70px] flex justify-center items-center">
                            <img src="/leaf.svg" alt="Email Writing Button" className="object-contain m-auto" />
                        </div>
                        <h1 className="hero__title mt-9 mb-14">
                            How to Use
                        </h1>
                        <div className="w-[80px] h-[7px] bg-green mx-auto"></div>
                        <p className="hero__subtitle mt-11 mb-12">
                            Watch a demo of how AirderEase works.
                        </p>
                        <iframe
                            width="1006"
                            height="569"
                            src="https://www.youtube.com/embed/ipePsVJmAzI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Page