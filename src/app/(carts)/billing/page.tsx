import BillingDetails from "./_components/BillingDetails"
import BillingForm from "./_components/BillingForm"

function page() {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-4  my-[48px]">
        <BillingForm />
        <BillingDetails/>
    </div>
  )
}

export default page