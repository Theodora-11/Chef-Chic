import React from 'react';
import Recipe from './Recipe';
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from "../api.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  function submitForm(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    console.log(newIngredient);
  }

  const [result, setResult] = React.useState('');

  async function getRecipeResult() {
    const resultRecipe = await getRecipeFromMistral(ingredients);
    setResult(resultRecipe);
  }

  return (
    <main>
      <div className="wrapper-main">
        <form action={submitForm} >
          <input 
            className="input"
            type="text" 
            name="ingredient"
            aria-label="Add ingredient" 
            placeholder="e.g. thyme"
          />
          <button className="button-add">+ Add ingredient</button>
        </form>

        {ingredients.length === 0 ? (
          <p>No ingredients yet...</p>
        ) : (
          <IngredientsList
            ingredients={ingredients}
            getRecipeResult={getRecipeResult}
          />
        )}

        {result && <Recipe result={result} />}
      
        
      </div>
    </main>

  )
}