export default function RecipeList({ list }) {
  return (
    <section className="prose mx-auto my-20 w-4/5 lg:w-1/2 xl:w-1/2 bg-white rounded-xl py-4 xl:py-6 px-4 xl:px-8">
      <h2 className="text-center">Recipes</h2>
      <ul>
        {list.map((r) => (
          <li key={r.recipe.uri}>{r.recipe.label}</li>
        ))}
      </ul>
    </section>
  );
}
