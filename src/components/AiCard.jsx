import React from 'react'

export default function AiCard( {data} ) {
  return (
    <>
    
        <section className="nunito container mx-auto p-6 pl-10 pr-10 mb-20 flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
                <div id="recipe-container" className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-green-600 pb-4">Instructions</h2>
                    <p>{data.instructions}</p>
                </div>
            
            
            <div className="nunito h-120 bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-green-600">Chat with AI for help</h2>
                <div className="h-86 overflow-auto p-2 border border-gray-300 rounded mt-2 bg-gray-50"></div>
                <div className="flex mt-2">
                    <input type="text" className="flex-1 p-2 border border-gray-300 rounded" placeholder="Ask about the recipe..."/>
                    <button id="send-chat" className="bg-green-600 text-white px-4 py-2 rounded ml-2 hover:bg-green-700">Send</button>
                </div>
            </div>
        </section>
    
    </>
  )
}
