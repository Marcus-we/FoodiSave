import React from 'react'
import SearchCard from '../components/SearchCard'
import { useEffect, useState } from 'react'


export default function SearchPage() {
    const [searchData, setSearchData] = useState([]);

    async function fetchProducts(search) {
        try {
          const response = await fetch(`http://localhost:8000/search?name=${search}`);
          const data = await response.json();
          console.log(data);
          setSearchData(data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchProducts("pasta bolognese");
      }, []);


  return (

    <>
        
        <section class="bg-gray-50 py-12 text-center nunito">
            <h2 className="text-4xl font-semibold text-gray-900">Find Exactly What You're Looking For</h2>
            <p className="text-gray-600 mt-2">Search through thousand of recipes!</p>
            <label htmlFor="search">
                <input
                    name='search'
                    type="text"
                    placeholder="Search for recipes..."
                    className="p-2 mt-6 outline-1 w-88 focus:shadow-md outline-gray-300 rounded-lg"
                />
            </label>
        </section>
        <main className="grid grid-cols-2 md:grid-cols-4 container mx-auto pl-10 pr-10 pb-10 gap-4 flex-grow nunito">
            <SearchCard recipes={searchData}/>
            
        </main>
    
    </>
  )
}
