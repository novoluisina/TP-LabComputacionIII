import React, { useState, useEffect } from 'react'
import './Recipes.css'

// import RecipeItem from '../recipeItem/RecipeItem'
import { CardRecipe } from '../cardRecipe/CardRecipe'
// import Comment from '../comment/Comment'
import NewRecipe from '../newRecipe/NewRecipe'

const Recipes = () => {
  // const [enteredName, setEnteredName] = useState('')
  // const [enteredIngredients, setEnteredIngredients] = useState('')
  // const [enteredPreparation, setEnteredPreparation] = useState('')
  // const [enteredChef, setEnteredChef] = useState('')
  // const [newRecipes, setNewRecipes] = useState(recipes)
  const [showForm, setShowFom] = useState(true)
  const [recetas, setRecetas] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/recipes', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRecetas(data)
      })
      .catch((err) => alert(err))
  }, [])

  // const [newComment, setNewComment] = useState([])

  // const newRecipeId = newRecipes[newRecipes.length - 1].id + 1
  // const newCommentId =
  //   newComment.length > 0 ? newComment[newComment.length - 1].id + 1 : 1

  // const setEnteredNameHandler = (value) => {
  //   setEnteredName(value)
  // }

  // const setEnteredIngredientsHandler = (value) => {
  //   setEnteredIngredients(value)
  // }

  // const setEnteredPreparationHandler = (value) => {
  //   setEnteredPreparation(value)
  // }

  // const setEnteredChefHandler = (value) => {
  //   setEnteredChef(value)
  // }

  // const submitRecipeHandler = () => {
  //   const recipeData = {
  //     id: newRecipeId,
  //     recipeName: enteredName,
  //     ingredients: enteredIngredients,
  //     preparation: enteredPreparation,
  //     chef: enteredChef
  //   }
  //   setNewRecipes([...newRecipes, recipeData])
  //   setEnteredName('')
  //   setEnteredIngredients('')
  //   setEnteredPreparation('')
  //   setEnteredChef('')
  // }
  // const deletedRecipe = (id) => {
  //   const updatedRecipes = newRecipes.filter((recipe) => recipe.id !== id)
  //   const updatedRecipesWithNewIds = updatedRecipes.map((recipe, index) => ({
  //     ...recipe,
  //     id: index + 1
  //   }))

  //   setNewRecipes(updatedRecipesWithNewIds)
  // }

  const changeShowFormHandler = () => {
    setShowFom(!showForm)
  }

  // const setCommentHandler = (value) => {
  //   setNewComment(value)
  // }

  // const addCommentHandler = () => {
  //   const commentData = {
  //     id: newCommentId,
  //     textComment: newComment,
  //   };
  //   setNewComment([...newComment, commentData]);
  //   setNewComment('');
  // };

  return (
    <div>
      {/* <RecipeItem recipes={newRecipes} /> */}
      <div>
        {showForm ? (
          <button type='button' onClick={changeShowFormHandler}>
            Agregar Nueva Receta
          </button>
        ) : (
          <NewRecipe />
        )}
      </div>
      <div className='CardsContainer'>
        {recetas.map(({ id, title, time, asset }) => {
          return <CardRecipe id={id} title={title} time={time} asset={asset} />
        })}
      </div>

      {/* 
      <div>
        <Comment setCommentHandler={setCommentHandler} />
      </div> */}
    </div>
  )
}

export default Recipes
