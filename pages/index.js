import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import HomeHeroHeader from '../components/HomeHeroHeader';
import { IconContext } from 'react-icons';
import { IoEarth, IoImageOutline } from 'react-icons/io5';
import { BiPoll } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { HiOutlineGif } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className="w-full border-x border-zinc-700/40">
			<HomeHeroHeader />
			<section>
				<div className="flex items-start m-4">
					<div>
						<IconContext.Provider
							value={{
								size: '2.25em',
								className: 'global-class-name',
							}}
						>
							<CgProfile />
						</IconContext.Provider>
					</div>
					<div className="w-full m-3">
						<input
							type={'text'}
							className={
								'ml-1 px-2 py-1 text-2xl font-mono tracking-wide rounded-md bg-transparent w-full focus:outline-none'
							}
							placeholder={"What's happening?"}
						/>
						<div className="ml-3 flex items-center">
							<IconContext.Provider
								value={{
									size: '1em',
									className: 'global-class-name',
									color: '#1DA1F2',
								}}
							>
								<IoEarth />
							</IconContext.Provider>
							<span className="ml-3 text-md text-center font-bold xl:block capitalize">
								Everyone can see
							</span>
						</div>
						<hr className="my-4" />
						<div className="flex items-center">
							<div className="m-2 ml-0 p-3 rounded-full hover:bg-blue-300/20">
								<IconContext.Provider
									value={{
										size: '1em',
										className: 'global-class-name',
										color: '#1DA1F2',
									}}
								>
									<IoImageOutline />
								</IconContext.Provider>
							</div>
							<div className="m-2 ml-0 p-3 rounded-full hover:bg-blue-300/20">
								<IconContext.Provider
									value={{
										size: '1em',
										className: 'global-class-name',
										color: '#1DA1F2',
									}}
								>
									<HiOutlineGif />
								</IconContext.Provider>
							</div>

							<div className="m-2 ml-0 p-3 rounded-full hover:bg-blue-300/20">
								<IconContext.Provider
									value={{
										size: '1em',
										className: 'global-class-name',
										color: '#1DA1F2',
									}}
								>
									<BiPoll />
								</IconContext.Provider>
							</div>
							<div className="m-2 ml-0 p-3 rounded-full hover:bg-blue-300/20">
								<IconContext.Provider
									value={{
										size: '1em',
										className: 'global-class-name',
										color: '#1DA1F2',
									}}
								>
									<HiOutlineEmojiHappy />
								</IconContext.Provider>
							</div>

							<div className="m-2 ml-0 p-3 rounded-full hover:bg-blue-300/20">
								<IconContext.Provider
									value={{
										size: '1em',
										className: 'global-class-name',
										color: '#1DA1F2',
									}}
								>
									<BsCalendarDate />
								</IconContext.Provider>
							</div>
							<div className="m-2 ml-0 p-3 rounded-full hover:bg-blue-300/20">
								<IconContext.Provider
									value={{
										size: '1em',
										className: 'global-class-name',
										color: '#1DA1F2',
									}}
								>
									<MdOutlineLocationOn />
								</IconContext.Provider>
							</div>
							<div className="flex-grow flex-1 w-full"></div>
							<button className="p-2 px-5 rounded-full bg-[#1DA1F2] text-white">
								<span className="text-md text-center font-bold xl:block capitalize">
									tweet
								</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
