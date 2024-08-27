export function searchRecipes(query) {
  query = query.trim().replace(" ", "+");

  const controller = new AbortController();
  const app_key = import.meta.env.VITE_APP_KEY;
  const app_id = import.meta.env.VITE_APP_ID;
  const queryString = `v2?q=${query}&type=any&app_id=${app_id}&app_key=${app_key}`;

  const recipes = base
    .get(queryString, { signal: controller.signal })
    .then((res) => {
      console.log(res);
      return res.data.hits;
    })
    .catch((err) => console.error(err));

  return recipes;
}
