import React from "react"
import { Link } from "react-router-dom"
import { ChevronLeft } from "react-feather"
import { Card } from "../../components/card"
import { CircleButton } from "../../components/button"
import { CategoryForm } from "../../components/form/category"

const store = () => {
    return (
        <div className="w-full lg:w-[500px] mx-auto">
            <Card className="mb-3">
                <div className="flex">
                    <div className="pt-[7px]">
                        <p className="text-[16px] text-gray-800 font-medium">Create category</p>
                    </div>
                    <div className="ml-auto">
                        <Link to="/dashboard/category">
                            <CircleButton>
                                <ChevronLeft size={22} />
                            </CircleButton>
                        </Link>
                    </div>
                </div>

                <div className="pt-8">
                    <CategoryForm
                        onSubmit={data => console.log(data)}
                        isLoading={false}
                    />
                </div>
            </Card>
        </div>
    );
};

export default store;