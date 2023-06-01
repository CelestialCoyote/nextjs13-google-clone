'use client';

import { useEffect, useState } from 'react';


export default function CountryLookup() {
	const [country, setCountry] = useState('United States');

	// No API Key because service does not have free tier any longer.
	// useEffect(() => {
	// 	fetch(`https://extreme-ip-lookup.com/json.?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
	// 	.then((res) => res.json())
	// 	.then((data) => setCountry(data.country));
	// }, []);

	return (
		<div className=''>
			{country}
		</div>
	)
}