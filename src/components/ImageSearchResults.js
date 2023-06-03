import Link from 'next/link';


export default function ImageSearchResults({ results }) {

	return (
		<div className='pb-24 mt-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
				{results.items?.map((result) => (
					<div className='mb-8' key={result.link}>
						<div className='group'>
							<Link className='' href={result.image.contextLink}>
								<img
									src={result.link}
									alt={result.title}
									className='h-60 group-hover:shadow-xl object-contain transition-shadow'
								/>
							</Link>
							<Link className='' href={result.image.contextLink}>
								<h2 className='group-hover:underline truncate text-xl'>{result.title}</h2>
							</Link>
							<Link className='group-hover:underline text-gray-600' href={result.image.contextLink}>
								<p>{result.displayLink}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}