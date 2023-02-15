import React from 'react';

const HomeHeroHeader = () => {
	return (
		<div className="sticky top-0 flex flex-col space-y-3 justify-start">
			<h1 className="text-xl font-bold m-4 tracking-wide">Home</h1>
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
