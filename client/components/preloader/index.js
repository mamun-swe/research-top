import { arraFromNumber } from "../../utils/helper"

export const ResearcherPreloader = ({ length }) => {
    return (
        <div className="container mx-auto mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 text-center gap-8">

                {length && arraFromNumber(length).map((item) =>
                    <div className="w-[250px] sm:w-full mx-auto p-8 border rounded-2xl" key={item}>
                        <div className="rounded-full bg-slate-200 h-[100px] w-[100px] mx-auto" />

                        <div className="h-2 w-[150px] mx-auto mt-4 bg-slate-200 rounded col-span-2" />
                    </div>
                )}

            </div>
        </div>
    )
}