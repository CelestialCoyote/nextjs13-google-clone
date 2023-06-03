import Link from "next/link";


export default async function WebSearchPage({ searchParams }) {
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}`
	);

	if (!response.ok) {
		throw new Error("Something went wrong");
	}

	const data = await response.json();
	const results = data.items;

	if (!results) {
		return (
			<div className='flex flex-col justify-center items-center pt-10'>
				<h1 className='text-3xl mb-4'>No results found</h1>
				<p className='text-lg'>
					Try a different seach term or go back to homepage{" "}
					<Link className='text-blue-500' href='/'>
						Home
					</Link>
				</p>
			</div>
		)
	}

	return (
		<>
			{results && results.map(result => <h3>{result.title}</h3>)}
		</>
	)
}