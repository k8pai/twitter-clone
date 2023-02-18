import Image from 'next/image';
import React from 'react';

const bookmarks = () => {
	return (
		<div className="sticky top-0 flex flex-col space-y-3 justify-start">
			<div className="m-4 tracking-wide">
				<h1 className="text-xl font-bold m-0">Bookmarks</h1>
				<code className="text-sm font-semibold text-[#b3b3b3]">
					@k8pai
				</code>
			</div>
			<div className="max-w-sm w-sm mx-auto">
				<div className="my-10">
					<Image
						src={'/book-in-bird-cage-400x200.v1.366bcfc9.png'}
						className="w-full h-full"
						width={400}
						height={200}
						alt="book in bird cage image"
					/>
				</div>
				<h1 className="font-bold text-3xl">Save Tweets for later</h1>
				<h1>
					Don&apos;t let the good ones fly away! Bookmark Tweets to
					easily find them again in the future.
				</h1>
			</div>
			{/* <div>{children}</div> */}
		</div>
	);
};

export default bookmarks;
