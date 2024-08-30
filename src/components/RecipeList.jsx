import { Link, useLoaderData, useNavigation } from "react-router-dom";
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
        <span className="loading loading-spinner text-primary">
          Getting recipes...
        </span>
      ) : (
        <ul className="flex flex-col list-none px-4">
          {list.map((r) => {
            console.log(r);
            const id = r.recipe.uri.split("#")[1];
            return (
              <li key={id}>
                <Link className="btn btn-sm w-full" to={id}>
                  {r.recipe.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  if (!query) return [];
  return await searchRecipes(query);
}

export const recipesListRoute = {
  loader,
  element: <RecipeList />,
};
