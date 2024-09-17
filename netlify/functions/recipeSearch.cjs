exports.handler = async function (event) {
	const query = event.queryStringParameters.q

	const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY
	const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID

	const url = `https://api.edamam.com/api/recipes/v2?type=any&q=${query}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`
	if (!query) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: 'Query parameter "q" is required' }),
		}
	}

	try {
		const response = await fetch(url)

		if (response.status !== 200)
			throw new Error('Failed to fetch data from Edamam API')

		const data = await response.json()

		return {
			statusCode: 200,
			body: JSON.stringify(data?.hits) || null,
		}
	} catch (error) {
		console.error('Error in recipeSearch.js:', error)

		return {
			statusCode: error.response?.status || 500,
			body: JSON.stringify({ message: error.message, error: error.stack }),
		}
	}
}
