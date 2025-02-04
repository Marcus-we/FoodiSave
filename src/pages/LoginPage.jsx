import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LoginPage() {
  return (
    <>
      <Header />

      
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(./assets/BG.png)]"></div>

      
      <div className="relative container mx-auto pb-28 pl-28 pr-28 flex-grow nunito">
        <div className="shadow-lg m-10 p-20 rounded bg-white">
          <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
          <h3 className="text-gray-500 pt-4 pb-8 text-center">Please enter your details below</h3>

          <h3 className="text-lg">Email Address</h3>
          <input type="text" className="border rounded p-2 w-full" />

          <h3 className="text-lg mt-10">Password</h3>
          <input type="password" className="border rounded p-2 w-full" />

          <button className="bg-green-600 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 w-full mx-auto mt-24">
            Log In
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
