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
        className="text-lg md:text-xl flex gap-3 items-center"
      >
        Find Recipes
        <input
          id="recipe-search"
          className="input input-bordered max-w-xs"
          type="text"
          value={searchText}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      <button className="btn btn-primary">Search</button>
    </form>
  );
}
