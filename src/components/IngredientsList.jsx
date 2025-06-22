export default function IngredientList(props) {

  const listIngredients = props.ingredients.map(ingredient => 
    <li key={ingredient}>{ingredient}</li>
  );

  return (
    <section>
      <h2 className="title-ingredients">Ingredients on hand:</h2>
      <ul>{listIngredients}</ul>

      {props.ingredients.length > 3 && 
        <div className={props.isLoading ? 'loading-border' : 'get-recipe-container'}>
        <div ref={props.ref}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.getRecipeResult}>Get a recipe</button>
      </div>}
    </section>
  )
}