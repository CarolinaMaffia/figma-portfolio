import HomeImage from '../../assets/undraw_dev_focus_re_6iwt.svg';
import SpaceBackground from '../../assets/undraw_stars_re_6je7.svg';
import './Home.scss';
import ScrollableSection from '../../components/ScrollableSection/ScrollableSection';

const Home = () => {
  return (
    <ScrollableSection>
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
    </ScrollableSection>  
    )
}

export default Home