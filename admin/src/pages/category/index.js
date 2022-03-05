import React from "react"
import { Plus } from "react-feather"
import { Link } from "react-router-dom"
import { Card } from "../../components/card"
import { CircleButton, PrimaryButton, DangerButton } from "../../components/button"

const index = () => {
    return (
        <div>
            <Card className="mb-3">
                <div className="flex">
                    <div className="pt-[7px]">
                        <p className="text-[16px] text-gray-800 font-medium">Category list</p>
                    </div>
                    <div className="ml-auto">
                        <Link to="/dashboard/category/store">
                            <CircleButton>
                                <Plus size={22} />
                            </CircleButton>
                        </Link>
                    </div>
                </div>
            </Card>

            <Card>
                <PrimaryButton disabled>Loading...</PrimaryButton>
                <br />
                <DangerButton disabled>Loading...</DangerButton>
            </Card>
        </div>
    );
};

export default index;