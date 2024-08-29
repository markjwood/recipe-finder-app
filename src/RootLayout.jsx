import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";
import SearchBar from "./components/SearchBar";

export default function RootLayout() {
  // get 'loading' state
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <header className="flex gap-3 justify-between p-4">
        <h1 className="text-3xl font-serif font-bold">
          <Link to="/">Recipe Finder</Link>
        </h1>
        <SearchBar />
      </header>
      <ScrollRestoration />
      {isLoading ? <h2>loading...</h2> : <Outlet />}
    </>
  );
}
