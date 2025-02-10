import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { classNames } from '../utils'
import AiCard from '../components/AiCard'

export default function RecipePage() {
    const [getNewRecipe, setGetNewRecipe] = useState(false)
    const [showAiCard, setShowAiCard] = useState(false)
    const [recipe, setRecipe] = useState([]);
    const [showRecipeCard, setShowRecipeCard] = useState(false);

    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8000/recipe");
        const data = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    


  return (
    <>
        
        <section class="bg-gray-50 py-12 text-center nunito">
            <h2 className="text-4xl font-semibold text-gray-900">Find Your Next Favorite Recipe</h2>
            <p className="text-gray-600 mt-2">Generate a random recipe and chat with AI for cooking tips!</p>
            <button onClick={() => {setGetNewRecipe(!getNewRecipe);  if(!showRecipeCard) setShowRecipeCard(true); fetchProducts(); if(showAiCard) setShowAiCard(false)}} className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Get Recipe</button>
        </section>
        <div className={classNames(showRecipeCard === false && "hidden")}><RecipeCard recipe={recipe} setShow={setShowAiCard} /></div>
        <div className={classNames(showAiCard === false && "hidden")}><AiCard data={recipe}/></div>
    

    </>
  )
}
