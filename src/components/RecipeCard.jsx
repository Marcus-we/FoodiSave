import React from 'react'

export default function RecipeCard( {recipe} ) {
    
    if (!recipe) {
        return <div>No recipes found.</div>;
    }
    
  return (

        <>
            <main className="mx-auto container nunito">
                <div className='mx-auto bg-white h-auto w-270 shadow-md rounded-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-4'>
                        <div className='order-2 md:order-1'>
                            <h1 className="text-4xl font-bold">{recipe.title}</h1>
                            <div className="pt-2">
                                <p>{recipe.num_of_ingredients} Ingredients</p>
                            </div>
                            <h2 className="text-2xl font-bold py-3">Ingredients</h2>
                            <p>{recipe.ingredients}</p>
                            
                            <div className="h-86 overflow-auto p-2 border border-gray-300 rounded mt-2 bg-gray-50"></div>
                            <div className="flex mt-2">
                                <input type="text" className="flex-1 p-2 border border-gray-300 rounded" placeholder="Ask AI about the recipe..."/>
                                <button id="send-chat" className="bg-green-600 text-white px-4 py-2 rounded ml-2 hover:bg-green-700">Send</button>
                            </div>
                            
                        </div>

                        <div className='order-1 md:order-2'>
                            <img className='rounded w-full' src={`../assets/Food Images/${recipe.image}.jpg`} alt={recipe.title} />
                            <h2 className='text-2xl font-bold py-3'>Instructions</h2>
                            <p>{recipe.instructions}</p>
                        </div>
                    </div>
                </div>
            
            </main>
        </>
        
      
    
  )
}
