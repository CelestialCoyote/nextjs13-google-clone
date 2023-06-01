import Link from 'next/link';
import Image from 'next/image';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';


export default function SearchHeader() {

	return (
		<header className='sticky top-0 bg-white border-2 border-green-600'>
			<div className='flex w-full p-3 items-center justify-between border-2 border-blue-600'>
				<Link href={'/'} className='border-2 border-purple-500'>
					<Image
						src="/static/Google_logo_(2010-2013).png"
						alt="Google Logo"
						width='120'
						height='40'
						// sizes="100vw"
						// style={{ width: '25%', height: 'auto' }}
						// priority={true}
						placeholder="blur"
						blurDataURL={'/static/Google_logo_(2010-2013).png'}
					/>
				</Link>
				<div className='flex-1 border-2 border-red-300'>
					<SearchBox />
				</div>
				<div className='hidden md:inline-flex space-x-2'>
					<RiSettings3Line className='header-icon' />
					<TbGridDots className='header-icon' />
				</div>
				<button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>
					Sign In
				</button>
			</div>
			<SearchHeaderOptions />
		</header>
	)
}