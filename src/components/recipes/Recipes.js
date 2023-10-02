import React from 'react'
// import RecipeItem from '../recipeItem/RecipeItem'
import Form from '../form/Form'
import { useState } from 'react'
import { CardRecipe } from '../cardRecipe/CardRecipe'
import './Recipes.css'

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: 'Torta merengada',
      time: '1 h 30 min',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/shutterstock_1803865330-e1695920586800-1024x556.jpg.webp'
    },
    {
      id: 2,
      title: 'Waffles de arroz',
      time: '1 h',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/shutterstock_1283487544-1024x683.jpg.webp'
    },
    {
      id: 3,
      title: 'Volcan de dulce de leche',
      time: '2 h',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/volc-_jP9f3xArcWwsIBEGq01voNzbZypOKS-1024x683.png.jpg.webp'
    },
    {
      id: 4,
      title: 'Lingote rogel',
      time: '1 h 30 min',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/shutterstock_258370190-1024x683.jpg.webp'
    },
    {
      id: 5,
      title: 'Torta de Coco',
      time: '1 h 30 min',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/shutterstock_1803865330-e1695920586800-1024x556.jpg.webp'
    },
    {
      id: 6,
      title: 'Torta fosforito',
      time: '1 h 30 min',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/08/imagepng-1024x768.jpg.webp'
    },
    {
      id: 7,
      title: 'Papines estrellados',
      time: '1 h',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/papines-romero-e1695747176651.jpg.webp'
    },
    {
      id: 8,
      title: 'Fajitas de bondiola',
      time: '3 h',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/UO_EPISODICAS_FAJITAS-6-1024x683.jpg.webp'
    },
    {
      id: 9,
      title: 'Budin de banana y sésamo',
      time: '1 h 30 min',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/UO_EPISODICAS_BUDIN_MARMOLADO_DE_BANANA_Y_SESAMO-2-1024x683.jpg.webp'
    },
    {
      id: 10,
      title: 'Chipa soo',
      time: '1 h',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/UO_EPISODICAS_CHIPA_SOO-3-1024x683.jpg.webp'
    },
    {
      id: 11,
      title: 'Torta de manzana',
      time: '1 h 30 min',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/E8A5947-1024x683.jpg.webp'
    },
    {
      id: 12,
      title: 'Tortilla de vegetales',
      time: '1 h',
      asset:
        'https://assets.elgourmet.com/wp-content/uploads/2023/09/UO_EPISODICAS_TORTILLA_DE_VEGETALES_CON_CHIPS_DE_BONIATO-5-1024x683.jpg.webp'
    }
    // {
    //   id: 1,
    //   recipeName: 'Apple pie',
    //   ingredients: `PARA EL RELLENO
    //     Manzanas verdes 1 k
    //     Canela molida Cantidad necesaria
    //     Licor de manzana Cantidad necesaria
    //     Polvo para flan 50 grs.
    //     Semillas de zapallo Cantidad necesaria
    //     PARA LA EMULSIÓN DE MANZANAS
    //     Jugo de limón Cantidad necesaria
    //     Manzanas golden 3 Unidades
    //     Aceite de oliva de manzanilla Cantidad necesaria
    //     Azúcar 50 grs.
    //     PARA LA MASA
    //     Harina 350 grs.
    //     Huevos 5 Unidades
    //     Leche 160 cc
    //     Manteca 140 g
    //     Polvo de hornear 20 grs.
    //     Almidón de maíz 50 grs.
    //     Sal Cantidad necesaria
    //     Esencia de vainilla Cantidad necesaria
    //     Azúcar orgánico 250 g
    //     Aceite de canola 140 cc`,
    //   preparation: 'cortar las manzanas',
    //   chef: 'Osvaldo Gross'
    // }
  ]

  const [enteredName, setEnteredName] = useState('')
  const [enteredIngredients, setEnteredIngredients] = useState('')
  const [enteredPreparation, setEnteredPreparation] = useState('')
  const [enteredChef, setEnteredChef] = useState('')
  const [newRecipes, setNewRecipes] = useState(recipes)
  const [lastId, setLastId] = useState(1)

  const setEnteredNameHandler = (value) => {
    setEnteredName(value)
  }

  const setEnteredIngredientsHandler = (value) => {
    setEnteredIngredients(value)
  }

  const setEnteredPreparationHandler = (value) => {
    setEnteredPreparation(value)
  }

  const setEnteredChefHandler = (value) => {
    setEnteredChef(value)
  }

  const submitRecipeHandler = () => {
    const recipeData = {
      id: lastId + 1,
      recipeName: enteredName,
      ingredients: enteredIngredients,
      preparation: enteredPreparation,
      chef: enteredChef
    }
    setNewRecipes([...newRecipes, recipeData])
    setEnteredName('')
    setEnteredIngredients('')
    setEnteredPreparation('')
    setEnteredChef('')
    setLastId(lastId + 1)
  }

  return (
    <div>
      {/* <RecipeItem recipes={newRecipes} /> */}
      <div className='CardsContainer'>
        {recipes.map(({ id, title, time, asset }) => {
          return <CardRecipe key={id} title={title} time={time} asset={asset} />
        })}
      </div>
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
