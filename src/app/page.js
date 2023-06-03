import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';


export default function Home() {
	return (
		<>
			<HomeHeader />

			<div className='flex flex-col h-screen items-center mt-24 border'>
				<Image
					src="/static/Google_logo_(2010-2013).png"
					alt="Google Logo"
					width="0"
					height="0"
					sizes="100vw"
					style={{ width: '30%', height: 'auto' }}
					// priority={true}
					placeholder="blur"
					blurDataURL={'/static/Google_logo_(2010-2013).png'}
				/>

				<HomeSearch />
			</div>
		</>
	)
}
