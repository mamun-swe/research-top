
import React from "react"
import { withAuth } from "../../../hook/with-auth"
import { DashboardLayout } from "../../../components/dashboard-layout"

const index = () => {
    return (
        <div>
            <DashboardLayout>
                <p>Publication index</p>
            </DashboardLayout>
        </div>
    );
};

export default withAuth(index);