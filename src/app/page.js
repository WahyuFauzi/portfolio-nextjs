import Image from 'next/image';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import ExperienceSection from './Components/ExperienceSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactMeSection from './Components/ContactMeSection';
import Footer from './Components/Footer';

export default function Home() {
	return (
		<main>
			<NavBar></NavBar>
			<HeroSection></HeroSection>
			<ExperienceSection></ExperienceSection>
			<ProjectsSection></ProjectsSection>
			<ContactMeSection></ContactMeSection>
			<Footer></Footer>
		</main>
	);
}
