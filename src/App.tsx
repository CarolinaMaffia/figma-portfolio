import './App.scss';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import AboutMe from './sections/AboutMe/AboutMe';
import { ScrollCoordinatorProvider } from './contexts/scrollCoordinator';

function App() {

  return (
    <div className='landing-container'>
      <ScrollCoordinatorProvider>
        <>
          <Header />
          <Home />
          <AboutMe  />
          {/* <AboutMe  /> */}
          {/* <AboutMe  /> */}
          {/* <Home scrollableSectionRef={contactSection} didClickArrow={() => scrollDown(homeSection)}/>  */}
        </>
      </ScrollCoordinatorProvider>
    </ div>
  )
}

export default App
