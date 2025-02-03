import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RecipePage() {
  return (
    <>
        <Header/>

            <main class="container mx-auto py-12 ">
                <h2 class="text-3xl font-semibold text-center text-gray-900">Featured Recipes</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Spaghetti Carbonara</h3>
                        <p class="text-gray-700 mt-2">A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
                    </div>
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Grilled Chicken Salad</h3>
                        <p class="text-gray-700 mt-2">A refreshing mix of grilled chicken, fresh greens, and a tangy vinaigrette.</p>
                    </div>
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Vegetable Stir-Fry</h3>
                        <p class="text-gray-700 mt-2">A quick and healthy dish packed with colorful veggies and a flavorful sauce.</p>
                    </div>
                </div>
            </main>
            <main class="container mx-auto py-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Spaghetti Carbonara</h3>
                        <p class="text-gray-700 mt-2">A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
                    </div>
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Grilled Chicken Salad</h3>
                        <p class="text-gray-700 mt-2">A refreshing mix of grilled chicken, fresh greens, and a tangy vinaigrette.</p>
                    </div>
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Vegetable Stir-Fry</h3>
                        <p class="text-gray-700 mt-2">A quick and healthy dish packed with colorful veggies and a flavorful sauce.</p>
                    </div>
                </div>
            </main>
            <main class="container mx-auto py-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Spaghetti Carbonara</h3>
                        <p class="text-gray-700 mt-2">A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
                    </div>
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Grilled Chicken Salad</h3>
                        <p class="text-gray-700 mt-2">A refreshing mix of grilled chicken, fresh greens, and a tangy vinaigrette.</p>
                    </div>
                    <div class="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <h3 class="text-xl font-semibold text-green-600">Vegetable Stir-Fry</h3>
                        <p class="text-gray-700 mt-2">A quick and healthy dish packed with colorful veggies and a flavorful sauce.</p>
                    </div>
                </div>
            </main>

        <Footer/>

    </>
  )
}
