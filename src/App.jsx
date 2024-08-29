import { useState } from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchText, setSearchText] = useState("");
  const [recipeList, setRecipeList] = useState([]);

  return (
    <>
      <SearchBar
        searchText={searchText}
        onChange={setSearchText}
        setRecipeList={setRecipeList}
      />
      {recipeList.length > 0 && <RecipeList list={recipeList} />}
    </>
  );
}

export default App;
