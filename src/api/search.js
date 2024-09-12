import axios from 'axios'

export function searchRecipes(query) {
	// replace spaces in query with '+'
	query = query.trim().replace(/\s+/g, '+')

	const controller = new AbortController()
	const queryString = `?q=${query}`

	const recipes = axios
		.get(`/.netlify/functions/recipeSearch${queryString}`, {
			signal: controller.signal,
		})
		.then(res => {
			// return null if no hits
			return res.data ?? null
		})
		.catch(err => {
			if (err.name === 'AbortError') return
			console.error('Error fetching recipes:', err)
		})

	return recipes
}
