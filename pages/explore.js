import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

const explore = () => {
	return (
		<div className="w-full border-x border-zinc-700/40">
			<div className="w-full sticky top-0 bg-[#121212]">
				<div className="flex items-center p-4">
					<div className="input-section flex-grow flex items-center bg-zinc-700/40 rounded-full p-2">
						<div className="ml-4">
							<IconContext.Provider
								value={{
									size: '1em',
									className: 'global-class-name',
								}}
							>
								<BsSearch />
							</IconContext.Provider>
						</div>
						<input
							type={'text'}
							placeholder={'Search Twitter'}
							className={
								'ml-2 px-2 py-1 w-full focus:outline-none bg-transparent'
							}
						/>
					</div>
					<div className="p-2">
						<IconContext.Provider
							value={{
								size: '1.75em',
								className: 'global-class-name',
							}}
						>
							<FiSettings />
						</IconContext.Provider>
					</div>
				</div>
				<div>
					<ul class="flex border-b border-gray-100">
						<Link
							class="relative block p-4 flex-1 hover:bg-[#3f3f4666]"
							href="/explore/tabs/for-you"
						>
							<div class="flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 flex-shrink-0 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
									/>
								</svg>

								<span class="ml-3 text-sm font-medium">
									For you
								</span>
							</div>
						</Link>
						<Link
							class="relative block p-4 flex-1 hover:bg-[#3f3f4666]"
							href="/explore/tabs/following"
						>
							<div class="flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 flex-shrink-0 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>

								<span class="ml-3 text-sm font-medium">
									Following
								</span>
							</div>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default explore;
