import { Link, redirect, useLoaderData, useNavigation } from 'react-router-dom'
import { searchRecipes } from '../api/search'

function RecipeList() {
	const list = useLoaderData()

	// get 'loading' state
	const { state } = useNavigation()
	const isLoading = state === 'loading'

	return (
		<section className='prose mx-auto my-20 w-4/5 max-w-2xl rounded-xl bg-white px-4 py-4 xl:px-8 xl:py-6'>
			<h2 className='text-center'>Recipes</h2>
			{isLoading ? (
				<span className='loading loading-spinner text-primary'>
					Getting recipes...
				</span>
			) : list.length === 0 || !list ? (
				<p className='text-center text-xl italic'>No recipes found</p>
			) : (
				<ul className='flex list-none flex-col px-4'>
					{list.map(r => {
						const recipe = r.recipe

						{
							/* get id from recipe.uri */
						}
						const id = recipe.uri.split('#')[1]

						return (
							<li key={id}>
								<Link className='btn btn-sm w-full' to={id} state={recipe}>
									{recipe.label}
								</Link>
							</li>
						)
					})}
				</ul>
			)}
		</section>
	)
}

async function loader({ request }) {
	const url = new URL(request.url)
	const query = url.searchParams.get('q')

	if (!query) return redirect('/')
	return await searchRecipes(query)
}

export const recipesListRoute = {
	loader,
	element: <RecipeList />,
}
