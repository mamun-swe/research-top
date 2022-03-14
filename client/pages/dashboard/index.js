
import React from "react"
import { withAuth } from "../../hook/with-auth"
import { DashboardLayout } from "../../components/dashboard-layout"

const index = () => {
    return (
        <div>
            <DashboardLayout>
                <div className="p-2 bg-white rounded-md">
                    <p>Hello</p>
                </div>
            </DashboardLayout>
        </div>
    );
};

export default withAuth(index);