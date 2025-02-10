import React from 'react'




export default function RecipeCard( {setShow, recipe } ) {
  
  console.log(recipe)
  return (
    <>
        <main className="container mx-auto pl-10 pr-10 pb-10 flex-grow nunito">
         <div className="grid md:grid-cols-2 shadow-lg p-10 rounded gap-4 bg-white">
            
            <div className='order-2 md:order-1'>
                <h1 className='text-4xl font-bold'>{recipe.title}</h1>

                <div className='pt-2'>
                    <p>{recipe.num_of_ingredints} Ingredienser</p>

                </div>

                <h2 className='text-2xl font-bold pt-6'>Ingredienser</h2>
                <p>{recipe.ingredients}</p>

                
                <button onClick={() => setShow(true)} className="ml-20 bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-300 w-48 mx-auto mt-24">
                Cook this recipe
                </button>
            </div>
            <div className='order-1 md:order-2'>
                <img className='rounded ' src={`../assets/Food Images/${recipe.image + ".jpg"}`} alt="" />
                
            </div>

          
        </div>
      </main>
    
    </>
  )
}
