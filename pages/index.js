import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import HomeHeroHeader from '../components/HomeHeroHeader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className="w-full border-x border-zinc-700/40">
			<HomeHeroHeader />
		</div>
	);
}
