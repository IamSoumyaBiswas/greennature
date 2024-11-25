"use client"
import Input, { InputType } from "@/components/inputs/Input"
import Select from "@/components/inputs/Select";
import { useState } from "react"

function AddressForm() {
    const [firstName, SetFirstName] = useState("");
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- First Name --> */}
            <Input type={InputType.Text} isDisable={true} label="Steet/House No" className="" placeHolder="Steet/House No" onChange={e => {
                SetFirstName(e.target.value)
                console.log(firstName)
            }} />

            {/* <!-- Last Name --> */}
            <Input type={InputType.Text} isDisable={true} label="City" className="" placeHolder="City" onChange={e => {
                SetFirstName(e.target.value)
                console.log(firstName)
            }} />

            {/* <!-- Email Address --> */}
            <Input type={InputType.Text} isDisable={true} label="State" className="" placeHolder="State" onChange={e => {
                SetFirstName(e.target.value)
                console.log(firstName)
            }} />

            {/* <!-- Gender --> */}
            <Select isDisable={true} Options={["English","Hindi","Bengali","Tamil"]} label="State" placeHolder="Select State" className=""   />

            {/* <!-- Country --> */}
            <Select isDisable={true} Options={["English","Hindi","Bengali","Tamil"]} label="Country" placeHolder="Select Select" className=""   />

        </form>
    )
}

export default AddressForm