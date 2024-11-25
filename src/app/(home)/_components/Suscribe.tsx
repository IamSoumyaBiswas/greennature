import React from 'react'

const SubscribeNews = () => {
  return (
    <div className="relative lg:my-[0px] md:my-[0px]  sm:my-[0px] my-[0px] border-0 border-red-700 bg-white  py-4 lg:py-[96px]  flex items-center justify-center">
    {/* Subscribe News Letter */}
      <div className="mx-auto max-w-4xl px-6  lg:px-0 border-0 border-blue-600 py-0 text-center">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="max-w-2xl space-y-4 leading-6 font-marcellus text-center border-0 border-blue-800 p-0">
            <h2 className="text-xl sm:text-xl lg:text-2xl font-medium tracking-loose text-gray-900 border-0 border-red-800">
              Subscribe Newsletter &amp; Get Plant News
            </h2>
            <p className="mt-[0px] lg:text-md text-base text-gray-600 border-0 border-green-800">
              Stay updated with the latest plant news, tips, and exclusive offers.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row max-w-lg gap-4 mx-auto border-0 border-gray-800 p-2">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full sm:flex-1 rounded-md border-0 bg-white px-4 py-4 text-gray-900 shadow-lg ring-none   sm:text-sm"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-md bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeNews;
