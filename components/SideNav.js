import React from 'react';
import { IconContext } from 'react-icons';

import { BsSearch, BsBookmark } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { CgMoreO } from 'react-icons/cg';
import { FaBell, FaUserAlt, FaFeatherAlt, FaHashtag } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import { RiHome7Fill } from 'react-icons/ri';

const SideNav = () => {
	return (
		<div className="h-screen sticky top-0 xl:max-w-[250px] xl:w-full box-border p-2">
			<ul className="h-full w-full flex flex-col space-y-2 justify-evenly">
				<div className="logo rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212]">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<SiTwitter />
					</IconContext.Provider>
				</div>
				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<RiHome7Fill />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						home
					</span>
				</div>
				<div className="rounded-full hidden p-3 w-fit cursor-pointer hover:bg-[#121212] xl:flex xl:items-center xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaHashtag />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						explore
					</span>
				</div>
				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:hidden xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<BsSearch />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						search
					</span>
				</div>
				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaBell />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						notifications
					</span>
				</div>
				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<CiMail />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						messages
					</span>
				</div>
				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<BsBookmark />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						bookmarks
					</span>
				</div>

				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaUserAlt />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						profile
					</span>
				</div>
				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:pr-6">
					<IconContext.Provider
						value={{
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<CgMoreO />
					</IconContext.Provider>
					<span className="ml-3 hidden text-lg font-semibold xl:block capitalize">
						more
					</span>
				</div>
				<div className="rounded-full p-3 w-fit cursor-pointer hover:bg-[#121212] flex items-center xl:hidden">
					<IconContext.Provider
						value={{
							color: '#1DA1F2',
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaFeatherAlt />
					</IconContext.Provider>
				</div>
				<div className="hidden xl:block w-full">
					<button className="p-3 mt-5 rounded-full w-full bg-[#1DA1F2] text-white">
						<span className="hidden text-lg text-center font-semibold xl:block capitalize">
							tweet
						</span>
					</button>
				</div>
				<span className="flex-grow"></span>

				<div className="rounded-full p-3 w-full cursor-pointer hover:bg-[#121212] flex items-center xl:pr-4">
					<IconContext.Provider
						value={{
							color: '#1DA1F2',
							size: '1.75em',
							className: 'global-class-name',
						}}
					>
						<FaUserAlt />
					</IconContext.Provider>
					<div className="hidden xl:flex xl:flex-col items-start justify-center ml-4 ">
						<span className="text-white text-sm">Pai</span>
						<span className="text-[#b3b3b3] text-xs">@k8pai</span>
					</div>
					<span className="flex-grow"></span>
					<div className="hidden xl:block">
						<IconContext.Provider
							value={{
								color: '#1DA1F2',
								size: '1.2em',
								className: 'global-class-name',
							}}
						>
							<MdOutlineMoreHoriz />
						</IconContext.Provider>
					</div>
				</div>
			</ul>
		</div>
	);
};

export default SideNav;
