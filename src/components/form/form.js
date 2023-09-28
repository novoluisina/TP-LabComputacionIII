import React from 'react'

const Form = ({setEnteredNameHandler,setEnteredIngredientsHandler,
    setEnteredPreparationHandler,setEnteredChefHandler,enteredName,
    enteredIngredients,enteredPreparation,enteredChef,submitRecipeHandler}) => {
    const changeEnteredNameHandler=(event)=>{
        setEnteredNameHandler(event.target.value)
    }

    const changeEnteredIngredientsHandler=(event)=>{
        setEnteredIngredientsHandler(event.target.value)
    }

    const changeEnteredPreparationHandler=(event)=>{
        setEnteredPreparationHandler(event.target.value)
    }

    const changeEnteredChefHandler=(event)=>{
        setEnteredChefHandler(event.target.value)
    }

    const changeRecipeHandler=(event)=>{
        event.preventDefault();
        submitRecipeHandler();
    }
    
  return (
    <form onSubmit={changeRecipeHandler}>
            <h2>Agregar nueva receta</h2>
            <div >
                <div>
                    <label>Nombre</label><br/>
                    <input value={enteredName}
                    onChange={changeEnteredNameHandler}
                    type="text"></input>
                </div>
                <br/>
                <div>
                    <label>Ingredientes</label><br/>
                    <input value={enteredIngredients}
                    onChange={changeEnteredIngredientsHandler}
                    type="text"></input>
                </div>
                <br/>
                <div>
                    <label>Preparacion</label><br/>
                    <input value={enteredPreparation}
                    onChange={changeEnteredPreparationHandler}
                    type="text"></input>
                </div>
                <br/>
                <div>
                    <label>Chef</label><br/>
                    <input value={enteredChef}
                    onChange={changeEnteredChefHandler}
                    type="text"></input>
                </div>
                <div><br/>
                <button type="submit">Agregar receta</button>
                </div>
            </div>
        
        </form>
  )
}

export default Form