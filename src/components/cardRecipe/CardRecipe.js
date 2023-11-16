import { useNavigate } from 'react-router'
import useUser from '../../hooks/useUser'
import { deleteRecipes, editRecipe } from '../../services/recipes'
import './CardRecipe.css'
import { useState } from 'react'

export const CardRecipe = ({
  title,
  time,
  asset,
  id,
  userRole,
  clickable = true,
  setRecipes
}) => {
  const { user } = useUser()
  const [editingRecipe, setEditingRecipe] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedTime, setEditedTime] = useState(time)

  const navigate = useNavigate()

  const handleEdit = () => {
    if (editingRecipe) {
      const updatedRecipe = {
        title: editedTitle,
        time: editedTime
      }

      editRecipe(user.accessToken, id, updatedRecipe)
        .then((res) => {
          setRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
              recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
            )
          )
          alert(res.message)
          setEditingRecipe(false)
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      setEditingRecipe(true)
    }
  }

  const handleDelete = () => {
    deleteRecipes(user.accessToken, id)
      .then((res) => {
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.id !== id)
        )
        alert(res.message)
      })
      .catch((err) => {
        console.error(err)
        alert('Error al eliminar la receta')
      })
  }

  return (
    <div>
      <div className='CardRecipe'>
        <div
          className='CardBodyImg'
          onClick={() => {
            if (clickable) navigate(`../receta/${id}`)
          }}
        >
          <img alt='Imagen receta' src={asset} />
        </div>
        <div className='CardInfo'>
          <h2>{title}</h2>
          <span>{time}</span>
        </div>
      </div>
      {userRole === 'chef' && (
        <div className='CardButtons'>
          <p onClick={editRecipe}>✏️</p>
          <p onClick={handleDelete}>❌</p>
        </div>
      )}
    </div>
  )
}