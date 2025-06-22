import React from 'react';
import Recipe from './Recipe';
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from "../api.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [result, setResult] = React.useState('');
  const recipeSection = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if(result !== '' && recipeSection.current !== null) {
      const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: yCoord - 50,
        behavior: "smooth"
      })
    }
  }, [result])

  function submitForm(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    console.log(newIngredient);
  }

  async function getRecipeResult() {
    setIsLoading(true);
    const resultRecipe = await getRecipeFromMistral(ingredients);
    setResult(resultRecipe);
    setIsLoading(false);
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
            isLoading={isLoading}
            ref={recipeSection}
            ingredients={ingredients}
            getRecipeResult={getRecipeResult}
          />
        )}

        {result && <Recipe result={result} />}
      
        
      </div>
    </main>

  )
}