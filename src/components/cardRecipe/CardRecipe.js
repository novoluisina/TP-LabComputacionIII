import { useNavigate } from 'react-router'
import useUser from '../../hooks/useUser'
import { deleteRecipes } from '../../services/recipes'
import './CardRecipe.css'

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

  const navigate = useNavigate()

  const handleDelete = () => {
    deleteRecipes(user.accessToken, id).then((message) => {
      setRecipes((prevRecipes) => {
        const newRecipes = prevRecipes.filter((rec) => rec.id !== id)
        return newRecipes
      })
      alert(message.message)
    })
  }

  return (
    <div>
      <div
        className='CardRecipe'
        onClick={() => {
          if (clickable) navigate(`../receta/${id}`)
        }}
      >
        <div className='CardBodyImg'>
          <img alt='Imagen receta' src={asset} />
        </div>
        <div className='CardInfo'>
          <h2>{title}</h2>
          <span>{time}</span>
        </div>
      </div>
      {userRole === 'chef' && (
        <div className='CardButtons'>
          <p>✏️</p>
          <p onClick={handleDelete}>❌</p>
        </div>
      )}
    </div>
  )
}
