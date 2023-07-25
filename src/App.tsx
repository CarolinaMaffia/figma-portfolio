import { useRef, RefObject } from 'react';
import './App.scss';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
// import ScrollCoordinatorContext from './contexts/scrollCoordinator';

function App() {
  // const { scrollableSectionRef, section1, section2 } = useContext(ScrollCoordinatorContext);
  const homeSection = useRef(null)
  const aboutMeSection = useRef(null)
  const contactSection = useRef(null)
  const scrollDown = (nextSection: RefObject<HTMLDivElement>) => {
      window.scrollTo({
        top: nextSection.current!.offsetTop,
        behavior: 'smooth',
      });
  };
  

  return (
    <div className='landing-container'>
      <Header />

      <Home scrollableSectionRef={homeSection} didClickArrow={() => scrollDown(aboutMeSection)}/>

      <Home scrollableSectionRef={aboutMeSection} didClickArrow={() => scrollDown(contactSection)}/> 
      <Home scrollableSectionRef={contactSection} didClickArrow={() => scrollDown(homeSection)}/> 
    </ div>
  )
}

export default App
