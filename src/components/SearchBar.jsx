import { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(searchText);
  }

  return (
    <form className="my-6 flex gap-3 justify-center" onSubmit={onSubmit}>
      <label
        htmlFor="recipe-search"
        className="text-2xl flex gap-3 items-center"
      >
        Find Recipes
        <input
          id="recipe-search"
          className="text-xl border rounded p-1"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <button className="bg-sky-600 text-white rounded-lg font-bold px-4 hover:bg-sky-300 hover:text-sky-800 transition">
        Search
      </button>
    </form>
  );
}
