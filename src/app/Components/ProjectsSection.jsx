import Card from './reusable/Card';
import EEEImage from "../../../public/images/Economy, Environment, and Earth's Future.png";
import GFPPicture from '../../../public/images/GFP Group H.png';
import SEABankPicture from '../../../public/images/SEA Bank.png';
import PortfolioPicture from '../../../public/images/Portfolio-Picture.png';
import NestJSLogo from '../../../public/images/skills/NestJS-logo.svg';

export default function ProjectsSection() {
	return (
		<div className="w-full pt-24" id="projects-section">
			<div className="text-4xl w-4/5 mx-auto font-semibold">
				Projects by Me:
			</div>
			<div className="lg:w-10/12 md:w-2/3 mx-auto border-l-orange-400 lg:flex lg:justify-start">
				<Card
					imageUrl={EEEImage}
					cardTitle="Economy, Enivronment, and Earth's Future"
					cardUrl="https://drive.google.com/file/d/11gk3QVyLJHkesQRCmLNXmgmOn--IrRt-/view?usp=drive_link"
				/>
				<Card
					imageUrl={GFPPicture}
					cardTitle="RevoU Group Final Project"
					cardUrl="https://docs.google.com/presentation/d/1NjMxEoYrezoIQITgCcWiZeDCNT5shujKwdNQ5g_bwm4/edit?usp=drive_link"
				/>
				<Card
					imageUrl={SEABankPicture}
					cardTitle="SEA Bank Dataset"
					cardUrl="https://www.kaggle.com/datasets/wahyuwardana/sea-bank-data"
				/>
			</div>
			<div className="lg:w-10/12 md:w-2/3 mx-auto border-l-orange-400 lg:flex lg:justify-start">
				<Card
					imageUrl={PortfolioPicture}
					cardTitle="Website Portfolio"
					cardUrl="https://github.com/WahyuFauzi/portfolio-nextjs"
				/>
				<Card
					imageUrl={NestJSLogo}
					cardTitle="TypeScript with NestJS Backend"
					cardUrl="https://github.com/WahyuFauzi/backend-portfolio-nestjs"
				/>
			</div>
		</div>
	);
}
