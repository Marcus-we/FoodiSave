import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodImage from "../assets/Cooking.png";
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <>
    
        <div className='flex flex-col min-h-screen'>
            <Header/>
                <section className='container bg-green-600 mx-auto md:h-112 w-full h-124 grid md:grid-cols-2 shadow-md nunito'>
                    <div className=''>
                        <h1 className='text-4xl text-white text-left pt-26 pl-16'>Stop Wasting <span className='font-bold'>Food</span> for <span className='font-bold'>Good</span></h1>
                        <p className='text-left pl-16 pt-2 '>Start saving food using our <span className='font-bold'>Random Recipe Generator</span> or our <span className='font-bold'>Advanced Search Algorithm</span> to find your favorite recipe!</p>

                    </div>

                    <div className='h-56 w-60 sm:h-76 sm:w-80 md:h-92 md:w-96 mx-auto'>
                        <img className='mt-16 rounded-lg' src={FoodImage} alt="" />

                    </div>

                </section>

                <main className='grid md:grid-cols-2 mx-auto gap-10 my-6 nunito'>
                    <Link to="/recipe">
                        <div className='bg-white h-90 w-75 rounded-lg shadow-md'>
                            <h2 className='text-xl text-center pt-2 font-bold mt-20'>Search Algorithm</h2>
                            <p className='text-center p-2'>Looking for something in particular?</p>
                            <p className='text-center p-2'>Use our <span className='font-bold'>advanced algorithm</span> to search through <span className='font-bold'>thousands</span> of meals today</p>
                        
                        
                        </div>
                    </Link>

                    <Link to="/recipe">
                        <div className='bg-white h-90 w-75 rounded-lg shadow-md'>
                            <h2 className='text-xl text-center pt-2 font-bold mt-20'>Random Recipe Generator</h2>
                            <p className='text-center p-2'>A perfect solution for your needs when your not feeling creative in the kitchen</p>
                            <p className='text-center p-2'>Use our <span className='font-bold'>random recipe generator</span> to find a <span className='font-bold'>perfect meal</span> for you</p>
                        </div>
                    </Link>

                </main>
            
            
            <Footer/>
        </div>
    
    </>
  )
}
