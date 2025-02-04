import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function HomePage() {
  return (
    <>
    
        <Header/>
            
            <main className="nunito container mx-auto p-6 flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
                <div id="recipe-container" className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-green-600">Random Recipe</h2>
                    <p id="recipe-details" className="mt-2 text-gray-700">Click the button to generate a recipe.</p>
                </div>
            
            
            <div className="nunito bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-green-600">Chat about the Recipe</h2>
                <div id="chat-box" className="h-40 overflow-auto p-2 border border-gray-300 rounded mt-2 bg-gray-50"></div>
                <div className="flex mt-2">
                    <input type="text" id="chat-input" className="flex-1 p-2 border border-gray-300 rounded" placeholder="Ask about the recipe..."/>
                    <button id="send-chat" className="bg-green-600 text-white px-4 py-2 rounded ml-2 hover:bg-green-700">Send</button>
                </div>
            </div>
        </main>

    
        
        
        <Footer/>
    
    </>
  )
}
