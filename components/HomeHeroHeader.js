import Link from 'next/link';
import React from 'react';

const HomeHeroHeader = () => {
	return (
		<div className="sticky top-0 flex flex-col space-y-3 justify-start">
			<h1 className="text-xl font-bold m-4 tracking-wide">Home</h1>
			<ul class="flex border-b border-gray-100">
				<Link
					class="relative block p-4 flex-1 hover:bg-[#3f3f4666]"
					href=""
				>
					<div class="flex items-center justify-center">
						<span class="text-sm font-medium">For you</span>
					</div>
				</Link>
				<Link
					class="relative block p-4 flex-1 hover:bg-[#3f3f4666]"
					href=""
				>
					<div class="flex items-center justify-center">
						<span class="text-sm font-medium">Following</span>
					</div>
				</Link>
			</ul>
		</div>
	);
};

export default HomeHeroHeader;
