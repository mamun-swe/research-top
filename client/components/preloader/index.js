import { arraFromNumber } from "../../utils/helper"

export const ResearcherListPreloader = ({ length }) => {
    return (
        <div className="container mx-auto mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 text-center gap-8">

                {length && arraFromNumber(length).map((item) =>
                    <div className="w-[250px] sm:w-full mx-auto p-8 border shadow-lg rounded-2xl" key={item}>
                        <div className="rounded-full bg-slate-200 h-[100px] w-[100px] mx-auto" />

                        <div className="h-2 w-[150px] mx-auto mt-4 bg-slate-200 rounded col-span-2" />
                    </div>
                )}

            </div>
        </div>
    )
}

export const ResearcherShowPreloader = () => {
    return (
        <div className="container mx-auto mt-[74px] py-[30px]">
            <div className="grid grid-cols-1">
                <div className="lg:flex">
                    <div className="w-full lg:w-[350px] mb-10 lg:mb-0 lg:pr-5">
                        <div className="border rounded-lg shadow-md p-5">
                            <div className="w-[120px] h-[120px] bg-slate-200 rounded-full mb-5 mx-auto lg:mx-0" />
                            <div className="w-[200px] h-2 bg-slate-200 rounded col-span-2 mb-4 mx-auto lg:mx-0" />
                            <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                            <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                            <div className="h-2 bg-slate-200 rounded col-span-2" />
                        </div>
                    </div>

                    <div className="grow">
                        <div className="border shadow-md rounded-lg p-5">
                            <div className="grid grid-cols-4 gap-4">
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                                <div className="h-2 bg-slate-200 rounded col-span-2 mb-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TableLoader = () => {
    return (
        <div className="p-4 w-full mx-auto">
            <div className="animate-pulse">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
            </div>
        </div>
    )
}

export const DashboardPreloader = () => {
    return (
        <div>
            <div className="px-4 py-6 bg-white rounded-md mb-4">
                <div className="h-2 w-[200px] md:w-[400px] mx-auto bg-slate-200 rounded col-span-2" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-md">
                    <div className="h-2 w-[200px] bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded" />
                </div>

                <div className="p-4 bg-white rounded-md">
                    <div className="h-2 w-[200px] bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded" />
                </div>

                <div className="p-4 bg-white rounded-md">
                    <div className="h-2 w-[200px] bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded" />
                </div>

                <div className="p-4 bg-white rounded-md">
                    <div className="h-2 w-[200px] bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-200 rounded" />
                </div>
            </div>
        </div>
    )
}

export const DashboardPublicationCreate = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="h-10 w-full bg-slate-200 rounded" />
                <div className="h-10 w-full bg-slate-200 rounded" />
                <div className="h-10 w-full bg-slate-200 rounded" />
                <div className="h-10 w-full bg-slate-200 rounded" />
                <div className="h-10 w-full bg-slate-200 rounded" />
                <div className="h-10 w-full bg-slate-200 rounded" />
            </div>

            <div className="my-4">
                <div className="h-24 w-full bg-slate-200 rounded" />
            </div>

            <div className="text-right">
                <div className="h-10 w-[100px] ml-auto bg-slate-200 rounded" />
            </div>
        </div>
    )
}