'use client';

import Link from "next/link"
import { sidebarItems } from "@/constants"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Form } from "@/components"
import { useContext, useState } from "react"
import { Context } from "@/context/Context"

const page = () => {
    const [status, setStatus] = useState('');
    const {
        onSent,
        recentPrompt,
        setRecentPrompt,
        setPrevPrompts,
        showResult,
        loading,
        resultData,
        setInput,
        input,
        onToggleItems
    } = useContext(Context);

    // Function to send prompt
    const handleSubmit = async (formData) => {
        const prompt = `Write an email with the following parameters:- 
        Purpose: ${formData.get("purpose")},
        Subject Line: ${formData.get("subjectline")},
        Recipient: ${formData.get("recipient")},
        Sender: ${formData.get("sender")},
        No of characters of email: ${formData.get("length")},
        Tone: ${formData.get("tone")},
        Language: ${formData.get("language")}`;

        try {
            const response = await onSent(prompt);

            if (response.status === 200) {
                setStatus('Form submitted successfully');
            } else {
                setStatus('Error submitting form');
            }
        } catch (e) {
            console.log("Form is not submitted", e);
        }
    };

    return (
        <div className="grid w-full h-dvh md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] p-5">
            <div className="hidden border rounded-xl md:block p-5">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 justify-center items-center px-4 py-5 lg:h-[60px] lg:px-6">
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
                        <nav className="grid items-start text-base font-medium gap-2">
                            {
                                sidebarItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className="flex items-center gap-3 rounded-lg p-4 transition-all text-gray-300/40 hover:text-white hover:bg-green"
                                    >
                                        <img src={item.icon} alt={item.label} />
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
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
                                                className="flex items-center gap-3 rounded-lg px-4 py-5 transition-all text-gray-300/40 hover:text-white hover:bg-green"
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
                <main className="grid col-span-full xl:grid-cols-3 gap-4 mx-4 mt-4 lg:px-6 pt-6 lg:gap-6 lg:mt-6 border-t h-full">
                    <div className="flex flex-col xl:col-span-2 max-h-[1125.7px] overflow-auto sm:[&::-webkit-scrollbar]:[width:6px] [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {
                            loading ? (
                                <div className="my-2">
                                    Loading....
                                </div>
                            ) : (
                                resultData && (
                                    <div className="my-2 scroll-smooth">
                                        <div className="flex items-center gap-3">
                                            <img src="/stars.svg" alt="Stars" />
                                            <span className="text-base font-semibold">Result</span>
                                        </div>
                                        <p className="mt-7 text-lg font-normal" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col">
                        <Form handleSubmit={handleSubmit} loading={loading} />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default page;