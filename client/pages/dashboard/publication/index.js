
import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Edit2, Plus, Trash2 } from "react-feather"
import { withAuth } from "../../../hook/with-auth"
import { dateTodate } from "../../../utils/helper"
import { DataTable } from "../../../components/table"
import { Toastify } from "../../../components/toastify"
import { CircleIconButton } from "../../../components/button"
import { DashboardLayout } from "../../../components/dashboard-layout"
import { Publications } from "../../api"

const index = () => {
    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(20)
    const [totalRows, setTotalRows] = useState(0)
    const [isLoading, setLoading] = useState(true)
    const [willDelete, setWillDelete] = useState({ id: null, show: false, loading: false })

    /* fetch data */
    const fetchData = useCallback(async (page) => {
        try {
            setLoading(true)
            const response = await Publications(page, perPage)
            if (response.status === 200) {
                setData(response.data.data)
                setTotalRows(response.data.pagination?.response.data.pagination.total_items)
            }
            setLoading(false)

        } catch (error) {
            if (error) {
                setLoading(false)

                if (error.response && error.response.data && error.response.data.errors) {
                    Toastify.Error(error.response.data.errors.message)
                }
            }
        }
    }, [perPage])

    useEffect(() => {
        fetchData(1)
    }, [fetchData])

    // handle paginate page change
    const handlePageChange = page => fetchData(page)

    // handle paginate row change
    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true)
        const response = await Publications(page, newPerPage)
        setData(response.data.data)
        setPerPage(newPerPage)
        setLoading(false)
    }

    // data columns
    const columns = [
        {
            name: "Title",
            sortable: true,
            selector: row => row.title
        },
        {
            name: "Category",
            sortable: true,
            selector: row => row.category.title
        },
        {
            name: "Publish date",
            sortable: true,
            selector: row => dateTodate(row.publicationDate)
        },
        {
            name: "Publisher",
            sortable: true,
            selector: row => row.publisher
        },
        {
            name: "Action",
            grow: 0,
            minWidth: "120px",
            cell: row =>
                <div>
                    <Link href={`/dashboard/publication/${row._id}`}>
                        <CircleIconButton type="button">
                            <Edit2 size={18} />
                        </CircleIconButton>
                    </Link>

                    <CircleIconButton
                        type="button"
                        className="ml-1"
                        onClick={() => {
                            setWillDelete({ id: row._id, show: true, loading: false })
                        }}
                    >
                        <Trash2 size={18} />
                    </CircleIconButton>
                </div>
        }
    ]

    return (
        <div>
            <DashboardLayout>
                <div className="p-4 bg-white rounded-md">
                    <div className="flex mb-4">
                        <div>
                            <p className="text-md font-medium">Publications</p>
                        </div>
                        <div className="ml-auto">
                            <Link href="/dashboard/publication/store">
                                <a>
                                    <CircleIconButton>
                                        <Plus size={18} />
                                    </CircleIconButton>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <DataTable
                            data={data}
                            columns={columns}
                            loading={isLoading}
                            totalRows={totalRows}
                            handlePerRowsChange={handlePerRowsChange}
                            handlePageChange={handlePageChange}
                            noDataMessage="Publication not available."
                        />
                    </div>
                </div>
            </DashboardLayout>
        </div>
    );
};

export default withAuth(index);