import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchCard( {recipes} ) {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes found.</div>; // or some other placeholder
}
return (
  <>
      {recipes.map((recipe, index) => (
          <Link to={`/recipe/${recipe.id}`} key={index}>
              <div className="outline outline-gray-300 shadow-lg p-10 rounded bg-white mb-4 h-full flex flex-col">
                  <div className='order-2 md:order-1'>
                      <h1 className='text-xl font-bold mt-auto text-center'>{recipe.title}</h1>
                      <div className='text-center pt-2'>
                          <p>{recipe.num_of_ingredients} Ingredients</p>
                      </div>
                  </div>
                  <div>
                      <img className='rounded mx-auto' src={`../assets/Food Images/${recipe.image}.jpg`} alt={recipe.title} />
                  </div>
              </div>
          </Link>
      ))}
  </>
);
}
