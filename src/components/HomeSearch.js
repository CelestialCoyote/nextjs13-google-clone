import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';


export default function HomeSearch() {

	return(
		<>
			<form
				className='flex w-full m-5 mx-auto max-w-[90%] px-5 py-5 rounded-full
					border border-gray-500 hover:shadow-md transition-shadow'
			>
				<AiOutlineSearch
					className='text-x1 text-gray-500 mr-3'
				/>
				<input type='text' />
				<BsFillMicFill className='text-lg' />
			</form>
		</>
	)
}