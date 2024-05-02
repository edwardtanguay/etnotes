'use client';
/* eslint-disable react/no-unescaped-entities */

import { ProjectListing } from "@/components/ProjectListing";

//force deployment
const test = 123444;
console.log(test);

export default function Home() {
	return (
		<main>
			<h3 className="text-xl mb-3 text-yellow-100">Copenhagen Marathon Trip 2024</h3>
			<ul className="list-disc ml-4 mb-5">
				<li><a href="https://en.wikipedia.org/wiki/Copenhagen">Copenhagen wiki</a></li>
				<li><a href="http://etnotes.vercel.app/maps/denmark.kmz">Copenhagen map</a></li>
			</ul>
		</main>
	);
}
