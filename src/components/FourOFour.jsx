import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function FourOFour() {
	const navigate = useNavigate()

	useEffect(() => {
		// redirect to home page after 5 seconds
		const timeout = setTimeout(() => {
			navigate('/')
		}, 5000)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className='container prose mx-auto'>
			<h2>Not found</h2>
			<p>
				That page doesn't seem to exist. Please check the url and try again.
			</p>
			<p>
				Returning <Link to='/'>home</Link> in 5 seconds.
			</p>
		</div>
	)
}
