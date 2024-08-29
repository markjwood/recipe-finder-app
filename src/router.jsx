import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { recipesListRoute } from "./components/RecipeList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <h2>Error</h2>,
        children: [
          {
            index: true,
            element: (
              // this will point to a 'home' element.
              // the home page will describe the app
              // along with instructions.

              // placeholder
              <p className="text-center text-xl text-accent">
                Enter your search above
              </p>
            ),
          },
          { path: "recipes", ...recipesListRoute },
        ],
      },
      { path: "*", element: <h2>404 - Page not found</h2> },
    ],
  },
]);
