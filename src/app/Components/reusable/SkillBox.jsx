import Image from 'next/image';
export default function SkillBox({ imageUrl, skillName }) {
	return (
		<div className="mr-2">
			<Image src={imageUrl} quality={50} width={80} height={80} alt="" />
			<p className="text-xs">{skillName}</p>
		</div>
	);
}
