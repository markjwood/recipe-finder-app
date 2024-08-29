import { useLoaderData, useNavigation } from "react-router-dom";
import { searchRecipes } from "../api/search";

function RecipeList() {
  const list = useLoaderData();

  // get 'loading' state
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <section className="prose mx-auto my-20 w-4/5 max-w-2xl bg-white rounded-xl py-4 xl:py-6 px-4 xl:px-8">
      <h2 className="text-center">Recipes</h2>
      {isLoading ? (
        <h3>getting recipes...</h3>
      ) : (
        <ul>
          {list.map((r) => (
            <li key={r.recipe.uri}>{r.recipe.label}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

async function loader({ params: { query } }) {
  return await searchRecipes(query);
}

export const recipesListRoute = {
  loader,
  element: <RecipeList />,
};
