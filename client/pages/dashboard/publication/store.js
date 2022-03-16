
import React from "react"
import Link from "next/link"
import { ChevronLeft } from "react-feather"
import { withAuth } from "../../../hook/with-auth"
import { CircleIconButton } from "../../../components/button"
import { DashboardLayout } from "../../../components/dashboard-layout"
import { PublicationForm } from "../../../components/form/publication"

const store = () => {

    /* Handle form submission */
    const handleSubmit = async (data) => {
        try {
            console.log("Log from here")
            console.log(data)
        } catch (error) {
            if (error) {
                console.log(error?.response)
            }
        }
    }

    return (
        <div>
            <DashboardLayout>
                <div className="p-4 bg-white rounded-md">
                    <div className="flex mb-4">
                        <div>
                            <p className="text-md font-medium">New publication</p>
                        </div>
                        <div className="ml-auto">
                            <Link href="/dashboard/publication">
                                <a>
                                    <CircleIconButton>
                                        <ChevronLeft size={18} />
                                    </CircleIconButton>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/5 mx-auto lg:border lg:rounded-lg lg:shadow-md lg:p-6">
                        <PublicationForm
                            isLoading={false}
                            data={null}
                            onSubmit={value => handleSubmit(value)}
                        />
                    </div>
                </div>
            </DashboardLayout>
        </div>
    );
};

export default withAuth(store);