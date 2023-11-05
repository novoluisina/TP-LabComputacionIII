import React from 'react'
import './RecipeList.css'
import { CardRecipe } from '../../components/cardRecipe/CardRecipe'
// import { getRecipes } from '../../services/recipes'

const RecipeList = ({ recipes, userRole, setRecipes }) => {
  return (
    <div>
      <div className='CardsContainer'>
        {recipes.map(({ id, title, time, asset }) => {
          return (
            <div key={id}>
              <CardRecipe
                id={id}
                title={title}
                time={time}
                asset={asset}
                userRole={userRole}
                setRecipes={setRecipes}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecipeList
