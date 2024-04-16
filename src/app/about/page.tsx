/* eslint-disable react/no-unescaped-entities */
export default function About() {
	return (
		<ul>
			<li className="main">
				<p className="mb-3">
					This is a site created by Edward Tanguay. Here are more sites of mine:
				</p>
				<ul className="list-disc ml-4">
					<li>
						<a href="https://tanguay-eu.vercel.app" className="text-yellow-200">
							Edward's Tech Site 
						</a>
						<ul className="list-disc ml-4">
							<li>
								<i>
									my tech site with all my howtos, tech items,
									forays, site starters, job listings, etc.
								</i>
							</li>
							<li>
								built with <b>Next.js 13</b>
							</li>
							<li>
								auto-generates my <b>Datapod-for-Next.js</b>{' '}
								framework
							</li>
						</ul>
					</li>
					<li>
						<a href="https://edward-tanguay-eu.vercel.app/about" className="text-yellow-200">
							Edward Tanguay
						</a>
						<ul className="list-disc ml-4">
							<li>
								<i>
									my personal site: books, languages, online
									class notes, blog, philosophy, politics,
									etc.
								</i>
							</li>
							<li>
								built with <b>Vue 3</b>
							</li>
							<li>
								auto-generates my <b>Datapod-for-Vue.js</b>{' '}
								framework
							</li>
						</ul>
					</li>
					<li>
						<a href="https://datapod-tanguay-eu.vercel.app/about" className="text-yellow-200">
							Datapod Project
						</a>
						<ul className="list-disc ml-4">
							<li>
								<i>
									landing site for my Datapod project with
									documentation, current versions, ticket
									system
								</i>
							</li>
							<li>
								built with <b>Angular 15</b>
							</li>
							<li>
								auto-generates my <b>Datapod-for-Angular</b>{' '}
								framework
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	);
}
