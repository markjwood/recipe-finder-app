import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import recipesListRoute from './components/RecipeList'
import Recipe from './components/Recipe'
import ErrorPage from './components/ErrorPage'
import FourOFour from './components/FourOFour'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: (
							// this will point to a 'home' element.
							// the home page will describe the app
							// along with instructions.

							// placeholder
							<p className='text-center text-xl text-accent'>
								Enter your search above
							</p>
						),
					},
					{
						path: 'recipes',
						children: [
							{ index: true, ...recipesListRoute },
							{ path: ':id', element: <Recipe /> },
						],
					},
				],
			},
			{ path: '*', element: <FourOFour /> },
		],
	},
])
