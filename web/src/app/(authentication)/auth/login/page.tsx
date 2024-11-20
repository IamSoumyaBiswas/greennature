"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";


const Login:React.FC = () => {
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const email = formData.get("email") as string;
    //     const password = formData.get("password") as string;
    
        // Add your form handling logic here (e.g., API call)
    //     console.log({ email, password });
    //   };
  return (
    <div className="bg-gray-50 font-marcellus flex items-center justify-center min-h-screen">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start gap-8 py-12 px-4 lg:px-8 max-w-screen-lg shadow-lg rounded-lg bg-white">
      {/* Left Section: Signup Form */}
      <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col items-center text-center">
        {/* Title and Subtitle */}
        <h1 className="text-2xl lg:text-4xl font-bold text-green-800 mb-4">
          GreenNatures
        </h1>
        <p className="text-sm lg:text-lg font-medium text-gray-700">
          Let Nature Bloom in Your Space!
        </p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          Join our green community and find the plants that suit your style and lifestyle.
        </p>
        {/* Form */}
        <form  className="mt-8 w-full max-w-sm flex flex-col gap-4 text-left">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-400"
              aria-label="Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-400"
              aria-label="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
        {/* Redirect to Signup */}
        <p className="mt-6 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-green-800 underline hover:text-green-600 transition duration-300"
          >
            Signup now
          </Link>
        </p>
      </div>
      {/* Right Section: Image */}
      <div className="hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1554799742-e4736f1aff9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          alt="Tree Plant"
          width={500}
          height={500}
          className="rounded-lg h-full object-contain shadow-md"
          priority
        />
      </div>
    </div>
  </div>
  )
}

export default Login;
