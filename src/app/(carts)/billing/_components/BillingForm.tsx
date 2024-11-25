import Input, { InputType } from "@/components/inputs/Input"
import Select from "@/components/inputs/Select"

function BillingForm() {
  return (
    <div className="w-full lg:w-2/3">
                <div className="flex items-center justify-center p-2">
                    <div className="w-full bg-white rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Billing Details</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* <!-- First Name --> */}
                            <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={()=>{}} className="" />

                            {/* <!-- Last Name --> */}
                            <Input label={"Last Name"} type={InputType.Text} placeHolder={"Enter Your Last Nmae"} isDisable onChange={()=>{}} className="" />

                            {/* <!-- Company Name --> */}
                            <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your Company Nmae ()"} isDisable onChange={()=>{}} className="" />

                            {/* <!-- Email Address --> */}
                            <Input label={"First Name"} type={InputType.Email} placeHolder={"Enter Your Email Address"} isDisable onChange={()=>{}} className="" />

                            {/* <!-- Phone Number --> */}
                            <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your Phone Number"} isDisable onChange={()=>{}} className="" />

                            {/* <!-- House No/Street --> */}
                            <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={()=>{}} className="" />

                            {/* <!-- Town/City/Vill --> */}
                            <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={()=>{}} className="" />

                            {/* <!-- Country --> */}
                            <Select isDisable={true} Options={["English","Hindi","Bengali","Tamil"]} label="State" placeHolder="Select State"   />

                            {/* <!-- Province --> */}
                            <Select isDisable={true} Options={["English","Hindi","Bengali","Tamil"]} label="State" placeHolder="Select State"   />


                            {/* <!-- Pin Code --> */}
                            <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={()=>{}} className="" />

                        <div className="">
                            <button className="bg-primary px-8 py-2 rounded-md text-white">Save</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
  )
}

export default BillingForm