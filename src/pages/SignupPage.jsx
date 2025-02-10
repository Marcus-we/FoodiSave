import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SignupPage() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url(./assets/BG.png)]"></div>
            <main className='relative container mx-auto mt-40 w-160 flex-grow nunito'>
              <div className='shadow-lg m-10 p-20 rounded bg-white'>
                  <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                  <h3 className='text-gray-500 pt-4 pb-8 text-center'>Please enter your details below</h3>
                  <label htmlFor="firstName">
                <p>First Name</p>
                <input name='firstName' placeholder='Enter your first name' type="email" className="outline-1 focus:shadow-md rounded p-2 w-full" />
                </label>
                  <label htmlFor="lastName">
                <p className='mt-6'>Last Name</p>
                <input name='lastName' placeholder='Enter your last name' type="email" className="outline-1 focus:shadow-md rounded p-2 w-full" />
                </label>
                  <label htmlFor="email">
                <p className='mt-6'>Email Address</p>
                <input name='email' placeholder='Enter your email address: e.g example@gmail.com' type="email" className="outline-1 focus:shadow-md rounded p-2 w-full" />
                </label>
        
                <label htmlFor="password">
                <p className='mt-6'>Password</p>
                <input name='password' placeholder='Enter your password' type="password" className="outline-1 focus:shadow-md rounded p-2 w-full" />
                </label>
                  <button class="bg-green-600 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 w-full mx-auto mt-24">Sign Up</button>
              </div>
            </main>
            <Footer/>
      </div>
      
    </>
  )
}
