
import React from "react"
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../button"
import { SingleSelect, CreatableSelect } from "../select"
import { TextField, DateField, TextAreaField } from "../input-field"

export const PublicationForm = (props) => {
    const { control, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => props.onSubmit(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Category */}
                <div className="mb-5">
                    <SingleSelect
                        name="category"
                        borderRadius={6}
                        control={control}
                        isClearable={true}
                        label={"Category"}
                        options={props?.categories}
                        placeholder={"Select category"}
                        defaultvalue={props?.data?.category}
                        error={errors.category && errors.category.message}
                        rules={{ required: "Category is required" }}
                    />
                </div>

                {/* Title */}
                <div className="mb-5">
                    <TextField
                        label="Title"
                        name="title"
                        control={control}
                        defaultvalue={props?.data?.title}
                        error={errors.title && errors.title.message}
                        placeholder={"Publication title"}
                        rules={{ required: "Title is required" }}
                    />
                </div>

                {/* Authors */}
                <div className="mb-5">
                    <CreatableSelect
                        name="authors"
                        isMulti={true}
                        control={control}
                        borderRadius={6}
                        label={"Authors"}
                        placeholder={"Authors name"}
                        defaultvalue={props?.data?.authors}
                        error={errors.authors && errors.authors.message}
                        rules={{ required: "Authors is required" }}
                    />
                </div>

                {/* Publication date */}
                <div className="mb-5">
                    <DateField
                        label="Publish date"
                        name="publicationDate"
                        control={control}
                        defaultvalue={props?.data?.publicationDate}
                        error={errors.publicationDate && errors.publicationDate.message}
                        placeholder={"Publish date"}
                        rules={{ required: "Date is required" }}
                    />
                </div>

                {/* Conference name */}
                <div className="mb-5">
                    <TextField
                        label="Conference"
                        name="conference"
                        control={control}
                        defaultvalue={props?.data?.conference}
                        error={errors.conference && errors.conference.message}
                        placeholder={"Conference name"}
                        rules={{ required: "Conference name is required" }}
                    />
                </div>

                {/* Publisher name */}
                <div className="mb-5">
                    <TextField
                        label="Publisher"
                        name="publisher"
                        control={control}
                        defaultvalue={props?.data?.publisher}
                        error={errors.publisher && errors.publisher.message}
                        placeholder={"Publisher name"}
                        rules={{ required: "Publisher name is required" }}
                    />
                </div>
            </div>

            {/* Description */}
            <div className="mb-5">
                <TextAreaField
                    label="Description"
                    name="description"
                    control={control}
                    rows={5}
                    defaultvalue={props?.data?.description}
                    error={errors.description && errors.description.message}
                    placeholder={"Description name"}
                    rules={{ required: "Description name is required" }}
                />
            </div>

            {/* Submit button */}
            <div className="text-right">
                <PrimaryButton
                    type="submit"
                    disabled={props.isLoading}
                >
                    {props.isLoading ? "Loading..." : "Create"}
                </PrimaryButton>
            </div>
        </form>
    )
}