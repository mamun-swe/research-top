
import React from "react"
import { withAuth } from "../../../hook/with-auth"
import { DashboardLayout } from "../../../components/dashboard-layout"

const store = () => {
    return (
        <div>
            <DashboardLayout>
                <p>Publication store</p>
            </DashboardLayout>
        </div>
    );
};

export default withAuth(store);