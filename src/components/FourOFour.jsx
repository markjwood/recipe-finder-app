import { useEffect } from 'react'

export default function FourOFour() {
	useEffect(() => {
		// redirect to home page after 5 seconds
		const timeout = setTimeout(() => {
			navigate('/')
		}, 5000)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<>
			<h2>Not found</h2>
			<p>
				That page doesn't seem to exist. Please check the url and try again.
			</p>
			{!isDev && (
				<p>
					Returning <Link to='/'>home</Link> in 5 seconds.
				</p>
			)}
		</>
	)
}
