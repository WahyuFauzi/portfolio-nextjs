import Card from './reusable/Card';
import EEEImage from "../../../public/images/Economy, Environment, and Earth's Future.png";
import GFPPicture from '../../../public/images/GFP Group H.png';
import SEABankPicture from '../../../public/images/SEA Bank.png';

export default function ProjectsSection() {
	return (
		<div className="w-full px-8 my-8 pt-24" id="projects-section">
			<div className="text-4xl font-semibold">Projects by Me:</div>
			<div className="lg:w-full md:w-2/3 mt-8 items-center lg:flex lg:justify-around md:mx-auto">
				<Card
					imageUrl={EEEImage}
					cardTitle="Economy, Enivronment, and Earth's Future"
					cardUrl="https://bit.ly/44xOHmX"
				/>
				<Card
					imageUrl={GFPPicture}
					cardTitle="RevoU Group Final Project"
					cardUrl={'https://bit.ly/3OYszfN'}
				/>
				<Card
					imageUrl={SEABankPicture}
					cardTitle="SEA Bank Dataset"
					cardUrl="https://www.kaggle.com/datasets/wahyuwardana/sea-bank-data"
				/>
			</div>
		</div>
	);
}
