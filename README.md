# Recipe Finder

Recipe Finder is a React-based web application that allows users to search for recipes and view detailed information about each recipe, including ingredients, cuisine type, dish type, and more. The app is styled using TailwindCSS and daisyUI and provides a responsive, user-friendly interface.

## Features

- **Search Recipes**: Users can search for recipes by keyword. The app fetches recipes from an API and displays a list of matching results.
- **Recipe Details**: Each recipe in the list links to a dedicated page with more details, including an image, ingredients, cuisine type, and servings.
- **Error Handling**: The app gracefully handles errors, displaying user-friendly error messages. A 404 page is shown for nonexistent routes, and a custom error page is used for unexpected issues.
- **Responsive Design**: The app is fully responsive, ensuring a great user experience on both mobile and desktop devices.
- **External Links**: The app provides a link to the original recipe source, opening in a new tab.

## Technologies Used

- **React**: The core framework for building the UI.
- **React Router**: Used for routing between pages and passing state between components.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **daisyUI**: A component library built on top of TailwindCSS for pre-styled components.
- **API Integration**: The app fetches data from the [Edamam](https://edamam.com) external recipe API.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   ```

2. Navigate to the project directory:

```bash
cd recipe-finder
```

3. Install the dependencies:

```bash
npm install
```

4. Get your API key & APP key:
   Go to [Edamam](https://api.edamam.com) and sign up to get your keys. There are free and paid accounts available, depending on your needs.

5. Edit .env.local.template
   Rename file to .env.local and add your own keys from Edamam.

6. Start the defelopment server:

```bash
npm run dev
```

7. Open your browser and go to `http://localhost:3000` to see the app in action.

## Project Structure

- `components/`: Contains React components such as `SearchBar`, `RecipeList`, and `Recipe`.
- `api/`: Contains the API call logic for fetching recipe data.
- `router.jsx`: Defines the app's routes and handles page navigation.
- `ErrorPage.jsx`: A custom error page that handles route errors and exceptions.
- `RootLayout.jsx`: The main layout for the app, wrapping all child components.

## License

This project is licensed under the MIT License.
