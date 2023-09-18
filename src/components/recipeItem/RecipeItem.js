import React from 'react'

const RecipeItem = ({recipes}) => {
    return (
        <div className='beerList'>
            <div className='card-container'>
                    {recipes.map((recipe,index) => {
                        return <div key={recipe.id}>
                            <h2>{recipe.recipeName}</h2>
                            <div className='card-info'>
                                <p><b>Ingredientes:</b> {recipe.ingredients}</p>
                                <p><b>Preparación:</b> {recipe.preparation}</p>
                                <p><b>Chef:</b> {recipe.chef}</p>
                            </div>
                        </div>
                    })}</div>
        </div>
)}

export default RecipeItem
