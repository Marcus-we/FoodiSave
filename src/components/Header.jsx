import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header class="bg-white shadow-md p-4 border-b border-gray-200 nunito">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold text-green-600"><Link to="/">FoodiSave</Link></h1>
            <nav>
                <ul class="flex space-x-6">
                    <li className='no-bullet'><Link to="/" class="text-gray-700 hover:text-green-600">Home</Link></li>
                    <li className='no-bullet'><Link to="/recipe" class="text-gray-700 hover:text-green-600">Randomize recipe</Link></li>
                    <li className='no-bullet'><Link to="/search" class="text-gray-700 hover:text-green-600">Search recipe</Link></li>
                </ul>
            </nav>
            <div class="flex space-x-4">
                <Link to="/login" class="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Log In</Link>
                <Link to="/signup" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Sign Up</Link>
            </div>
        </div>
    </header>
    
    </>
  )
}
