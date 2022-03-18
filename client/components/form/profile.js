
import React, { Component, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../button"
import { CountrySelect } from "../select"
import { TextField, TextAreaField } from "../input-field"
import ReactFlagsSelect from "react-flags-select"
import { countries } from "../select/data/countries"

export const ProfileForm = (props) => {
    const { control, handleSubmit, formState: { errors } } = useForm()
    const [selected, setSelected] = useState('')

    const onSubmit = data => props.onSubmit(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <div className="mb-5">
                    <TextField
                        label="Name"
                        name="name"
                        control={control}
                        defaultvalue={props?.data?.name}
                        error={errors.name && errors.name.message}
                        placeholder={"Your name"}
                        rules={{ required: "Name is required" }}
                    />
                </div>

                {/* Address */}
                <div className="mb-5">
                    <TextField
                        label="Address"
                        name="address"
                        control={control}
                        defaultvalue={props?.data?.address}
                        error={errors.address && errors.address.message}
                        placeholder={"Your address"}
                        rules={{ required: "Address is required" }}
                    />
                </div>

                {/* Country */}
                <div className="mb-5">
                    <CountrySelect
                        name={"country"}
                        control={control}
                        isClearable={true}
                        error={errors.country && errors.country.message}
                        label={"Select country"}
                        placeholder={"Select country"}
                        borderRadius={6}
                        defaultvalue={null}
                        rules={{ required: "Address is required" }}
                    />
                </div>


            </form>
        </div>
    );
}