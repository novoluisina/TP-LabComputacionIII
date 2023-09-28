import React from 'react'
import RecipeItem from '../recipeItem/RecipeItem';
import Form from '../form/Form';
import { useState } from 'react';

const Recipes = () => {

    const recipes = [
        {
        id: 1,
        recipeName: "Apple pie",
        ingredients: `PARA EL RELLENO

        Manzanas verdes 1 k
        Canela molida Cantidad necesaria
        Licor de manzana Cantidad necesaria
        Polvo para flan 50 grs.
        Semillas de zapallo Cantidad necesaria
        
        PARA LA EMULSIÓN DE MANZANAS
        
        Jugo de limón Cantidad necesaria
        Manzanas golden 3 Unidades
        Aceite de oliva de manzanilla Cantidad necesaria
        Azúcar 50 grs.
        
        PARA LA MASA
        
        Harina 350 grs.
        Huevos 5 Unidades
        Leche 160 cc
        Manteca 140 g
        Polvo de hornear 20 grs.
        Almidón de maíz 50 grs.
        Sal Cantidad necesaria
        Esencia de vainilla Cantidad necesaria
        Azúcar orgánico 250 g
        Aceite de canola 140 cc`,
        preparation: "cortar las manzanas",
        chef:"Osvaldo Gross"
        },
        
      ];

      const[enteredName,setEnteredName]=useState('')
      const[enteredIngredients,setEnteredIngredients]=useState('')
      const[enteredPreparation,setEnteredPreparation]=useState('')
      const[enteredChef,setEnteredChef]=useState('')
      const[newRecipes,setNewRecipes]=useState(recipes)
      const [lastId, setLastId] = useState(1);

      const setEnteredNameHandler=(value)=>{
        setEnteredName(value)
      }

      const setEnteredIngredientsHandler=(value)=>{
        setEnteredIngredients(value)
      }

      const setEnteredPreparationHandler=(value)=>{
        setEnteredPreparation(value)
      }

      const setEnteredChefHandler=(value)=>{
        setEnteredChef(value)
      }

      const submitRecipeHandler=()=>{
        const recipeData={
            id: lastId + 1,
            recipeName:enteredName,
            ingredients:enteredIngredients,
            preparation: enteredPreparation,
            chef:enteredChef
        };
        setNewRecipes([...newRecipes,recipeData])
        setEnteredName('');
        setEnteredIngredients('');
        setEnteredPreparation('');
        setEnteredChef('');
        setLastId(lastId + 1);
    }

  return (
    <div>
      <RecipeItem recipes={newRecipes}/>
       <Form
        setEnteredNameHandler={setEnteredNameHandler}
        setEnteredIngredientsHandler={setEnteredIngredientsHandler}
        setEnteredPreparationHandler={setEnteredPreparationHandler}
        setEnteredChefHandler={setEnteredChefHandler}
        enteredName={enteredName}
        enteredIngredients={enteredIngredients}
        enteredPreparation={enteredPreparation}
        enteredChef={enteredChef}
        submitRecipeHandler={submitRecipeHandler}
        />
    </div>
  )
}

export default Recipes