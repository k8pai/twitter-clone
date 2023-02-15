import React from 'react';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import SuggestionFollowBox from './SuggestionFollowBox';
import SuggestionHappeningBox from './SuggestionHappeningBox';

const SuggestionNav = () => {
	return (
		<div className="hidden max-w-sm w-full lg:flex lg:flex-col items-center px-6 bg-[#121212]">
			<div className="w-full sticky top-0 bg-[#121212] py-4">
				<div className="input-section flex items-center bg-zinc-700/40 rounded-full p-2">
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
			</div>
			<SuggestionHappeningBox />
			<SuggestionFollowBox />

			<div className="mt-5 w-full flex flex-col px-4 pb-16">
				<span className="text-xs text-left">
					&copy; 2023 Twitter, Inc.
				</span>
			</div>
		</div>
	);
};

export default SuggestionNav;
