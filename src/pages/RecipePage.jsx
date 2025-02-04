import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RecipeCard from '../components/RecipeCard'
import { classNames } from '../utils'

export default function RecipePage() {
    const [newRecipe, setNewRecipe] = useState(false)


  return (
    <>
        <Header/>

            <section class="bg-gray-100 py-12 text-center nunito">
                <h2 className="text-4xl font-semibold text-gray-900">Find Your Next Favorite Recipe</h2>
                <p className="text-gray-600 mt-2">Generate a random recipe and chat with AI for cooking tips!</p>
                <button onClick={() => setNewRecipe(true)} className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Get Recipe</button>
            </section>


            <div className={classNames(newRecipe === false && "hidden")}><RecipeCard/></div>

        <Footer/>

    </>
  )
}
