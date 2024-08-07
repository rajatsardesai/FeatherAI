'use client';

import { Context } from "@/context/Context";
import { Main } from "@/pages";
import { useContext } from "react";

const page = () => {
    const {
        loading,
        resultData,
    } = useContext(Context);

    return (
        <Main>
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
        </Main>
    )
}

export default page;