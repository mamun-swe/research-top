
import React from "react"
import { withAuth } from "../../hook/with-auth"
import { greeting } from "../../utils/helper"
import { DashboardLayout } from "../../components/dashboard-layout"

const index = () => {
    return (
        <div>
            <DashboardLayout>

                {/* Greeting */}
                <div className="px-4 py-6 bg-white rounded-md mb-3">
                    <div className="text-center">
                        <h3 className="font-extrabold text-2xl md:text-3xl text-indigo-500">{greeting()}</h3>
                    </div>
                </div>

                {/* Personal info */}
                <div className="p-4 bg-white rounded-md mb-3">
                    <p className="text-md font-medium mb-5">Personal information</p>

                    <div className="flex">
                        <div className="w-[90px] md:w-[130px]">
                            <p className="text-[13px] font-medium mb-2 text-gray-500">Name</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">Username</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">E-mail</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">Country</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">Address</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">Publications</p>
                        </div>

                        <div className="grow">
                            <p className="text-[13px] font-medium mb-2 text-gray-500">: Name</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">: Username</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">: E-mail</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">: Country</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">: Address</p>
                            <p className="text-[13px] font-medium mb-2 text-gray-500">: Publications</p>
                        </div>
                    </div>
                </div>

                {/* Work info */}
                <div className="p-4 bg-white rounded-md mb-3">
                    <p className="text-md font-medium mb-5">Work information</p>

                </div>

                {/* Education info */}
                <div className="p-4 bg-white rounded-md mb-3">
                    <p className="text-md font-medium mb-5">Education information</p>

                </div>

                {/* Public profiles */}
                <div className="p-4 bg-white rounded-md mb-3">
                    <p className="text-md font-medium mb-5">Public profiles</p>
                </div>
            </DashboardLayout>
        </div>
    );
};

export default withAuth(index);