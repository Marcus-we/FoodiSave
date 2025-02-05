import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RecipeCard from '../components/RecipeCard'
import { classNames } from '../utils'
import AiCard from '../components/AiCard'

export default function RecipePage() {
    const [newRecipe, setNewRecipe] = useState(false)
    const [aiCard, setAiCard] = useState(false)



  return (
    <>
        <div className='flex flex-col min-h-screen'>
            <Header/>
                <section class="bg-gray-50 py-12 text-center nunito">
                    <h2 className="text-4xl font-semibold text-gray-900">Find Your Next Favorite Recipe</h2>
                    <p className="text-gray-600 mt-2">Generate a random recipe and chat with AI for cooking tips!</p>
                    <button onClick={() => setNewRecipe(true)} className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Get Recipe</button>
                </section>
                <div className={classNames(newRecipe === false && "hidden")}><RecipeCard setShow={setAiCard} /></div>
                <div className={classNames(aiCard === false && "hidden")}><AiCard/></div>
            <Footer/>
        </div>

    </>
  )
}
