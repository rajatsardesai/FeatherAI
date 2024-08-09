'use client';

import { Context } from "@/context/Context";
import { Skeleton } from "@/components/ui/skeleton"
import { Main } from "@/page";
import { useContext } from "react";
import Form from "./Form";

const page = () => {
    const {
        loading,
        resultData,
        onSubmit,
    } = useContext(Context);

    return (
        <Main>
            <div className="flex flex-col xl:col-span-2 max-h-[1125.7px] overflow-auto sm:[&::-webkit-scrollbar]:[width:6px] [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                {
                    !onSubmit && (
                        <img src="/overlay-leaf.svg" alt="Overlay Leaf" width={662} height={1097} />
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
                <Form />
            </div>
        </Main>
    )
}

export default page;