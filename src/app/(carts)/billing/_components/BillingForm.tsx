import Input, { InputType } from "@/components/inputs/Input"
import Select from "@/components/inputs/Select"

function BillingForm() {
    return (
        <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-center p-2">
                <div className="w-full bg-white rounded-lg p-6 space-y-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Billing Details</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* <!-- First Name --> */}
                        <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={() => { }} className="col-span-1" />

                        {/* <!-- Last Name --> */}
                        <Input label={"Last Name"} type={InputType.Text} placeHolder={"Enter Your Last Nmae"} isDisable onChange={() => { }} className="col-span-1" />
                        {/* <!-- Company Name --> */}
                        <Input label={"Company Name"} type={InputType.Text} placeHolder={"Enter Your Company Nmae ()"} isDisable onChange={() => { }} className="col-span-2" />
                        {/* <!-- Email Address --> */}
                        <Input label={"Email"} type={InputType.Email} placeHolder={"Enter Your Email Address"} isDisable onChange={() => { }} className="col-span-2" />

                        {/* <!-- Phone Number --> */}
                        <Input label={"Phone Number"} type={InputType.TelePhone} placeHolder={"Enter Your Phone Number"} isDisable onChange={() => { }} className="col-span-2" />

                        {/* <!-- House No/Street --> */}
                        <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={() => { }} className="col-span-1" />

                        {/* <!-- Town/City/Vill --> */}
                        <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={() => { }} className="col-span-1" />

                        {/* <!-- Country --> */}
                        <Select isDisable={true} Options={["English", "Hindi", "Bengali", "Tamil"]} label="State" placeHolder="Select State" className="col-span-1" />

                        {/* <!-- Province --> */}
                        <Select isDisable={true} Options={["English", "Hindi", "Bengali", "Tamil"]} label="State" placeHolder="Select State" className="col-span-1" />


                        {/* <!-- Pin Code --> */}
                        <Input label={"First Name"} type={InputType.Text} placeHolder={"Enter Your First Nmae"} isDisable onChange={() => { }} className="col-span-1" />

                    </form>
                    <div className="place-self-center">
                        <button className="bg-green-700 px-16 py-2 text-lg rounded-md text-white">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingForm