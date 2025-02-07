import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchCard from '../components/SearchCard'


export default function SearchPage() {
  return (

    <>
        <div className='flex flex-col min-h-screen'>
            <Header/>
                <section class="bg-gray-50 py-12 text-center nunito">
                    <h2 className="text-4xl font-semibold text-gray-900">Find Exactly What You're Looking For</h2>
                    <p className="text-gray-600 mt-2">Search through thousand of recipes!</p>
                    <input
                        type="text"
                        placeholder="Search for recipes..."
                        className="p-2 mt-6 border w-88 hover:shadow-md border-gray-300 rounded-lg"
                    />
                </section>
                <main className="grid grid-cols-4 container mx-auto pl-10 pr-10 pb-10 gap-4 flex-grow nunito">
                    <SearchCard/>
                    <SearchCard/>
                    <SearchCard/>
                    <SearchCard/>
                </main>
                    
                
            <Footer/>
        
        </div>

    </>
  )
}
