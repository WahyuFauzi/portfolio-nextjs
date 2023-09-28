export default function Footer() {
	let websiteSourceCode = 'https://github.com/WahyuFauzi/portfolio-nextjs.git';
	return (
		<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
			<div class="w-full max-w-screen-xl p-4">
				<a href={websiteSourceCode}>
					<div className="bg-sky-500 h-12 w-64 pt-2 inline-block align-top text-center text-white rounded font-semibold hover:bg-sky-800">
						Website portfolio source code.
					</div>
				</a>
			</div>
		</footer>
	);
}
