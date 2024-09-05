import {
	Link,
	Outlet,
	ScrollRestoration,
	useNavigation,
} from 'react-router-dom'
import SearchBar from './components/SearchBar'

export default function RootLayout() {
	// get 'loading' state
	const { state } = useNavigation()
	const isLoading = state === 'loading'

	return (
		<>
			<header className='p-4'>
				<div className='container mx-auto items-center justify-between gap-3 md:flex'>
					<h1 className='text-center font-serif text-2xl font-bold md:text-left md:text-3xl lg:text-4xl'>
						<Link to='/'>Recipe Finder</Link>
					</h1>
					<SearchBar />
				</div>
			</header>
			<ScrollRestoration />
			{isLoading ? (
				<div className='container mx-auto flex items-center justify-center gap-6 text-2xl'>
					Loading...
					{/* loading spinner from daisyUI */}
					<span className='loading loading-spinner loading-lg text-primary'></span>
				</div>
			) : (
				<Outlet />
			)}
		</>
	)
}
