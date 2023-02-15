import React from 'react';

const SuggestionHappeningBox = () => {
	return (
		<div className="mt-2 w-full flex flex-col rounded-xl bg-zinc-700/40 overflow-hidden">
			<h1 className="text-lg font-extrabold p-3 text-white">
				What&apos;s happening
			</h1>
			<div className="">
				<div className="p-2 px-3 cursor-pointer hover:bg-zinc-700/40">
					<div className="">
						<h1 className="text-sm text-[#b3b3b3]">
							Sports · Trending
						</h1>
					</div>
					<h1 className="font-semibold text-white">
						#ChetanSharmaSting
					</h1>
					<h1 className="text-sm text-[#b3b3b3]">
						Trending with{' '}
						<span className="text-[#1DA1F2]">#ViratKohli</span>,{' '}
						<span className="text-[#1DA1F2]">#NatasaStankovic</span>
					</h1>
				</div>
				<div className="p-2 px-3 cursor-pointer hover:bg-zinc-700/40">
					<div className="">
						<h1 className="text-sm text-[#b3b3b3]">
							Sports · Trending
						</h1>
					</div>
					<h1 className="font-semibold text-white">Kylian Mbappe</h1>
					<h1 className="text-sm text-[#b3b3b3]">22.3K Tweets</h1>
				</div>
				<div className="p-2 px-3 cursor-pointer hover:bg-zinc-700/40">
					<div className="">
						<h1 className="text-sm text-[#b3b3b3]">
							Business & finance · Trending
						</h1>
					</div>
					<h1 className="font-semibold text-white">#Dogecoin</h1>
					<h1 className="text-sm text-[#b3b3b3]">46.8K Tweets</h1>
				</div>
				<div className="p-2 px-3 cursor-pointer hover:bg-zinc-700/40">
					<div className="">
						<h1 className="text-sm text-[#b3b3b3]">
							Sports · Trending
						</h1>
					</div>
					<h1 className="font-semibold text-white">Newcastle</h1>
					<h1 className="text-sm text-[#b3b3b3]">14.1K Tweets</h1>
				</div>
				<div className="p-2 px-3 cursor-pointer hover:bg-zinc-700/40">
					<div className="">
						<h1 className="text-sm text-[#b3b3b3]">
							Trending in India
						</h1>
					</div>
					<h1 className="font-semibold text-white">
						#CBSEBoardExam2023
					</h1>
					<h1 className="text-sm text-[#b3b3b3]">1,290 Tweets</h1>
				</div>
				<button className="p-4 w-full text-left capitalize text-[#1DA1F2] cursor-pointer hover:bg-zinc-700/40">
					show more
				</button>
			</div>
		</div>
	);
};

export default SuggestionHappeningBox;
