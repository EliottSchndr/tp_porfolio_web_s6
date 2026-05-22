import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { TitleLine } from './components/TitleLine.jsx';


function App() {
    const name = "Eliott Schneider";
  return (
    <>
        <div className="relative overflow-x-hidden">
            <header className="absolute top-0 left-0 w-full z-50">
                <Navbar name={ name }/>
            </header>
            <main>
                <Hero name={ name }/>
                <TitleLine name="Project"/>
            </main>
        </div>
    </>
  )
}

export default App
