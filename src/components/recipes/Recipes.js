import React, { useState, useEffect } from 'react'
import './Recipes.css'

// import RecipeItem from '../recipeItem/RecipeItem'
import { CardRecipe } from '../cardRecipe/CardRecipe'
// import Comment from '../comment/Comment'
import NewRecipe from '../newRecipe/NewRecipe'

import NewComment from '../newComment/NewComment'
import CardComment from '../cardComment/CardComment'

const Recipes = () => {
  // const [enteredName, setEnteredName] = useState('')
  // const [enteredIngredients, setEnteredIngredients] = useState('')
  // const [enteredPreparation, setEnteredPreparation] = useState('')
  // const [enteredChef, setEnteredChef] = useState('')
  // const [newRecipes, setNewRecipes] = useState(recipes)
  const [showForm, setShowFom] = useState(true)
  const [recipes, setRecipes] = useState([])
  const [comments, setComments] = useState([])

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
        // console.log(data)
        setRecipes(data)
      })
      .catch((err) => alert(err))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8000/comments', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Resultado de comment')
        // console.log(data)
        setComments(data)
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

  // const [recipeToDelete, setRecipeToDelete] = useState('')
  // const onDelete = () => {
  //   fetch('http://localhost:8000/recipes', {
  //     method: 'DELETE',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsIm5hbWUiOiJBZG1pbmlzdHJhdG9yICIsImF2YXRhciI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2VhcXVlcXVhc2luY2lkdW50LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjk4NTIzNTE1LCJleHAiOjE2OTg1MjQ0MTV9.ykpwu0vlv9oUlfPLZyf4d__ZxN-RxgqRjUEc7U4OYos'
  //     },
  //     body: JSON.stringify({
  //       id: 1
  //     })
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setRecetas(data)
  //     })
  //     .catch((err) => alert(err))
  // }

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
        {recipes.map(({ id, title, time, asset }) => {
          return (
            <div key={id}>
              <CardRecipe id={id} title={title} time={time} asset={asset} />

              {/* <button onClick={() => onDelete(setRecipeToDelete(id))}>
                Eliminar receta
              </button> */}
            </div>
          )
        })}
      </div>
      <div>
        <button type='button' onClick={changeShowFormHandler}>
          Agregar Nueva Receta
        </button>
      </div>

      <div>
        <NewComment />
      </div>

      <div>
        {comments.map(({ id, text }) => {
          return <CardComment key={id} id={id} textComment={text} />
        })}
      </div>
    </div>
  )
}

export default Recipes
