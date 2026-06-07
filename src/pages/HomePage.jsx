import { Navbar } from '../components/Navbar.jsx';
import { Hero } from '../components/Hero.jsx';
import { Projects } from '../components/Projects.jsx';
import { Form } from '../components/Form.jsx';
import { Footer } from '../components/Footer.jsx';
import { useProjects } from '../context/ProjectsContext.jsx';

const name = "Eliott Schneider";

const logos = [
    { id: 0, logo: "/assets/instagram.png", link: "https://www.instagram.com" },
    { id: 1, logo: "/assets/linkedin.png", link: "https://www.linkedin.com" },
    { id: 2, logo: "/assets/mail.png", link: "https://www.gmail.com" }
];

function HomePage() {
    const { projects } = useProjects();

    return (
        <div className="relative overflow-x-hidden">
            <header className="absolute top-0 left-0 w-full z-50">
                <Navbar name={name} />
            </header>
            <main>
                <Hero name={name} />
                <Projects projects={projects} />
                <Form />
                <Footer name={name} logos={logos} />
            </main>
        </div>
    );
}

export default HomePage;
