import Image from 'next/image';
export default function Card({ imageUrl, cardTitle, cardUrl }) {
	return (
		<div
			id="card"
			className="w-80 md:mx-4 max-md:mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
		>
			<a href={cardUrl}>
				<Image
					className="rounded"
					src={imageUrl}
					quality={50}
					width={360}
					height={360}
					alt=""
				/>
			</a>
			<div className="h-24 p-5">
				<a href={cardUrl}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{cardTitle}
					</h5>
				</a>
			</div>
		</div>
	);
}
