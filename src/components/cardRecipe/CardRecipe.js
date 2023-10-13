import './CardRecipe.css'

export const CardRecipe = ({ title, time, asset, id, onDelete }) => {
  return (
    <div className='CardRecipe'>
      <div className='CardBodyImg'>
        <img src={asset} />
      </div>
      <div className='CardInfo'>
        <h2>{title}</h2>
        <span>{time}</span>
      </div>
      <button onClick={() => onDelete(id)}>Eliminar receta</button>
    </div>
  )
}
