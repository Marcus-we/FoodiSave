import React from 'react'
import FoodImage from "../assets/Food.png";



export default function RecipeCard( {setShow } ) {
  return (
    <>
        <main className="container mx-auto pl-10 pr-10 flex-grow nunito">
         <div className="grid md:grid-cols-2 shadow-lg p-10 rounded bg-white">
            
            <div className='order-2 md:order-1'>
                <h1 className='text-4xl font-bold'>Currychicken with Rice</h1>

                <div className='flex items-center gap-2 pl-9 pt-2'>
                    <p>9 Ingredienser</p>
                    <p>|</p>
                    <p>30 min</p>

                </div>

                <p className='pt-6 text-lg'>Det här är text som beskriver rätten lite kort sammanfattat Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima aspernatur rerum obcaecati est maxime at, tempore suscipit ut assumenda!</p>

                <h2 className='text-2xl font-bold pt-6'>Ingredienser</h2>
                <ol className='p-2 list '>
                    <li>salt</li>
                    <li>peppar</li>
                    <li>800 gram kyckling</li>
                    <li>300 gram ris</li>
                    <li>3 vitlöksklyftor</li>
                    <li>1 gullök</li>
                    <li>1 msk kycklingfond</li>
                    <li>2 msk curry</li>
                    <li>1 tsk soja</li>
                </ol>

                
                <button onClick={() => setShow(true)} className="ml-20 bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-300 w-48 mx-auto mt-24">
                Cook this recipe
                </button>
            </div>
            <div className='order-1 md:order-2'>
                <img className='rounded' src={FoodImage} alt="" />
                
            </div>

          
        </div>
      </main>
    
    </>
  )
}
