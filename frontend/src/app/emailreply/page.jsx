'use client';

import { Context } from "@/context/Context";
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Main } from "@/page";
import { useContext, useEffect, useState } from "react";
import Form from "./Form";

const Page = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedTab, setSelectedTab] = useState('form');

    const {
        loading,
        resultData,
        onSubmit,
    } = useContext(Context);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 1280);
        }
    }, []);

    useEffect(() => {
        if (resultData.toString().length > 0) {
            setSelectedTab('result');
        } else {
            setSelectedTab('form');
        }
    }, [resultData]);

    return (
        <Main>
            {isMobile ? (
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                    <TabsList className="w-full bg-gray-200">
                        <TabsTrigger value="form" className="w-full">Form</TabsTrigger>
                        <TabsTrigger value="result" className="w-full">Result</TabsTrigger>
                    </TabsList>
                    <TabsContent value="form" className="my-4"><Form /></TabsContent>
                    <TabsContent value="result" className="my-4">
                        {
                            !onSubmit && (
                                <img src="/overlay-leaf.svg" alt="Overlay Leaf" width={662} height={1097} className="mx-auto" />
                            )
                        }
                        {
                            loading ? (
                                <div className="my-2">
                                    <Skeleton className="h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                </div>
                            ) : (
                                resultData && (
                                    <div className="my-2 px-6 scroll-smooth">
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-3">
                                                <img src="/stars.svg" alt="Stars" />
                                                <span className="text-base font-semibold">Result</span>
                                            </div>
                                            <span className="text-base text-green">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                                        </div>
                                        <p className="mt-7 text-lg font-normal" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    </div>
                                )
                            )
                        }
                    </TabsContent>
                </Tabs>
            ) : (
                <>
                    <div className="flex flex-col xl:col-span-2 max-h-[1125.7px] overflow-auto sm:[&::-webkit-scrollbar]:[width:6px] [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {
                            !onSubmit && (
                                <img src="/overlay-leaf.svg" alt="Overlay Leaf" width={662} height={1097} className="mx-auto" />
                            )
                        }
                        {
                            loading ? (
                                <div className="my-2">
                                    <Skeleton className="h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                    <Skeleton className="my-3 h-5 w-full bg-slate-200" />
                                </div>
                            ) : (
                                resultData && (
                                    <div className="my-2 px-6 scroll-smooth">
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-3">
                                                <img src="/stars.svg" alt="Stars" />
                                                <span className="text-base font-semibold">Result</span>
                                            </div>
                                            <span className="text-base text-green">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                                        </div>
                                        <p className="mt-7 text-lg font-normal" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col">
                        <Form />
                    </div>
                </>
            )
            }
        </Main >
    )
}

export default Page;