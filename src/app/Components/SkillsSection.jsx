import SkillBox from './reusable/SkillBox';

import JavaScriptLogo from '../../../public/images/skills/JavaScript-logo.png';
import TypeScriptLogo from '../../../public/images/skills/TypeScript-logo.webp';
import PythonLogo from '../../../public/images/skills/Python-logo.png';
import SQLLogo from '../../../public/images/skills/SQL-logo.png';
import TableauLogo from '../../../public/images/skills/Tableau-logo.png';
import PowerBILogo from '../../../public/images/skills/Power BI-logo.png';
import LookerLogo from '../../../public/images/skills/Looker-logo.png';
import HTMLAndCSSLogo from '../../../public/images/skills/HTML & CSS-logo.png';
import ReactLogo from '../../../public/images/skills/React-logo.png';
import NextJSLogo from '../../../public/images/skills/NextJS-logo.png';
import NestJSLogo from '../../../public/images/skills/NestJS-logo.svg';
import ExpressJSLogo from '../../../public/images/skills/ExpressJS-logo.png';
import AndroidLogo from '../../../public/images/skills/Android-logo.png';
import JavaLogo from '../../../public/images/skills/Java-logo.png';
import KotlinLogo from '../../../public/images/skills/Kotlin-logo.png';
import ComposeLogo from '../../../public/images/skills/Compose-logo.png';
import SpringLogo from '../../../public/images/skills/Spring-logo.png';
import TailwindLogo from '../../../public/images/skills/Tailwind-logo.png';

export default function SkillsSection() {
	return (
		<div id="skills-section" className="w-4/5 mx-auto pt-24">
			<div className="w-full text-4xl text-center font-semibold">Skills</div>
			<div className="w-full my-4">
				<div className="w-full">
					<h3 className="text-2xl mb-2">Data Analysis</h3>
					<ul className="w-full flex justify-start flex-wrap">
						<li>
							<SkillBox imageUrl={PythonLogo} skillName="Python" />
						</li>
						<li>
							<SkillBox imageUrl={SQLLogo} skillName="SQL" />
						</li>
						<li>
							<SkillBox imageUrl={TableauLogo} skillName="Tableau" />
						</li>
						<li>
							<SkillBox imageUrl={PowerBILogo} skillName="Power BI" />
						</li>
						<li>
							<SkillBox imageUrl={LookerLogo} skillName="Looker Studio" />
						</li>
					</ul>
				</div>
				<div className="w-full my-4">
					<h3 className="text-2xl mb-2">Web Development</h3>
					<ul className="w-full flex justify-start flex-wrap">
						<li>
							<SkillBox imageUrl={HTMLAndCSSLogo} skillName="HTML & CSS" />
						</li>
						<li>
							<SkillBox imageUrl={JavaScriptLogo} skillName="JavaScript" />
						</li>
						<li>
							<SkillBox imageUrl={TypeScriptLogo} skillName="TypeScript" />
						</li>
						<li>
							<SkillBox imageUrl={ReactLogo} skillName="ReactJS" />
						</li>
						<li>
							<SkillBox imageUrl={TailwindLogo} skillName="Tailwind" />
						</li>
						<li>
							<SkillBox imageUrl={NextJSLogo} skillName="NextJS" />
						</li>
						<li>
							<SkillBox imageUrl={ExpressJSLogo} skillName="ExpressJS" />
						</li>
						<li>
							<SkillBox imageUrl={NestJSLogo} skillName="NestJS" />
						</li>
						<li>
							<SkillBox imageUrl={SpringLogo} skillName="Spring" />
						</li>
					</ul>
				</div>
				<div className="w-full my-4">
					<h3 className="text-2xl mb-2">Mobile Development</h3>
					<ul className="w-full flex justify-start flex-wrap">
						<li>
							<SkillBox imageUrl={AndroidLogo} skillName="Android" />
						</li>
						<li>
							<SkillBox imageUrl={JavaLogo} skillName="Java" />
						</li>
						<li>
							<SkillBox imageUrl={KotlinLogo} skillName="Kotlin" />
						</li>
						<li>
							<SkillBox imageUrl={ComposeLogo} skillName="Compose" />
						</li>
						<li>
							<SkillBox imageUrl={ReactLogo} skillName="React Native" />
						</li>
					</ul>
				</div>
			</div>
			<div className="hidden w-full my-4"></div>
		</div>
	);
}
