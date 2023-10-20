export default function ExperienceSection() {
	return (
		<div
			className="w-full my-12 pt-12 lg:flex lg:justify-center"
			id="experience-section"
		>
			<div className="lg:w-1/3 mt-12 text-4xl text-center font-bold">
				Experience
			</div>
			<div className="mx-4 lg:w-1/3 rounded">
				<ol className="relative border-l border-gray-200 dark:border-gray-700">
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							May - August 2023
						</time>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							Data Analyst at Ministry of Development and Planning (Bappenas)
						</h3>
						<ul className="ml-6 list-disc">
							<li>
								I was tasked with a project on the Sustainable Development Goals
								(SDGs) in Kotabaru, South Kalimantan.
							</li>
							<li>
								Developed a project plan with a team and worked with people from
								various backgrounds.
							</li>
							<li>
								Collected data, analyzed the data using The SDGs standard, and
								created visualizations and reports to communicate the results to
								the local government.
							</li>
							<li>
								Able to complete the project two months ahead of schedule and
								within budget.
							</li>
						</ul>
					</li>
					<li className="ml-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							August 2022 - January 2023
						</time>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							Research Assistant
						</h3>
						<ul className="ml-6 list-disc">
							<li>
								Tasked with conducting multiple research on specific topics.
							</li>
							<li>
								Conducted a literature review, developed a research methodology,
								collected data, and analyzed the data using GRI Standards.
							</li>
							<li>
								Able to submit a paper to an accredited Journal within three
								months. The article was accepted and published. We also saved
								the budget by 40% using the Kaizen and Lean Six Sigma
								techniques.
							</li>
							<li>
								Able to complete the research project and publish the findings
								in an accredited journal
							</li>
						</ul>
					</li>
				</ol>
			</div>
		</div>
	);
}
