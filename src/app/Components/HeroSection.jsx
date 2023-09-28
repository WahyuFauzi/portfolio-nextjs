import Image from 'next/image';
import ProfilePicture from '../../../public/images/profile_picture.png';

export default function HeroSection() {
	return (
		<section
			class="w-full bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]"
			id="hero-section"
		>
			<div className="w-1/3 pt-8 mx-auto">
				<Image
					className="mx-auto"
					src={ProfilePicture}
					width={360}
					height={360}
					alt="profile picture"
				/>
			</div>
			<div class="w-full my-4 px-4 mx-auto text-center lg:py-16">
				<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
					Wahyu
				</h1>
				<h2 className="pt-2 text-2xl">Good analysis lead to better decision</h2>
				<h3 className="pt-2 pb-8 text-zinc-400">
					Hi, Welcome to my portfolio website. With experiences and skills, I
					believe we can create a meaningful action based on data.
				</h3>
			</div>
		</section>
	);
}
