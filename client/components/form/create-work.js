
import React from "react"
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../button"
import { TextField, DateField } from "../input-field"


export const CreateWorkForm = (props) => {
    const { control, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => props.onSubmit(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* Organization */}
            <div className="mb-4">
                <TextField
                    label="Organization"
                    name="organization"
                    control={control}
                    defaultvalue={""}
                    error={errors.organization && errors.organization.message}
                    placeholder={"Organization name"}
                    rules={{ required: "Organization name is required" }}
                />
            </div>

            {/* Department */}
            <div className="mb-4">
                <TextField
                    label="Organization"
                    name="department"
                    control={control}
                    defaultvalue={""}
                    error={errors.department && errors.department.message}
                    placeholder={"Department"}
                    rules={{ required: "Department is required" }}
                />
            </div>

            {/* Position */}
            <div className="mb-4">
                <TextField
                    label="Position"
                    name="position"
                    control={control}
                    defaultvalue={""}
                    error={errors.position && errors.position.message}
                    placeholder={"Position"}
                    rules={{ required: "Position is required" }}
                />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 mb-4 gap-4">

                {/* Start date */}
                <DateField
                    label="Start date"
                    name="startFrom"
                    control={control}
                    defaultvalue={""}
                    error={errors.startFrom && errors.startFrom.message}
                    placeholder={"Position"}
                    rules={{ required: "Start date is required" }}
                />

                {/* Start date */}
                <DateField
                    label="End to"
                    name="endTo"
                    control={control}
                    defaultvalue={""}
                    error={errors.endTo && errors.endTo.message}
                    placeholder={"End to"}
                    rules={{ required: false }}
                />
            </div>

            {/* is current date */}
            <div className="mb-4">

            </div>

            {/* Submit button */}
            <div className="text-right">
                <PrimaryButton
                    type="submit"
                    disabled={props.loading}
                >
                    {props.loading ? "Creating ..." : "Create"}
                </PrimaryButton>
            </div>
        </form>
    )
}