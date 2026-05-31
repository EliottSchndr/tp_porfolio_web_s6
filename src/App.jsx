import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import {Projects} from "./components/Projects.jsx";
import {Form} from "./components/Form.jsx";
import {Logos} from "./components/Logos.jsx";


function App() {
    const name = "Eliott Schneider";

    const projects = [
        {
            id:0,
            title : "Project Name",
            description : "You can also add in this description the type of the project, if it was for web, mobile, electron.",
            image:"/assets/project3.png",
        },
        {
            id:1,
            title : "Project Name",
            description : "You can also add in this description the type of the project, if it was for web, mobile, electron.",
            image:"/assets/project1.png",
        },
        {
            id:2,
            title : "Project Name",
            description : "You can also add in this description the type of the project, if it was for web, mobile, electron.",
            image:"/assets/project2.png",
        }
    ];

    const logos = [
        {
            id:0,
            logo:"/assets/instagram.png",
            link:"https://www.instagram.com"
        },
        {
            id:1,
            logo:"/assets/linkedin.png",
            link:"https://www.linkedin.com"
        },
        {
            id:2,
            logo:"/assets/mail.png",
            link:"https://www.gmail.com"
        }
    ]
  return (
    <>
        <div className="relative overflow-x-hidden">
            <header className="absolute top-0 left-0 w-full z-50">
                <Navbar name={ name }/>
            </header>
            <main>
                <Hero name={ name }/>
                <Projects projects={projects}/>
                <Form />
                <Logos logos={logos}/>
            </main>
        </div>
    </>
  );
}

export default App
