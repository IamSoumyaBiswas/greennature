function BillingDetails() {
  return (
    <div className="w-full lg:w-1/3">
        <div className="bg-white rounded-lg  p-6 space-y-6">
            {/* <!-- Product and Subtotal Section --> */}
            <div className="flex justify-between border-b pb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Product</h2>
                    <p className="text-gray-600">Asgaard sofa <span className="font-medium">x 1</span></p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Subtotal</h2>
                    <p className="text-gray-600">Rs. 250,000.00</p>
                </div>
            </div>

            {/* <!-- Total Section --> */}
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800">Total</p>
                <p className="text-xl font-medium text-green-600">Rs. 250,000.00</p>
            </div>

            {/* <!-- Payment Method Section --> */}
            <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Direct Bank Transfer</h3>
                <p className="text-gray-600 text-sm">
                    Make your payment directly into our bank account. Please use your Order ID as the payment
                    reference. Your order will not be shipped until the funds have cleared in our account.
                </p>

                {/* <!-- Payment Options --> */}
                <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-primary focus:ring-green-500"/>
                    <span className="text-gray-800 font-medium">Direct Bank Transfer</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-green-600 focus:ring-green-500"/>
                    <span className="text-gray-800 font-medium">Cash On Delivery</span>
                </label>
            </div>

            {/* <!-- Privacy Note --> */}
            <p className="text-gray-600 text-sm">
                Your personal data will be used to support your experience throughout this website, to manage
                access to your account, and for other purposes described in our privacy policy.
            </p>

            {/* <!-- Place Order Button --> */}
            <button
                className="w-full text-center mt-6 py-2 border rounded-lg transition font-medium border-gray-700 hover:bg-gray-800 hover:text-white">
                Place order
            </button>
        </div>
    </div>
  )
}

export default BillingDetails