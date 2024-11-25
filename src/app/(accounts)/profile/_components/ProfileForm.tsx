"use client"
import Input, { InputType } from "@/components/inputs/Input"
import Select from "@/components/inputs/Select";
import { useState } from "react"

function ProfileForm() {
    const [firstName, SetFirstName] = useState("");
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- First Name --> */}
            <Input type={InputType.Text} isDisable={true} label="First Name" className="" placeHolder="First Name" onChange={e => {
                SetFirstName(e.target.value)
                console.log(firstName)
            }} />

            {/* <!-- Last Name --> */}
            <Input type={InputType.Text} isDisable={true} label="Last Name" className="" placeHolder="Last Name" onChange={e => {
                SetFirstName(e.target.value)
                console.log(firstName)
            }} />

            {/* <!-- Email Address --> */}
            <Input type={InputType.Email} isDisable={true} label="Email" className="" placeHolder="Email" onChange={e => {
                SetFirstName(e.target.value)
                console.log(firstName)
            }} />

            {/* <!-- Phone Number --> */}
            <Input type={InputType.TelePhone} isDisable={true} label="Phone Number" className="" placeHolder="Phone Number" onChange={e => {
                SetFirstName(e.target.value)
                console.log(firstName)
            }} />

            {/* <!-- Gender --> */}
            <Select isDisable={true} Options={["English","Hindi","Bengali","Tamil"]} label="Gender" placeHolder="Select Gender" onChange={(e)=>{}}  />

            {/* <!-- Country --> */}
            <Select isDisable={true} Options={["English","Hindi","Bengali","Tamil"]} label="Country" placeHolder="Select Select" onChange={(e)=>{}}  />

            {/* <!-- Language --> */}
            <Select  isDisable={true}Options={["English","Hindi","Bengali","Tamil"]} label="Language" placeHolder="Select Language" onChange={(e)=>{}}  />

                {/* <!-- Time Zone --> */}
                <Input type={InputType.Time} isDisable={true} label="Time" className="" placeHolder="Time" onChange={e => {
                    SetFirstName(e.target.value)
                    console.log(firstName)
                }} />
        </form>
    )
}

export default ProfileForm