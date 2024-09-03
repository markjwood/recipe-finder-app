import { Form } from 'react-router-dom'
import { useState } from 'react'

export default function SearchBar() {
	const [searchText, setSearchText] = useState('')

	return (
		<Form
			action='/recipes'
			method='get'
			className='my-6 flex justify-center gap-3'
		>
			<label
				htmlFor='recipe-search'
				className='flex items-center gap-3 md:text-lg lg:text-xl'
			>
				Find Recipes
				<input
					id='recipe-search'
					name='q' // sets name for query param
					className='input input-sm input-bordered max-w-xs p-1 md:input-md'
					type='text'
					value={searchText}
					onChange={e => setSearchText(e.target.value)}
				/>
			</label>
			<button className='btn btn-primary btn-sm md:btn-md'>Search</button>
		</Form>
	)
}
