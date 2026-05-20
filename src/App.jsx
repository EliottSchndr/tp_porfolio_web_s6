import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';


function App() {
    const name = "Eliott Schneider";
  return (
    <>
        <Navbar name={ name }/>
        <Hero name={ name }/>
    </>
  )
}

export default App
