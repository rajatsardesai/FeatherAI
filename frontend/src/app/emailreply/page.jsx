import { Main } from "@/page"

const page = () => {
    return (
        <Main>
            <div className="flex flex-col xl:col-span-2 max-h-[1125.7px] overflow-auto sm:[&::-webkit-scrollbar]:[width:6px] [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div>page</div>
            </div>
        </Main>
    )
}

export default page