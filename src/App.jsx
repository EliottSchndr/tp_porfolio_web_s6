import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import {Projects} from "./components/Projects.jsx";
import {Form} from "./components/Form.jsx";


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
            </main>
        </div>
    </>
  );
}

export default App
