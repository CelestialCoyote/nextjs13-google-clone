import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'NextJS-13 GoogleClone',
	description: 'Google search engine clone',
}


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/* <body className={inter.className}> */}
			<body className="relative min-h-screen">
				{children}
				<Footer />
			</body>
		</html>
	)
}
