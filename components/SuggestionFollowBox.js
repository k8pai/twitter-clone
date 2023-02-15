import React from 'react';
import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';

const SuggestionFollowBox = () => {
	return (
		<div className="mt-5 w-full flex flex-col rounded-xl bg-zinc-700/40 overflow-hidden">
			<h1 className="text-lg font-extrabold p-3 text-white">
				Who to follow
			</h1>
			<div className="">
				<div className="ml-2 p-2 px-3 flex items-center hover:bg-zinc-700/20">
					<IconContext.Provider
						value={{
							color: '#1DA1F2',
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaUserAlt />
					</IconContext.Provider>
					<div className="ml-5 leading-none w-full ">
						<h1 className="text-base tracking-wider text-white">
							UEFA Champions League
						</h1>
						<h1 className="text-base tracking-wide text-[#b3b3b3]">
							@ChampionsLeague
						</h1>
					</div>

					<div className="mx-2">
						<button className="rounded-full bg-white font-semibold capitalize text-black px-3 py-1 transition duration-100 hover:bg-white/70">
							follow
						</button>
					</div>
				</div>
				<div className="ml-2 p-2 px-3 flex items-center hover:bg-zinc-700/20">
					<IconContext.Provider
						value={{
							color: '#1DA1F2',
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaUserAlt />
					</IconContext.Provider>
					<div className="ml-5 leading-none w-full ">
						<h1 className="text-base tracking-wider text-white">
							Cristiano Ronaldo
						</h1>
						<h1 className="text-base tracking-wide text-[#b3b3b3]">
							@cristiano
						</h1>
					</div>

					<div className="mx-2">
						<button className="rounded-full bg-white font-semibold capitalize text-black px-3 py-1 transition duration-100 hover:bg-white/70">
							follow
						</button>
					</div>
				</div>
				<div className="ml-2 p-2 px-3 flex items-center hover:bg-zinc-700/20">
					<IconContext.Provider
						value={{
							color: '#1DA1F2',
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaUserAlt />
					</IconContext.Provider>
					<div className="ml-5 leading-none w-full ">
						<h1 className="text-base tracking-wider text-white">
							Kylian Mbappe
						</h1>
						<h1 className="text-base tracking-wide text-[#b3b3b3]">
							@kylianmbappe
						</h1>
					</div>

					<div className="mx-2">
						<button className="rounded-full bg-white font-semibold capitalize text-black px-3 py-1 transition duration-100 hover:bg-white/70">
							follow
						</button>
					</div>
				</div>
				<button className="p-4 w-full text-left capitalize text-[#1DA1F2] cursor-pointer hover:bg-zinc-700/40">
					show more
				</button>
			</div>
		</div>
	);
};

export default SuggestionFollowBox;
