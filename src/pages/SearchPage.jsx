import React, { useEffect, useState } from 'react'
import SearchCard from '../components/SearchCard'
import { useDebounce } from 'react-use'


export default function SearchPage() {
    const [searchData, setSearchData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    useDebounce(() => setDebouncedSearchTerm(searchQuery), 700, [searchQuery])

    async function fetchProducts(searchQuery) {
        try {
          const response = await fetch(`http://localhost:8000/search?name=${searchQuery}`);
          const data = await response.json();
          console.log(data);
          setSearchData(data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchProducts(debouncedSearchTerm);
      }, [debouncedSearchTerm]);


  return (

    <>
        
        <section class="bg-gray-50 py-12 text-center nunito">
            <h2 className="text-4xl font-semibold text-gray-900">Find Exactly What You're Looking For</h2>
            <p className="text-gray-600 mt-2">Search through thousand of recipes!</p>
            <label htmlFor="search">
                <input
                    value={searchQuery}
                    name='search'
                    type="text"
                    placeholder="Search for recipes..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 mt-6 outline-1 w-88 focus:shadow-md outline-gray-300 rounded-lg"
                />
            </label>
        </section>
        <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 container mx-auto mb-4 gap-4 nunito">
            <SearchCard recipes={searchData}/>
            
        </main>
    
    </>
  )
}
