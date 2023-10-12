export default function ContactButton({
	svgComponent,
	contactText,
	contactLink,
}) {
	return (
		<a
			href={contactLink}
			className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
		>
			{svgComponent}
			<div className="pl-2 text-left">
				<div className="mb-1 text-xs">Contact me on:</div>
				<div className="-mt-1 font-sans text-sm font-semibold">
					{contactText}
				</div>
			</div>
		</a>
	);
}
