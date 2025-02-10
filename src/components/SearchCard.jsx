import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchCard( {recipes} ) {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes found.</div>; // or some other placeholder
}
  return (
    <>
      

            <Link to="/recipe">
                <div className="border shadow-lg p-10 rounded bg-white">
                
                    <div className='order-2 md:order-1'>
                        <h1 className='text-xl font-bold text-center'>{recipes[0].title}</h1>
                        <div className='text-center pt-2'>
                          <p>{recipes[0].num_of_ingredients} Ingredienser</p>

                        </div>
                        <img className='rounded ' src={`../assets/Food Images/${recipes[0].image + ".jpg"}`} alt="" />
                    </div>
                </div>
            </Link>
        
    </>
  )
}
