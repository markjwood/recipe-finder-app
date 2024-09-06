import { useEffect } from 'react'
import { useNavigate, useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()
	const navigate = useNavigate()

	// check if in development
	const isDev = import.meta.env.DEV

	useEffect(() => {
		// redirect to home page after 5 seconds if not in development
		if (!isDev) {
			const timeout = setTimeout(() => {
				navigate('/')
			}, 5000)

			return () => clearTimeout(timeout)
		}
	}, [])

	return (
		<div className='container prose mx-auto'>
			{error.status === 404 ? (
				<>
					<h2>Not found</h2>
					{error.message && <p>{error.message}</p>}
				</>
			) : (
				<>
					<h2>Something went wrong &ndash; {error.name}</h2>
					<p>
						{error.status === 500
							? 'We encountered a problem with the network. Please try again later.'
							: error.message}
					</p>
				</>
			)}
			{!isDev && (
				<p>
					Returning <Link to='/'>home</Link> in 5 seconds.
				</p>
			)}

			{/* show stack trace if in development */}
			{isDev && <pre>{error.stack}</pre>}
		</div>
	)
}
