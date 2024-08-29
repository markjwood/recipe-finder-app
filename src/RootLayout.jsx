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
      <header className="p-4">
        <div className="md:flex gap-3 justify-between items-center container mx-auto">
          <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
            <Link to="/">Recipe Finder</Link>
          </h1>
          <SearchBar />
        </div>
      </header>
      <ScrollRestoration />
      {isLoading ? (
        <div className="flex justify-center items-center gap-6 container mx-auto text-2xl">
          Loading...
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
