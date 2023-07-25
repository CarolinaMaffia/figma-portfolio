import { RefObject } from 'react';
import HomeImage from '../../assets/undraw_dev_focus_re_6iwt.svg';
import SpaceBackground from '../../assets/undraw_stars_re_6je7.svg';
import SlideArrow from '../../svg/slide-arrow.svg'
import './Home.scss';
// import ScrollCoordinatorContext from '../../contexts/scrollCoordinator';


interface HomeProps {
    scrollableSectionRef: RefObject<HTMLDivElement>,
    didClickArrow(): void 
}

const Home = ({ scrollableSectionRef, didClickArrow }: HomeProps ) => {
    // const { scrollDown } = useContext(ScrollCoordinatorContext);
  return (
    <div className="home-section" ref={scrollableSectionRef}>
        <div className='top-container'>
        <div className="title-container">
            <h2 className='frontend'>Frontend - </h2>
            <h2 className='frontend dev'>Developer</h2> 
        </div>
        <div className="image-container">
            <img src={SpaceBackground} alt="girl using a computer" className='background image' />
            <img src={HomeImage} alt="girl using a computer" className='home image'/>
        </div>
    </div> 
    {
            <div className='button-container'>
            <button className='next-button' onClick={() => didClickArrow()}>
                    <img src={SlideArrow} alt="go to next section arrow" />
            </button>
        </div>
    }
    </div>
  )
}

export default Home