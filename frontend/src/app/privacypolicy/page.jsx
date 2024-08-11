import { BlurEllipses, Footer, Navbar } from "@/components";
import { faqs } from "@/constants";

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
                            Privacy Policies
                        </h1>
                        <div className="w-[80px] h-[7px] bg-green mx-auto"></div>
                        <div className="mt-14">
                            {
                                faqs.map((faq, id) => (
                                    <div key={id} className="mt-20 mb-8">
                                        <h5 className="text-[32px] leading-[38.73px] font-semibold mb-4">{faq.question}</h5>
                                        <p className="text-2xl font-light">{faq.answer}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Page;