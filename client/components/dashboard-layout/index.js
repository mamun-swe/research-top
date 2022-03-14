
import { useState } from "react"
import { Navbar } from "./navbar"
import { Drawer } from "./drawer"
import { Sidebar } from "./sidebar"

export const DashboardLayout = (props) => {
    const [show, setShow] = useState(false)

    return (
        <div className="bg-gray-100">

            {/* Navbar */}
            <div className="p-3 fixed top-0 left-0 w-full lg:hidden bg-white">
                <Navbar onClick={() => setShow(!show)} />
            </div>

            {/* Mobile drawer */}
            <Drawer
                show={show}
                hidden={"lg"}
                onClick={() => setShow(!show)}
            />

            <div className="lg:flex w-full min-h-screen">

                {/* Sidebar container */}
                <div className="hidden lg:block w-[300px] min-h-screen p-4">
                    <Sidebar />
                </div>

                {/* Main container */}
                <div className="grow mt-[66px] lg:mt-0 py-3 pr-3 pl-3 lg:py-4 lg:pr-4 lg:pl-0">
                    {props.children}
                </div>
            </div>
        </div>
    );
}