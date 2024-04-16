'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as config from '../config';

/* eslint-disable react/no-unescaped-entities */
export const Header = () => {
	const activeSegment = useSelectedLayoutSegment();

	return (
		<div>
			<div className="flex justify-between">
				<h1 className="text-4xl mb-3 text-orange-200">Edward's Notes</h1>
			</div>
			<nav className="bg-gray-700 p-2 mainnav mb-6">
				<ul className="flex gap-3">
					<li>
						<Link
							href="/"
							className={`border-0 ${activeSegment === null ? 'text-yellow-200' : '' }`}
						>
							Welcome
						</Link>
					</li>
					<li>
						<Link
							href="/topics"
							className={`border-0 ${activeSegment === 'topics'
									? 'text-yellow-200'
									: ''
								}`}
						>
							Topics
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`border-0 ${activeSegment === 'about'
									? 'text-yellow-200'
									: ''
								}`}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
