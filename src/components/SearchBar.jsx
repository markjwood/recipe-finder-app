import { searchRecipes } from "../api/search";

export default function SearchBar({ searchText, onChange, setRecipeList }) {
  async function onSubmit(e) {
    e.preventDefault();

    const list = await searchRecipes(searchText);
    setRecipeList(list);
  }

  return (
    <form className="my-6 flex gap-3 justify-center" onSubmit={onSubmit}>
      <label
        htmlFor="recipe-search"
        className="md:text-lg lg:text-xl flex gap-3 items-center"
      >
        Find Recipes
        <input
          id="recipe-search"
          className="input input-sm md:input-md input-bordered max-w-xs p-1"
          type="text"
          value={searchText}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      <button className="btn btn-sm md:btn-md btn-primary">Search</button>
    </form>
  );
}
