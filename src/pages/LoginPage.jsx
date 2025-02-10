import React from 'react'

export default function LoginPage() {
  return (
    <>
      
        
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(./assets/BG.png)]"></div>
        
        <div className="relative container mx-auto mt-40 w-160 flex-grow nunito">
          <div className="shadow-lg m-10 p-20 rounded bg-white">

            <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
            
            <h3 className="text-gray-500 pt-4 pb-8 text-center">Please enter your details below</h3>
            
            <label htmlFor="email">
              <p>Email Address</p>
              <input name='email' placeholder='Enter your email address: e.g example@gmail.com' type="email" className="outline-1 focus:shadow-md rounded p-2 w-full" />
              </label>
            
              <label htmlFor="password">
              <p className='mt-8'>Password</p>
              <input name='password' placeholder='Enter your password' type="password" className="outline-1 focus:shadow-md rounded p-2 w-full" />
              </label>
            
            <button className="bg-green-600 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 w-full mx-auto mt-24">
              Log In
            </button>

          </div>
        </div>
        
    </>
  )
}
