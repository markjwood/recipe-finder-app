import { base } from "./base";

export function searchRecipes(query) {
  // replace spaces in query with '+'
  query = query.trim().replace(/\s+/g, "+");

  const controller = new AbortController();
  const app_key = import.meta.env.VITE_APP_KEY;
  const app_id = import.meta.env.VITE_APP_ID;
  const queryString = `v2?q=${query}&type=any&app_id=${app_id}&app_key=${app_key}`;

  const recipes = base
    .get(queryString, { signal: controller.signal })
    .then((res) => {
      // return null if no hits
      return res.data?.hits ?? null;
    })
    .catch((err) => {
      if (err.name === "AbortError") return;
    });

  return recipes;
}
