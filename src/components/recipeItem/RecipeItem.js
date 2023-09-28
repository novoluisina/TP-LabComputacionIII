import React from 'react'

const RecipeItem = ({recipes}) => {
    if (!recipes) {
        return <p>No hay recetas disponibles.</p>;
    }
    
    return (
        <div>
            {recipes.map((recipe) => {
                return <div key={recipe.id}>
                    <h2>{recipe.recipeName}</h2>
                        <div>
                            <p><b>Ingredientes:</b> {recipe.ingredients}</p>
                            <p><b>Preparación:</b> {recipe.preparation}</p>
                            <p><b>Chef:</b> {recipe.chef}</p>
                        </div>
                </div>
                })}
        </div>
)}

export default RecipeItem
