import SearchHeader from "@/components/SearchHeader";
//import './../global.css';


export default function SearchLayout({ children }) {
	return (
		<div>
			<SearchHeader />
			{children}
		</div>
	)
}
