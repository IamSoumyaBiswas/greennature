"use client"
import Input, { InputType } from "@/components/inputs/Input"

function ChangePassword() {
    
    return (
        <form className="grid grid-cols-1 gap-6">
            {/* <!-- Current Password --> */}
            <Input type={InputType.Password} isDisable={true} label="Current Password" className="" placeHolder="Current Password" onChange={e => {}} />

            {/* <!-- New Password --> */}
            <Input type={InputType.Password} isDisable={true} label="New Password" className="" placeHolder="New Password" onChange={e => {}} />

            {/* <!-- Confirm Password --> */}
            <Input type={InputType.Password} isDisable={true} label="New Password" className="" placeHolder="New Password" onChange={e => {}} />
        </form>
    )
}

export default ChangePassword