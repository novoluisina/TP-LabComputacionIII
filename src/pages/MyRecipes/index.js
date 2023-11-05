import React, { useState, useEffect } from 'react'
// import RecipeItem from '../recipeItem/RecipeItem'
// import Comment from '../comment/Comment'
// import NewRecipe from '../../components/newRecipe/NewRecipe'
// import NewComment from '../../components/newComment/NewComment'
// import CardComment from '../../components/cardComment/CardComment'
import { getRecipes } from '../../services/recipes'
import { getComments } from '../../services/comments'
import RecipeList from '../../components/recipeList/RecipeList'
import useUser from '../../hooks/useUser'
import NewRecipe from '../../components/newRecipe/NewRecipe'

const MyRecipes = () => {
  // const [enteredName, setEnteredName] = useState('')
  // const [enteredIngredients, setEnteredIngredients] = useState('')
  // const [enteredPreparation, setEnteredPreparation] = useState('')
  // const [enteredChef, setEnteredChef] = useState('')
  // const [newRecipes, setNewRecipes] = useState(recipes)
  const [recipes, setRecipes] = useState([])
  const [showForm, setShowFom] = useState(true)
  const { user, userRole } = useUser()

  useEffect(() => {
    getRecipes().then((serviceRecipes) => {
      const myRecipes = serviceRecipes.filter((recipe) => {
        return recipe.userId === user.id
      })
      setRecipes(myRecipes)
    })
  }, [user])

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
    <>
      {' '}
      <div>
        {showForm ? (
          <button type='button' onClick={changeShowFormHandler}>
            Agregar Nueva Receta
          </button>
        ) : (
          <NewRecipe setRecipes={setRecipes} setShowFom={setShowFom} />
        )}
      </div>
      <RecipeList
        recipes={recipes}
        userRole={userRole}
        setRecipes={setRecipes}
      />
    </>
  )
}

export default MyRecipes
