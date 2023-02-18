import Head from 'next/head';
import React from 'react';
import SideNav from './SideNav';
import SuggestionNav from './SuggestionNav';

const Layout = ({ children }) => {
	return (
		<div className="w-full min-h-screen h-full bg-[#121212] text-[#b3b3b3]">
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<div className="max-w-7xl w-full mx-auto flex justify-start bg-[#181818]">
				<SideNav />
				<div className="w-full p-px">{children}</div>
				<SuggestionNav />
			</div>
		</div>
	);
};

export default Layout;
