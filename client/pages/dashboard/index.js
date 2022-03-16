
import Link from "next/link"
import React, { useCallback, useEffect, useState } from "react"
import { withAuth } from "../../hook/with-auth"
import { greeting, dateTodate } from "../../utils/helper"
import { PrimaryButton } from "../../components/button"
import { NetworkError } from "../../components/network-error"
import { DashboardPreloader } from "../../components/preloader"
import { DashboardLayout } from "../../components/dashboard-layout"
import { Me } from "../api"

const index = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [serverError, setServerError] = useState(false)

    /* fetch data */
    const fetchData = useCallback(async () => {
        try {
            const response = await Me()
            if (response && response.status === 200) {
                setData(response.data.data)
                setLoading(false)
            } else {
                setLoading(false)
                setServerError(true)
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                setServerError(true)
                console.log(error.response)
            }
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div>
            <DashboardLayout>

                {isLoading && !serverError && !data ? <DashboardPreloader /> : null}
                {!isLoading && !data && serverError ? <NetworkError /> : null}

                {!isLoading && !serverError && data ?
                    <div>

                        {/* Greeting */}
                        <div className="grid grid-cols-1 px-4 py-6 bg-white rounded-md mb-4">
                            <div className="text-center">
                                <h3 className="font-extrabold text-2xl md:text-3xl text-indigo-500">{greeting()} {data.name}</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">

                            {/* Personal info */}
                            <div className="p-4 bg-white rounded-md">
                                <p className="text-md font-medium mb-3">Personal information</p>

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
                                        <p className="text-[13px] font-medium mb-2 text-gray-500">: {data.name}</p>
                                        <p className="text-[13px] font-medium mb-2 text-gray-500">: {data.username}</p>
                                        <p className="text-[13px] font-medium mb-2 text-gray-500">: {data.email}</p>
                                        <p className="text-[13px] font-medium mb-2 text-gray-500">: {data.country}</p>
                                        <p className="text-[13px] font-medium mb-2 text-gray-500">: {data.address}</p>
                                        <p className="text-[13px] font-medium mb-2 text-gray-500">: {data.publications}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Work info */}
                            <div className="p-4 bg-white rounded-md">
                                <p className="text-md font-medium mb-2">Work information</p>

                                {data.work && data.work.length > 0 ?
                                    data.work.map((item, i) =>
                                        <div className="p-2" key={i}>
                                            <p className="text-[14px] font-medium capitalize">{item.position}</p>
                                            <p className="text-[14px] font-medium capitalize mb-1">{item.organization}</p>
                                            <p className="text-[13px] font-regular text-gray-500">[{dateTodate(item.startFrom)} - {item.onGoing ? "CURRENT" : item.endTo ? dateTodate(item.endTo) : null}]</p>
                                        </div>
                                    ) :
                                    <p className="text-[13px] font-regular text-gray-500">No work history added.</p>
                                }
                            </div>

                            {/* Education info */}
                            <div className="p-4 bg-white rounded-md">
                                <p className="text-md font-medium mb-2">Education information</p>

                                {data.education && data.education.length > 0 ?
                                    data.education.map((item, i) =>
                                        <div className="p-2" key={i}>
                                            <p className="text-[14px] font-medium capitalize">{item.school}</p>
                                            <p className="text-[14px] font-medium mb-1">Department of {item.department}</p>
                                            <p className="text-[13px] font-regular text-gray-500">[{item.passingYear}]</p>
                                        </div>
                                    ) :
                                    <p className="text-[13px] font-regular text-gray-500">No education history added.</p>
                                }
                            </div>

                            {/* Public profiles */}
                            <div className="p-4 bg-white rounded-md">
                                <p className="text-md font-medium mb-2">Public profiles</p>

                                {data.otherProfiles && data.otherProfiles.length > 0 ?
                                    data.otherProfiles.map((item, i) =>
                                        <div className="p-2" key={i}>
                                            <p className="text-[14px] font-medium capitalize mb-1">{item.title}</p>
                                            <p className="text-[13px] font-regular text-gray-500">{item.link}</p>
                                        </div>
                                    ) :
                                    <p className="text-[13px] font-regular text-gray-500">No profiles added.</p>
                                }
                            </div>
                        </div>

                        <div className="text-center my-7">
                            <Link href="/dashboard/edit-profile">
                                <a>
                                    <PrimaryButton>Edit Profile</PrimaryButton>
                                </a>
                            </Link>
                        </div>
                    </div>
                    : null
                }

            </DashboardLayout>
        </div>
    );
};

export default withAuth(index);