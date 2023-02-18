import Link from 'next/link';
import React from 'react';

const HomeHeroHeader = () => {
	return (
		<div className="sticky top-0 flex flex-col space-y-3 justify-start">
			<h1 className="text-xl font-bold m-4 tracking-wide">Home</h1>
			<ul class="flex border-b border-gray-100">
				<li class="flex-1">
					<Link class="relative block p-4" href="/tabs/for-you">
						<span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

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
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								/>
							</svg>

							<span class="ml-3 text-sm font-medium text-gray-900">
								For you
							</span>
						</div>
					</Link>
				</li>

				<li class="flex-1">
					<Link class="relative block p-4" href="/tabs/following">
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
									d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
								/>
							</svg>

							<span class="ml-3 text-sm font-medium text-gray-900">
								Following
							</span>
						</div>
					</Link>
				</li>
			</ul>

			<div className="flex bg-transparent border-b border-zinc-700/40">
				<h1 className="flex-grow flex justify-center p-3 hover:bg-transparent/80">
					For you
				</h1>
				<h1 className="flex-grow flex justify-center p-3 hover:bg-transparent/80">
					Following
				</h1>
			</div>
		</div>
	);
};

export default HomeHeroHeader;
