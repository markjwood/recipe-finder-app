import { Form } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <Form
      action="/recipes"
      method="get"
      className="my-6 flex gap-3 justify-center"
    >
      <label
        htmlFor="recipe-search"
        className="md:text-lg lg:text-xl flex gap-3 items-center"
      >
        Find Recipes
        <input
          id="recipe-search"
          name="q" // sets name for query param
          className="input input-sm md:input-md input-bordered max-w-xs p-1"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <button className="btn btn-sm md:btn-md btn-primary">Search</button>
    </Form>
  );
}
