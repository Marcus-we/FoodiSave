import React from 'react'
import FoodImage from "../assets/Food.png";
import { Link } from 'react-router-dom'

export default function SearchCard() {
  return (
    <>
      

            <Link to="/recipe">
                <div className="border shadow-lg p-10 rounded bg-white">
                
                    <div className='order-2 md:order-1'>
                        <h1 className='text-xl font-bold'>Currychicken with Rice</h1>
                        <div className='flex items-center gap-2 pl-5 pt-2'>
                            <p>9 Ingredienser</p>
                            <p>|</p>
                            <p>30 min</p>
                        </div>
                        <img className='rounded mt-2' src={FoodImage} alt="" />
                    </div>
                </div>
            </Link>
        
    </>
  )
}
