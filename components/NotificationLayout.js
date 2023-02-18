import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { FiSettings } from 'react-icons/fi';

const NotificationLayout = ({ children }) => {
	return (
		<div className="sticky top-0 flex flex-col space-y-3 justify-start">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-bold m-4 tracking-wide">
					Notifications
				</h1>
				<div className="p-2">
					<IconContext.Provider
						value={{
							size: '1.45em',
							className: 'global-class-name',
						}}
					>
						<FiSettings />
					</IconContext.Provider>
				</div>
			</div>
			<ul class="flex border-b border-gray-100">
				<li class="flex-1 hover:bg-zinc-800/80">
					<Link class="relative block p-4" href="/notifications">
						<span class="absolute inset-x-0 -bottom-px h-px rounded-2xl bg-blue-600"></span>

						<div class="flex items-center justify-center">
							<span class="text-sm font-medium">All</span>
						</div>
					</Link>
				</li>
				<li class="flex-1 hover:bg-zinc-800/80">
					<Link
						class="relative block p-4"
						href="/notifications/verified"
					>
						<span class="absolute inset-x-0 -bottom-px h-px w-full"></span>

						<div class="flex items-center justify-center">
							<span class="text-sm font-medium">Verified</span>
						</div>
					</Link>
				</li>
				<li class="flex-1 hover:bg-zinc-800/80">
					<Link
						class="relative block p-4"
						href="/notifications/mentions"
					>
						<div class="flex items-center justify-center">
							<span class="text-sm font-medium">Mentions</span>
						</div>
					</Link>
				</li>
			</ul>
			<div>{children}</div>
		</div>
	);
};

export default NotificationLayout;
