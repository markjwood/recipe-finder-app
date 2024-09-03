import { Link, useLocation } from 'react-router-dom'

export function Recipe() {
	const location = useLocation()
	const recipe = location.state

	return (
		<article className='container prose mx-auto mb-8 px-4'>
			<header className='mb-6'>
				<h2 className='mb-0 text-center'>{recipe.label}</h2>
				{recipe.source && (
					<p className='text-center italic'>Source &mdash; {recipe.source}</p>
				)}
			</header>
			<section className='gap-4 md:flex lg:gap-8'>
				{recipe.images.REGULAR && (
					<img
						{...recipe.images.REGULAR}
						src={recipe.images.REGULAR.url}
						className='my-0 max-md:mx-auto'
					/>
				)}
				<div className='grid w-full auto-rows-min grid-cols-2 gap-x-4 max-md:mt-4 max-md:text-center'>
					{recipe.dishType && (
						<>
							<span className='font-bold'>Type:</span>
							<span>{recipe.dishType}</span>
						</>
					)}
					{recipe.cuisineType && (
						<>
							<span className='font-bold'>Cuisine:</span>
							<span>{recipe.cuisineType}</span>
						</>
					)}
					{recipe.mealType && (
						<>
							<span className='font-bold'>Meal:</span>
							<span>{recipe.mealType.join(', ')}</span>
						</>
					)}
					{recipe.yield && (
						<>
							<span className='font-bold'>Servings:</span>
							<span>{recipe.yield}</span>
						</>
					)}
				</div>
			</section>
			<section>
				{recipe.ingredientLines && (
					<>
						<h3>Ingredients</h3>
						<ul>
							{recipe.ingredientLines.map((ing, index) => (
								<li key={index}>{ing}</li>
							))}
						</ul>
					</>
				)}
				<p>
					Go to{' '}
					<Link to={recipe.url} target='_blank'>
						full recipe
					</Link>
					.
				</p>
				<p className='text-sm italic text-info'>
					<span className='font-bold'>Note: </span> The above link opens in a
					new tab and will take you away from our site to the original location
					of this recipe. Sometimes recipes are deleted or the url can change
					and this is beyond our control. If it takes you somewhere other than
					where you expected, you might try searching that website for the
					recipe's title.
				</p>
			</section>
		</article>
	)
}
